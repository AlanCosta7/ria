<template>
  <q-page class="bg-grey-2">
    <q-card flat class="bg-grey-2" style="max-width: 400px; width: 100vw">
      <div
        class="full-width bg-white text-h2 text-bold row wrap justify-center items-start content-center relative-position"
        style="height: 300px; border-radius: 0 0 30px 30px"
      >
        Orçamento
        <div class="text-positive q-mt-md">R${{orcamento}}</div>
      </div>
    <q-list dense class="fit q-pa-md q-my-xl">
        <q-item>
          <q-item-section avatar>
            <q-icon color="accent" size="xl" name="local_atm" />
          </q-item-section>
          <q-item-section>
            <q-slider
              class="width-full"
              v-model="orcamento"
              :min="500"
              :max="20000"
              :step="100"
              color="accent"
            />
          </q-item-section>
        </q-item>
    </q-list>
    </q-card>
      <div class="width-full row justify-center absolute-bottom q-my-xl">
        <q-btn color="accent" rounded class="q-px-xl" icon-right="chevron_right"  label="Próximo" @click="onProximo" />
      </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import { LocalStorage } from 'quasar'

export default {
  name: "PageOrçamento",
  data() {
    return {
      orcamento: 500
    }
  },
  methods: {
    onProximo() {

      if (this.currentUser) {

        this.$store.dispatch("salvarInteresses", this.orcamento)
        this.$router.replace({ name: 'viagens'})

      } else {

        LocalStorage.set('orcamento', this.orcamento)
        this.$router.replace({ name: 'viagens'})

      }

    }
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser",
      err: "err"
    }),
  },
  mounted() {},
};
</script>
