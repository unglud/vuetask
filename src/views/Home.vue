<template>
  <div v-show="showAddTask">
    <AddTask @add-task="addTask"/>
  </div>
  <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
</template>

<script>
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';

export default {
  name: 'Home',
  components:{
    Tasks,
    AddTask,
  },
  props:{
    showAddTask: Boolean
  },
  data () {
    return {
      tasks: [],
    }
  },
  methods: {
    deleteTask (id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleReminder (id) {
      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
    },
    addTask(task){
      this.tasks = [...this.tasks, task];
    }
  },
  created () {
    this.tasks = [
      {
        id: 1,
        text: 'Doctors',
        day: 'March 1st at 2:30pm',
        reminder: true
      }
    ]
  }
}
</script>

<style scoped>

</style>
