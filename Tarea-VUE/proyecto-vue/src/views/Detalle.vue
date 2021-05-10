<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div class="card-title">
            <span class="titulo">ID: {{ fact._id }}</span>
        </div>
        <div class="card-text">
          Fact: {{ fact.text }}
          <br />
          Feacha de Creación: {{ fact.createdAt }}
        </div><br>
        <a type="button" class="btn btn-outline-success btn-sm" href="/home"><i class="fas fa-undo-alt"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Detalle",
  computed: {
    ...mapState(["fact"]),
  },
  methods: {
    ...mapActions(["getFact"]),
  },
  created() {
    this.getFact(this.$route.params.id);
  },
};
</script>


