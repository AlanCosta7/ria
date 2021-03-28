<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white">
        <q-btn
          flat
          color="black"
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>

        <q-item clickable v-ripple @click="onInteresses">
          <q-item-section avatar>
            <q-icon name="bookmark" />
          </q-item-section>

          <q-item-section>
            Interesses
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="onOrcamento">
          <q-item-section avatar>
            <q-icon name="local_atm" />
          </q-item-section>

          <q-item-section>
            Orçamento
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

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
  methods: {
    onInteresses() {
      this.$router.replace({ name: 'interesses'})
    },
    onOrcamento() {
      this.$router.replace({ name: 'orcamento'})
    }
  },
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
