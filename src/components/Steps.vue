<template>
  <div class="steps">
    <div v-for="(step, i) in count" :key="step.id">
      <div class="circle" :class="{ active : active === i + 1 }">
        {{ i + 1 }}
      </div>
      <div v-if="i + 1 < count" class="line"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'steps',
  props: ["count", "active"]
}
</script>

<style lang="scss">

.steps {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;

  & > div {
    display: flex;
    align-items: center;

    .circle {
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-weight: 600;
      border: 2px solid $blueGray;
      border-radius: 50%;
      background: #fff;
      color: $blueGray;
      user-select: none;

      &.active {
        background: $blueGray;
        color: #fff;
      }
    }

    .line {
      width: 25px;
      height: 0;
      border-bottom: 3px dotted $blueGray;
      margin: 0 3px;
    }
  }
}

</style>
