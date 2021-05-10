<template>
  <div>
    <h1>Mi Dato Random</h1>
    <button type="button" class="btn btn-success" @click="getFactRandom">Obtener Info <i class="fas fa-random"></i></button>
    <hr>
    <div class="container">
      <div class="card" v-if="factRandom">
        <div class="card-body">
          <div class="card-title">
            <span class="titulo">{{ factRandom.type }}</span>
          </div>
          <div class="card-text">
            {{ factRandom.text }}
            <br>
            <label class="verificado">{{factRandom.status.verified?"Verificado":"Sin información sobre su verificación"}}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default ({
    name: 'DatoRandom',
    computed: {
      ...mapState(['factRandom'])
    },
    methods: {
      ...mapActions(['getFactRandom'])
    }

  })
</script>

<style>
  .verificado{
    color: #42B983;
  }
</style>
