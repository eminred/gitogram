<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="icon">
          <icon name="home" />
        </div>
        <div class="icon">
          <icon name="home" />
        </div>
        <div class="icon">
          <icon name="exit" />
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
  <div class="c-feed">
    <div class="x-container">
      <div class="stories-item-feed" v-for="story in stories" :key="story.id">
          <story-user-item
            :avatar="story.avatar"
            :username="story.username"
            @onPress="handlePress(story.id)"
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
      </div>
    </div>
  </div>
  <template>
  <SliderItem>
  <h1>
    Some content here
  </h1>
  </SliderItem>
  </template>
  <template>
    <div class="x-container">
      <ul class="list">
        <li class="item" v-for="item in items" :key="item.id"></li>
          <feed
            v-bind="getFeedData(item)"
            dark
            />
      </ul>
      <pre>{{ items }}</pre>
    </div>
  </template>
</template>

<script>
import { topline } from '../components/topline'
import { icon } from '../icons'
import { storyUserItem } from '../components/storyUserItem'
import stories from './data.json'
import { toggler } from '../components/toggler'
import { comment } from '../components/comment'
import SliderItem from './SliderItem/SliderItem.vue'
import * as api from '../api'
import { feed } from '../components/feed'

export default {
  name: 'feeds',
  components: {
    feed,
    topline,
    icon,
    storyUserItem,
    toggler,
    comment,
    SliderItem
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
        // title: item.name,
        // description: item.description,
        // username: item.owner.login,
        // stars: item.stargazers_count
      }
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
