<style lang="scss">
.ours-panel {
  margin: 50px 0;

  .buttons {
    text-align: center;

    button {
      padding: 5px 7px 5px 4px;
      font-size: 11px !important;
      margin: 0;
    }
  }

  .users {
    margin-top: 25px;
    text-align: center;

    .user-face {
      margin: 0 -5px;
      display: inline-block;
      vertical-align: middle;

      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 3px solid #fff;
      }
    }
  }
}
</style>

<template>
  <div v-if="source" class="ours-panel">
    <div class="buttons">
      <el-button
        v-if="isCreator"
        :class="{ 'is-plain': source.reward }"
        :loading="source.reward_loading"
        type="warning"
        icon="iconfont icon-fantuan"
        round
        size="mini"
        @click="toggleAction('reward')"
      >
        {{ source.reward ? '已投食' : '投食'
        }}{{
          source.reward_users.total
            ? `&nbsp;&nbsp;|&nbsp;&nbsp;${source.reward_users.total}`
            : ''
        }}
      </el-button>
      <el-button
        :class="{ 'is-plain': source.like }"
        :loading="source.like_loading"
        type="danger"
        icon="iconfont icon-like"
        round
        size="mini"
        @click="toggleAction('like')"
      >
        {{ source.like ? '已喜欢' : '喜欢'
        }}{{
          source.like_users.total
            ? `&nbsp;&nbsp;|&nbsp;&nbsp;${source.like_users.total}`
            : ''
        }}
      </el-button>
      <el-button
        :class="{ 'is-plain': source.mark }"
        :loading="source.mark_loading"
        type="success"
        icon="iconfont icon-mark"
        round
        size="mini"
        @click="toggleAction('mark')"
      >
        {{ source.mark ? '已收藏' : '收藏'
        }}{{
          source.mark_users.total
            ? `&nbsp;&nbsp;|&nbsp;&nbsp;${source.mark_users.total}`
            : ''
        }}
      </el-button>
    </div>
    <div class="users">
      <ul>
        <li v-for="user in displayUsers" :key="user.id" class="user-face">
          <img :src="$resize(user.avatar, { width: 60 })">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialPanel',
  props: {
    isCreator: {
      required: true,
      type: Boolean
    },
    isMine: {
      required: true,
      type: Boolean
    },
    id: {
      required: true,
      type: [Number, String]
    },
    type: {
      required: true,
      type: String,
      validator: val =>
        ~['post', 'video', 'image', 'score', 'answer', 'video'].indexOf(val)
    }
  },
  computed: {
    isGuest() {
      return !this.$store.state.login
    },
    source() {
      return this.$store.getters['social/getState'](this.type, this.id)
    },
    displayUsers() {
      const users = this.isCreator
        ? this.source.reward_users.list
        : this.source.like_users.list
      return users.slice(0, this.displayCount)
    }
  },
  methods: {
    computeTextByAction(action) {
      if (action === 'reward') {
        return '投食'
      } else if (action === 'like') {
        return '喜欢'
      } else if (action === 'mark') {
        return '收藏'
      }
      return '操作'
    },
    toggleAction(action) {
      if (this.isGuest) {
        this.$channel.$emit('sign-in')
        return
      }
      if (this.isMine) {
        this.$toast.info(`不能${this.computeTextByAction(action)}自己的内容`)
        return
      }
      if (action === 'reward') {
        if (this.source.reward) {
          this.$toast.info('已投食过')
          return
        }
        this.$confirm('向TA投食需要消耗你一个团子，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.submitAction('reward')
          })
          .catch(() => {})
      } else {
        this.submitAction(action)
      }
    },
    async submitAction(action) {
      const data = await this.$store.dispatch('social/toggleAction', {
        type: this.type,
        id: this.id,
        action
      })
      data.success &&
        this.$emit(`${action}-callback`, {
          result: data.result
        })
    }
  }
}
</script>
