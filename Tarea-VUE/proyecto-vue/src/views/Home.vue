<template>
  <div class="home">
    <InfoCard v-for="f in facts" :key="f._id" :id="f._id" :text="f.text">
      hols
    </InfoCard>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapActions} from 'vuex'
import InfoCard from '../components/InfoCard'
export default {
  name: 'Home',
  components: {
    InfoCard
  },
  computed: {
    ...mapState(['facts'])
  },
  methods: {
    ...mapActions(['getFacts'])
  },
  created() {
    this.getFacts()
  }
}
</script>
