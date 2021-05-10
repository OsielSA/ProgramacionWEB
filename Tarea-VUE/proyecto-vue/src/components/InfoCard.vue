<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <router-link class="link-verde" :to="`/detalle/${id}`">
        <div>
          <span class="titulo">{{ text }}</span>
          <br>
          {{ id }}
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    id: [String, Number],
    text: String,
  },
};
</script>

<style>
  .titulo{
    font-weight: bold;
  }
  .container{
    width: 50%;
  }
  .card{
    margin-bottom: 30px;
  }
  .link-verde{
    color: #42B983;
  }
</style>
