<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Logga in
          </h1>
        </div>
        <div class="section">
        <div class="container">
          <b-field label="Email">
            <b-input v-model="email" type="email"
                maxlength="30">
            </b-input>
        </b-field>
        <b-field label="Lösenord">
            <b-input v-model="password" type="password"
                password-reveal>
            </b-input>
        </b-field>
        <a @click="onSignIn()" class="button is-link is-rounded">Logga in</a>
        </div>
        </div>
      </div>
    </section>
    <section>
    </section>
  </div>
</template>
<script>
// import firebase from 'firebase'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignIn () {
      const loadingComponent = this.$loading.open()
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      loadingComponent.close()
    }
  }
}
</script>
