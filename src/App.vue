<template>
  <div>
    <nav class="navbar is-transparent container" role="navigation" aria-label="dropdown navigation">
      <div class="navbar-brand">
        <button class="button navbar-burger" @click="navbarBtn()" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <p class="navbar-item">
            {{rightNow}} {{script}}
          </p>
        </div>
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
import firebase from 'firebase'
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    script: '',
    rightNow: 'Just nu visas: '
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
          {text: 'Avancerade script', link: '/advanced'},
          {text: 'Enkla script', link: '/simple'}
        ]
      }
      return menu
    },
    userAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    navbarBtn () {
      // Get all "navbar-burger" elements
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target
          var $target = document.getElementById(target)
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      }
    }
  },
  created () {
    firebase.database().ref('screen/namer/name').once('value').then((snapshot) => {
      var script2 = ''
      if (script2 === 'script/simplText.py') {
        this.script = 'Enkel text'
      } else if (script2 === 'script/kolektivtrafik.py') {
        this.script = 'Lokaltrafik'
      } else if (script2 === 'script/examples1.py') {
        this.script = 'Flyglogga'
      } else {
        this.script = ''
        this.rightNow = ''
      }
    })
  }
}
</script>
