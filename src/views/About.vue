<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{name}}
  </div>
</template>
<script>
export default {
  name: 'about',
  data: () => ({
    name: 'about_name'
  }),
  components: {},
  created () {
  },
  mounted () {
    this.$http({
      url: '/api/v1',
      method: 'get'
    }).then(res => {
      console.log(res)
    })
  },
  methods: {}
}
</script>
