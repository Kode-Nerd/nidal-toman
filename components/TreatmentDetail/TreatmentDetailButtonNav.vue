<template>
  <div :class="btnClass" @click="setActiveTab({ activeTab: value })">
    {{ title }}
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      require: true,
      default: '',
    },
    value: {
      type: String,
      default: 'general',
    },
    isActive: {
      type: Boolean,
    },
  },
  data() {
    return {
      btnClass: {
        'treatment-details__nav': true,
        isActive: !!this.isActive,
      },
    }
  },
  methods: {
    ...mapMutations({
      setActiveTab: 'SET_ACTIVE_TAB_TREATMENT_DETAIL',
    }),
  },
}
</script>

<style>
.treatment-details__nav {
  padding: 10px 0px;
  color: #6c756b;
  cursor: pointer;
  white-space: nowrap;
  font-size: 24px;
  line-height: 33px;
}

.treatment-details__nav:not(:first-child) {
  margin-left: 40px;
}

.treatment-details__nav:hover::-webkit-scrollbar {
  display: none;
}

::-webkit-scrollbar {
  display: none;
}

.isActive {
  font-weight: 700 !important;
  border-bottom: solid 2px #cca43b;
}
</style>
