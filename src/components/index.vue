<template>
  <main>
    <form @submit="addNewTodo" class="add-todo">
      <input class="add-todo--input" type="text">
      <button type="submit" class="add-todo--btn">add</button>
    </form>
  </main>
</template>
<script>

export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


