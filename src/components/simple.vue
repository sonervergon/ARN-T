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
                <option value="simple/simpleText.py">Enkel text</option>
                <option value="simple/examples1.py">Flyglogga</option>
              </b-select>
            </b-field>
            <a @click="post()" class="button is-link is-rounded">Spara</a>
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
  data () {
    return {
      data: {
        name: '',
        index: 0
      },
      menu: [
        {text: 'Enkel text', link: '/simple/plain-text'}
      ]
    }
  },
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
    post () {
      firebase.database().ref('screen/namer').set(this.data).then(
        (onResolve) => {
          this.toast(0, 'Scriptet uppdaterades!')
        }, (onError) => {
          this.toast(1, `Något gick snett.. <BR /> FEL: <BR />` + onError)
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
