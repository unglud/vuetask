<template>
  <AddTask v-show="showAddTask" @add-task="addTask"/>
  <Filter />
  <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="allTodos"/>
</template>

<script>
import {computed} from 'vue'
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';
import {useStore} from 'vuex';
import Filter from '../components/Filter';

export default {
  name: 'Home',
  components: {
    Tasks,
    AddTask,
    Filter
  },
  setup () {
    const store = useStore();
    const allTodos = computed(() => store.getters.allTodos);

    store.dispatch('fetchTodos');

    const deleteTask = (id) => {
      store.dispatch('deleteTodo', id);
    };

    const toggleReminder = (task) => {
      store.dispatch('updateTodo', {
        id: task.id,
        title: task.title,
        completed: !task.reminder
      });
    };

    const addTask = (task) => {
      store.dispatch('addTodo', task);
    }

    return {
      addTask,
      deleteTask,
      toggleReminder,
      allTodos
    }
  },
  props: {
    showAddTask: Boolean
  }
}
</script>

<style scoped>

</style>
