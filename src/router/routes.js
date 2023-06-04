import feeds from '../components/feeds/feeds.vue'
import stories from '../components/stories/stories'
import storyPostItem from '../components/storyPostItem/storyPostItem'

export default [{
  path: '/',
  component: feeds,
  name: 'feeds'
},
{
  path: '/stories/:initialSlide',
  component: stories,
  name: 'stories'
},
{
  path: '/storyPostItem',
  component: storyPostItem,
  name: 'storyPost'
}
]
