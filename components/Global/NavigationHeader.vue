<template>
  <div class="nav__container">
    <ul>
      <li
        v-for="option in navOptions"
        :key="option.value"
        :class="{ [option.value]: true, active: option.value === selectedNav }"
        @click="handleSelectActiveNav(option.value)"
      >
        {{ option.label }}
      </li>

      <div class="underline" />
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedNav: 'infodesk',
      navOptions: [
        {
          label: 'Treatments',
          value: 'treatments',
        },
        {
          label: 'Info Desk',
          value: 'infodesk',
        },
        {
          label: 'Dr. Nidal Toman',
          value: 'profile',
        },
        {
          label: 'Contact',
          value: 'contact',
        },
        {
          label: 'Practice',
          value: 'practice',
        },
      ],
    }
  },
  methods: {
    handleSelectActiveNav(selectedNav) {
      this.selectedNav = selectedNav
    },
  },
}
</script>

<style scoped>
.nav__container {
  width: 720px;
  border-bottom: 1px solid #e5e5e5;
  float: right;
}

.active {
  opacity: 1;
}

.active.infodesk ~ .underline {
  margin-left: 120px;
  width: 107px;
}

.active.treatments ~ .underline {
  margin-left: 0px;
  width: 120px;
}

.active.infodesk ~ .underline {
  margin-left: 120px;
  width: 107px;
}

.active.profile ~ .underline {
  margin-left: calc(120px + 107px);
  width: 154px;
}

.active.contact ~ .underline {
  margin-left: calc(120px + 107px + 154px);
  width: 96px;
}

.active.practice ~ .underline {
  margin-left: calc(120px + 107px + 154px + 96px);
  width: 96px;
}

ul li:hover {
  opacity: 1;
  transition: 0.8s;
}

ul li {
  display: inline;
  text-align: center;
  display: inline-block;
  padding: 15px 20px;
  margin: 0;
  text-decoration: none;
  color: #494949;
  background: #fff;
  cursor: pointer;
  opacity: 0.6;
}

.nav {
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;

  color: #a2a2a2;
}

.underline {
  height: 2px;
  margin: 0;
  width: 120px;
  background: #a6a6a6;
  border: none;
  transition: 0.3s ease-in-out;
  border-radius: 2px;
}
</style>
