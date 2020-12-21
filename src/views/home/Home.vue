<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'

import { getMultidata } from 'network/home'
export default {
  components:{
    NavBar,
    HomeSwiper
  },
  data(){
    return {
      banners: [],
      dKeywords:[],
      keywordss:[],
      recommends:[]
    }
  },
  created(){
    this.getdata()
  },
  methods:{
    getdata(){
      getMultidata().then(res=>{
        this.banners = res.data.banner.list;
        this.dKeywords = res.data.dKeyword.list;
        this.keywordss = res.data.keywords.list;
        this.recommends = res.data.recommend.list;
        console.log(this.banners)
      },err=>{
        console.log(err)
      })
    }
  },
  
}
</script>

<style scoped>
  .nav-bar{
    background: var(--color-tint);
    color:#fff
  }
</style>