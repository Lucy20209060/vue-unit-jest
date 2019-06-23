<template>
  <div class="getters">
    <p>{{getNumber}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'getters',
  computed: mapGetters(['getNumber'])
}
</script>
