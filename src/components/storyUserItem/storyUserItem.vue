<template>
    <button class="c-story-user-item" @click="$emit('onPress')">
        <div class="avatar">
            <img :src="avatar_url" alt="username avatar" class="img" />
        </div>
        <div class="username">{{ username }}</div>
    </button>
</template>
<script>
export default {
  props: {
    avatar_url: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./storyUserItem.scss" scoped lang="scss"></style>
