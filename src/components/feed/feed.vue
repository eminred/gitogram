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
            <div class="post__items">
              <div class="star">
                <div class="star__img">
                  <img src="../../assets/star.svg" alt="" class="">
                </div>
              <div class="star__title">Star</div>
            </div>
              <div class="star__count">{{ stars }}k</div>
              <div class="star">
                <div class="star__img">
                  <img src="../../assets/fork.png" alt="" class="">
                </div>
              <div class="star__title">Forks</div>
            </div>
              <div class="star__count">{{ forks }}</div>
            </div>
          </div>
      </div>
      <div class="toggler">
              <toggler @onToggle="toggle"/>
              <div class="comments" v-if="shown">
                <ul class="comments-list">
                  <li class="comments-item" v-for="n in 5" :key="n"></li>
                    <comment text="Some text" username="John Doe"/>
                </ul>
              </div>
            </div>
    </div>
</template>

<script>
import { toggler } from '../toggler'
import { comment } from '../comment'

export default {
  name: 'Feed',
  components: {
    toggler,
    comment
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  },
  props: {
    title: String,
    username: String,
    stars: Number,
    forks: Number,
    description: String,
    dark: Boolean,
    avatar: String
  }
}
</script>

<style src="./feed.scss" scoped lang="scss"></style>
