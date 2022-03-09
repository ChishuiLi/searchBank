<template>
  <div id="app">
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-3 column">
          <Left/>
        </div>
        <div class="col-md-7 column">
          <router-view/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Left from "@/components/Left";
export default {
  name: 'App',
  components: {
    Left
  }
}
</script>

<style>

</style>
