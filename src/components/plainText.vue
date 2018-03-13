<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Alandaskärmsrådet
          </h1>
          <h2 class="subtitle">
            Redigera innehållet på Arlanda skärmen.
          </h2>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <b-field>
            <b-input v-model="text" type="textarea"
            minlength="0"
            maxlength="50"
            placeholder="Text">
          </b-input>
        </b-field>
        <a @click="post()" class="button is-link is-rounded">Updatera text</a>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    post () {
      firebase.database().ref('screen/').set(this.text).then(
        (onResolve) => {
          this.$toast.open({
            duration: 3000,
            message: 'Texten uppdaterades!',
            position: 'is-bottom',
            type: 'is-success'
          })
        }, (onError) => {
          this.$toast.open({
            duration: 5000,
            message: `Något gick snett.. <BR /> FEL: <BR />` + onError,
            position: 'is-bottom',
            type: 'is-danger'
          })
        })
    }
  },
  created () {
    const loadingComponent = this.$loading.open()
    firebase.database().ref('screen/').once('value').then((snapshot) => {
      this.text = snapshot.val()
      loadingComponent.close()
    })
  }
}
</script>
  <style scoped>
  .container {
    text-align: center;
  }
  </style>
