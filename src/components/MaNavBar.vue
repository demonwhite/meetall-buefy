<template>
  <div class="ma-navbar-wrap">
    <b-navbar class="ma-navbar container">
      <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <g-image immediate style="width: 50px;"
                src="~/images/meetall-logo.svg" 
                alt="MeetAll Logo"
                width="50"/>
            </b-navbar-item>
      </template>
      <template slot="start">
              <g-link to="/" class="navbar-item">
                MeetAll
              </g-link>
              <g-link to="/translate/" class="navbar-item">
                Translator
              </g-link>
              <g-link to="/plan-and-pricing/" class="navbar-item">
                Pricing
              </g-link>
              <g-link to="/blog-price/" class="navbar-item">
                Download
              </g-link>
        </template>
        
        <template slot="end">
              <hr class="is-hidden-tablet-only my-3">
              <g-link to="/login/" class="navbar-item">
                        Start
              </g-link>
              <g-link to="/sign-up/" class="navbar-item">
                        Join
              </g-link>
              <div class="navbar-item">
                <b-button tag="router-link"
                  to="/login" inverted
                  type="is-primary">
                  Login
              </b-button>
              </div>
              <div class="navbar-item sign-up" >
                <b-button tag="router-link"
                  to="/sing-up"
                  type="is-primary">
                  Sign Up
              </b-button>
              </div>

        </template>
    </b-navbar>
    
  </div>
</template>



<script>
export default {
  components: {

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
    max-height: 50px !important;
    // width: auto;
    width: 100%;
    margin-right: 2em;
}
.navbar-start .navbar-item {
  padding: 0.5rem 15px;
}
.navbar-end {
  padding: 0.5rem;
}
.navbar-end .navbar-item {
  padding: 0.5rem 10px;

}


.navbar-end .sign-up .button{
  width: 100px;
  color: #FFF;
}

@media screen and (max-width: 480px) {
  .navbar-brand {
    padding: 1rem;
  }
  .navbar-start {
    margin-top: 1rem;
  }
 .navbar-end > .navbar-item {
   padding: 0.5rem ;
 }
}
</style>