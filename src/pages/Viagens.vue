<template>
  <q-page class="bg-grey-2">
    <q-card flat class="bg-grey-2" style="width: 100vw">
      <div
        class="full-width bg-white text-h2 text-bold row wrap justify-center items-start content-center relative-position"
        style="height: 150px; border-radius: 0 0 30px 30px"
      >
        Viagens
      </div>
      <div class="fit row justify-center">
        <div v-show="listPackages.length == 0" class="q-mt-xl">
          <q-img
            src="../assets/empty.svg"
            :ratio="1"
            width="90vw"
            style="max-width: 400px"
            spinner-color="primary"
            spinner-size="82px"
          />
        </div>
        <q-list v-show="listPackages.length > 0" dense class="fit q-pa-md q-my-xl" style="max-width: 600px" v-for="(item, index) in listPackages" :key="index">
          <q-card>
              <q-img
                :src="item.image"
                :ratio="20/10"
                width="100%"
                spinner-color="primary"
                spinner-size="82px"
              >

              <template v-slot:error>
                <div class="absolute-full flex flex-center bg-negative text-white">
                  Imagem não encontrada
                </div>
              </template>
              </q-img>
            <q-card-section>
              <div class="text-bold text-h5 text-center">{{item.name}}</div>
            </q-card-section>
            <q-card-section>
              <div class="row width-full items-center justify-around">
                <div class="text-bold col-6 text-positive text-h6">R${{item.price/100}}</div>
                <div class="col-6"><q-btn color="deep-orange" class="q-px-md" dense label="VER ROTAS" @click="onViagens(item)" /></div>
              </div>
            </q-card-section>
          </q-card>
        </q-list>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import { LocalStorage } from 'quasar'

export default {
  name: "PageOrçamento",
  data() {
    return {
      interesses: [],
      orcamento: null
    }
  },
  methods: {
    onInteresses() {
      this.$router.replace({ name: 'interesses'})
    },
    onOrcamento() {
      this.$router.replace({ name: 'orcamento'})
    },
    onViagens(item) {

      this.$store.commit("setSelectViagem",item._id)
      this.$router.replace({ name: 'rotas', params: { id: item._id }})

    },
    login() {
        this.$router.replace({ name: 'login'})
    },
    onSalvar() {
      this.$store.dispatch("salvarInteresses", this.interesses);
    }
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser",
      listPackages: "listPackages",
      err: "err",
      tags: "tags",
    }),
  },
  mounted() {
    this.interesses = LocalStorage.getItem('interesses')
    this.orcamento = LocalStorage.getItem('orcamento')
    if (!this.interesses) {
      this.onInteresses()

    } else if (!this.orcamento) {
      this.onOrcamento()
    }

    if(this.currentUser) {
      this.$store.dispatch("getPackagesAuth")
    } else {

      var value = {
        tags: this.interesses,
        budget: this.orcamento
      }
      this.$store.dispatch("getPackages", value)

    }

  },
};
</script>
