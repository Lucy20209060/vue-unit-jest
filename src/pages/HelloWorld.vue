<template>
  <div class="hello">
    <p>{{msg}}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: ''
  }
}
</script>
