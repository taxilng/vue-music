<template>
  <div class="loading-container">
    <div class="loading">
      <span class="spin">
        <div class="snake" v-if="type === 'snake'"></div>
        <div v-if="type === 'fading-circle'" class="mint-spinner-fading-circle circle-color-11"
             style="width: 32px; height: 32px;">
          <div class="mint-spinner-fading-circle-circle is-circle2"></div>
          <div class="mint-spinner-fading-circle-circle is-circle3"></div>
          <div class="mint-spinner-fading-circle-circle is-circle4"></div>
          <div class="mint-spinner-fading-circle-circle is-circle5"></div>
          <div class="mint-spinner-fading-circle-circle is-circle6"></div>
          <div class="mint-spinner-fading-circle-circle is-circle7"></div>
          <div class="mint-spinner-fading-circle-circle is-circle8"></div>
          <div class="mint-spinner-fading-circle-circle is-circle9"></div>
          <div class="mint-spinner-fading-circle-circle is-circle10"></div>
          <div class="mint-spinner-fading-circle-circle is-circle11"></div>
          <div class="mint-spinner-fading-circle-circle is-circle12"></div>
          <div class="mint-spinner-fading-circle-circle is-circle13"></div>
        </div>
      </span>
      <p class="desc"
         v-show='title'>{{title}}</p>
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
    },
    type: {
      type: String,
      default: 'snake'
    },
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

.mint-spinner-fading-circle {
    position: relative
}
.mint-spinner-fading-circle-circle {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute
}
.mint-spinner-fading-circle-circle::before {
    content: " ";
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background #ccc
    border-radius: 100%;
    -webkit-animation: mint-fading-circle 1.2s infinite ease-in-out both;
            animation: mint-fading-circle 1.2s infinite ease-in-out both
}
.mint-spinner-fading-circle-circle.is-circle2 {
    -webkit-transform: rotate(30deg);
            transform: rotate(30deg)
}
.mint-spinner-fading-circle-circle.is-circle2::before {
    -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s
}
.mint-spinner-fading-circle-circle.is-circle3 {
    -webkit-transform: rotate(60deg);
            transform: rotate(60deg)
}
.mint-spinner-fading-circle-circle.is-circle3::before {
    -webkit-animation-delay: -1s;
            animation-delay: -1s
}
.mint-spinner-fading-circle-circle.is-circle4 {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg)
}
.mint-spinner-fading-circle-circle.is-circle4::before {
    -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s
}
.mint-spinner-fading-circle-circle.is-circle5 {
    -webkit-transform: rotate(120deg);
            transform: rotate(120deg)
}
.mint-spinner-fading-circle-circle.is-circle5::before {
    -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s
}
.mint-spinner-fading-circle-circle.is-circle6 {
    -webkit-transform: rotate(150deg);
            transform: rotate(150deg)
}
.mint-spinner-fading-circle-circle.is-circle6::before {
    -webkit-animation-delay: -0.7s;
            animation-delay: -0.7s
}
.mint-spinner-fading-circle-circle.is-circle7 {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg)
}
.mint-spinner-fading-circle-circle.is-circle7::before {
    -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s
}
.mint-spinner-fading-circle-circle.is-circle8 {
    -webkit-transform: rotate(210deg);
            transform: rotate(210deg)
}
.mint-spinner-fading-circle-circle.is-circle8::before {
    -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s
}
.mint-spinner-fading-circle-circle.is-circle9 {
    -webkit-transform: rotate(240deg);
            transform: rotate(240deg)
}
.mint-spinner-fading-circle-circle.is-circle9::before {
    -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s
}
.mint-spinner-fading-circle-circle.is-circle10 {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg)
}
.mint-spinner-fading-circle-circle.is-circle10::before {
    -webkit-animation-delay: -0.3s;
            animation-delay: -0.3s
}
.mint-spinner-fading-circle-circle.is-circle11 {
    -webkit-transform: rotate(300deg);
            transform: rotate(300deg)
}
.mint-spinner-fading-circle-circle.is-circle11::before {
    -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s
}
.mint-spinner-fading-circle-circle.is-circle12 {
    -webkit-transform: rotate(330deg);
            transform: rotate(330deg)
}
.mint-spinner-fading-circle-circle.is-circle12::before {
    -webkit-animation-delay: -0.1s;
            animation-delay: -0.1s
}
@-webkit-keyframes mint-fading-circle {
    0%, 39%, 100% {
        opacity: 0
    }
    40% {
        opacity: 1
    }
}
@keyframes mint-fading-circle {
    0%, 39%, 100% {
        opacity: 0
    }
    40% {
        opacity: 1
    }
}
</style>
