<template>
  <div class="m-header">
    歌手页面
  </div>
</template>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
<script>
import { getSingerList } from 'api/singer'
import { ERR_OK } from 'api/config'
import Singer from 'common/js/singer'
const HOT_NAME = '热门'
const HOT_SINGER_LEN = 10
export default {
  data () {
    return {
      singers: [],
    }
  },
  created () {
    this._getSingerList()
  },
  methods: {
    _getSingerList () {
      getSingerList().then((res) => {
        // console.log(res);
        if (res.code === ERR_OK) {
          this.singers = res.data.list
          let a = this._normalizeSinger(this.singers)
          console.log(a);
        }
      })
    },
    _normalizeSinger (list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(new Singer(
            item.Fsinger_mid,
            item.Fsinger_name
          )
          )
        }
        const key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: [],
          }
        }
        map[key].items.push(new Singer(
          item.Fsinger_mid,
          item.Fsinger_name
        ))
      })
      // console.log(map);

      // 为了得到有序列表，我们需要处理 map
      let hot = []
      let ret = []
      hot.push(map.hot)
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return [...hot, ...ret]
    }
  }
}
</script>
