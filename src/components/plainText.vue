<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Alandarådsnämnden
          </h1>
          <h2 class="subtitle">
            Redigera innehållet på Arlanda skärmen. <br />
            För "enkelt text-scriptet"
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
    <div class="container">
    <div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-warning">
          <p class="title">Positionering</p>
          <b-field label="(X,Y) - Koordinater">
            <b-input
            v-model="data.x"
            placeholder="X-Position"
             rounded
             minlength="1"
             maxlength="2"
             ></b-input>
        </b-field>
        <b-field>
            <b-input
             v-model="data.y"
             placeholder="Y-Position"
             rounded
             minlength="1"
             maxlength="2"
             ></b-input>
        </b-field>
        <P>
          OBS: ENDAST HELTAL! <br />
          (0,0) till (10,62)
        </P>
        </article>
        <article class="tile is-child notification is-danger">
          <p class="title">Centrering</p>
          <b-field>
            <b-select
                v-model="data.alignment"
                placeholder="Centrering"
                expanded>
                <option value="left">Vänster</option>
                <option value="right">Höger</option>
                <option value="center">Mitten</option>
            </b-select>
        </b-field>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <p class="title">Text</p>
          <b-field>
            <b-input style="text-align:center;" v-model="data.text" type="textarea"
            minlength="0"
            maxlength="50"
            placeholder="Text">
          </b-input>
          </b-field>
        </article>
      </div>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-success">
      <div class="content">
        <p class="title">Hur man gör</p>
        <p class="subtitle">Ändra textens position med koordinaterna. <br /> Ändra centrering. <br /> Ändra text. <br /> Klicka sedan på spara.</p>
        <div class="content">
        </div>
      </div>
    </article>
  </div>
</div>
<a @click="post()" class="button is-link is-rounded">Spara text</a>
</div>
</section>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      data: {
        text: '',
        x: 0,
        y: 0,
        alignment: ''
      }
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
      this.data.x = parseInt(this.data.x)
      this.data.y = parseInt(this.data.y)
      firebase.database().ref('screen/simpleText').set(this.data).then(
        (onResolve) => {
          this.toast(0, 'Texten uppdaterades!')
        }, (onError) => {
          this.toast(1, `Något gick snett.. <BR /> FEL: <BR />` + onError)
        })
    }
  },
  created () {
    const loadingComponent = this.$loading.open()
    firebase.database().ref('screen/simpleText').once('value').then((snapshot) => {
      this.data.text = snapshot.val().text
      this.data.y = snapshot.val().y
      this.data.x = snapshot.val().x
      this.data.alignment = snapshot.val().alignment
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
