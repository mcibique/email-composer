<template>
  <div class="upload-button">
    <input
      type="file"
      class="visually-hidden"
      tabindex="-1"
      multiple
      ref="fileInput"
      @change="onFileSelected"
    />
    <button
      type="button"
      @click.prevent="selectFile()"
      class="upload-button__button"
      aria-label="Attach files to the email"
    >
      <paperclip-icon class="upload-button__icon" />
    </button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import PaperclipIcon from '@/assets/icons/paperclip.svg'

@Component({
  components: { PaperclipIcon },
})
class UploadButton extends Vue {
  selectFile () {
    this.$refs.fileInput.click()
  }

  onFileSelected (event) {
    for (let file of event.target.files) {
      this.$emit('file-selected', file)
    }

    this.$refs.fileInput.value = '' // clear the hidden input so the same file can be attached multiple times
  }
}

export default UploadButton
</script>

<style lang="scss">
.upload-button {
  $upload-button-text-color: #ababab;
  $upload-button-border-color: $upload-button-text-color;
  $upload-button-hover-text-color: #20bfed;
  $upload-button-hover-border-color: $upload-button-hover-text-color;
  $upload-button-size: 3.2rem;
  $upload-button-icon-size: 2rem;

  display: inline-block;

  &__button {
    appearance: none;
    width: $upload-button-size;
    height: $upload-button-size;
    line-height: $upload-button-size - 0.2rem; // 0.2rem -> border size
    text-align: center;
    display: inline-block;
    padding: 0;
    border: 0.1rem solid $upload-button-border-color;
    border-radius: 50%;
    background: none;
    fill: $upload-button-text-color;

    &:hover,
    &:focus,
    &:active {
      fill: $upload-button-hover-text-color;
      border-color: $upload-button-hover-border-color;
      outline: 0;
      cursor: pointer;
    }
  }

  &__icon {
    display: inline-block;
    vertical-align: middle;
    width: $upload-button-icon-size;
    height: $upload-button-icon-size;
    transform: rotateZ(-45deg);
  }
}
</style>
