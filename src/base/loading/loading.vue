<template>
  <div class="loading-container">
    <div class="loading">
      <span class="spin">
        <div class="snake"></div>
      </span>
      <p class="desc" v-show='title'>{{title}}</p>
    </div>
    <div class="mask"></div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
@keyframes spinner-rotate
  0%
    transform rotate(0deg)
  100%
    transform rotate(360deg)
.loading-container
  transition opacity 0.2s linear
  .mask
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    opacity 0
.loading
  padding 15px
  position fixed
  top 50%
  left 50%
  transform translate(-50%, -50%)
  border-radius 5px
  background rgba(0, 0, 0, 0.7)
  color #ffffff
  text-align center
  .spin
    display inline-block
    text-align center
    .snake
      border 4px solid transparent
      border-top-color rgb(204, 204, 204)
      border-left-color rgb(204, 204, 204)
      border-bottom-color rgb(204, 204, 204)
      height 32px
      width 32px
      border-radius 50%
      animation spinner-rotate 0.8s infinite linear
  .desc
    line-height 20px
    font-size $font-size-medium-x
    color $color-text-l
    text-align center
    margin-top 10px
</style>
