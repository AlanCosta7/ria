<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'
import { Loading, LocalStorage } from "quasar";

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  mounted() {
    var user = LocalStorage.getItem('user')
    this.$store.commit('setCurrentUser', user)

    var token = LocalStorage.getItem('token')
    this.$store.commit('setToken', token)
  },
})
</script>
