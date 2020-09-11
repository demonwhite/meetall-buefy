<template>
<MaLayout title="MeetAll">
<header class="container has-text-centered ma-header">

  <h1 class="title has-text-weight-normal">
    MeetALL, the first ever <br />
    <strong class="has-text-weight-semibold">Online Meeting Translation + Transcript Tool</strong><br />
    Translate ALL online meetings into<br />
    ALL languages for ALL users.
  </h1>

</header>
<div class="container">
    <h1 class="title">MeetAll</h1>
    <h2 class="subtitle">Home Page</h2>
  </div>
  <hr />
  <br />
  <div class="container">
    <h1 class="title">Test</h1>
  <b-steps
     v-model="activeStep"
  >
    <b-step-item label="Installation" icon="npm">
      <ul>
        <li> Install gridsome by running <i> npm install -g gridsome </i> </li>
        <li> Then clone this repo by running <i> git clone https://github.com/FriendlyUser/gridsome-starter-buefy.git</i> </li>
      </ul>
    </b-step-item>
    <b-step-item label="Configuration" icon="web">
      <ul>
        <li> Update <i>gridsome.config.js</i> with unique site name and hosting details. </li>
        <li> Change formspree to use your personal email address. </li>
      </ul>
    </b-step-item>
    <b-step-item label="Deployment" icon="azure">
      Deployment can be handled using azure pipelines, additionally considering adding more customization.
    </b-step-item>
  </b-steps>
  </div>
  <div class="container">
    <section>
     
    </section>
  </div>
  <footer class="footer">
   <h1 class="title">Footer</h1>
  <div class="content has-text-centered">
    <p>
      <strong>Gridsome Starter Buefy</strong> by <a href="https://FriendlyUser.github.io">David Li</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>
</MaLayout>
</template>

<script>
import Skills from '~/components/Skills'
// import Layout from '~/layouts/Default.vue'
import MaLayout from '~/layouts/MaDefault.vue'

export default {
  data() {
    return {
      activeStep: 0,
    }
  },
  components: {
    // Layout,
    Skills,
    MaLayout,
  }
}
</script>

<style>
.ma-header {
  margin-top: 5rem;
}
</style>