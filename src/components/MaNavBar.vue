<template>
  <div class="ma-navbar-wrap">
    <b-navbar class="ma-navbar container">
      <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <g-image immediate
                src="~/images/meet-all-logo.png" 
                alt="MeetAll Logo"
                width="180"/>
            </b-navbar-item>
      </template>
      <template slot="start">
              <g-link to="/" class="navbar-item">
                ALL Online Meeting <br />Translation + Transcript
              </g-link>
              <g-link to="/translate/" class="navbar-item">
                7/24 Translate <br />Text + Document
              </g-link>
              <g-link to="/plan-and-pricing/" class="navbar-item">
                      Plans + <br />Pricing
              </g-link>
              <g-link to="/blog-price/" class="navbar-item">
                      Download <br />for Mac / Pc
              </g-link>
        </template>

        <template slot="end">
              <g-link to="/login/" class="navbar-item">
                        Login
              </g-link>
            <div class="slash"> / </div>
              <g-link to="/sign-up/" class="navbar-item">
                        Sign up
              </g-link>
            <b-navbar-item type="div" @click="onClick">
                <b-icon style="margin: 0;"
                  type="is-light" 
                  icon="menu"
                  custom-size="mdi-24px">
                </b-icon>
            </b-navbar-item>
            <TopCard v-if="popup" 
                     v-on:close-ma-top-card="onClick" />
        </template>
    </b-navbar>
    
  </div>
</template>



<script>
import TopCard from '~/components/TopCard.vue'
export default {
  components: {
    TopCard
  },
  name: 'MaNavBar',
  data () {
    return {
      message: 'Try change me!',
      popup: false,
    }
  },
  methods: {
    onClick () {
      this.popup = !this.popup;
      console.log(this.popup);
    }
  }
}
</script>

<style lang="scss">
.navbar-brand .navbar-item {
  padding: 0;
  background-color: rgba(255, 255, 255, 0);
}
.navbar-item img {
    max-height: 38px !important;
    width: auto;
    margin-right: 2em;
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