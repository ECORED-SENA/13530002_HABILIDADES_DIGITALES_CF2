<template lang="pug">
.curso
  router-view
</template>
<script>
export default {
  name: 'Curso',
}
</script>

<style lang="sass" scoped>

::v-deep

  .header-ecored
    padding-top: 3rem
    margin: 0 0 3rem 0

    h1,h2,h3,h4,h5,h6
      margin-bottom: 0
  .title-full-width
    padding-top: 0
    h1,h2,h3,h4,h5,h6
      position: relative
      background-color: white
      display: inline-block
      padding-right: 20px
    &::before
      content: ''
      position: absolute
      left: 0
      top: 50%
      bottom: auto
      width: 100%
      height: 2px
      background-color: $base-color-highlight

    &::after
      display: none

  .main-content
    background-color: #F4F4F4

  .tarjeta
    background-color: white
    border-radius: 25px
    padding: 50px

    &--gris, &--azul
      background-color: #EEEEEE
      padding: 50px
      border-radius: 10px
      text-align: right

    &--azul
      background-color: #E1F8FF
      text-align: left

    &--blanco
      border-radius: 10px
      padding: 30px 50px
      background-color: #fff

  .tarjeta--overlay
    position: relative
    padding-left: 75px
    top: -30px
    .tarjeta--blanco
      position: relative
      width: 90%
      padding-bottom: 0
    .comillas
      width: 100px
      position: absolute
      left: 0
      top: 50%
      transform: translate(-65%,-50%)


  .header-ecored--b
    &::after
      display: none


  .img
    width: 100%

  .texto-amarillo
    color: $dark-orange

  .texto-azul
    color: #00D1E3

  .lagarto
    width: 40%
    position: absolute
    right: 0
    top: 50%
    transform: translateY(-50%)

  .contenido-tarjeta
    position: relative
    width: 100%

  @media screen and (min-width: 576px)
    .contenido-tarjeta
      padding: 0
      width: 100%

  @media screen and (min-width: 768px)
    .contenido-tarjeta
      padding: 0
      width: 70%
      padding: 100px 0


  .tarjeta-borde-amarillo
    padding: 30px 50px
    border-radius: 15px
    border: 2px solid #FFA900
</style>
