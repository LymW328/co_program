<template>
  <div id="app">
    <h1>Coffee Order App</h1>
    <div class="continer">
      {{menu}}
      {{size}}
<!-- 그리드 사용해서 구현하기 -->
    </div>
  </div>
  
  
</template>

<script>
export default {
  name: 'App',
  computed: {
    menu() {
      return this.$store.state.menuList
    },
    size () {
      return this.$store.state.sizeList
    }
  }


}

</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}
</style>
