<template>
  <div id="app">
    <BottomList v-if="$route.meta.showList"></BottomList>
    <router-view></router-view>
  </div>
</template>

<script>
import BottomList from '@/components/bottomList/bottomList.vue'
export default {
  name: 'App',
  components:{
    BottomList
  },
  mounted(){
    
  }
}
</script>

<style lang="stylus">
 
</style>
