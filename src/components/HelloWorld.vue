<template>
  <div class="hello">
    {{uid}}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters([
      'uid'
      // ...
    ])
  },
  methods: {
    ...mapActions(['setUid'])
  },
  mounted () {
    setTimeout(() => {
      this.setUid('limin')
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
