<template>
<div>
  <MaNavBar />
  <transition name="fade" appear>
    <main> <!-- a wrapper for slot is needed -->
      <slot /> <!-- the content -->
    </main>
  </transition>
  <MaFooter />
</div>
</template>

<script>
import Navbar from '~/components/Navbar'
import MaNavBar from '~/components/MaNavBar'
import MaFooter from '~/components/MaFooter.vue'
export default {
  components: {
    Navbar,
    MaNavBar,
    MaFooter
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>