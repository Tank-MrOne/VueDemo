<template>
  <div class="row courseStat">
    <div class="col-md-2">
      <div class="btn-group h2">
        <button
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          class="btn btn-default btn-lg dropdown-toggle"
        >
          <span class="time" style="margin-right: 20px;">{{date}}</span>
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu menu1">
          <li v-for="(section, index) in db.section" :key="section.id">
            <a href="javascript:;" @click="changeCourse(index)">{{section.date}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-10">
      <div class="btn-group h2">
        <button
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          class="btn btn-default btn-info btn-lg dropdown-toggle"
        >
          <span class="courseTitle">{{title}}</span>
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu menu2">
          <li v-for="(course,index) in courses.course" :key="course.id">
            <a href="javascript:;" @click="changeTitle(course,index)">{{course.title}}</a>
          </li>
          
        </ul>
      </div>
    </div>
    <div class="col-md-12 tab5">
      <h3 class="page-header">{{title}}</h3>
      <div class="container">
        <div class="row">
          <div v-for="(user,index) in db.user" :key="user.id" class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">{{user.name}}</div>
            <div class="col-md-7 h4">
              <button :class="chooseCssGood(user.id)" @click="cscs(true,cid,sid,user.id)">已掌握</button>
              <button :class="chooseCssBad(user.id)" @click="cscs(false,cid,sid,user.id)">未掌握</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  props:['db','cscs'],
  data() {
    return {
      cid:this.db.section.length-1,
      sid:this.db.section[this.db.section.length-1].course.length-1,
      styleNor:"btn btn-xs",
      styleCssGood:"btn btn-xs btn-success",
      styleCssBad:"btn btn-xs btn-danger",
      courses : this.db.section[this.db.section.length-1],
      date  : this.db.section[this.db.section.length-1].date,
      title : this.db.section[this.db.section.length-1].course[this.db.section[this.db.section.length-1].course.length-1].title,
      studys : this.db.section[this.db.section.length-1].course[this.db.section[this.db.section.length-1].course.length-1]
    }
  },
  methods: {
    changeCourse(index){
      console.log("----"+index);
      
      this.cid = index;
      this.courses = this.db.section[index]
      this.date = this.db.section[index].date
    },
    changeTitle(arr,index){
      this.sid = index;
      this.studys = arr
      this.title = arr.title
    },
    chooseCssGood(uid){
      if(this.studys.good.indexOf(uid)!== -1){
        return this.styleCssGood
      }
      return this.styleNor
    },
    chooseCssBad(uid){
      if(this.studys.bad.indexOf(uid)!== -1){
        return this.styleCssBad
      }
      return this.styleNor
    }
  },
};
</script>



<style scoped>
</style>