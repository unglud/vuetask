<template>
  <AddTask v-show="showAddTask" @add-task="addTask"/>
  <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="allTodos"/>
</template>

<script>
import {computed, ref} from 'vue'
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';
import {useStore} from 'vuex';

export default {
  name: 'Home',
  components: {
    Tasks,
    AddTask
  },


  setup () {
    const store = useStore();
    const tasks = ref([]);
    const allTodos = computed(() => store.getters.allTodos);

    store.dispatch('fetchTodos');

    const deleteTask = (id) => {
      tasks.value = tasks.value.filter((task) => task.id !== id);
    };

    const toggleReminder = (id) => {
      tasks.value = tasks.value.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
    };

    const addTask = (task) => {
      store.dispatch('addTodo', task);
    }

    return {
      addTask,
      deleteTask,
      toggleReminder,
      allTodos,
      tasks
    }
  },
  props: {
    showAddTask: Boolean
  }
}
</script>

<style scoped>

</style>
