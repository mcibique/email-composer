<template>
  <div class="success-notification">
    <check-circle-icon class="success-notification__icon"></check-circle-icon>
    <slot>Operation finished successfully.</slot>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import CheckCircleIcon from '@/assets/icons/check-circle.svg'

@Component({
  components: { CheckCircleIcon },
})
class SuccessNotification extends Vue {}

export default SuccessNotification
</script>

<style lang="scss">
@import "~@/styles/settings";

.success-notification {
  $success-notification-icon-size: 8rem;
  $success-notification-icon-color: $success-state-color;

  text-align: center;

  &__icon {
    width: $success-notification-icon-size;
    height: $success-notification-icon-size;
    fill: $success-notification-icon-color;
  }
}
</style>
