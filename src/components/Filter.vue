<template>
  <div>
    Filter Todos:
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import {useStore} from 'vuex';

export default {
  name: 'Filter',
  setup () {
    const store = useStore();
    const filterTodos = (e) => {
      const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
      store.dispatch('filterTodos', limit);
    }

    return {
      filterTodos
    }
  }
}
</script>

<style scoped>

</style>
