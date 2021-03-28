<template>
  <q-page class="bg-grey-2">
    <q-card flat class="bg-grey-2" style="width: 100vw">
      <div
        class="full-width relative-position"
        style="max-height: 180px; border-radius: 0 0 30px 30px"
      >
        <q-img
          :src="listPoints.image"
          width="100%"
          height="180px"
          spinner-color="primary"
          spinner-size="82px"
          style="border-radius: 0 0 30px 30px"
        >
          <div class="absolute-full text-h4 text-bold flex flex-center">
            {{listPoints.name}}
          </div>

      <template v-slot:error>
        <div class="absolute-full text-h4 text-bold flex flex-center bg-white text-black">
          {{listPoints.name}}
        </div>
      </template>
        </q-img>

      </div>
      <div class="width-full row justify-center q-ma-md">
        <q-btn color="deep-orange" flat icon="share" label="Compartilhar" @click="onShare" />

      </div>
      <div class="row width-full justify-center q-ma-md">
        <q-timeline color="deep-orange" style="max-width: 600px">
          <div v-for="(item, index) in listPoints.points" :key="index">
          <q-timeline-entry
            :title="item.title"
            :body="item.description"
            :subtitle="item.date"
          >
          </q-timeline-entry>
          </div>
        </q-timeline>
      </div>
    </q-card>
      <div class="width-full q-gutter-md row justify-center q-pa-md" >
        <q-btn color="accent" outline icon="keyboard_arrow_left" label="Voltar" @click="onVoltar" />
        <q-btn color="accent" icon="local_atm" label="Comprar" @click="onSalvar" />
      </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import { openURL } from 'quasar'

export default {
  name: "PageIndex",
  data() {
    return {
      interesses: [],
    };
  },
  methods: {
    onSelectInteresse(item) {
      if (this.interesses.includes(item)) {
        var index = this.interesses.indexOf(item);
        this.interesses.splice(index, 1);
      } else {
        this.interesses.push(item);
      }
    },
    onVoltar() {
      this.$router.push({ name: 'viagens'})
    },
    onSalvar() {
      if (this.currentUser) {
        this.$store.dispatch("salvarInteresses", this.interesses);

      } else {
        this.login()
      }
    },
    login() {
      this.$router.push({ name: 'login'})
    },
    onShare() {

      if(window) {
        var url = window.location.href
        if (window.navigator.share !== undefined) {
          window.navigator.share({
            title: this.listPoints.name,
            url: url,
          })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
        } else {
          openURL(`https://api.whatsapp.com/send?text=${url}`);
        }
      }

    }
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser",
      selectViagem: "selectViagem",
      listPoints: "listPoints",
      err: "err"
    }),
  },
  mounted() {
      var id = this.$route.params.id
      this.$store.commit("setSelectViagem", id)
      this.$store.dispatch("getPoints", this.selectViagem)
  },
};
</script>
