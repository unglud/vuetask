<template>
  <AddTask v-show="showAddTask" @add-task="addTask"/>
  <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="allTodos"/>
</template>

<script>
import {ref} from 'vue'
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';
import {mapGetters} from 'vuex';

export default {
  name: 'Home',
  components: {
    Tasks,
    AddTask
  },
  setup () {
    const tasks = ref([]);

    const deleteTask = (id) => {
      tasks.value = tasks.value.filter((task) => task.id !== id);
    };

    const toggleReminder = (id) => {
      tasks.value = tasks.value.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
    };

    const addTask = (task) => {
      tasks.value = [...tasks.value, task];
    }

    return {
      addTask,
      deleteTask,
      toggleReminder,
      tasks
    }
  },
  props: {
    showAddTask: Boolean
  },
  computed: mapGetters(['allTodos'])
}
</script>

<style scoped>

</style>
