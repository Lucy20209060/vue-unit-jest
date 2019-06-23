<template>
  <div class="actions">
    <p>
      <button @click="addFun">ADD</button>
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Actions',
  methods: {
    ...mapActions(['addFun'])
  }
}
</script>
