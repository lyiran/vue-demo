<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item, index) in selections" @click="chosenSelection(index)"></li>
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>

</style>

