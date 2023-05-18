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
            <div class="toggler">
              <toggler @onToggle="toggle"/>
              <div class="comments" v-if="shown">
                <ul class="comments-list">
                  <li class="comments-item" v-for="n in 5" :key="n"></li>
                    <comment text="Some text" username="John Doe"/>
                </ul>
              </div>
            </div>
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
import { toggler } from '../components/toggler'
import { comment } from '../components/comment'

export default {
  name: 'feeds',
  components: {
    feed,
    topline,
    icon,
    storyUserItem,
    toggler,
    comment
  },
  data () {
    return {
      stories,
      shown: false,
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
        stars: item?.stargazers_count
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
