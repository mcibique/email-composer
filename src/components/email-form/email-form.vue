<template>
  <form @submit.prevent="onSendEmail" autocomplete="off" novalidate class="email-form">
    <h1 class="email-form__heading">Send E-mail</h1>
    <input
      placeholder="To"
      v-model="email.to"
      aria-label="To"
      class="form-input"
      :class="{ 'form-input--has-error': $v.email.to.$error }"
      @blur="$v.email.to.$touch()"
    />
    <input
      placeholder="CC"
      v-model="email.cc"
      aria-label="CC"
      class="form-input"
      :class="{ 'form-input--has-error': $v.email.cc.$error }"
      @blur="$v.email.cc.$touch()"
    />
    <input
      placeholder="BCC"
      v-model="email.bcc"
      aria-label="BCC"
      class="form-input"
      :class="{ 'form-input--has-error': $v.email.bcc.$error }"
      @blur="$v.email.bcc.$touch()"
    />
    <input
      placeholder="Subject"
      v-model="email.subject"
      aria-label="Subject"
      maxlength="100"
      class="form-input"
      :class="{ 'form-input--has-error': $v.email.subject.$error }"
      @blur="$v.email.subject.$touch()"
    />
    <textarea
      placeholder="Message"
      v-model="email.message"
      aria-label="Message"
      class="form-input"
      :class="{ 'form-input--has-error': $v.email.message.$error }"
      rows="12"
      @blur="$v.email.message.$touch()"
    ></textarea>
    <p v-if="email.attachments.length > 0">Attached files</p>
    <email-attachments
      :attachments="email.attachments"
      :is-read-only="false"
      @delete-attachment="onDeleteAttachment"
    />
    <div class="email-form__footer">
      <upload-button @file-selected="onAttachmentSelected" />
      <button type="submit" class="button" :disabled="$v.email.$invalid" @click="$v.email.$touch()">
        <arrow-right-icon class="button__icon" />
        <span>Send</span>
      </button>
    </div>
  </form>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

import ArrowRightIcon from '@/assets/icons/arrow-right.svg'
import EmailAttachments from '@/components/email-attachments'
import UploadButton from '@/components/upload-button'
import fileToDataUrl from '@/helpers/file-to-data-url'
import emailList from '@/validators/email-list'

@Component({
  components: { ArrowRightIcon, EmailAttachments, UploadButton },
  mixins: [ validationMixin ],
  validations: {
    email: {
      to: { required, emailList },
      cc: { emailList },
      bcc: { emailList },
      subject: { required },
      message: { required },
    },
  },
})
class EmailForm extends Vue {
  email = {
    to: '',
    cc: '',
    bcc: '',
    subject: '',
    message: '',
    attachments: [],
  }

  async onAttachmentSelected (file) {
    if (file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      let dataUrl = await fileToDataUrl(file)
      this.email.attachments.push({ dataUrl, file })
    } else {
      console.warn(`File ${file.name} ignored because it is not an image file.`)
    }
  }

  onDeleteAttachment (attachment) {
    this.email.attachments = this.email.attachments.filter(existingAttachment => existingAttachment !== attachment)
  }

  onSendEmail () {
    this.$emit('email-sent', this.email)
  }
}

export default EmailForm
</script>

<style lang="scss">
@import "~@/styles/settings";

.email-form {
  &__heading {
    background-color: #094358;
    color: #cee0f7;
    font-size: 1.6rem;
    font-weight: normal;
    margin: -3rem -3rem 3rem;
    padding: 3rem;

    @media (min-width: 480px) {
      border-top-left-radius: $default-border-radius;
      border-top-right-radius: $default-border-radius;
    }
  }

  &__footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
