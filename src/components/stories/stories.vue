<template>
    <div class="wrapper">
        <header class="header">
            <div class="x-container">
                <button class="logo">
                    <a href="/">
                        <img src="../../assets/gitogram.svg" alt="" class="">
                    </a>
                    <logo white
                    @onPress="$router.push({name: 'feeds'})"
                    />
                </button>
                <button class="close-btn">
                    <icon name="close" />
                </button>
            </div>
        </header>
        <div class="content">
            <stories-slider :initialSlide="Number($route.params.initialSlide)"/>
        </div>
    </div>
</template>

<script>
import { storiesSlider } from '../storiesSlider'
import { icon } from '../../icons'
import { logo } from '../../assets/gitogram.svg'

export default {
  name: 'Stories',
  components: {
    logo,
    icon,
    storiesSlider
  }
}
</script>

<style src="./stories.scss" scoped lang="scss"></style>
