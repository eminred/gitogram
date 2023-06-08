<template>
    <div class="avatar">
        <div class="avatar__logo">
            <img :src="avatarUrl" alt="" class="avatar__logo-img">
        </div>
        <div class="avatar__text">
            <p>{{ nickname }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'avatar',
  props: {
    avatarUrl: String,
    nickname: String
  }
}
</script>

<style scoped>
.avatar__text {
    color: #000;
}

.avatar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.avatar__logo-img{
    height: 44px;
    width: 44px;
    border-radius: 50%;
    margin-right: 14px;
}
</style>
