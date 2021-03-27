<template>
  <q-page class="bg-grey-2">
    <q-card flat class="bg-grey-2" style="max-width: 400px; width: 100vw">
      <div
        class="full-width bg-white text-h2 text-bold row wrap justify-center items-start content-center relative-position"
        style="height: 150px; border-radius: 0 0 30px 30px"
      >
        Interesses
      </div>
      <div class="row q-gutter-md q-ma-md">

      </div>
      <div class="width-full row justify-center">
        <q-btn color="primary" icon="check" label="Salvar" @click="onSalvar" />
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PageIndex",
  data() {
    return {
      interesses: []
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
