<template>
    <div class="container">
      <div class="alert alert-danger" role="alert">
        <span>抱歉，您还未登入</span>
        <div class="btn btn-primary btn-xs">登入</div>
      </div>
      <h2 class="page-header">VUE - 学习概况</h2>
      <div class="btn btn-danger toIndex" @click="showComponents(0)">【 主页 】</div>
      <div class="btn btn-primary toSingIn">【 上午 - 签到 】</div>
      <div class="btn btn-primary toSingOut">【 下午 - 签到 】</div>
      <div class="btn btn-warning toSingStat"  @click="showComponents(1)">【 签到统计 】</div>
      <div class="btn btn-warning toCourseStat" @click="showComponents(2)">【 课程反馈统计 】</div>
      <div class="btn btn-success toFeedStat" @click="showComponents(3)">【 意见反馈 】</div>
      <div class="btn btn-info toAddCourse">【 添加小节 】</div>
      <div class="contentMain">
        <Page v-show="show[0]" :db="db"/>
        <Course v-show="show[2]" :db="db"/>
        <Singup v-show="show[1]" :db="db"/>
        <Common v-show="show[3]" :db="db"/>
      </div>
      <div class="warpper-back">
        <div class="warpper center">
          <div class="showBack center"></div>
          <div class="addCourseInput center col-md-8">
            <h2 class="page-header text-center">添加课程小节</h2>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">在这输入课程小节标题</label>
                <input type="text" class="form-control" placeholder="Course Title" />
                <p class="h5"></p>
              </div>
              <button type="button" class="btn btn-block btn-info btn-default">发布</button>
            </form>
          </div>
          <div class="choose-identity">
            <h2 class="page-header text-center">你是老师还是学生？</h2>
            <div class="center">
              <div class="ts">
                <div class="btn btn-primary btn-lg teacher">老师 Teacher</div>
                <div class="btn btn-success btn-lg student">学生 Student</div>
              </div>
              <div class="chooseTs">
                <div class="form-group">
                  <label for="exampleInputPassword1">请输入通过密码</label>
                  <input type="password" class="form-control" placeholder="Password" />
                  <span></span>
                </div>
                <button type="button" class="btn btn-default">提交</button>
                <button type="button" class="btn btn-info">跳过</button>
              </div>
              <div class="chooseSt">
                <div class="form-group">
                  <label for="exampleInputPassword1">请输入用户编号</label>
                  <input type="text" class="form-control" placeholder="用户编号" />
                  <span></span>
                </div>
                <button type="button" class="btn btn-default">提交</button>
                <button type="button" class="btn btn-info">跳过</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>



<script type="text/ecmascript-6">
import Page from './components/Page' ;
import Course from './components/Course' ;
import Singup from './components/Singup' ;
import Common from './components/Common' ;
import db from './public/js/db'
export default {
    components:{
        Page , Course , Singup , Common
    },
    data() {
        return {
            db : db,
            show : [true,false,false,false]
        }
    },
    methods: {
      showComponents(index){
        this.show = [false,false,false,false];
        this.show[index] = true;
      }
    },
};

</script>



<style scoped>
</style>