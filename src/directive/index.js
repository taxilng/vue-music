import Vue from 'vue';
Vue.directive('btnlimit', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: (el, binding) => {
    // el 当前绑定的元素 binding.value指令的绑定值
    let permissionList = ['share', 'edit'];
    // 判断一下是否包含这个元素，如果不包含的话，那就让他爸爸元素把子元素扔进垃圾堆
    if (!permissionList.includes(binding.value)) {
      el.parentNode.removeChild(el);
    }
  }
});
