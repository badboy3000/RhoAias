<style lang="scss">
.share-tips-drawer {
  border-radius: 10px 10px 0 0;

  .container {
    text-align: left;

    p {
      margin-top: 20px;
      margin-bottom: 20px;
      line-height: 20px;
      color: #333;
    }

    .btn-submit {
      margin-top: 10px;
    }
  }
}
</style>

<template>
  <v-drawer
    v-model="show"
    class="share-tips-drawer"
    from="bottom"
    size="80%"
    header-text="分享语"
  >
    <div class="container">
      <p>
        【calibur.tv】一个纯粹的二次元社区网站，致力于实现"天下漫友是一家"！
      </p>
      <p>
        站内海量动漫资源在线播放，更有看漫画、cosplay、发帖、为偶像应援等功能，每天签到送团子！
      </p>
      <p>
        快来加入我们吧~\(^o^)/~ 网址：http://calibur.tv
      </p>
      <button
        v-clipboard="
          `【calibur.tv】一个纯粹的二次元社区网站，致力于实现'天下漫友是一家'！站内海量动漫资源在线播放，更有看漫画、cosplay、发帖、为偶像应援等功能，每天签到送团子！快来加入我们吧~\(^o^)/~ 网址：http://calibur.tv`
        "
        class="btn-submit"
        @success="$toast.success('复制成功~快去发送给好友吧')"
      >
        点击复制
      </button>
    </div>
  </v-drawer>
</template>

<script>
export default {
  name: 'ShareDrawer',
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.$channel.$on('open-share', () => {
      this.show = true
    })
  }
}
</script>
