<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="header">
          <div class="header__logo">
            <a href="/">
              <img src="../assets/gitogram.svg" alt="" class="">
            </a>
          </div>
          <div class="header__buttons">
            <a href="#" class="icon">
          <icon name="home" />
        </a>
        <a href="#" class="icon">
          <icon name="home" />
        </a>
        <a href="#" class="icon">
          <icon name="exit" />
        </a>
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <story-user-item
              :avatar="story.avatar"
              :username="story.username"
              @onPress="handlePress(story.id)"
          />
          </li>
          <li class="stories-item" v-for="{ id, owner, name } in trendings" :key="id">
            <story-user-item
              :src="owner.avatar_url"
              :username="name"
              @storyPress="$router.push({name: 'stories', params: {initialSlide: id}})"
          />
          </li>
        </ul>
      </template>
    </topline>
  </div>
    <div class="x-container">
      <ul class="list">
        <li class="item" v-for="item in items" :key="item.id">
          <!--<p>Iterrator work</p>-->
          <feed
            v-bind="getFeedData(item)"
            dark
            />
        </li>
      </ul>
    </div>
</template>

<script>
import { topline } from '../components/topline'
import { icon } from '../icons'
import { storyUserItem } from '../components/storyUserItem'
import stories from './data.json'
import * as api from '../api'
import { feed } from '../components/feed'

export default {
  name: 'feeds',
  components: {
    feed,
    topline,
    icon,
    storyUserItem
  },
  data () {
    return {
      stories,
      items: []
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    },
    getFeedData (item) {
      return {
        title: item?.name,
        description: item?.description,
        username: item?.owner?.login,
        stars: item?.stargazers_count,
        avatar: item?.owner?.avatar_url,
        forks: item?.forks_count
      }
    },
    handlePress (id) {
      console.log('Stub', id)
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss">

</style>
