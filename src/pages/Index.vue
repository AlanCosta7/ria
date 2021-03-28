<template>
  <q-page class="bg-grey-2">
    <q-card flat class="bg-grey-2" style="width: 100vw">
      <div
        class="full-width bg-white text-h2 text-bold row wrap justify-center items-start content-center relative-position"
        style="height: 300px; border-radius: 0 0 30px 30px"
      >
        Interesses
      </div>
      <div class="row flex flex-center q-gutter-md q-ma-md">
        <q-list v-for="(item, index) in tags" :key="index" class="row">
          <div class=" " style="max-width: 300px">
            <q-btn
              :color="interesses.includes(item) ? 'accent' : 'black' "
              :outline="interesses.includes(item) ? false : true "
              rounded
              :label="item"
              @click="onSelectInteresse(item)"
            />
          </div>
        </q-list>
      </div>
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
  name: "PageTags",
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
    login() {
    },
    onProximo() {

      if (this.currentUser) {

        this.$store.dispatch("salvarInteresses", { tags: this.interesses }).then( result => {
            console.log(result)
            if (result) {
              this.$router.replace({ name: 'orcamento'})
            }
        }).catch( error => {
          console.log(error)
        })

      } else {

        LocalStorage.set('interesses', this.interesses)
        this.$router.replace({ name: 'orcamento'})

      }

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
    this.interesses = LocalStorage.getItem('interesses')
  },
};
</script>
