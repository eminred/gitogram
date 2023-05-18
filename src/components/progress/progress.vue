<template>
    <div class="c-progress" :class={active} >
        <div ref="indicator" class="indicator"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this$emit('onFinish')
    }
  },
  mounted () {
    setTimeout(() => {
      this.active = true
    })
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style scoped>
.c-progress {
    background: rgba(49, 174, 84, 0.3);
    height: 2px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;

}

.c-progress.active .indicator {
    width: 100%;
}

.indicator {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;
    background: green;
    transition: 5s;
}
</style>
