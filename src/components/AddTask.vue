<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="title" name="title" placeholder="Add Task"/>
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder"/>
    </div>

    <input type="submit" value="Save Task" class="btn btn-block"/>
  </form>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'AddTask',
  emits:['add-task'],
  setup (props, context) {
    const title = ref('');
    const reminder = ref(false);

    const onSubmit = (e) => {
      e.preventDefault();

      const newTask = {
        id: Math.floor(Math.random() * 100_000),
        title: title.value,
        reminder: reminder.value
      }

      context.emit('add-task', newTask);

      title.value = '';
      reminder.value = false;
    };

    return {
      title,
      reminder,
      onSubmit
    }
  }

}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
