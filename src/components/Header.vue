<template>
  <header>
    <h1>{{ title }}</h1>
    <Button v-show="homePage"
            @btn-click="$emit('toggle-add-task')" :text="showAddTask ? 'Close':'Add Task'"
            :color="showAddTask ? 'red':'green'"/>
  </header>
</template>

<script>
import Button from './Button';
import {computed} from 'vue';
import {useRoute} from 'vue-router';

export default {
  name: 'Header',
  components: {
    Button
  },
  setup () {

    const homePage = computed(() => {
      const route = useRoute();
      return route.path === '/';
    })

    return {
      homePage
    }
  },
  props: {
    title: String,
    showAddTask: Boolean
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
