<script setup lang="ts">
  import { BalApp, BalFooter, BalHeading, BalButton } from '@baloise/design-system-components-vue'
</script>

<template>
  <BalApp class="has-sticky-footer has-background">
    <header>
      <!-- Header content -->
    </header>
    <main class="container">
      <BalHeading>Hello World!</BalHeading>
      <BalButton>Button</BalButton>
      <!-- Page content -->
    </main>
    <BalFooter>
      <div class="container">
        <!-- Footer content -->
        Footer
      </div>
    </BalFooter>
  </BalApp>
</template>

<style>
</style>