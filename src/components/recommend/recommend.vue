<template>
  <div class="recommend">
    <scroll ref="scroll"
            class="recommend-content"
            :data="discList">
      <div>
        <div v-if="recommends.length"
             class="slider-wrapper">
          <slider>
            <div v-for="item in recommends"
                 :key="item.id">
              <a :href="item.linkUrl">
                <img @load="loadImage"
                     :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li class="item"
                v-for="(item, index) in discList"
                :key="index">
              <div class="icon">
                <img style="width:60px;height:60px"
                     v-lazy="item.imgurl"
                     alt="">
              </div>
              <div class="text">
                <h2 class="name"
                    v-html="item.creator.name"></h2>
                <p class="desc"
                   v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
    推荐页面
  <loading :title="'加载中...'" v-show="!discList.length"></loading>
  <!-- <loading></loading> -->
  </div>
</template>
<script>
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
import Slider from 'base/slider/slider'
import { getRecommend, getDiscList } from 'api/recommend'
import { ERR_OK } from 'api/config'
export default {
  data () {
    return {
      recommends: [],
      discList: [],
    }
  },
  created () {
    this._getRecomment()
    setTimeout(() => {
      this._getDiscList()
    }, 1000);
  },
  methods: {
    _getRecomment () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    },
    _getDiscList () {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          // console.log(res);
          this.discList = res.data.list
        }
      })
    },
    loadImage () {
      if (!this.checkLoaded) {
        this.$refs.scroll.refresh()
        this.checkLoaded = true
      }
    }
  },
  components: {
    Slider,
    Scroll,
    Loading,
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.recommend
  position fixed
  width 100%
  top 88px
  bottom 0
  .recommend-content
    height 100%
    overflow hidden
    .slider-wrapper
      position relative
      width 100%
      overflow hidden
    .recommend-list
      .list-title
        height 65px
        line-height 65px
        text-align center
        font-size $font-size-medium
        color $color-theme
      .item
        display flex
        box-sizing border-box
        align-items center
        padding 0 20px 20px 20px
        .icon
          flex 0 0 60px
          width 60px
          padding-right 20px
        .text
          display flex
          flex-direction column
          justify-content center
          flex 1
          line-height 20px
          overflow hidden
          font-size $font-size-medium
          .name
            margin-bottom 10px
            color $color-text
          .desc
            color $color-text-d
</style>