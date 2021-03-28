<template>
  <q-page class="bg-grey-2">
    <q-card flat class="bg-grey-2" style="width: 100vw">
      <div
        class="full-width bg-white text-h4 text-bold row wrap justify-center items-start content-center relative-position"
        style="height: 150px; border-radius: 0 0 30px 30px"
      >
        {{listPoints.name}}
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
    onShare() {

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

      this.$store.dispatch("getPoints", this.selectViagem)
  },
};
</script>
