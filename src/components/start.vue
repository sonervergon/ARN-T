<template>
  <div class="section">
    <nav class="level content">
      <div class="level-item has-text-centered holder">
        <div>
          <p class="title">Välkommen</p>
          <p>
            Här kan du redigera det som visas på Arlandaskärmen.
          </p>
          <p class="sub-title">
            Det är ganska simpelt.
          </p>
        </div>
      </div>
    </nav>
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
<style>
.holder {
  transform: translateY(100%);
  top: 100%;
  position: relative;
}
</style>
