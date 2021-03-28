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
        <q-list dense class="fit q-pa-md q-my-xl" style="max-width: 600px">
          <q-card class="my-card">
            <q-card-section>
              <div class="text-bold text-h5 text-center">Our Changing Planet</div>
            </q-card-section>
            <q-card-section>
              <div class="row items-center justify-around">
                <div class="text-bold text-positive text-h6">R$1300</div>
                <div><q-btn color="deep-orange" dense class="q-px-md" label="VER ROTAS" @click="onViagens(item)" /></div>
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

export default {
  name: "PageOrçamento",
  data() {
    return {
      orcamento: 500
    }
  },
  methods: {
    onViagens(item) {
      if (this.currentUser) {

        this.$store.dispatch("salvarInteresses", item)
        this.$router.replace({ name: 'rotas'})

      } else {

        this.login()

      }

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
      err: "err",
      tags: "tags",
    }),
  },
  mounted() {
  },
};
</script>
