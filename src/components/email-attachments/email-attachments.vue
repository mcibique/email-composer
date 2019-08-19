<template>
  <ul class="email-attachments">
    <li
      class="email-attachments__attachment"
      v-for="(attachment, index) of attachments"
      :key="index"
    >
      <div
        class="email-attachments__remove-attachment-backdrop"
        v-if="!isReadOnly"
        @click.prevent="onDeleteAttachment(attachment)"
        title="Remove this attachment"
      >
        <button class="email-attachments__remove-attachment-button">
          <trash-icon class="email-attachments__remove-icon" />
        </button>
      </div>
      <img
        :src="attachment.dataUrl"
        :alt="attachment.file.name"
        class="email-attachments__thumbnail"
      />
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import TrashIcon from '@/assets/icons/trash.svg'

@Component({
  components: { TrashIcon },
})
class EmailAttachments extends Vue {
  @Prop({ type: Array, required: true }) attachments
  @Prop({ type: Boolean, default: true }) isReadOnly

  onDeleteAttachment (attachment) {
    if (this.isReadOnly) {
      return
    }

    this.$emit('delete-attachment', attachment)
  }
}

export default EmailAttachments
</script>

<style lang="scss">
@import "~@/styles/settings";

.email-attachments {
  $email-attachment-size: 10rem;
  $remove-email-attachment-icon-size: 1.8rem;

  margin: 0;
  padding: 0;

  &:not(:empty) {
    margin: 1rem 0;
  }

  &__attachment {
    display: inline-block;
    width: $email-attachment-size;
    height: $email-attachment-size;
    line-height: $email-attachment-size;
    text-align: center;
    margin-right: 1rem;
    position: relative;
    border: 1px solid $default-border-color;
    border-radius: 2px;
  }

  &__thumbnail {
    max-height: 100%;
    max-width: 100%;
  }

  &__remove-attachment-backdrop {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(#000, 0.75);
    text-align: center;
    opacity: 0;
    will-change: opacity;
    transition: linear 200ms opacity;

    .email-attachments__attachment:hover & {
      opacity: 1;
      cursor: pointer;
    }
  }

  &__remove-attachment-button {
    border: 0;
    border-radius: 50%;
    background-color: #ccc;
    display: inline-block;
    vertical-align: middle;
    padding: 1.4rem;
    outline: 0;
    cursor: pointer;
  }

  &__remove-icon {
    display: inline-block;
    vertical-align: top;
    height: $remove-email-attachment-icon-size;
    width: $remove-email-attachment-icon-size;
    fill: #fff;
  }
}
</style>
