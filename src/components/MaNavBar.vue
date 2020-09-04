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
              <g-link class="navbar-item">
                        Login
              </g-link>
            <div class="slash"> / </div>
              <g-link class="navbar-item">
                        Sign up
              </g-link>

        </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'MaNavBar',
  data () {
    return {
      message: 'Try change me!'
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    }
  }
}
</script>

<style>
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