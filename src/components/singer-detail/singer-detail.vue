<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.singer-detail
  position fixed
  z-index 100
  top 88px
  bottom 0
  left 0
  right 0
  background $color-background
.slide-enter-active, .slide-leave-active
  transition all 0.3s
.slide-enter, .slide-leave-to
  transform translate3d(100%, 0, 0)
</style>
<script>
import { mapGetters } from 'vuex'
import { getSingerDetail } from 'api/singer'
import { ERR_OK } from 'api/config'
import { createSong } from 'common/js/song'
import musicList from 'components/music-list/music-list'
export default {
  data () {
    return {
      songs: []
    }
  },
  computed: {
    title () {
      return this.singer.name
    },
    bgImage () {
      return this.singer.avator
    },
    ...mapGetters(['singer'])
  },
  created () {
    console.log(this.singer);

    this._getDetail()
  },
  methods: {
    _getDetail () {
      // console.log(this.$router);
      // console.log(this.$route.params.id);

      if (!this.singer.id) {
        this.$router.push('/singer')
      }
      getSingerDetail(this.singer.id).then(res => {
        if (res.code === ERR_OK) {
          // console.log(res.data);
          this.songs = this._normalizeSongs(res.data.list)
          console.log(this.songs);
        }
      })
    },
    _normalizeSongs (list) {
      let ret = []
      list.forEach((item) => {
        let { musicData } = item
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  components: {
    musicList,
  }
}
</script>
