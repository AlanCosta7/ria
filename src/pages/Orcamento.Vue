<template>
  <q-page class="bg-grey-2">
    <q-card flat class="bg-grey-2" style="width: 100vw">
      <div
        class="full-width bg-white text-h2 text-bold row wrap justify-center items-start content-center relative-position"
        style="height: 300px; border-radius: 0 0 30px 30px"
      >
        <div class="col-12 text-center">Orçamento</div>
        <div class="text-positive col-12 text-center q-mt-md">
          R${{ orcamento }}
        </div>
      </div>
      <div class="fit row justify-center">
        <q-list dense class="fit q-pa-md q-my-xl" style="max-width: 600px">
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
      </div>
    </q-card>
    <div class="width-full row justify-center q-py-xl">
      <q-btn
        color="accent"
        rounded
        class="q-px-xl"
        icon-right="chevron_right"
        label="Próximo"
        @click="onProximo"
      />
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import { LocalStorage } from "quasar";

export default {
  name: "PageOrçamento",
  data() {
    return {
      orcamento: 500,
    };
  },
  methods: {
    onProximo() {
      if (this.currentUser) {
        var budget = this.orcamento*100;
        this.$store
          .dispatch("salvarInteresses", { budget: budget })
          .then((result) => {
            console.log(result);
            if (result) {
              this.$router.replace({ name: "viagens" });
              LocalStorage.set("orcamento", this.orcamento);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        var budget = this.orcamento*100;
        LocalStorage.set("orcamento", budget);
        this.$router.replace({ name: "viagens" });
      }
    },
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser",
      err: "err",
    }),
  },
  mounted() {
    var orcamento = LocalStorage.getItem("orcamento");
    if (orcamento) {
      this.orcamento = orcamento/100;
    }
  }
}
</script>
