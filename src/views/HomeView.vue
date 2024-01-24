<script>
import "../scss/style.scss";
import Project from "../components/Project.vue";
import projectsJs from "../projects";

export default {
  name: "HomeView",

  components: {
    Project,
  },

  data() {
    return {
      projectsJs,
    };
  },
};
</script>
<!-- <script>
import { store } from "../store";

import { Dropdown } from "bootstrap";

export default {
  name: "HomeView",

  components: {},

  data() {
    return {
      store,
    };
  },

  mounted() {},
};
</script> -->

<template>
  <section
    class="col-8 wrapper_inner my-5 d-flex justify-content-start flex-wrap"
  >
    <div class="content col-12">
      <p class="fs-5">Ciao, mi chiamo</p>
      <p class="fs-1">Valentina De Mite</p>

      <p class="fs-3">
        Sono una junior Full Stack Web Developer con la passione per il design e
        UX/UI. Dopo aver conseguito una laurea in ostetricia ho deciso di
        dedicarmi completamente alla mia passione per il Web al 100%. Sono una
        persona dinamica e curiosa, determinata con una mentalità aperta e volta
        al problem-solving, ed entusiasta di poter imparare nuove skill di
        programmazione (e non).
      </p>

      <button class="button-74">
        <a class="link-nav" href="">Scopri di più!</a>
      </button>
    </div>

    <div id="experience col-12 ">
      <p class="fs-1 mt-5">Esperienze</p>
      <p class="fs-3">
        Ho frequentato un corso intensivo di programmazione Web della durata di
        700 ore, che ha posto particolare enfasi sia sullo sviluppo Front-end
        che sullo sviluppo Back-end. Ho concluso il corso con la realizzazione
        di un progetto finale della durata di 4 settimane, sviluppato in team,
        che consisteva in una web-app per il servizio di food delivery. Durante
        il progetto finale ho affinato le mie abilità pratiche e le conoscenze
        acquisite durante il corso, aumentando anche le mie skill di lavoro in
        team.
      </p>
    </div>
    <div id="about col-12 ">
      <p class="fs-1 mt-5">Progetti</p>
      <p class="fs-3">Dai un'occhiata ai progetti a cui ho lavorato</p>

      <Project
        v-for="project in projectsJs"
        :thumb="project.thumb"
        :projectTitle="project.projectTitle"
        :description="project.description"
        :technologies="project.technologies"
      />
    </div>
    <div id="about col-12 ">
      <p class="fs-1 mt-5">Contatti</p>
      <p class="fs-3">
        Sono a tua disposizione per qualsiasi domanda o ulteriori dettagli sul
        mio lavoro!
      </p>
      <button class="button-74">
        <a class="link-nav" href="mailto:valentina.webdev@gmail.com"
          >Scrivimi</a
        >
      </button>
    </div>
  </section>

  <div class="col-2"></div>
</template>
