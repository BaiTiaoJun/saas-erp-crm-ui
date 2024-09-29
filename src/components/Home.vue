<template>
  <div>
    <el-container>
      <el-aside :style="{ width: isCollapse ? '64px' : '180px' }">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "@/components/Aside.vue";
import Header from "@/components/Header.vue";
import { mapState } from 'vuex';
export default {
  components: {
    Aside,
    Header,
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.tab.isCollapse
    })
  }
};
</script>

<style>
.el-header {
  padding: 0;
  background-color: #242f42;
}
.el-aside {
  transition: width .3s;
  background-color: rgb(50, 65, 87);
}
</style>