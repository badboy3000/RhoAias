<style lang="scss">
.sign-up-form {
  input {
    border: 0;
    padding: 0;
    border-bottom: 1px solid $color-line;
  }

  .submit-btn {
    width: 100%;
  }

  .others {
    margin-bottom: 10px;
    @extend %clearfix;

    a {
      font-size: 12px;
    }

    .fl {
      float: left;
    }

    .fr {
      float: right;
    }
  }

  .tip {
    text-align: left;
    line-height: 25px;
    font-size: 13px;
    color: $color-text-normal;
  }

  .watch-pwd {
    position: absolute;
    right: 36px;
    top: 11px;
    font-size: 18px;
    color: $color-text-gray;
  }

  .providers {
    float: left;
    margin-top: -5px;

    span {
      font-size: 12px;
      line-height: 23px;
    }

    i {
      font-size: 20px;
      vertical-align: middle;
      margin-right: 10px;
      color: $color-text-normal;
      cursor: pointer;
    }

    .icon-qq:hover {
      color: #3194d0;
    }

    .icon-wechat-copy:hover {
      color: #42c02e;
    }
  }
}
</style>

<template>
  <div class="sign-up-form">
    <el-form ref="form" :model="form" :rules="rule" status-icon>
      <el-form-item prop="nickname">
        <el-input
          v-model="form.nickname"
          type="text"
          placeholder="昵称（2-14个字符组成，1个汉字占2个字符）"
          auto-complete="off"
        />
      </el-form-item>
      <el-form-item prop="access">
        <el-input
          v-model="form.access"
          type="text"
          placeholder="手机（填写常用手机号，用于登录）"
          auto-complete="off"
        />
      </el-form-item>
      <el-form-item prop="secret">
        <el-input
          v-model="form.secret"
          :type="watchPwd ? 'text' : 'password'"
          placeholder="密码（6-16个字符组成，区分大小写）"
          auto-complete="off"
        />
        <button
          v-if="form.secret.length > 5"
          class="watch-pwd"
          type="button"
          @click="watchPwd = !watchPwd"
        >
          <i class="iconfont icon-yuedu" />
        </button>
      </el-form-item>
      <el-form-item v-if="!inviteCode">
        <el-input
          v-model="form.inviteCode"
          type="number"
          placeholder="邀请码（可为空）"
          auto-complete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="submitBtnLoading"
          :disabled="submitBtnDisabled"
          class="submit-btn"
          type="primary"
          @click="submitForm"
        >
          {{ submitBtnText }}
          <template v-if="timeout">
            （{{ timeout }}s 后可重新获取）
          </template>
        </el-button>
      </el-form-item>
    </el-form>
    <div class="others">
      <span class="providers">
        <a :href="qqRegisterLink">
          <i class="iconfont icon-qq" />
        </a>
        <not-ssr>
          <a v-if="ua.wechat" :href="wechatRegisterLink">
            <i class="iconfont icon-wechat" />
          </a>
        </not-ssr>
      </span>
      <a v-if="!inviteCode" class="fr" @click="showLogin">已有账号»</a>
    </div>
    <div class="tip">
      提示：由于注册时要根据初始昵称为每个用户分配独立域名，因此注册时的昵称不支持日文和特殊符号和标点符号，可在注册完成后在个人设置页面修改昵称
    </div>
  </div>
</template>

<script>
import { sendMessage, register } from '~/api/userApi'

