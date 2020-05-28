<template>
  <!-- 主页信息 -->
  <div class="row index">
    <div class="col-md-8">
      <h2 class="page-header">用户信息</h2>
      <table class="table table-hover table-striped table-bordered">
        <tbody>
          <tr>
            <td>id</td>
            <td>姓名</td>
            <td class="text-center">VUE掌握程度</td>
            <td class="text-center">签到率</td>
            <td class="text-center">详细信息</td>
          </tr>
          <tr v-for="user in db.user" :key="user.id">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td class="text-center">{{vueProficiency(user.id)}}%</td>
            <td class="text-center">{{signProficiency(user.id)}}%</td>
            <td class="text-center">
              <div class="btn btn-success btn-xs">查看</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-4" v-for="section in db.section" :key="section.id">
      <h3 class="page-header">
        课程概览
        <span class="datetime">{{section.date}}</span>
      </h3>
      <table class="table table-hover table-striped table-bordered">
        <tr>
          <td>课程小节名称</td>
          <td class="text-center">反馈</td>
        </tr>
        <tr v-for="course in section.course" :key="course.id">
          <td>{{course.title}}</td>
          <td class="text-center">
            <div @click="showCouse()" class="btn btn-warning btn-xs">反馈</div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  props: ["db",'chooseCourse'],
  methods: {
    vueProficiency(id) {
      let num = 0;
      let sum = 0;
      let arr = this.db.section;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].course.length; j++) {
          sum++;

          if (arr[i].course[j].good.indexOf(id) !== -1) {
            num++;
          }
        }
      }
      if (sum === 0) {
        return 0;
      }
      let b = parseInt((num / sum) * 100);
      return b;
    },
    signProficiency(id) {
      let num = 0;
      let sum = 0;
      let arr = this.db.sign;
      let date = new Date();
      sum = arr.length * 2;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].morning.indexOf(id) !== -1) {
          num++;
        }
        if (arr[i].afternoon.indexOf(id) !== -1) {
          num++;
        }
      }
      if (sum === 0) {
        return 0;
      }
      let b = parseInt((num / sum) * 100);
      return b;
    },
    showCouse(){
      this.chooseCourse();
    }
  }
};
</script>



<style scoped>
.col-md-4 table tr {
  line-height: 35px;
  border: solid 1px #ddd;
  box-sizing: border-box;
}
.col-md-4 table tr td {
  box-sizing: border-box;
  padding: 0 10px;
}
</style>