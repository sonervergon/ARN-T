<template>
  <div class="container">
</div>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      {icon: 'home', text: 'Hem', link: '/simple/plain-text'},
      {icon: 'event', text: 'Events', link: '/start/event'},
      {icon: 'favorite_border', text: 'Mottagning', link: '/start/mottagning'},
      {icon: 'star_border', text: 'Jubileum 2019', link: '/start/jubel'},
      {icon: 'help', text: 'Kontakt', link: '/start/kontakt'}
    ]
  }),
  props: {
    source: String
  }
}
</script>
