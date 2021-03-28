<template>
  <q-layout view="lhr lpR fFf">
    <q-header>
      <q-toolbar class="bg-white">
        <q-btn
          class="mobile-only"
          flat
          color="black"
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <div class="q-pa-md mobile-hide">
          <q-img
            src="../assets/logo.svg"
            width="200px"
            spinner-color="primary"
            spinner-size="82px"
          />
        </div>
        <q-space />
        <div class="q-pa-md q-gutter-md mobile-hide">
            <q-btn flat color="black" dense @click="onInteresses" label="Interesses" icon="star" />
            <q-btn flat color="black" dense @click="onOrcamento" label="Orçamento" icon="local_atm" class="q-mr-xs" />
            <q-btn flat color="black" dense @click="onViagen" label="Viagens" icon="flight" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      behavior="mobile"
      bordered
      class="bg-grey-1 mobile-only"
    >
        <div class="q-mb-xl q-pa-md">
          <q-img
            src="../assets/logo.svg"
            width="100%"
            spinner-color="primary"
            spinner-size="82px"
          />
        </div>
      <q-list>

        <q-separator  />
        <q-item clickable v-ripple @click="onInteresses">
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>

          <q-item-section>
            Interesses
          </q-item-section>
        </q-item>
        <q-separator  />
        <q-item clickable v-ripple @click="onOrcamento">
          <q-item-section avatar>
            <q-icon name="local_atm" />
          </q-item-section>

          <q-item-section>
            Orçamento
          </q-item-section>
        </q-item>
        <q-separator  />
        <q-item clickable v-ripple @click="onViagen">
          <q-item-section avatar>
            <q-icon name="flight" />
          </q-item-section>

          <q-item-section>
            Viagens
          </q-item-section>
        </q-item>
        <q-separator  />

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-white row items-center q-pa-md mobile-hide" reveal bordered>
      <div>
      <q-img
        src="../assets/logo.svg"
        width="100px"
        spinner-color="primary"
        spinner-size="82px"
      />
      </div>
      <q-space />
      <div class="q-gutter-md col-6">
        <q-btn flat dense @click="twitter" >
          <q-img
            src="../assets/twitter.svg"
            width="40px"
            spinner-color="primary"
            spinner-size="82px"
          />
        </q-btn>
        <q-btn flat dense @click="facebook" >
          <q-img
            src="../assets/facebook.svg"
            width="40px"
            spinner-color="primary"
            spinner-size="82px"
          />
        </q-btn>
        <q-btn flat dense @click="instagram">
          <q-img
            src="../assets/instagram.svg"
            width="40px"
            spinner-color="primary"
            spinner-size="82px"
          />
        </q-btn>
      </div>
      <div class="col-auto text-black">
        Copywright 2020
      </div>
    </q-footer>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'
import { Loading, LocalStorage } from "quasar";
import { openURL } from 'quasar'

export default defineComponent({
  name: 'MainLayout',
  methods: {
    onInteresses() {
      this.$router.replace({ name: 'interesses'})
    },
    onOrcamento() {
      this.$router.replace({ name: 'orcamento'})
    },
    onViagen() {
      this.$router.replace({ name: 'viagens'})
    },
    twitter() {
      openURL()
    },
    facebook() {
      openURL()
    },
    instagram() {
      openURL()
    },

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
