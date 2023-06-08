<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="header">
          <div class="header__logo">
            <a href="/">
              <img src="../../assets/gitogram.svg" alt="" class="">
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
          <!-- <li class="stories-item" v-for="story in stories" :key="story.id">
            <story-user-item
              :avatar="story.avatar"
              :username="story.username"
              @onPress="handlePress(story.id)"
          />
          </li> -->
          <li class="stories-item" v-for="{ id, owner, name } in items" :key="id">
            <story-user-item
              :avatar_url="owner.avatar_url"
              :username="name"
              @onPress="$router.push({name: 'stories', params: {initialSlide: id}})"
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
import { topline } from '../topline'
import { icon } from '../../icons'
import { storyUserItem } from '../storyUserItem'
import stories from './data.json'
import * as api from '../../api'
import { feed } from '../feed'
import { mapState, mapActions, mapGetters } from 'vuex'

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
  computed: {
    ...mapState({
      trendings: state => state.trendings.data,
      starred: (state) => state.starred.data
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchStarred: 'starred/fetchStarred',
      fetchIssuesForRepo: 'starred/fetchIssuesForRepo',
      authUserByCode: 'auth/authUserByCode'
    }),
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
      await this.fetchTrendings()
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
