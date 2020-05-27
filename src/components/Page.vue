<template>
<!-- 主页信息 -->
    <div class="row index">
          <div class="col-md-8">
            <h2 class="page-header">用户信息</h2>
            <table class="table table-hover table-striped table-bordered tab1">
              <tbody>
                <tr>
                  <td>id</td>
                  <td>姓名</td>
                  <td class="text-center">VUE掌握程度</td>
                  <td class="text-center">签到率</td>
                  <td class="text-center">详细信息</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>吴鹏</td>
                  <td class="text-center">0%</td>
                  <td class="text-center">0%</td>
                  <td class="text-center">
                    <div class="btn btn-success btn-xs">查看</div>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
          <div class="col-md-4">
            <h2 class="page-header">
              课程概览
              <span class="datetime"></span>
            </h2>
            <table class="table table-hover table-striped table-bordered tab2">
              <tr>
                <td>课程小节名称</td>
                <td class="text-center">反馈</td>
              </tr>
              <tr>
                <td>Vue 课程简介</td>
                <td class="text-center">
                  <div class="btn btn-warning btn-xs">反馈</div>
                </td>
              </tr>
            </table>
          </div>
        </div>
</template>



<script type="text/ecmascript-6">
    export default {
        
    }
</script>



<style scoped>
    
</style>