<template>
  <div class="container">
    <div class="row common">
      <h2 class="page-header">请发表对Vue的评论</h2>
      <div class="col-md-4">
        <form class="form-horizontal">
          <div class="form-group">
            <label>用户名</label>
            <input type="text" class="form-control" readonly v-model="userName" />
          </div>
          <div class="form-group">
            <label>评论内容</label>
            <textarea v-model="value" @keyup.enter="addC" class="form-control" rows="6" placeholder="评论内容"></textarea>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button @click="addC"  type="button" class="btn btn-default pull-right">提交</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
          <li v-for="(common, index) in db.common" :key="common.id" class="list-group-item">
            <div class="handle">
              <a href="javascript:;" @click="delC(index)">删除</a>
            </div>
            <p class="user">
              <span class="btn btn-xs btn-info">{{common.userName}}</span>
              <span>说:</span>
            </p>
            <p class="centence speak">{{common.value}}</p>
            
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  props:['db','userName','addCommon','deleteCommon'],
  data() {
    return {
      value : ""
    }
  },
  methods: {
    addC(){
      if(this.userName!=="您还未登入"){
          if(this.value.trim()){
          let obj = {
            id : new Date().now,
            userName : this.userName,
            value : this.value
          }
          this.addCommon(obj);
          this.value = "";
        }else{
          alert('不能评论空信息');
        }
      }else{
        alert("请先登入");
      }
    },
    delC(index){
      this.deleteCommon(index)
    }
  },
};


</script>



<style scoped>
li {
  transition: .5s;
  overflow: hidden;
}
.speak{
  padding-left: 20px;
}
.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}
</style>