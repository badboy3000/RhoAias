<style lang="scss">
.user-drawer {
  text-align: left;

  .user-section {
    height: 110px;
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: $container-padding;
    text-shadow: 0 1px 10px gray;
    color: #ffffff;
    line-height: 40px;

    .bg {
      width: 120%;
      height: 120%;
      position: absolute;
      left: -10%;
      top: -10%;
      z-index: -1;
      background-color: #999;
      @include filter-blur();
    }

    .mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(#000, 0.3);
      z-index: -1;
    }

    .user-info {
      margin-bottom: 3px;
      overflow: hidden;
      height: 50px;

      .avatar {
        position: relative;
        display: block;
        float: left;
        margin-right: 10px;
      }

      .panel {
        overflow: hidden;
        line-height: 25px;
        height: 50px;

        .nickname {
          margin-top: 2px;
        }

        .level {
          font-size: 14px;
        }
      }
    }

    .badge {
      font-size: 12px;
    }
  }

  .routes {
    margin-top: 10px;

    li {
      height: 40px;
      position: relative;
      padding: 5px 0;
      margin-left: 3px;
      @include border-bottom();
    }

    i {
      font-size: 14px;
    }

    a,
    button {
      display: block;
      width: 100%;
      height: 100%;
      line-height: 30px;
      text-align: left;
      font-size: 13px;
      color: #333;
    }

    .mint-badge {
      line-height: 1.2;
    }

    .badge-count {
      border-radius: 12px;
      font-size: 15px;
      padding: 2px 8px;
      background-color: red;
      color: #fff;
      height: 20px;
      line-height: 16px;
      margin-left: 5px;
    }
  }
}
</style>

<template>
  <v-drawer
    v-if="user"
    id="user"
    v-model="switchUserDrawer"
    from="right"
    size="70%"
    class="user-drawer"
  >
    <div class="user-section">
      <div :style="computeUserDrawerBg" class="bg" />
      <div class="mask" />
      <div class="user-info">
        <nuxt-link :to="$alias.user(user.zone)" class="avatar">
          <v-img :src="user.avatar" :lazy="false" :avatar="true" width="50" height="50" />
        </nuxt-link>
        <div class="panel">
          <div class="nickname">
            <nuxt-link
              :to="$alias.user(user.zone)"
              class="oneline"
              v-text="user.nickname"
            />
          </div>
          <div>
            <UserSex :sex="user.sex" :secret="user.sexSecret" />
            · <span class="level">Lv{{ user.exp.level }}</span>
          </div>
        </div>
      </div>
      <span class="badge">虚拟币：{{ coinCount }}</span>
      ·
      <span class="badge">邀请码：{{ user.id }}</span>
    </div>
    <ul class="routes container" @click="switchUserDrawer = false">
      <li>
        <nuxt-link :to="$alias.user(user.zone)">
          <i class="iconfont icon-zhuye" /> 个人主页
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/my/setting">
          <i class="iconfont icon-shezhi" /> 用户设置
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about/hello">
          <i class="iconfont icon-bangzhu" /> 功能简介
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/my/invite">
          <i class="iconfont icon-yaoqingma" /> 我的邀请码
        </nuxt-link>
      </li>
      <li>
        <button @click="logout">
          <i class="iconfont icon-tuichu" /> 退出登录
        </button>
      </li>
    </ul>
  </v-drawer>
</template>

<script>
import { logout } from '~/api/userApi'
import UserSex from '~/components/user/UserSex'

export default {
  name: 'VUserDrawer',
  components: {
    UserSex
  },
  data() {
    return {
      switchUserDrawer: false
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    computeUserDrawerBg() {
      if (
        !this.user ||
        this.user.banner.split('/default/user-banner').length > 1
      ) {
        return {}
      }
      return {
        backgroundImage: `url(${this.$resize(this.user.banner, {
          height: 250,
          mode: 2
        })})`
      }
    },
    coinCount() {
      return this.user.pocket
    }
  },
  mounted() {
    this.$channel.$on('open-user-drawer', () => {
      this.switchUserDrawer = true
    })
  },
  methods: {
    logout() {
      this.$cookie.remove('JWT-TOKEN')
      logout(this)
      window.location.href = '/'
    }
  }
}
</script>
