<template>
<transition name="fade" appear>
  <div class="ma-top-card box">
          <button class="ma-top-card-close-btn button level-item" @click="$emit('close-ma-top-card')">
                <b-icon style="padding: 0;"
                    type="is-light" 
                    icon="window-close"
                    custom-size="mdi-24px">
                    </b-icon>
          </button>
        
        <b-menu class="ma-top-card-list">
            <b-menu-list>
                <g-link 
                class="b-menu-item" 
                to="/start/">
                    <strong>START</strong> ALL Online Meeting Translation + Transcript
                </g-link>
                <g-link 
                class="b-menu-item" 
                to="/join/">
                    <strong>JOIN</strong> ALL Online Meeting Translation + Transcript
                </g-link>
            </b-menu-list>
        </b-menu>

        <hr class="hr my-3">

        <b-menu class="ma-top-card-list">
            <b-menu-list>
                <g-link 
                class="b-menu-item" 
                to="/security/">
                    Security Questions
                </g-link>
                <g-link 
                class="b-menu-item" 
                to="/privacy/">
                    Privacy Terms
                </g-link>
                <g-link 
                class="b-menu-item" 
                to="/subscribe/">
                    Subscribe
                </g-link>
                <g-link 
                class="b-menu-item" 
                to="/contact-us/">
                    Contact us
                </g-link>
            </b-menu-list>
        </b-menu>
          
      </div>

</transition>
</template>

<script>

export default {
  name: 'TopCard',
  props: {
      showText: {
          type: String,
          default: "Kent Chang"
      },
  },
  data () {
    return {
      message: 'Try change me!',
    }
  },
  methods: {
    onClick () {
      console.log('clicked burger');
    }
  }
}
</script>

<style lang="scss">
    .ma-top-card {
        position: absolute;
        min-width: 100px;
        min-height: 200px;
        width: 200px;
        right: 0;
        top: .5em;
        padding: 1.5rem !important;
        padding-top: 3rem !important;
        background-color: rgba(200, 0, 0, .2);
        border-radius: 0 !important;
        box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02) !important;

        .ma-top-card-close-btn {
            position: absolute;
            top: .3rem;
            right: .3rem;
            border-color: transparent;
        }

        .ma-top-card-list {
            // margin-top: 2rem;
        }
    }
    
</style>