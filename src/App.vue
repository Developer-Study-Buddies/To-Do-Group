<template>

  <link rel="stylesheet" href="./components/css/main.css">
  <Navbar />
  <Home />
  <div class="todo-list">
  <todos />
  </div>
</template>

<script>
import Home from './components/index.vue'
import Navbar from './components/navbar.vue'
import todos from './components/todo-list-item.vue'

export default {
  name: 'App',
  components: {
    Home,
    Navbar,
    todos,
  }
}
</script>

<style>
  @import './components/css/main.css'
</style>
