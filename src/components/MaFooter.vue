<template>
  <div class="ma-footer-wrap">
    <b-navbar class="ma-footer container">
     
      <template slot="start">
              <g-link to="/" class="navbar-item">
                About MeetAll
              </g-link>
              <g-link to="/translate/" class="navbar-item">
                Privacy
              </g-link>
              <g-link to="/plan-and-pricing/" class="navbar-item">
                Subscribe
              </g-link>
              <g-link to="/blog-price/" class="navbar-item">
                Contact Us
              </g-link>
        </template>

        <template slot="end">
            <b-icon style="padding: 0;"
                    type="is-light" 
                    icon="twitter"
                    custom-size="mdi-24px">
                    </b-icon>
        </template>
    </b-navbar>
    
  </div>
</template>



<script>

export default {
  components: {
    // TopCard
  },
  name: 'MaFooter',
  data () {
    return {
      message: 'Try change me!',
      popup: false,
    }
  },
  methods: {
    onClick () {
      // this.popup = !this.popup;
      // console.log(this.popup);
    }
  }
}
</script>

<style lang="scss" scoped>

.ma-footer {
  border-top: 1px solid #ececec;
  margin-bottom: 3rem;
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