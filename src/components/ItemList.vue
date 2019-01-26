<template>
  <div id="ItemList">
    <h2>ItemList</h2>
    <!-- todo: for文などを使う -->
    <p>{{ game1 }}</p>
  </div>
</template>


<script>
export default {
  name: "itemlist",
  data() {
    return {
      game1: "カタン",
      games: [
        {"title": ""}
      ]
    }
  }
}
</script>
