<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <ListItem
        :item="item"
        class="item"
        v-on:itemChanged="$emit('reloadList')"
      />
    </div>
  </div>
</template>

<script>
import ListItem from './listItem.vue'

export default {
  name: 'ListView',
  props: ['items'],
  components: {
    ListItem
  }
}
</script>

<style scoped>
.item {
  background: #E6E6E6;
  padding: 5px;
  margin-top: 5px;
}
</style>