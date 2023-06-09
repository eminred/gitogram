<template>
    <div class="c-placeholder">
    </div>
</template>

<script>
export default {
  name: 'Placeholder',
  props: {
    username: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}

</script>
<style src="./placeholder.scss" scoped lang="scss"></style>
