<template>
<div class="container">
    <p v-if="isLoading">Loading...</p>
    <ul v-for="p in post" :key="p.id">
      <h1>{{ p.title }}</h1>
      <p>{{ p.content }}</p>
      <p class="date">{{ p.createdAt }}</p>
    </ul>
  </div>
</template>

