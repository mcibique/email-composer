<template>
  <main class="app">
    <div class="app__content">
      <emails-view></emails-view>
    </div>
  </main>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import EmailsView from '@/views/emails'

@Component({
  components: { EmailsView },
})
class App extends Vue {}

export default App
</script>

<style lang="scss">
@import "~@/styles/settings";

.app {
  $content-background-color: #fff;
  $content-border-radius: $default-border-radius;
  $content-shadow: 0 0 2px 4px rgba(#000, 0.1);

  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    flex: 1;
    background-color: $content-background-color;
    box-shadow: $content-shadow;
    padding: 3rem;

    @media (min-width: 480px) {
      border-radius: $content-border-radius;
      max-width: 95%;
      margin: 1rem auto;
    }

    @media (min-width: 820px) {
      max-width: 820px;
    }
  }
}
</style>
