<template>
  <q-page class="bg-grey-2 row justify-center">
    <q-card flat class="bg-grey-2" style=" width:100vw">
      <div
        class="full-width bg-white row wrap justify-center items-start content-start relative-position"
        style="height: 200px; border-radius: 0 0 30px 30px;"
      >
      <q-img
      class="mobile-only"
        src="../../assets/logoMarca.svg"
        :ratio="1"
        width="120px"
        spinner-color="primary"
        spinner-size="82px"
      />

      <q-tabs
        v-model="tab"
        dense
        class="text-black text-bold width-full absolute-bottom"
        indicator-color="accent"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="cadastro" label="Cadastro" />
      </q-tabs>
      </div>

      <q-tab-panels v-model="tab" animated class="bg-grey-2">
        <q-tab-panel
          name="login"
          class="flex flex-center"
          style="width: 100%; min-height: 200px"
        >
          <!-- Formulário de Login -->
            <q-form
              @submit="onSubmit"
              class="q-gutter-md row justify-center q-pt-xl"
            >
              <q-input
                class="col-10"
                id="email"
                type="email"
                dense
                color="accent"
                v-model="email"
                label="Email"
                lazy-rules
                :rules="[emailValida]"
              />

              <q-input
                class="col-10"
                dense
                bottom-slots
                color="accent"
                :type="typePass"
                v-model="password"
                label="Senha"
              >
                <template v-slot:append>
                  <q-btn
                    aria-label="visibility"
                    round
                    dense
                    flat
                    :icon="iconVisibility"
                    @click="visibility = !visibility"
                  />
                </template>
              </q-input>
              <div class="column row justify-center fit">
               <q-btn color="accent"  class="full-width" type="submit" rounded label="Acessar"></q-btn>
                <!-- <div class="q-ma-md text-center"> OU </div>
                <q-btn color="primary" class="full-width" @click="acessarGoogle" rounded label="Acessar com gmail"></q-btn> -->
              </div>
            </q-form>

        </q-tab-panel>

        <q-tab-panel name="cadastro" class="flex flex-center">

            <q-form
              @submit="cadastrar"
              @reset="onReset"
              class="q-gutter-md row justify-center  q-pt-xl"
            >
              <q-input
                class="col-10"
                id="email"
                type="email"
                dense
                color="accent"
                v-model="email"
                label="Email"
                lazy-rules
                :rules="[emailValida]"
              />

              <q-input
                class="col-10"
                dense
                bottom-slots
                color="accent"
                :type="typePass"
                v-model="password"
                label="Senha"
              >
                <template v-slot:append>
                  <q-btn
                    aria-label="visibility"
                    round
                    dense
                    flat
                    :icon="iconVisibility"
                    @click="visibility = !visibility"
                  />
                </template>
              </q-input>

              <q-input
                class="col-10"
                dense
                bottom-slots
                color="accent"
                :type="typePass"
                v-model="confirmarSenha"
                label="Confirmar Senha"
                :rules="[
                    val => !!val || '* Requerido',
                    val => val === password || 'Senha não confere',
                  ]"
                lazy-rules
              >
                <template v-slot:append>
                  <q-btn
                    aria-label="visibility"
                    round
                    dense
                    flat
                    :icon="iconVisibility"
                    @click="visibility = !visibility"
                  />
                </template>
              </q-input>
              <div class="column row justify-center">
               <q-btn color="accent" rounded class="q-my-md" style="width:200px" type="submit" label="Cadastrar"></q-btn>
              </div>
            </q-form>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
    <div>
      <q-btn color="accent" flat label="Para Empresas" @click="onEmpresas" />
    </div>
  </q-page>
</template>

<script>
import Vuex from "vuex";
import { Loading, LocalStorage } from "quasar";

export default {
  name: "PageLogin",
  meta: { title: "Ria - Login" },
  data() {
    return {
      setLogin: true,
      tab: "login",
      typePass: "password",
      visibility: false,
      iconVisibility: "visibility",
      email: null,
      password: null,
      confirmarSenha: null,
    };
  },
  watch: {
    currentUser(newUser, oldUser) {

      if (newUser) {
        this.redirectToApp(3000);
      }
    },
    visibility(val) {
      if (!val) {
        this.typePass = "text";
        this.iconVisibility = "visibility_off";
      } else {
        this.typePass = "password";
        this.iconVisibility = "visibility";
      }
    },
  },
  computed: {
    ...Vuex.mapGetters({
      currentUser: "currentUser",
      err: "err",
    }),
  },
  mounted() {

    if (this.currentUser) {
      const rediretDelay = 3000;
      this.redirectToApp(rediretDelay);
    } else {
      this.$router.push({
        name: "login"
      });
    }
  },
  methods: {
    onEmpresas() {
      this.$router.push('empresas')
    },
    emailValida(val) {
      return new Promise((resolve, reject) => {
        this.errorMsgEmail = "erro";
        var usuario = val.substring(0, val.indexOf("@"));
        var dominio = val.substring(val.indexOf("@") + 1, val.length);

        if (
          usuario.length >= 1 &&
          dominio.length >= 3 &&
          usuario.search("@") == -1 &&
          dominio.search("@") == -1 &&
          usuario.search(" ") == -1 &&
          dominio.search(" ") == -1 &&
          dominio.search(".") != -1 &&
          dominio.indexOf(".") >= 1 &&
          dominio.lastIndexOf(".") < dominio.length - 1
        ) {
          this.emailValidado = true;
          resolve(true);
        } else {
          this.emailValidado = false;
          resolve(this.errorMsgEmail);
        }
      });
    },
    onSubmit() {
      var email = this.email;
      var password = this.password;
      var value = {
        email: email,
        password: password,
      };
      this.$store.dispatch("signInWithEmailAndPassword", value).then( (result) => {

          if(result) {
            Loading.hide();
            this.$router.replace({ name: "viagens" })
          }
      })
    },
    cadastrar() {
      var email = this.email;
      var password = this.password;
      var confirmarSenha = this.confirmarSenha
      if (password !== confirmarSenha) {
        alert('Senha não confere')
      } else {

      var value = {
        email: email,
        password: password,
      };
      this.$store
        .dispatch("createUserWithEmailAndPassword", value)
        .then( result => {

          if(result) {
            Loading.hide();
            this.$router.replace({ name: "viagens" })
          }
        })
      }
    },
    onReset() {
      this.email = null;
      this.password = null;
      this.$store.commit("clearError");
    },
    handleResetPassword() {
      this.$store.dispatch("handleResetPassword");
    },
    redirectToApp(redirectDelay) {
      console.log(this.currentUser)
      const email = this.currentUser.email

      Loading.show();
      if (email) {
        setTimeout(() => {
          this.$router.push({
            name: "interesses"
          });

          Loading.hide();
        }, redirectDelay);
      }
    },
  },
};
</script>
