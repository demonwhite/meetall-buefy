<template>
<div>
  <MaNavBar />
  <transition name="fade" appear>
    <main> <!-- a wrapper for slot is needed -->
      <slot /> <!-- the content -->
    </main>
  </transition>
</div>
</template>

<script>
import Navbar from '~/components/Navbar'
import MaNavBar from '~/components/MaNavBar'
export default {
  components: {
    Navbar,
    MaNavBar
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