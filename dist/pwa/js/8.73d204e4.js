(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{fa72:function(e,t,a){"use strict";a.r(t);var s=a("7a23");const l={class:"full-width bg-white row wrap justify-center items-start content-start relative-position",style:{height:"300px","border-radius":"0 0 30px 30px"}},i={class:"column row justify-center fit"},o={class:"column row justify-center"};function r(e,t,a,r,n,c){const d=Object(s["D"])("q-tab"),b=Object(s["D"])("q-tabs"),u=Object(s["D"])("q-input"),m=Object(s["D"])("q-btn"),p=Object(s["D"])("q-form"),h=Object(s["D"])("q-tab-panel"),y=Object(s["D"])("q-tab-panels"),f=Object(s["D"])("q-card"),j=Object(s["D"])("q-page");return Object(s["y"])(),Object(s["h"])(j,{class:"bg-grey-2 row justify-center"},{default:Object(s["K"])((()=>[Object(s["k"])(f,{flat:"",class:"bg-grey-2",style:{"max-width":"400px",width:"100vw"}},{default:Object(s["K"])((()=>[Object(s["k"])("div",l,[Object(s["k"])(b,{modelValue:n.tab,"onUpdate:modelValue":t[1]||(t[1]=e=>n.tab=e),dense:"",class:"text-black text-bold width-full absolute-bottom","indicator-color":"accent",align:"justify","narrow-indicator":""},{default:Object(s["K"])((()=>[Object(s["k"])(d,{name:"login",label:"Login"}),Object(s["k"])(d,{name:"cadastro",label:"Cadastro"})])),_:1},8,["modelValue"])]),Object(s["k"])(y,{modelValue:n.tab,"onUpdate:modelValue":t[10]||(t[10]=e=>n.tab=e),animated:"",class:"bg-grey-2"},{default:Object(s["K"])((()=>[Object(s["k"])(h,{name:"login",class:"flex flex-center",style:{width:"100%","min-height":"200px"}},{default:Object(s["K"])((()=>[Object(s["k"])(p,{onSubmit:c.onSubmit,class:"q-gutter-md row justify-center q-pt-xl"},{default:Object(s["K"])((()=>[Object(s["k"])(u,{class:"col-10",id:"email",type:"email",dense:"",color:"accent",modelValue:n.email,"onUpdate:modelValue":t[2]||(t[2]=e=>n.email=e),label:"Email","lazy-rules":"",rules:[c.emailValida]},null,8,["modelValue","rules"]),Object(s["k"])(u,{class:"col-10",dense:"","bottom-slots":"",color:"accent",type:n.typePass,modelValue:n.password,"onUpdate:modelValue":t[4]||(t[4]=e=>n.password=e),label:"Senha"},{append:Object(s["K"])((()=>[Object(s["k"])(m,{"aria-label":"visibility",round:"",dense:"",flat:"",icon:n.iconVisibility,onClick:t[3]||(t[3]=e=>n.visibility=!n.visibility)},null,8,["icon"])])),_:1},8,["type","modelValue"]),Object(s["k"])("div",i,[Object(s["k"])(m,{color:"accent",class:"full-width",type:"submit",rounded:"",label:"Acessar"})])])),_:1},8,["onSubmit"])])),_:1}),Object(s["k"])(h,{name:"cadastro",class:"flex flex-center"},{default:Object(s["K"])((()=>[Object(s["k"])(p,{onSubmit:c.cadastrar,onReset:c.onReset,class:"q-gutter-md row justify-center  q-pt-xl"},{default:Object(s["K"])((()=>[Object(s["k"])(u,{class:"col-10",id:"email",type:"email",dense:"",color:"accent",modelValue:n.email,"onUpdate:modelValue":t[5]||(t[5]=e=>n.email=e),label:"Email","lazy-rules":"",rules:[c.emailValida]},null,8,["modelValue","rules"]),Object(s["k"])(u,{class:"col-10",dense:"","bottom-slots":"",color:"accent",type:n.typePass,modelValue:n.password,"onUpdate:modelValue":t[7]||(t[7]=e=>n.password=e),label:"Senha"},{append:Object(s["K"])((()=>[Object(s["k"])(m,{"aria-label":"visibility",round:"",dense:"",flat:"",icon:n.iconVisibility,onClick:t[6]||(t[6]=e=>n.visibility=!n.visibility)},null,8,["icon"])])),_:1},8,["type","modelValue"]),Object(s["k"])(u,{class:"col-10",dense:"","bottom-slots":"",color:"accent",type:n.typePass,modelValue:e.confirmarSenha,"onUpdate:modelValue":t[9]||(t[9]=t=>e.confirmarSenha=t),label:"Confirmar Senha",rules:[e=>!!e||"* Requerido",e=>e===n.password||"Senha não confere"],"lazy-rules":""},{append:Object(s["K"])((()=>[Object(s["k"])(m,{"aria-label":"visibility",round:"",dense:"",flat:"",icon:n.iconVisibility,onClick:t[8]||(t[8]=e=>n.visibility=!n.visibility)},null,8,["icon"])])),_:1},8,["type","modelValue","rules"]),Object(s["k"])("div",o,[Object(s["k"])(m,{color:"accent",rounded:"",class:"q-my-md",style:{width:"200px"},type:"submit",label:"Cadastrar"})])])),_:1},8,["onSubmit","onReset"])])),_:1})])),_:1},8,["modelValue"])])),_:1}),Object(s["k"])("div",null,[Object(s["k"])(m,{color:"accent",flat:"",label:"Para Empresas",onClick:c.onEmpresas},null,8,["onClick"])])])),_:1})}var n=a("ded3"),c=a.n(n),d=(a("e6cf"),a("5319"),a("5502")),b=a("f508"),u=(a("18d6"),{name:"PageLogin",meta:{title:"Ria - Login"},data(){return{setLogin:!0,tab:"login",typePass:"password",visibility:!1,iconVisibility:"visibility",email:null,password:null,confirmPassword:null}},watch:{currentUser(e,t){e&&this.redirectToApp(3e3)},visibility(e){e?(this.typePass="password",this.iconVisibility="visibility"):(this.typePass="text",this.iconVisibility="visibility_off")}},computed:c()({},d["b"].mapGetters({currentUser:"currentUser",err:"err"})),mounted(){if(this.currentUser){const e=3e3;this.redirectToApp(e)}else this.$router.push({name:"login"})},methods:{onEmpresas(){this.$router.push("empresas")},emailValida(e){return new Promise(((t,a)=>{this.errorMsgEmail="erro";var s=e.substring(0,e.indexOf("@")),l=e.substring(e.indexOf("@")+1,e.length);s.length>=1&&l.length>=3&&-1==s.search("@")&&-1==l.search("@")&&-1==s.search(" ")&&-1==l.search(" ")&&-1!=l.search(".")&&l.indexOf(".")>=1&&l.lastIndexOf(".")<l.length-1?(this.emailValidado=!0,t(!0)):(this.emailValidado=!1,t(this.errorMsgEmail))}))},onSubmit(){var e=this.email,t=this.password,a={email:e,password:t};this.$store.dispatch("signInWithEmailAndPassword",a).then((e=>{e&&(b["a"].hide(),this.$router.replace({name:"interesses"}))}))},cadastrar(){var e=this.email,t=this.password,a=this.confirmarSenha;if(t!==a)alert("Senha não confere");else{var s={email:e,password:t};this.$store.dispatch("createUserWithEmailAndPassword",s).then((e=>{e&&(b["a"].hide(),this.$router.replace({name:"interesses"}))}))}},onReset(){this.email=null,this.password=null,this.$store.commit("clearError")},handleResetPassword(){this.$store.dispatch("handleResetPassword")},redirectToApp(e){console.log(this.currentUser);const t=this.currentUser.email;b["a"].show(),t&&setTimeout((()=>{this.$router.push({name:"interesses"}),b["a"].hide()}),e)}}}),m=a("9989"),p=a("f09f"),h=a("429b"),y=a("7460"),f=a("adad"),j=a("823b"),O=a("0378"),w=a("27f9"),g=a("9c40"),k=a("eebe"),V=a.n(k);u.render=r;t["default"]=u;V()(u,"components",{QPage:m["a"],QCard:p["a"],QTabs:h["a"],QTab:y["a"],QTabPanels:f["a"],QTabPanel:j["a"],QForm:O["a"],QInput:w["a"],QBtn:g["a"]})}}]);