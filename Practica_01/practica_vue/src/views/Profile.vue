<template>
  <div class="home p-3">
    <div class="row">
      <div class="col col-4">
        <viewProfile></viewProfile>
      </div>
      <div class="col col-4">
        <about></about>
      </div>
      <div class="col col-4"></div>
    </div>

  </div>
</template>

<script lang="js">
import viewProfile from '@/components/viewProfile'
import about from '@/components/about'

export default {
  name: 'Profile',
  components: {
    viewProfile,
    about
  }
}
</script>
