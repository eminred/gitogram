// import { feeds } from '../components/feeds.vue'
import { stories } from '../components/stories/index'
import { storyPostItem } from '../components/storyPostItem/index'

export default [{
  // path: '/',
  // component: feeds,
  // name: 'feeds'
},
{
  path: '/stories',
  component: stories,
  name: 'stories'
},
{
  path: '/storyPostItem',
  component: storyPostItem,
  name: 'storyPost'
}
]
