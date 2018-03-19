<template>
  <div>
    <section>
      <div class="container">
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Vilket script vill du köra?
              </h1>
              <h2 class="subtitle">
                Välj nedan.
              </h2>
            </div>
            <div class="section">
              <b-field>
                <b-select
                v-model="data.name"
                placeholder="Centrering"
                expanded>
                <option value="script/kollektivtrafik.py">Lokaltrafik</option>
              </b-select>
            </b-field>
            <a @click="post('button')" class="button is-link is-rounded" v-bind:class="[button]" >Spara</a>
          </div>
          <div style="margin-bottom:20px;" class="container is-fluid">
            <h2 class="subtitle has-text-centered">
              Vilket skript vill du redigera?
              <br />
            </h2>
          </div>
          <nav class="level">
            <p v-for="item in menu"
            :key="item.text"
            route
            :to="item.link"
            class="level-item has-text-centered"
            >
            <router-link class="link is-info" :to="item.link">
              {{item.text}}
            </router-link>
          </p>
        </nav>
      </div>
    </section>
  </div>
</section>
<router-view></router-view>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  data: () => ({
    data: {
      name: '',
      index: 0
    },
    button: '',
    menu: [
      {text: 'Lokaltrafik', link: '/advanced/SL'}
    ]
  }),
  methods: {
    toast (error, message) {
      var code = ['is-success', 'is-danger']
      this.$toast.open({
        duration: 5000,
        message: message,
        position: 'is-bottom',
        type: code[error]
      })
    },
    post (button) {
      this.button = 'is-loading'
      firebase.database().ref('screen/namer').set(this.data).then(
        (onResolve) => {
          this.toast(0, 'Scriptet uppdaterades!')
          this.button = ''
        }, (onError) => {
          this.toast(1, `Något gick snett.. <BR /> FEL: <BR />` + onError)
          this.button = ''
        })
    }
  },
  created () {
    const loadingComponent = this.$loading.open()
    firebase.database().ref('screen/namer/name').once('value').then((snapshot) => {
      this.data.name = snapshot.val()
      loadingComponent.close()
    })
  }
}
</script>
