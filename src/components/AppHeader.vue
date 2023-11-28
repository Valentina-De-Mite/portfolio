<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <header class="pb-2">
    <nav class="navbar navbar-expand-lg p-3 shadow">
      <div class="container">
        <div class="col-4 d-flex justify-content-start">
          <img class="w-25 logo" src="../assets/images/logo light.png" alt="" />
        </div>

        <div class="col-4 d-flex justify-content-center gap-4">
          <a href=""> About </a>
          <a href=""> Experiences </a>
          <!-- <RouterLink to="/projects" class="nav-link text-white">
          Projects
        </RouterLink> -->
          <a href=""> Projects </a>
          <a href=""> Contact </a>
          <div class="col-4 d-flex justify-content-end">
            <div class="custom-checkbox">
              <input id="status" type="checkbox" name="status" />
              <label for="status">
                <div
                  class="status-switch"
                  data-unchecked="Off"
                  data-checked="On"
                ></div>
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

a:hover {
  border-bottom: 5px solid $color-primary;
}

/* The switch - the box around the slider */
// .switch {
//   position: relative;
//   display: inline-block;
//   width: 60px;
//   height: 34px;
// }

/* Hide default HTML checkbox */
// .switch input {
//   opacity: 0;
//   width: 0;
//   height: 0;
// }

// .slider.round {
//   border-radius: 34px;
// }

// .slider.round:before {
//   border-radius: 50%;
// }

/* The slider */
// .slider {
//   position: absolute;
//   cursor: pointer;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: #d92222;
//   -webkit-transition: 0.4s;
//   transition: 0.4s;
// }

// .slider:before {
//   position: absolute;
//   content: "";
//   height: 26px;
//   width: 26px;
//   left: 4px;
//   bottom: 4px;
//   background-color: rgb(0, 0, 0);
//   -webkit-transition: 0.4s;
//   transition: 0.4s;
// }

// input:checked + .slider {
//   background-color: #020202;
// }

// input:focus + .slider {
//   box-shadow: 0 0 1px #2196f3;
// }

// input:checked + .slider:before {
//   -webkit-transform: translateX(26px);
//   -ms-transform: translateX(26px);
//   transform: translateX(26px);
// }

.custom-checkbox {
  width: 100px;
  height: 30px;
  input#status {
    display: none;

    // Unchecked State
    + label {
      height: 100%;
      width: 100%;
      > .status-switch {
        cursor: pointer;
        width: 100%;
        height: 100%;
        position: relative;
        background-color: whitesmoke;
        color: violet;
        font-weight: 800;
        transition: all 0.5s ease;
        padding: 3px;
        border-radius: 10px;

        &:before,
        &:after {
          border-radius: 2px;
          height: calc(100% - 6px);
          width: calc(50% - 3px);
          display: flex;
          align-items: center;
          position: absolute;
          justify-content: center;
          transition: all 0.3s ease;
        }

        &:before {
          background-color: blue;
          color: whitesmoke;
          box-shadow: 0 0 4px 4px rgba(#000, 0.2);
          left: 3px;
          z-index: 10;
          content: attr(data-unchecked);
        }

        &:after {
          right: 0;
          content: attr(data-checked);
        }
      }
    }

    // Checked stae
    &:checked + label > .status-switch {
      background-color: #40c253;

      &:after {
        left: 0;
        content: attr(data-unchecked);
      }

      &:before {
        color: white;
        left: 50%;
        content: attr(data-checked);
      }
    }
  }
}
</style>
