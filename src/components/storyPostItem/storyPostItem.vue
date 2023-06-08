<template>
    <div class="c-story-post-item" :class="{ active }">
        <div class="stories-container">
            <div class="header">
                <div class="progress">
                    <x-progress :active="active" @onFinish="$emit('onProgressFinish')"/>
                </div>
                <div class="avatar">
                    <avatar
                    :avatarUrl="data.userAvatar"
                    :nickname="data.username"
                    />
                </div>
            </div>
            <div class="content">
                <div class="loader" v-if="loading">
                    <spinner />
                </div>
                <div class="info" v-else>
                    <div v-if="data.content?.length" class="content-text" v-html="data.content"></div>
                    <placeholder v-else
                    :paragraphs="2"
                    />
                </div>
            </div>
            <div class="button">
                <x-button>Follow</x-button>
            </div>
            <div v-if="active">
                <button v-if="btnsShown.includes('next')" class="btn btn-next" @click="$emit('onNextSlide')">
                    <span class="icon">
                        <icon name="arrow" />
                    </span>
                </button>
                <button v-if="btnsShown.includes('prev')" class="btn btn-prev" @click="$emit('onPrevSlide')">
                    <span class="icon">
                        <icon name="arrow" />
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { avatar } from '../avatar'
import { button } from '../button'
// import { progress } from '../progress'
// import { icon } from '../icons'
// import { placeholder } from '../placeholder'
// import { spinner } from '../spinner'

export default {
  name: 'StoryUserItem',
  components: {
    avatar,
    xButton: button
    // xProgress: // progress,
    // icon,
    // placeholder,
    // spinner
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish'],
  props: {
    active: Boolean,
    loading: Boolean,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || 'prev')
      }
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  created () {
    console.log(this.data)
  }
}
</script>

<style src="./storyPostItem.scss" scoped lang="scss"></style>
