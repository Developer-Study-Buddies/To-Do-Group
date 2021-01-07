<template>
  <main>
    <form @submit="addNewTodo" class="add-todo">
      <input class="add-todo--input" type="text">
      <button type="submit" class="add-todo--btn">add</button>
    </form>
  </main>
  <div class="filler">
    <img src="../assets/filler_photo.svg" alt="">
  </div>
</template>
<script>

export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


