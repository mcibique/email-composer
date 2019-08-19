<template functional>
  <ul class="address-list">
    <li
      class="address-list__email-address"
      v-for="(emailAddress, index) of props.addresses"
      :key="index"
    >
      <a :href="`mailto:${emailAddress}`">{{ emailAddress }}</a>
      <span v-if="index !== props.addresses.length - 1">,</span>
    </li>
  </ul>
</template>

<style lang="scss">
.address-list {
  padding: 0;
  margin: 0;
  display: inline-block;

  &__email-address {
    display: inline-block;
  }
}
</style>
