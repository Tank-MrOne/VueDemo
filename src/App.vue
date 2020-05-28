<template>
  <div class="container">
    <div v-if="line" class="alert alert-danger" role="alert">
      <span>抱歉，您还未登入</span>
      <div class="btn btn-primary btn-xs" @click="quit()">登入</div>
    </div>
    <div v-else class="alert alert-success" role="alert">
      <span>
        你好，
        <b>{{db.user[online-1].name}}</b>,欢迎您的到来
      </span>
      <div class="btn btn-primary btn-xs" @click="quit()">切换</div>
    </div>
    <h2 class="page-header">VUE - 学习概况</h2>
    <div class="btn btn-danger toIndex" @click="showComponents(0)">【 主页 】</div>
    <div class="btn btn-primary toSingIn">【 签到 】</div>
    <div class="btn btn-warning toSingStat" @click="showComponents(1)">【 签到统计 】</div>
    <div class="btn btn-warning toCourseStat" @click="showComponents(2)">【 课程反馈统计 】</div>
    <div class="btn btn-success toFeedStat" @click="showComponents(3)">【 意见反馈 】</div>
    <div class="contentMain">
      <Page v-show="show[0]" :db="db" />
      <Course v-show="show[2]" :db="db" :cscs="changeStudentCourseStatus" />
      <Singup v-show="show[1]" :db="db" />
      <Common v-show="show[3]" :db="db" />
    </div>
    <div v-show="war" class="warpper-back">
      <div class="warpper center">
        <div class="showBack center"></div>
        <div class="choose-identity">
          <h2 class="page-header text-center">欢迎登入</h2>
          <div class="center">
            <div class="chooseSt">
              <div class="form-group">
                <label for="exampleInputPassword1">请输入用户编号</label>
                <input v-model="online" type="text" class="form-control" placeholder="用户编号" />
              </div>
              <button type="button" class="btn btn-default" @click="signUp(online)">提交</button>
              <button type="button" class="btn btn-info" @click="signUp()">跳过</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
import Page from "./components/Page";
import Course from "./components/Course";
import Singup from "./components/Singup";
import Common from "./components/Common";
import db from "./public/js/db";
export default {
  components: {
    Page,
    Course,
    Singup,
    Common
  },
  data() {
    return {
      db: db,
      online: "",
      line: true,
      war: true,
      show: [true, false, false, false]
    };
  },
  methods: {
    showComponents(index) {
      this.show = [false, false, false, false];
      this.show[index] = true;
    },
    changeStudentCourseStatus(x, index1, index2, uid) {
      if (this.online == uid) {
        if (x) {
          this.db.section[index1].course[index2].good.push(uid);
          let num = this.db.section[index1].course[index2].bad.indexOf(uid);
          this.db.section[index1].course[index2].bad.splice(num, 1);
        } else {
          this.db.section[index1].course[index2].bad.push(uid);
          let num = db.section[index1].course[index2].good.indexOf(uid);
          this.db.section[index1].course[index2].good.splice(num, 1);
        }
      }else{
        alert("抱歉，您只能对您个人的信息进行修改");
      }
    },
    signUp(uid = 0) {
      let flag = false;
      for (let i = 0; i < this.db.user.length; i++) {
        if (this.db.user[i].id == uid) {
          flag = true;
        }
      }
      if (flag) {
        this.line = false;
        this.war = false;
      } else {
        alert("输入编号有误，请重新输入");
      }
    },
    quit() {
      this.online = "";
      this.line = true;
      this.war = true;
    }
  }
};
</script>



<style scoped>
b {
  font-weight: bold;
  font-size: 18px;
  color: deepskyblue;
  letter-spacing: 2px;
}
.warpper-back {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
}
.showBack {
  line-height: 50px;
  text-align: center;
  font-size: 20px;
}
</style>