<script setup lang="ts">
  import { BalApp, BalFooter, BalHeading, BalButton, BalInput } from '@baloise/design-system-components-vue'
  const a = 'hansili';

  function gugus() {
    alert('wer das liest ist doof')
  }

  const props = defineProps({
    foo: String
  })

  const emit = defineEmits(['clckd'])
</script>

<template>
  <div class="hans">
    <BalHeading>{{foo}}</BalHeading>
    <BalInput v-model="myInput" />
    <bal-button @click="this.$emit('clckd', myInput)">Press me</bal-button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