export default {
  name: 'SignUpForm',
  props: {
    inviteCode: {
      type: String,
      default: ''
    }
  },
  data() {
    const validateNickname = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请先给自己起个名字'))
      }
      const length = value.replace(/([\u4e00-\u9fa5])/g, 'aa').trim().length
      if (length < 2) {
        return callback(new Error('昵称至少是2个字符'))
      }
      if (length > 14) {
        return callback(new Error('昵称不能超过14个字符，1个汉字占2个字符'))
      }
      if (!/^([\u4e00-\u9fa5]|[a-z0-9])+$/i.test(value)) {
        return callback(new Error('昵称只能包含：中文、数字、字母'))
      }
      callback()
    }
    const validateAccess = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请填写手机号'))
      }
      if (value.length !== 11) {
        return callback(new Error('请填写11位手机号'))
      }
      if (!/^(0|86|17951)?(1)[0-9]{10}$/.test(value)) {
        return callback(new Error('错误的手机号格式'))
      }
      callback()
    }
    const validateSecret = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请填写登录密码'))
      }
      if (value.length < 6) {
        return callback(new Error('密码不能小于6位'))
      }
      if (value.length > 16) {
        return callback(new Error('密码不能大于16位'))
      }
      callback()
    }
    return {
      watchPwd: false,
      form: {
        access: '',
        secret: '',
        nickname: '',
        authCode: '',
        inviteCode: this.inviteCode
      },
      rule: {
        nickname: [{ validator: validateNickname, trigger: 'blur' }],
        access: [{ validator: validateAccess, trigger: 'blur' }],
        secret: [{ validator: validateSecret, trigger: 'blur' }]
      },
      /**
       * 0：初始化，表单待校验
       * ---- 如果表单校验失败，就一直在 0
       * 1：表单校验成功，获取手机短信中...
       * ---- 需要 loading
       * ---- 发送手机验证码需要 geetest 认证
       * ---- 如果 geetest 认证通过就请求发短信的接口
       * ---- 如果 geetest 认证不通过或者加载失败，就会返回到 step 0
       * ---- 请求发短信的接口如果失败，就会返回到 step 0
       * ---- 请求发短信的接口如果成功，就会到 step 2
       * ---- 30s 后会返回到 step 0，可以重新发短信
       * 2：获取手机验证码成功，用户填写短信验证码
       * ---- 如果用户填写的正确，就进入注册流程
       * ---- 如果用户填写的失败或关闭填写框，就提示错误，继续在 step 2
       * ---- 30s 后就会返回 step 0，用户可以重新发短信
       * 3：注册中...
       * ---- 需要 loading 和 disabled
       * ---- 注册成功，需要刷新页面
       * ---- 注册失败，可能是在 step 2 停留太久，短信验证码过期
       * ---- 注册失败，可能是服务器挂了
       * ---- 注册失败，可能是 unique 的信息被他人使用了
       * ---- 无论如何，注册失败都返回 step 0
       */
      step: 0,
      timeout: 0
    }
  },
  computed: {
    ua() {
      return this.$store.state.ua
    },
    qqRegisterLink() {
      let link = 'https://api.calibur.tv/callback/oauth2/qq?from=sign'
      if (this.inviteCode) {
        link = `${link}&invite=${this.inviteCode}`
      }
      return link
    },
    wechatRegisterLink() {
      let link = 'https://api.calibur.tv/callback/oauth2/weixin?from=sign'
      if (this.inviteCode) {
        link = `${link}&invite=${this.inviteCode}`
      }
      return link
    },
    submitBtnText() {
      if (this.step === 0) {
        return '注册'
      } else if (this.step === 1) {
        return '提交中...'
      } else if (this.step === 2) {
        return '短信已发送'
      } else if (this.step === 3) {
        return '注册中...'
      }
      return '注册'
    },
    submitBtnLoading() {
      return this.step === 1 || this.step === 3
    },
    submitBtnDisabled() {
      return (this.timeout !== 0 && this.step === 0) || this.step === 3
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.step === 0) {
            this.getRegisterAuthCode()
          }
          if (this.step === 2) {
            this.openConfirmModal()
          }
        } else {
          return false
        }
      })
    },
    getRegisterAuthCode() {
      this.step = 1
      this.$captcha({
        ctx: this,
        success: async ({ data }) => {
          try {
            await sendMessage(this, {
              type: 'sign_up',
              phone_number: this.form.access,
              geetest: data
            })
            this.step = 2
            this.openConfirmModal()
          } catch (e) {
            this.step = 0
          } finally {
            this.timeout = 60
            const timer = setInterval(() => {
              if (!--this.timeout) {
                this.step = 0
                clearInterval(timer)
              }
            }, 1000)
          }
        },
        close: () => {
          this.step = 0
        }
      })
    },
    openConfirmModal() {
      this.$prompt('请输入收到的验证码', '短信已发送', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^\d{6}$/,
        inputErrorMessage: '验证码格式不正确'
      })
        .then(({ value }) => {
          this.form.authCode = value
          this.step = 3
          this.signUp()
        })
        .catch(() => {})
    },
    signUp() {
      register(this, {
        access: this.form.access,
        secret: this.form.secret,
        nickname: this.form.nickname,
        authCode: this.form.authCode,
        inviteCode: this.form.inviteCode
      })
        .then(res => {
          this.$toast.success('注册成功！')
          this.$cookie.set('JWT-TOKEN', res)
          window.location = '/about/hello'
        })
        .catch(() => {
          this.step = 0
        })
    },
    showOAuth() {
      this.$toast.info('暂未开放第三方注册')
    },
    showLogin() {
      this.$emit('to-login')
      this.$refs.form.resetFields()
    }
  }
}
</script>
