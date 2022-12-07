<template>
  <div class="q-my-md text-center  ">
    <q-img src="../assets/Programming-amico.svg" alt="dev" class="img"  />
    <div class="q-my-md" ><span class="nameP block ">João Pedro</span>
    <span class="corpoR">DESENVOLVEDOR FRONT-END</span>
    
    </div>
   
    <q-btn outline rounded class="inputR" label="BAIXAR CURRICULO" />
        
      
  </div>

  <div class=" text-center">
  <div class="spacingP"><q-icon name="psychology" class="colorItem"  style="font-size: 24px" /><span class="skillP">HABILIDADES</span></div>
    <div class="row listaR ">
      
      <li class="col-2" ><span>JAVASCRIPT</span><img src="../assets/icons8-javascript-50.svg" alt=""><q-linear-progress :value="progressJ" dark  class="progressR" style="color: #FFD600" /></li>
      <li class="col-2"><span>VUEJS</span><img src="../assets/icons8-vuejs-50.svg" alt=""><q-linear-progress :value="progressV"  dark  class="progressR" style="color: #3EAF7C" /></li>
      <li class="col-2"><span>TYPESCRIPT</span><img src="../assets/icons8-typescript.svg" alt=""><q-linear-progress :value="progressT" dark  class="progressR" style="color: #1976D2" /></li>
      <li class="col-2"><span>QUASAR</span><img src="../assets/quasar-logo-vertical.svg" class="quasarI" alt=""><q-linear-progress dark  :value="progressQ"  class="progressR" style="color: #00B4FF" /></li>
      <li class="col-2"><span>NESTJS</span><img src="../assets/icons8-nestjs.svg" alt=""><q-linear-progress :value="progressN" dark   class="progressR" style="color: #F50057" /></li>
      <li class="col-2"><span>FIREBASE</span><img src="../assets/icons8-firebase.svg" alt=""><q-linear-progress :value="progressF" dark   class="progressR" style="color: #FFC400" /></li>
    </div>

  </div>

  <div class=" text-center paddingR">
    
    <div class="spacingP"><q-icon name="info" class="colorItem"  style="font-size: 24px" /><span class="skillP">SOBRE</span></div>
    
    <img src="../assets/jp.png" alt="">
    
    
    <p style="
      font-family: 'Roboto Mono', 'Roboto;
      color: white;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      margin: 10px
    ">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
  </div>
</template>
    
>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup () {
    const progressJ = ref(0.7)
    const progressV = ref(0.6)
    const progressT = ref(0.5)
    const progressQ = ref(0.7)
    const progressN = ref(0.6)
    const progressF = ref(0.7)

    return {
      text: ref(''),
      progressJ,
      progressV,
      progressT,
      progressQ,
      progressN,
      progressF
     
    }
  }
}
</script>


<style scoped>

.spacingP{
  margin-bottom: 47px;
}

.nameP{
  font-family: 'Poppins', sans-serif;
  font-weight: 400px;
  font-size: 28px;
  
  color: white;
}

.skillP{

  font-family: 'Roboto Mono', monospace;;
  font-weight: 400px;
  font-size: 24px;
  
  color: white;
  
  
  

}
.img {
width: 230px;
height: 230px;;
  
}

.paddingR{
  padding-top: 163px;
  padding-bottom: 100px;
}

.listaR{
  font-family: 'Roboto Mono', monospace;
  color: white;
  
  font-size: 9px;
  line-height: 15px;
  list-style: none;
}

ul li {
  list-style-type: none;
}
.corpoR{
  font-family: 'Roboto Mono', monospace;
  font-weight: 400px;
  font-size: 18px;
  line-height: 23.74px;
  color: rgba(24, 114, 17, 1);  

}

.inputR{

  width: 181.83px;
  height: 35.94px;
  color: #840AAF;
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 128px;

}

.colorItem{
  color: #840AAF;
  padding-bottom: 10px;
  padding-right: 2px;
}

.quasarI{
  width: 50px;
  height: 50px;
  margin-top: 2px;
  color: aqua;
}

.progressR{
  margin-left: 18px;
  margin-top: 10px;
  width: 32px;
}
</style>
