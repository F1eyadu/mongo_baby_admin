<template>
  <div class="header">
    <div>
      <a-icon
        style="font-size: 16px"
        @click="toggleCollapsed"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      />
    </div>
    <div>
      <a-dropdown class="dropdown">
        <a class="ant-dropdown-link" href="#">
          Administrator
          <a-icon type="down"/>
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">基本资料</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">修改密码</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">退出</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>
<script>
import { Button, Icon, Dropdown, Menu } from "ant-design-vue";
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleCollapsed() {
      this.$emit("change", !this.collapsed);
    }
  },
  components: {
    AButton: Button,
    AIcon: Icon,
    ADropdown: Dropdown,
    AMenu: Menu,
    AMenuItem: Menu.Item,
  }
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .dropdown{
      color: #333;
  }
}
</style>
