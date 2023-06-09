<template>
    <button class="button">
        {{ text || "Follow" }}
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    hoverText: {
      type: String
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }
}
</script>

<style scoped>
.button {
    min-width: 270px;
    min-height: 44px;
    outline: none;
    background: #31ae54;
    border: none;
    border-radius: 4px;
    color: #ffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 50px;
    margin-top: 7px;
}

.button:hover {
    background: crimson;
}

</style>
