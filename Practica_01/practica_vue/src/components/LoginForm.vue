//HTML
<template>
    <section>
        <header>
            <div class="logo"></div>
        </header>
        <section class="col">
        <h3>Hello</h3>

        <div class="container">
            <p>User</p>
            <input
                type="text"
                placeholder="User"
                class="form-control"
            />
            <br/>
        </div>

        <div class="mb-2">
            <p>Password</p>
            <input
                type="password"
                placeholder=""
                class="form-control"
            />
        </div>
        <p>Forgot password?</p>
        <input
                type="button"
                placeholder=""
                class="btn btn-green btn-block"
        />
        <br/>

        <input type="checkbox" />
        <div class="SocialMedia">
            <h5>Social Media</h5>
            <div class="logoBlue Face"></div>
            <div class="logoBlue Twitter"></div>
        </div>
        </section>
    </section>
</template>

//SCRIPT
<script lang="js">
export default {
  name: 'LoginForm'
}
</script>

//CSS
<style lang="scss">
</style>
