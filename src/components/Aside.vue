<template>
  <div>
    <el-menu
      class="el-aside-menu"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :collapse-transition="false"
      background-color="rgb(50, 65, 87)"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
    >
      <span>
        <h3 class="title">{{ isCollapse ? "" : "erp-crm系统" }}</h3>
      </span>

      <el-menu-item
        v-for="item in noChildMenu"
        :key="item.menuId"
        :index="item.menuId.toString()"
        @click="select(item)"
      >
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.menuName }}</span>
        </template>
      </el-menu-item>

      <el-submenu
        v-for="item in hasChildMenu"
        :key="item.menuId"
        :index="item.menuId.toString()"
      >
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.menuName }}</span>
        </template>

        <el-menu-item
          v-for="subItem in item.children"
          :key="subItem.menuId"
          :index="subItem.menuId.toString()"
          @click="select(subItem)"
        >
          <template slot="title">
            <i :class="`el-icon-${subItem.icon}`"></i>
            <span slot="title">{{ subItem.menuName }}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style scoped lang="less">
.el-aside-menu {
  height: 100vh;
  border-right: 0;
  .title {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
    line-height: 30px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          menuId: 0,
          menuName: "首页",
          parentId: 0,
          orderNum: "200",
          path: "",
          component: "/",
          query: "",
          isFrame: "1",
          isCache: "0",
          menuType: "M",
          visible: "0",
          status: "0",
          perms: "",
          icon: "",
          children: [],
        },
        {
          menuId: 1,
          menuName: "系统管理",
          parentId: 0,
          orderNum: "200",
          path: "system",
          query: "",
          isFrame: "1",
          isCache: "0",
          menuType: "M",
          visible: "0",
          status: "0",
          perms: "",
          icon: "system",
          children: [
            {
              menuId: 100,
              menuName: "用户管理",
              parentId: 1,
              orderNum: "1",
              path: "user",
              component: "/system/user/index",
              query: "",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "system:user:list",
              icon: "user",
              children: [],
            },
            {
              menuId: 101,
              menuName: "角色管理",
              parentId: 1,
              orderNum: "2",
              path: "role",
              component: "/system/role/index",
              query: "",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "system:role:list",
              icon: "peoples",
              children: [],
            },
            {
              menuId: 102,
              menuName: "菜单管理",
              parentId: 1,
              orderNum: "3",
              path: "menu",
              component: "/system/menu/index",
              query: "",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "system:menu:list",
              icon: "tree-table",
              children: [],
            },
            {
              menuId: 103,
              menuName: "部门管理",
              parentId: 1,
              orderNum: "4",
              path: "dept",
              component: "/system/dept/index",
              query: "",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "system:dept:list",
              icon: "tree",
              children: [],
            },
            {
              menuId: 104,
              menuName: "岗位管理",
              parentId: 1,
              orderNum: "5",
              path: "post",
              component: "/system/post/index",
              query: "",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "system:post:list",
              icon: "post",
              children: [],
            },
            {
              menuId: 105,
              menuName: "字典管理",
              parentId: 1,
              orderNum: "6",
              path: "dict",
              component: "/system/dict/index",
              query: "",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "system:dict:list",
              icon: "dict",
              children: [],
            },
            {
              menuId: 106,
              menuName: "参数设置",
              parentId: 1,
              orderNum: "7",
              path: "config",
              component: "/system/config/index",
              query: "",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "system:config:list",
              icon: "edit",
              children: [],
            },
            {
              menuId: 107,
              menuName: "通知公告",
              parentId: 1,
              orderNum: "8",
              path: "notice",
              component: "/system/notice/index",
              query: "",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "system:notice:list",
              icon: "message",
              children: [],
            },
            {
              menuId: 108,
              menuName: "日志管理",
              parentId: 1,
              orderNum: "9",
              path: "log",
              component: "",
              query: "",
              isFrame: "1",
              isCache: "0",
              menuType: "M",
              visible: "0",
              status: "0",
              perms: "",
              icon: "log",
              children: [],
            },
            {
              menuId: 109,
              menuName: "在线用户",
              parentId: 1,
              orderNum: "10",
              path: "online",
              component: "/monitor/online/index",
              query: "",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "monitor:online:list",
              icon: "online",
              children: [],
            },
          ],
        },
        {
          menuId: 2006,
          menuName: "公海管理",
          parentId: 0,
          orderNum: "100",
          path: "crm/pool",
          isFrame: "1",
          isCache: "0",
          menuType: "M",
          visible: "0",
          status: "0",
          perms: "",
          icon: "peoples",
          children: [
            {
              menuId: 2009,
              menuName: "客户公海",
              parentId: 2006,
              orderNum: "100",
              path: "list",
              component: "/crm/pool/list",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "crm:pool:list",
              icon: "#",
              children: [],
            },
          ],
        },
        {
          menuId: 2007,
          menuName: "线索管理",
          parentId: 0,
          orderNum: "101",
          path: "crm/clues",
          isFrame: "1",
          isCache: "0",
          menuType: "M",
          visible: "0",
          status: "0",
          perms: "",
          icon: "time-range",
          children: [
            {
              menuId: 2010,
              menuName: "我的线索",
              parentId: 2007,
              orderNum: "100",
              path: "person",
              component: "crm/clues/person-list",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "crm:clues:person:list",
              icon: "#",
              children: [],
            },
            {
              menuId: 2011,
              menuName: "线索列表",
              parentId: 2007,
              orderNum: "101",
              path: "list",
              component: "crm/clues/list",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "crm:clues:list",
              icon: "#",
              children: [],
            },
          ],
        },
        {
          menuId: 2008,
          menuName: "客户管理",
          parentId: 0,
          orderNum: "102",
          path: "crm/customer",
          isFrame: "1",
          isCache: "0",
          menuType: "M",
          visible: "0",
          status: "0",
          perms: "",
          icon: "user",
          children: [
            {
              menuId: 2012,
              menuName: "我的客户",
              parentId: 2008,
              orderNum: "100",
              path: "person",
              component: "crm/customer/person-list",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "crm:customer:person:list",
              icon: "#",
              children: [],
            },
            {
              menuId: 2013,
              menuName: "客户列表",
              parentId: 2008,
              orderNum: "101",
              path: "list",
              component: "crm/customer/list",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "crm:customer:list",
              icon: "#",
              children: [],
            },
            {
              menuId: 2014,
              menuName: "成交客户",
              parentId: 2008,
              orderNum: "102",
              path: "deal",
              component: "crm/customer/deal-list",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "crm:customer:deal:list",
              icon: "#",
              children: [],
            },
          ],
        },
        {
          menuId: 2015,
          menuName: "业绩订单",
          parentId: 0,
          orderNum: "103",
          path: "crm/order",
          isFrame: "1",
          isCache: "0",
          menuType: "M",
          visible: "0",
          status: "0",
          perms: "",
          icon: "money",
          children: [
            {
              menuId: 2016,
              menuName: "我的订单",
              parentId: 2015,
              orderNum: "0",
              path: "crm/customer",
              component: "crm/order/person-list",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "crm:order:person:list",
              icon: "#",
              children: [],
            },
            {
              menuId: 2017,
              menuName: "订单列表",
              parentId: 2015,
              orderNum: "1",
              path: "crm/order",
              component: "crm/order/list",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "crm:order:list",
              icon: "#",
              children: [],
            },
          ],
        },
        {
          menuId: 2018,
          menuName: "产品管理",
          parentId: 0,
          orderNum: "1",
          path: "product",
          isFrame: "1",
          isCache: "0",
          menuType: "M",
          visible: "0",
          status: "0",
          perms: "",
          icon: "redis",
          children: [
            {
              menuId: 2019,
              menuName: "库存产品",
              parentId: 2018,
              orderNum: "1",
              path: "product",
              component: "erp/product/index",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "crm:order:list",
              icon: "github",
              children: [],
            },
            {
              menuId: 2028,
              menuName: "商品条码",
              parentId: 2018,
              orderNum: "2",
              path: "sn",
              component: "erp/sn/index",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "",
              icon: "phone",
              children: [],
            },
            {
              menuId: 2029,
              menuName: "标签管理",
              parentId: 2018,
              orderNum: "3",
              path: "tags",
              component: "erp/tags/index",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "",
              icon: "size",
              children: [],
            },
            {
              menuId: 2030,
              menuName: "标签映射",
              parentId: 2018,
              orderNum: "4",
              path: "map",
              component: "erp/map/index",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "",
              icon: "tree",
              children: [],
            },
          ],
        },
        {
          menuId: 2020,
          menuName: "库存管理",
          parentId: 0,
          orderNum: "1",
          path: "erp",
          isFrame: "1",
          isCache: "0",
          menuType: "M",
          visible: "0",
          status: "0",
          perms: "",
          icon: "shopping",
          children: [
            {
              menuId: 2021,
              menuName: "库存客户",
              parentId: 2020,
              orderNum: "1",
              path: "client",
              component: "erp/client/index",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "",
              icon: "peoples",
              children: [],
            },
            {
              menuId: 2022,
              menuName: "库存流水",
              parentId: 2020,
              orderNum: "2",
              path: "flow",
              component: "erp/flow/index",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "",
              icon: "table",
              children: [],
            },
            {
              menuId: 2023,
              menuName: "开票信息",
              parentId: 2020,
              orderNum: "3",
              path: "info",
              component: "erp/info/index",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "",
              icon: "form",
              children: [],
            },
            {
              menuId: 2027,
              menuName: "进货流水单",
              parentId: 2020,
              orderNum: "4",
              path: "stock",
              component: "erp/stock/index",
              query: "",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "",
              icon: "guide",
              children: [],
            },
          ],
        },
        {
          menuId: 2024,
          menuName: "销售管理",
          parentId: 0,
          orderNum: "1",
          path: "sale",
          isFrame: "1",
          isCache: "0",
          menuType: "M",
          visible: "0",
          status: "0",
          perms: "",
          icon: "excel",
          children: [
            {
              menuId: 2025,
              menuName: "库存销售订单",
              parentId: 2024,
              orderNum: "1",
              path: "order",
              component: "erp/order/index",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "",
              icon: "nested",
              children: [],
            },
            {
              menuId: 2026,
              menuName: "零售出库",
              parentId: 2024,
              orderNum: "2",
              path: "retail",
              component: "erp/retail/index",
              isFrame: "1",
              isCache: "0",
              menuType: "C",
              visible: "0",
              status: "0",
              perms: "",
              icon: "row",
              children: [],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    select(item) {
      if (item.component != this.$route.path ) {
        this.$router.push(item.component);
      }
    },
  },
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
    hasChildMenu() {
      return this.menuData.filter((item) => item.children.length > 0);
    },
    noChildMenu() {
      return this.menuData.filter((item) => item.children.length === 0);
    },
    // menu() {
    //   let menus = [];
    //   this.menuData.filter((item) => {
    //     let flag = false;
    //     item.children.filter((subItem) => {
    //       if (subItem.children.length == 0) {
    //         flag = true;
    //       }
    //     });
    //     if (flag) {
    //       menus.push(item);
    //     }
    //   });
    //   return menus;
    // },
  },
};
</script>