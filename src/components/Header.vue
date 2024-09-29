<template>
  <div class="header">
    <div class="left-content">
      <el-button size="medium" icon="el-icon-menu" @click="collapseChange"></el-button>
      <span class="main">首页</span>
    </div>
    <div class="right-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="avater" src="@/assets/images/avater.jpeg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-content {
    .main {
      color: #fff;
      margin-left: 10px;
      font-size: 16px;
      cursor: pointer;
    }
  }
  .right-content {
    .avater {
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
  }

}
</style>

<script>
export default {
    methods: {
        collapseChange() {
            this.$store.commit('collapseChange');
        }
    },
};
</script>