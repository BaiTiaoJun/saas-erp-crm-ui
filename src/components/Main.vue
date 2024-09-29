<template>
  <div>
    <el-row>
      <el-col :span="9">
        <el-card class="user-info">
          <div class="user-top">
            <img src="@/assets/images/avater.jpeg" class="avater" />
            <span class="username">
              <p class="name">Admin</p>
              <p class="role">超级管理员</p>
            </span>
          </div>
          <div class="user-bottom">
            <p>登陆时间:<span>xxxxxx</span></p>
            <p>登陆地点:<span>xxxxxx</span></p>
          </div>
        </el-card>
        <el-card class="user-list" style="margin-top: 20px" expand-row-keys="5">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="日期" width="100">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="100">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="15" style="padding-left: 20px">
        <el-card class="box-card system_bulletin">
          <div slot="header" class="system_title">
            <span>系统公告</span>
          </div>
          <div v-for="item in systemData" :key="item.id" class="system_context">
            <div>{{ item.title }}</div>
            <div>
              <i :class="`el-icon-${item.icon}`">{{ item.date }}</i>
            </div>
          </div>
        </el-card>
        <el-card class="box-card" style="margin-top: 20px;">
          <div ref="echarts" style="height: 300px"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scope lang="less">
.user-top {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #d3d3d3;
  .avater {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-left: 20px;
  }
  .username {
    margin-left: 40px;
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .role {
      font-size: 15px;
      color: #acacac;
      margin-top: 10px;
    }
  }
}
.user-bottom {
  p {
    margin-left: 20px;
    margin-top: 20px;
    font-size: 14px;
    color: #acacac;
    line-height: 6px;
    span {
      margin-left: 20px;
    }
  }
}
.el-table__row {
  height: 30px; /* 设置表格行高为 50px */
}
.system_bulletin {
  .system_title {
    color: #000;
    font-size: 22px;
  }
}
.system_context {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 10px;
}
</style>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      systemData: [
        {
          id: 1,
          date: "2022-10-16 09:00",
          title: "如何建立良好的客户关系",
          icon: "timer",
        },
        {
          id: 2,
          date: "2022-10-16 09:00",
          title: "如何建立良好的客户关系",
          icon: "timer",
        },
        {
          id: 3,
          date: "2022-10-16 09:00",
          title: "如何建立良好的客户关系",
          icon: "timer",
        },
        {
          id: 4,
          date: "2022-10-16 09:00",
          title: "如何建立良好的客户关系",
          icon: "timer",
        },
      ],
    };
  },
  mounted() {
    let chart = echarts.init(this.$refs.echarts);

    let option = {
      title: {
        text: "",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      legend: {
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: "Search Engine",
          type: "line",
          stack: "Total",
          label: {
            show: true,
            position: "top",
          },
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    };

    chart.setOption(option);
  },
};
</script>