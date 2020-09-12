<template>
<MaLayout title="MeetAll">

<!-- <header class="container has-text-centered ma-header">

  <h1 class="title has-text-weight-normal">
    MeetALL, the first ever <br />
    <strong class="has-text-weight-semibold">Online Meeting Translation + Transcript Tool</strong><br />
    Translate ALL online meetings into<br />
    ALL languages for ALL users.
  </h1>

</header> -->

<header class="container header" id="ma-home-header">
  <div class="columns">
    <div class="column is-half">
       <b-carousel class="ma-header-carousel"
        :pause-info="false"
        :arrow="false"
        :indicator-inside="false">
          <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section :class="`hero is-medium is-${carousel.color}`">
                    <div class="hero-body has-text-centered">
                        <h1 class="title">{{carousel.text}}</h1>
                    </div>
                </section>
            </b-carousel-item>
        </b-carousel>
    </div>
    <div class="column is-half">
      <h1 class="title mb-6">Online Meeting  <br />Live Translate + Transcribe</h1>
      <p class="subtitle mt-2 ma-header-subtitle has-text-black" style="padding-right: 5rem; margin-bottom: 40px;">
        Translate <span class="ma-hl-all">ALL</span> online meetings into <span class="ma-hl-all">ALL</span> languages for <span class="ma-hl-all">ALL</span> industry users. 
        Save <span class="ma-hl-all">ALL</span> meeting transcripts in your account for immediate review.
      </p>
      <button class="button is-primary ma-btn-get-started">
        Get Started
      </button>
    </div>
  </div>
</header>

<section class="container section" id="ma-home-intro">
  <div class="columns">
    <div class="column is-half has-text-centered">
      <h2 class="subtitle has-text-black">2 steps to</h2>
      <g-image immediate style="width: 370px;"
                src="~/images/meetall-all-large.svg" 
                alt="MeetAll ALL large text"
                width="370"/>
      <b-button class="ma-btn-lang-dropdown mt-5" icon-right="chevron-down"
      size="is-large" expanded>
          <span class="ma-btn-lang-dropdown-txt">More than 100 Languages</span>
        </b-button>
      <p class="is-size-7 has-text-weight-medium">* The number of languages is subject to change</p>
    </div>
    <div class="column is-half">
      <h2 class="subtitle has-text-black mb-1 mt-6">Open your meeting software</h2>
      <p class="has-text-weight-medium">Connect with <span class="ma-hl-all">ALL</span> online meeting software, <br />
including Zoom, Webex, Google Meet, Skype, etc.</p>
      <h2 class="subtitle has-text-black mb-1 mt-5">Open MeetALL</h2>
      <p class="has-text-weight-medium">From MeetALL desktop app / website, follow 
auto navigation, start / join in a few seconds.</p>
    </div>
  </div>
</section>

</MaLayout>
</template>

<script>
import Skills from '~/components/Skills'
// import Layout from '~/layouts/Default.vue'
import MaLayout from '~/layouts/MaDefault.vue'

export default {
  data() {
    return {
      dropdown: false,
      activeStep: 0,
      carousels: [
                { text: 'Slide 1', color: 'primary' },
                { text: 'Slide 2', color: 'info' },
                { text: 'Slide 3', color: 'success' },
                { text: 'Slide 4', color: 'warning' },
                { text: 'Slide 5', color: 'danger' }
            ]
    }
  },
  components: {
    // Layout,
    Skills,
    MaLayout,
  }
}
</script>

<style lang="scss">
$dark: #646464;
$primary: #327bf9;

.ma-header-carousel {
  margin-left: 50px;
  margin-top: 3rem;
}
.ma-header-subtitle {
  margin-top: 4rem;
}
.ma-btn-get-started {
  width: 250px;
  height: 40px;
}

button.ma-btn-lang-dropdown {
  color: $dark;
  border-color: transparent;
  height: 40px;
  .ma-btn-lang-dropdown-txt {
    margin-top: -1rem;;
  }
  .icon {
    color: $primary;
  }
  
}

@media screen and (max-width: 480px) {
  .ma-header-carousel {
    margin-top: 0;
    margin-left: 0;
  }
}
</style>