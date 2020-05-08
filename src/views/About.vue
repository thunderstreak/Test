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
  },
  methods: {}
}
</script>
