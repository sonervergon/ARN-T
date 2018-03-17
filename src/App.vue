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
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#/simple">
              Enkla script
            </a>
            <div class="navbar-dropdown is-boxed">
              <a v-for="item in items"
              :key="item.text"
              class="navbar-item"
              >
              <router-link class="navbar-item" :to="item.link">
                {{item.text}}
              </router-link>
            </a>
          </div>
        </div>
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
    drawer: null,
    menu: [
      {text: 'Hem', link: '/'},
      {text: 'Översikt', link: '/overview'}
    ],
    items: [
      {icon: 'home', text: 'Text', link: '/simple/plain-text'}
    ]
  }),
  props: {
    source: String
  }
}
</script>
