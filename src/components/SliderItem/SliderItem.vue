<template>
    <div class="wrapper">
        <Progress />
        <div class="avatar-container">
            <avatar
                :avatarUrl="'https://picsum.photos/300/300'"
                :nickname="'Peter'"
            />
        </div>
        <div class="content-wrapper">
            <slot />
        </div>

        <xButton />
    </div>
</template>

<script>
export default {
  name: 'SliderItem',
  props: {
    avatarUrl: {
      type: String,
      required: true
    },
    nickname: {
      type: String,
      required: true
    }
  }
}
</script>
