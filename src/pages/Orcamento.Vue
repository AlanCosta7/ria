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
        <q-btn color="primary" icon="check" label="Salvar" @click="onSalvar" />
      </div>
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
    onSelectInteresse(item) {
      if (this.interesses.includes(item)) {
        var index = this.interesses.indexOf(item)
        this.interesses.splice(index, 1)
      } else {
        this.interesses.push(item)
      }
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
  mounted() {},
};
</script>
