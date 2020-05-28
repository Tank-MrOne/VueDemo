<template>
  <!-- 签到信息 -->
  <div class="row singupStat">
    <div class="col-md-12">
      <div class="btn-group h2">
        <button
          type="button"
          class="btn btn-default dropdown-toggle btn-lg"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="time">{{date}}</span>
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li v-for="(sign, index) in db.sign" :key="sign.id">
            <a href="javascript:;" @click="changeDate(index)">{{sign.date}}</a>
          </li>
          
        </ul>
      </div>
    </div>
    <div class="col-md-6 tab3">
      <h3 class="page-header">早晨签到统计</h3>
      <div v-for="user in db.user" :key="user.id" class="col-md-2">
        <div :class="changeCss(true,id,user.id)">{{user.name}}</div>
      </div>
      
    </div>

    <div class="col-md-6 tab4">
      <h3 class="page-header">下午签到统计</h3>
      <div v-for="user in db.user" :key="user.id" class="col-md-2">
        <div :class="changeCss(false,id,user.id)">{{user.name}}</div>
      </div>
      
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  props:['db'],
  data() {
    return {
      date : this.db.sign[this.db.sign.length-1].date,
      id:this.db.sign.length-1
    }
  },
  methods: {
    changeDate(index){
        this.date = this.db.sign[index].date
        this.id = index
    },
    changeCss(x,index,uid){
      if(x){
        if(this.db.sign[index].morning.indexOf(uid) !== -1){
          return "btn btn-lg btn-success"
        }else{
          return "btn btn-lg btn-default"
        }
      }else{
        if(this.db.sign[index].afternoon.indexOf(uid) !== -1){
          return "btn btn-lg btn-success"
        }else{
          return "btn btn-lg btn-default"
        }
      }
    }
  },
};
</script>



<style scoped>
</style>