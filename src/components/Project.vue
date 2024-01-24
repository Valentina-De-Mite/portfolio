<script>
export default {
  name: "Project",
  data() {
    return {
      themeChanger: null,
    };
  },

  props: {
    thumb: String,
    projectTitle: String,
    description: String,
    technologies: Array,
  },
};
</script>

<template>
  <section id="projects">
    <div class="row">
      <div class="col-8">
        <img :src="thumb" alt="" />
      </div>
      <div class="col-4">
        <h4 class="text-end">{{ projectTitle }}</h4>
        <p>{{ description }}</p>
        <small>{{ technologies }}</small>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../scss/partials/variables.scss";
</style>
