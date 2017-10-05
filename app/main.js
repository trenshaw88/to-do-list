Vue.component('task-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})
new Vue({
  el: '#list',
  data: {
    newTask: '',
    tasks: [
      {
        id: '',
        title: '',
      }
    ],
    nextTaskId: 1
  },
  methods: {
    addTask: function () {
      this.tasks.push({
        id: this.nextTaskId++,
        title: this.newTask
      })
      this.newTask = ''
    }
  }
})


