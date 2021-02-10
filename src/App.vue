<template lang="pug">
#app
  .curso-contenedor(:class="showMenu && ['curso-contenedor--menu-abierto']")
    header#CursoPresentacion.curso-presentacion.page-header
      .page-textura
        OverHeader(:showMenu.sync="showMenu")
        Header
    
    router-view
  AsideMenu(:showMenu.sync="showMenu")
</template>

<script>
import OverHeader from './components/OverHeader'
import Header from './components/Header'
import AsideMenu from './components/AsideMenu'

export default {
  name: 'App',
  components: { Header, OverHeader, AsideMenu },
  data() {
    return {
      showMenu: false,
    }
  },
}
</script>

<style lang="sass">
@import "./assets/scss/main.scss"

a
  cursor: pointer

.curso-contenedor
  margin-left: 0
  transition: margin-left 0.5s ease-in-out
  &--menu-abierto
    margin-left: 320px
</style>
