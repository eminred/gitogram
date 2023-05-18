<template>
    <div class="c-feed" :class="{dark}">
      <div class="x-container">
        <div class="avatar">
            <img :src="avatar" alt="username avatar" class="img" />
            <div class="username">{{ username }}</div>
            <!--<h2>owner: {{ username }}</h2>-->
          </div>
          <div class="post">
            <div class="post__title">
              <h1>{{ title }}</h1>
            </div>
            <div class="post__description">
              <p v-if="description">{{ description }}</p>
            </div>
            <div class="post__stars">
              <div class="star">
                <div class="star__img">
                  <img src="../../assets/star.svg" alt="" class="">
                </div>
              <div class="star__title">Star</div>
            </div>
              <div class="star__count">{{ stars }}</div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Feed',
  props: {
    title: String,
    username: String,
    stars: Number,
    description: String,
    dark: Boolean
  }
}
</script>

<style src="./feed.scss" scoped lang="scss"></style>
