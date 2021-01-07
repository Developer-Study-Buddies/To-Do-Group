<template>
  <Navbar />
  <div class="app">
      <Sidebar />
      <div class="main">
        <Home />
      <div class="todo-list">
        <Todos />
      </div>
    </div>
  </div>
</template>

<script>
import Home from './components/index.vue';
import Navbar from './components/navbar.vue';
import Todos from './components/todo-list-item.vue';
import Sidebar from './components/sidebar.vue';

export default {
  name: 'App',
  components: {
    Home,
    Navbar,
    Sidebar,
    Todos,
  }
}
</script>

<style>
  @import './components/css/main.css';
</style>
