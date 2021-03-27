<template>
  <q-page class="bg-grey-2">
    <q-card flat class="bg-grey-2" style="max-width: 400px; width: 100vw">
      <div
        class="full-width bg-white text-h2 text-bold row wrap justify-center items-start content-center relative-position"
        style="height: 150px; border-radius: 0 0 30px 30px"
      >
        Rotas
      </div>
      <div class="row q-gutter-md q-ma-md">
        <q-timeline color="deep-orange">
          <q-timeline-entry title="Partida" class="">
            <div>
             9h -  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </q-timeline-entry>


          <q-timeline-entry title="Parada 1" class="">
            <div>
             12h -  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Chegada" class="">
            <div>
             17h -  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </q-card>
      <div class="width-full q-gutter-md row justify-center">
        <q-btn color="accent" outline icon="keyboard_arrow_left" label="Voltar" @click="onVoltar" />
        <q-btn color="accent" icon="local_atm" label="Comprar" @click="onSalvar" />
      </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

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
      this.$store.dispatch("salvarInteresses", this.interesses);
    },
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
