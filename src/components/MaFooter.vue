<template>
  <footer class="ma-footer-wrap footer">
    <nav class="ma-footer level container">
      <div class="level-left">
            <g-image immediate style="width: 25px;" class="level-item"
                src="~/images/meetall-logo.svg" 
                alt="MeetAll Logo"
                width="50"/>

        <b-dropdown aria-role="list"
          v-model="language"
          position="is-top-right">
          <button class="button lang-dropdown" slot="trigger" slot-scope="{ active }">
            <div class="is-pulled-left">
              <template v-if="language == 'English'">
                  <span>English</span>
              </template>
              <template v-else>
                  <span>Chinese</span>
              </template>
            </div>
            <div class="is-pulled-right">
            <b-icon :icon="active ? 'chevron-up' : 'chevron-down'"></b-icon>

            </div>
        </button>
            <b-dropdown-item aria-role="listitem" :value="'English'">
              English
            </b-dropdown-item>
            <b-dropdown-item aria-role="listitem" :value="'Chinese'">
              Chinese
            </b-dropdown-item>
        </b-dropdown>

        <g-link to="/" class="level-item">
          MeetAll
        </g-link>
        <g-link to="/translate/" class="level-item">
          Privacy
        </g-link>
        <g-link to="/plan-and-pricing/" class="level-item">
          Subscribe
        </g-link>
        <g-link to="/blog-price/" class="level-item">
          Contact Us
        </g-link>
      </div>
      <div class="level-right">
        <b-icon style="padding: 0;" class="level-item" type="is-light" icon="facebook" custom-size="mdi-24px">
        </b-icon>
        <b-icon style="padding: 0;" class="level-item" type="is-light" icon="instagram" custom-size="mdi-24px">
        </b-icon>
        <b-icon style="padding: 0;" class="level-item" type="is-light" icon="youtube" custom-size="mdi-24px">
        </b-icon>
        <b-icon style="padding: 0;" class="level-item" type="is-light" icon="twitter" custom-size="mdi-24px">
        </b-icon>
      </div>
      <template slot="start">

      </template>

      <template slot="end">
        <b-icon style="padding: 0;" type="is-light" icon="twitter" custom-size="mdi-24px">
        </b-icon>
      </template>
    </nav>

  </footer>
</template>



<script>
  export default {
    components: {
      // TopCard
    },
    name: 'MaFooter',
    data() {
      return {
        message: 'Try change me!',
        popup: false,
        language: 'English'
      }
    },
    methods: {
      onClick() {
        // this.popup = !this.popup;
        // console.log(this.popup);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ma-footer-wrap {
    // border-top: 1px solid #ececec;
    background-color: #f4f4f4;
    padding-bottom: 3rem;
    .dropdown {

      margin: 0 2rem 0 1rem;
    }
    .lang-dropdown {
      width: 280px;
      height: 20px;
      color: #4c4c4c;
      font-weight: 500;
      font-size: 0.8rem;
      background-color: #FFF;
      border-color: #d3d3d3;
      display: flex;
      justify-content: space-between;
    }
    a.level-item {
      font-size: 0.8rem;
      font-weight: 500;
      color: #1e1e1e;
      margin-right: 1rem;
    }
  }


  a.navbar-item {
    font-size: 11px;
  }

  .navbar-start .navbar-item {
    padding: 0.5rem 15px;
  }

  .navbar-end .navbar-item {
    padding: 0.5rem 10px;

  }

  .navbar-end .slash {
    display: flex;
    align-items: center;
  }
</style>