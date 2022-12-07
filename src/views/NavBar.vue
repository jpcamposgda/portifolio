<template>
  <div id="nav" >
  <q-layout view="hHr lpR fFr" >

    <q-header elevated class="headerH">
      <q-toolbar>
        <q-toolbar-title>
          
          <q-icon name="terminal" class="colorItem"  style="font-size: 1.5em" />
          <span style="font-size: 20px">João Pedro</span>
          <span class="block mergen" style="font-size: 10px">DEV FRONT-END</span>
        </q-toolbar-title>

        <router-link to="/" class="headerH"><q-breadcrumbs-el label="Home" icon="home" class="q-mx-md gt-xs hoverOptions " /></router-link>
        <router-link to="/projetos" class="headerH"><q-breadcrumbs-el label="Projetos" icon="widgets" class="q-mx-md gt-xs hoverOptions "  /></router-link>
        

       

        <q-btn 
        flat 
        @click="drawer = !drawer" 
        round
        dense
        class="lt-sm"
        
        >
      <q-avatar size="25px">
        <img src="../assets/Menu.svg">
      </q-avatar>
    </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawer"
        overlay 
        behavior="mobile" 
        
        side="right"
        class="bg-blue-grey-10 text-white"

      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
              
              <q-item clickable :active="menuItem.label === 'Outbox'" :to="menuItem.router" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon"  />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container >
     
      <router-view />
     
    </q-page-container>
    </q-layout>

 
</div>
</template>

<script lang="ts">
import { ref } from 'vue'





const menuList = [
  {
    icon: 'folder',
    label: 'Home',
    separator: true,
    router: '/'
  },
 
  {
    icon: 'widgets',
    
    label: 'Projetos',
    separator: false,
    router: '/projetos'
  },
  {
    icon: 'info',
    iconColor: 'blue',
    label: 'Contato',
    separator: false
  }

]

export default {


  
  setup () {
    return {
      drawer: ref(false),
      menuList,
     
    
    }
  }
}
</script>

<style scoped>


.mergen{
  margin-left: 48px;
  line-height: 6px;
}
.headerH{
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: #1F172B;
  color: white;
  text-decoration: none;
  opacity: 87%;

  font-family: 'Poppins', sans-serif;
  
}

.colorItem{
  color: #840AAF;
}



.hoverOptions:hover{

  color: white;  
  cursor: pointer;
}


</style>