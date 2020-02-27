<template>
  <div class="home p-3">
    <div class="row">
      <div class="col col-4"></div>
      <div class="col col-4">
        <SignUpForm></SignUpForm>
      </div>
      <div class="col col-4"></div>
    </div>

  </div>
</template>

<script lang="js">
import SignUpForm from '@/components/SignUp'

export default {
  name: 'signUp',
  components: {
    SignUpForm
  }
}
</script>
