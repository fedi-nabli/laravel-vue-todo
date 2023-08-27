<template>
  <div class="item">
    <input
      type="checkbox"
      :checked="item.completed"
      @change="updateCheck()"
      v-model="item.completed"
    />
    <span :class="[item.completed ? 'completed' : '', 'itemText']">
      {{ item.name }}
    </span>
    <button @click="removeItem()" class="trashCan">
      <font-awesome-icon
        icon="trash"
      />
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ListItem',
  props: ['item'],
  methods: {
    updateCheck() {
      axios.put('api/item/' + this.item.id, {
        item: this.item
      })
      .then (response => {
        if (response.status == 200) {
          this.$emit('itemChanged')
        }
      })
      .catch (error => {
        console.log(error)
      })
    },
    removeItem() {
      axios.delete('api/item/' + this.item.id)
      .then (response => {
        if (response.status == 200) {
          this.$emit('itemChanged')
        }
      })
      .catch (error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.completed {
  text-decoration: line-through;
  color: #999999;
}

.itemText {
  width: 100%;
  margin-left: 20px;
}

.trashCan {
  background: #E6E6E6;
  border: none;
  color: #FF0000;
  outline: none;
}
</style>