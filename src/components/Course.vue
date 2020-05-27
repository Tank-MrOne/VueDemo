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
          <span class="time" style="margin-right: 20px;">2020-5-25</span>
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu menu1">
          <li>
            <a href="javascript:;">2020-5-27</a>
          </li>
          <li>
            <a href="javascript:;">2020-5-25</a>
          </li>
          <li>
            <a href="javascript:;">2020-5-23</a>
          </li>
          <li>
            <a href="javascript:;">2020-5-22</a>
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
          <span class="courseTitle">选择课程小节标题</span>
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu menu2">
          <li>
            <a href="javascript:;">复习</a>
          </li>
          <li>
            <a href="javascript:;">列表的过滤和排序</a>
          </li>
          <li>
            <a href="javascript:;">事件的绑定相关</a>
          </li>
          <li>
            <a href="javascript:;">自动收集表单数据</a>
          </li>
          <li>
            <a href="javascript:;">定时器的添加和清除</a>
          </li>
          <li>
            <a href="javascript:;">生命周期回调（钩子）</a>
          </li>
          <li>
            <a href="javascript:;">内置指令及自定义指令</a>
          </li>
          <li>
            <a href="javascript:;">自定义过滤器处理数据</a>
          </li>
          <li>
            <a href="javascript:;">自定义插件的使用</a>
          </li>
          <li>
            <a href="javascript:;">过度和动画的操作</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-12 tab5">
      <h3 class="page-header">列表的过滤和排序</h3>
      <div class="container">
        <div class="row">
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">吴鹏</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">刘钰</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">马禹涵</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">周田</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">周爱悦</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">李元元</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">高琪</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">郝继鹏</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">王寅虎</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">柴光成</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">陈天意</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">郭悦超</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">郝朝静</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">贾小芳</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">李昕</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">刘昶廷</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">刘雨鑫</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">马君琰</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">王凯凯</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">王文娟</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">杨阳</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">袁东昊</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">张亚欣</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">周涛</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">周泽生</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">庄俊强</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">李国林</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">龚欢</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">贺子文</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">胡强</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">霍利昂</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">刘香香</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">王艺琦</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">吴熙</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">张寅春</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">郑乔</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
          <div class="col-md-3 table-bordered text-center">
            <div class="col-md-5 h4">万俊卿</div>
            <div class="col-md-7 h4">
              <button class="btn btn-xs goods">已掌握</button>
              <button class="btn btn-xs bads">未掌握</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
export default {};
</script>



<style scoped>
</style>