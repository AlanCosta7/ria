<template>
  <q-page class="bg-grey-2" >
    <q-card flat class="bg-grey-2" style="max-width: 400px; width:100vw">
      <div
        class="full-width bg-white text-h1 text-bold row wrap justify-center items-start content-start relative-position"
        style="height: 300px; border-radius: 0 0 30px 30px;"
      >

      </div>

    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  computed: {
    ...Vuex.mapGetters({
      currentUser: "currentUser",
      err: "err",
    }),
  },
})
</script>
