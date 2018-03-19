<template>
  <div>
    <nav class="navbar is-transparent container">
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item"
          v-for="item in menu"
          :key="item.text"
          route
          :to="item.link"
          >
          <router-link class="navbar-item" :to="item.link">
            {{item.text}}
          </router-link>
          </a>
      </div>
    </div>
  </nav>
  <router-view />
  <footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>Arlandarådsnämnden</strong> by <a href="http://vergon.se">Vergon Design</a>.
      </p>
    </div>
  </div>
</footer>
</div>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null
  }),
  props: {
    source: String
  },
  computed: {
    menu () {
      let menu = [
        {text: 'Logga in', link: '/login'}
      ]
      if (this.userAuthenticated) {
        menu = [
          {text: 'Hem', link: '/'},
          {text: 'Översikt', link: '/overview'},
          {text: 'Enkla script', link: '/simple'}
        ]
      }
      return menu
    },
    userAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  }
}
</script>
