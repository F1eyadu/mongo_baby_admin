<template>
  <div class="menu_wrapper">
    <div class="logo1" v-show="collapsed">
      <img src="../../assets/images/min-logo-icon.png"/>
    </div>
    <div class="logo" v-show="!collapsed">
      <img src="../../assets/images/min-logo.png"/>
    </div>
    <a-menu
      @click="handleClick"
      style="height: 100vh"
      :style="setWidth"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
    >
      <a-menu-item key="1">
        <a-icon type="home" /><span>后台首页</span>
      </a-menu-item>
      <a-sub-menu key="sub1" @titleClick="titleClick">
        <span slot="title"><a-icon type="setting" /><span>设置</span></span>
        <a-menu-item key="2"><span>系统设置</span></a-menu-item>
        <a-sub-menu>
          <span slot="title"><span>我的设置</span></span>
          <a-menu-item key="3">基本资料</a-menu-item>
          <a-menu-item key="4">修改密码</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="5"><span>母子档案</span></a-menu-item>
        <a-menu-item key="6"><span>芒果音乐</span></a-menu-item>
        <a-menu-item key="7"><span>栏目管理</span></a-menu-item>
        <a-menu-item key="8"><span>内容管理</span></a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9"><a-icon type="user" /><span>账户管理</span></a-menu-item>
      <a-menu-item key="10"><a-icon type="team" /><span>客户管理</span></a-menu-item>
      <a-menu-item key="11"><a-icon type="user" /><span>嫂子管理</span></a-menu-item>
      <a-menu-item key="12"><a-icon type="smile" /><span>服务管理</span></a-menu-item>
      <a-menu-item key="13"><a-icon type="schedule" /><span>预约管理</span></a-menu-item>
      <a-menu-item key="14"><a-icon type="shopping-cart" /><span>订单管理</span></a-menu-item>
      <a-menu-item key="15"><a-icon type="dollar" /><span>财务管理</span></a-menu-item>
      <a-menu-item key="16"><a-icon type="bar-chart" /><span>数据中心</span></a-menu-item>
      <a-menu-item key="17"><a-icon type="folder" /><span>文件管理</span></a-menu-item>
    </a-menu>
  </div>
</template>
<script>
import { Menu, Icon, } from "ant-design-vue";
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      current: ["mail"],
      openKeys: ["sub1"]
    };
  },
  computed: {
    setWidth() {
      if(!this.collapsed) {
        return `width: 200px`
      }else{
        return `width: 80px`
      }
    }
  },
  methods: {
    handleClick(e) {
      console.log("click", e);
    },
    titleClick(e) {
      console.log("titleClick", e);
    }
  },
  watch: {
    openKeys(val) {
      console.log("openKeys", val);
    }
  },
  components: {
    AMenu: Menu,
    ASubMenu: Menu.SubMenu,
    AMenuItemGroup: Menu.ItemGroup, 
    AMenuItem: Menu.Item,
    AIcon: Icon
  }
}
</script>
<style lang="less" scoped>
.menu_wrapper{
  width: auto;
  height: 100vh;
  .logo{
    width: 100%;
    height: 50px;
    padding: 5px 10px;
    box-sizing: border-box;
    background-color: #2f9688;
    img{
      width: 100%;
    }
  }
  .logo1{
    width: 100%;
    height: 50px;
    padding: 5px 10px;
    box-sizing: border-box;
    background-color: #20222A;
    text-align: center;
  }
}
</style>

