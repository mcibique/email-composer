<template>
  <div class="email-detail">
    <h2>{{ email.subject }}</h2>
    <p class="email-detail__address-list">
      to
      <email-address-list :addresses="toAddressList(email.to)" />
    </p>
    <p class="email-detail__address-list" v-if="email.cc">
      cc
      <email-address-list :addresses="toAddressList(email.cc)" />
    </p>
    <p class="email-detail__address-list" v-if="email.bcc">
      bcc
      <email-address-list :addresses="toAddressList(email.bcc)" />
    </p>

    <p class="email-detail__message">{{ email.message }}</p>

    <email-attachments :attachments="email.attachments" is-read-only />
  </div>
</template>

<script>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import EmailAddressList from '@/components/email-address-list'
import EmailAttachments from '@/components/email-attachments'

@Component({
  components: { EmailAddressList, EmailAttachments },
})
class EmailDetail extends Vue {
  @Prop({ type: Object, required: true }) email

  toAddressList (addresses) {
    return addresses.split(',').map(address => address.trim())
  }
}

export default EmailDetail
</script>

<style lang="scss">
@import "~@/styles/settings";

.email-detail {
  &__address-list {
    color: $default-note-color;
  }

  &__message {
    white-space: pre-wrap;
  }
}
</style>
