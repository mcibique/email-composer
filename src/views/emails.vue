<template>
  <email-form v-if="!sentEmail" @email-sent="onEmailSent" />
  <div v-else class="emails__detail-wrapper">
    <success-notification>
      <h1 class="emails__success-message">Your email has been sent</h1>
    </success-notification>
    <hr />
    <email-detail :email="sentEmail" />
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import EmailDetail from '@/components/email-detail'
import EmailForm from '@/components/email-form'
import SuccessNotification from '@/components/success-notification'

@Component({
  components: { EmailDetail, EmailForm, SuccessNotification },
})
class EmailsView extends Vue {
  sentEmail = null

  onEmailSent (email) {
    this.sentEmail = email
  }
}

export default EmailsView
</script>

<style lang="scss">
.emails {
  &__success-message {
    font-weight: 300;
  }

  &__detail-wrapper {
    @media (min-width: 480px) {
      padding: 3rem;
    }
  }
}
</style>
