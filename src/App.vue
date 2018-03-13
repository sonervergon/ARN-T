<template>
  <div>
    <nav class="navbar is-transparent container">
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="/">
            Hem
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
</div>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      {icon: 'home', text: 'Text', link: '/simple/plain-text'}
    ]
  }),
  props: {
    source: String
  }
}
</script>
