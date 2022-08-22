<script setup lang="ts">
  import { BalApp, BalFooter, BalHeading, BalButton } from '@baloise/design-system-components-vue'
  import Hans from './components/Hans.vue'

  function aaaa(str: string) {
    alert(str)
  }
</script>

<template>
  <BalApp class="has-sticky-footer has-background">
    <header>
      <bal-navbar>
          <bal-navbar-brand simple>
              <bal-logo brand="group" color="white"></bal-logo>
              <bal-text><strong>Lunchdate</strong> Vue.js</bal-text>
          </bal-navbar-brand>
      </bal-navbar>
    </header>
    <main class="container">
      <bal-tabs interface="tabs" value="tab-a">
        <bal-tab-item value="tab-a" label="Hans">
          <Hans foo="gügüsli" @clckd="aaaa"/>
        </bal-tab-item>
        <bal-tab-item value="tab-b" label="Gugus">
          <BalHeading>Gugus</BalHeading>
        </bal-tab-item>
      </bal-tabs>
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