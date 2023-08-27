<template>
  <div class="todoListContainer">
    <div class="heading">
      <h2 id="title">Todo List</h2>
      <AddItemForm v-on:reloadList="getList()" />
    </div>
    <ListView
      :items="items"
      v-on:reloadList="getList()"
    />
  </div>
</template>

<script>
import axios from 'axios';
import AddItemForm from './addItemForm.vue';
import ListView from './listView.vue';

export default {
  name: 'App',
  components: {
    AddItemForm,
    ListView
  },
  data: function () {
    return {
      items: []
    }
  },
  methods: {
    getList() {
      axios.get('api/items')
      .then(respose => {
        this.items = respose.data
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  created() {
    this.getList();
  }
}
</script>

<style scoped>
.todoListContainer {
  width: 350px;
  margin: auto;
}

.heading {
  background: #E6E6E6;
  padding: 10px;
}

#title {
  text-align: center;

}
</style>