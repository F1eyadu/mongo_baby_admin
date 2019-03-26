<template>
  <div class="mian">
    <div class="nav_menu">
      <nav-menu :collapsed='collapsed'/>
    </div>
    <div class="content">
      <nav-header @change="fade" :collapsed='collapsed'/>
      <router-view/>
    </div>
  </div>
</template>
<script>
import NavMenu from './menu/index.vue'
import NavHeader from './header/index.vue'
export default {
    data() {
        return {
            collapsed: false
        }
    },
    methods: {
        fade(value) {
            this.collapsed = value
        }
    },
  components: {
    NavMenu,
    NavHeader
  }
}
</script>
<style lang="less" scoped>
.mian{
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  .nav_menu{
    
  }
  .content{
    width: 100%;
  }
}
</style>


