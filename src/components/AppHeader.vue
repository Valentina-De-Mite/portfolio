<script>
import themeChanger from "../theme.js";

export default {
  name: "AppHeader",
  data() {
    return {
      themeChanger: null,
    };
  },
  methods: {
    darkThemeSwitch() {
      // this.themeChanger._darkThemeSwitch();
      const element = document.body;
      if (element.dataset.bsTheme == "light") {
        element.dataset.bsTheme = "dark";
        document.getElementById("logo-light").classList.add("d-none");
        document.getElementById("logo-dark").classList.remove("d-none");
        // img.src = "../assets/images/logo dark.png";
        // img.parentElement.append(img);
      } else {
        element.dataset.bsTheme = "light";
        document.getElementById("logo-dark").classList.add("d-none");
        document.getElementById("logo-light").classList.remove("d-none");
      }
    },
  },

  created() {
    // this.themeChanger = new themeChanger();
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg p-3 shadow">
      <div class="container">
        <div class="col-4 d-flex justify-content-start">
          <img
            id="logo-light"
            class="w-25 logo"
            src="../assets/images/logo-dark.png"
            alt=""
          />
          <img
            id="logo-dark"
            class="w-25 logo d-none"
            src="../assets/images/logo-light.png"
            alt=""
          />
        </div>

        <div class="col-4 d-flex justify-content-center gap-4">
          <a href=""> Esperienze </a>
          <!-- <RouterLink to="/projects" class="nav-link text-white">
          Projects
        </RouterLink> -->
          <a href=""> Progetti </a>
          <a href=""> Contatti </a>
          <a href=""> CV </a>
          <div class="col-4 d-flex justify-content-end">
            <div class="theme-switch-wrapper">
              <label class="theme-switch" for="checkbox">
                <input @click="darkThemeSwitch" type="checkbox" id="checkbox" />
                <div class="slider round"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
@import "../scss/partials/variables.scss";
a {
  text-decoration: none;
  color: $color-primary;
  font-weight: 600;
}
.logo:hover {
  transform: scale(1.1);
}

.theme-switch-wrapper {
  display: flex;
  align-items: center;

  em {
    margin-left: 10px;
    font-size: 1rem;
  }
}
.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}

.theme-switch input {
  display: none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: 0.4s;
  width: 26px;
}

input:checked + .slider {
  background-color: $color-primary;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.navbar {
  z-index: 99;
}
</style>
