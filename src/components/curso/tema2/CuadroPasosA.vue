<template lang="pug">
.cuadro-pasos.mb-6
  .row
    .col-6.py-5
      .cuadro-pasos__paso
        .cuadro-pasos__paso__cabeza
          span.h1.mb-0 PASO 1

        .cuadro-pasos__paso__contenido
          P Definir y acortar lo que necesitamos consultar.

    .col-6.py-5
      .cuadro-pasos__paso
        .cuadro-pasos__paso__cabeza
          span.h1.mb-0 PASO 2

        .cuadro-pasos__paso__contenido
          P Elegir el (los) recursos, es decir, la plataforma que vamos a utilizar para buscarlo y tener en cuenta el tipo de contenido que queremos como respuesta.
          a.lnk(@click="showModal = true") Ver ejemplos.

    .col-6.py-5
      .cuadro-pasos__paso
        .cuadro-pasos__paso__cabeza
          span.h1.mb-0 PASO 3

        .cuadro-pasos__paso__contenido
          P Analizar la plataforma que utilizamos para la búsqueda. Reconoce los botones, entre ellos, el de filtrado. 
            br
            | Así tu consulta será más eficiente.

    .col-6.py-5
      .cuadro-pasos__paso
        .cuadro-pasos__paso__cabeza
          span.h1.mb-0 PASO 4

        .cuadro-pasos__paso__contenido
          P Utilizar una estrategia de búsqueda, como operadores booleanos o truncamiento, combínalos con las palabras claves y disfruta de mayor precisión a la hora de buscar.

  .cuadro-pasos__cuotacion
    .cuadro-pasos__cuotacion__icono
      img(src="@/assets/images/pages/tema1/ico1.svg")
    .cuadro-pasos__cuotacion__texto
      span Si no encuentran lo que buscan,
        br
        strong ¡hay que hacerlo de nuevo!

  .cuadro-pasos__modal(v-if="showModal")
    .cuadro-pasos__modal__cerrar(@click="showModal = false")
      img(src="@/assets/images/pages/tema2/cerrar.svg")
    p Por ejemplo: si busco un contenido multimedia, como una imagen o video, podría utilizar pixabay (https://pixabay.com/es/), donde puedo encontrar millones de imágenes gratuitas y videos con licencia CC. Pero, si lo que quiero consultar es algo académico, utilizo Google Académico o Google Scholar, como se le conoce en inglés, que es una base de datos de búsqueda de noticias, revistas académicas, ensayos, etc. 
      br
      br
      | Así, podemos tener a la mano algunas bases de datos según el tipo de consulta que deseamos realizar, algunos ejemplos:

    .cuadro-pasos__data-table
      .cuadro-pasos__data-table__header
        .cuadro-pasos__data-table__columna
          span.h2.mb-0 TIPOLOGÍA
        .cuadro-pasos__data-table__columna
          span.h2.mb-0 COSTE
        .cuadro-pasos__data-table__columna
          span.h2.mb-0 EJEMPLOS

      .cuadro-pasos__data-table__row
        .cuadro-pasos__data-table__columna
          span Bases de datos bibliográficas
        .cuadro-pasos__data-table__columna
          span Comerciales y gratuitos.
        .cuadro-pasos__data-table__columna
          span SCOPUS, WOS, Chemical Abstracts, ERIC, ABI/Inform, CAB, MILA. etc.

      .cuadro-pasos__data-table__row
        .cuadro-pasos__data-table__columna
          span Portadas de revistas y libros electrónicos
        .cuadro-pasos__data-table__columna
          span Parte comerciales y parte gratuitos.
        .cuadro-pasos__data-table__columna
          span Emerald, ScienceDirect (Elsevier), Springer, Willey, Taylor and Francis, Ingenta.

      .cuadro-pasos__data-table__row
        .cuadro-pasos__data-table__columna
          span Repositorios y Recolectores (Open Access)
        .cuadro-pasos__data-table__columna
          span Gratuitos
        .cuadro-pasos__data-table__columna
          span E-LIS, REPEC, ARxiv, OAlster, Recolecta

      .cuadro-pasos__data-table__row
        .cuadro-pasos__data-table__columna
          span Motores de búsqueda académicos
        .cuadro-pasos__data-table__columna
          span Gratuitos
        .cuadro-pasos__data-table__columna
          span Google Académico, Sci-Lit, One Finder, Dimensions.

      .cuadro-pasos__data-table__row
        .cuadro-pasos__data-table__columna
          span Metabuscadores de bibliotecas
        .cuadro-pasos__data-table__columna
          span Comerciales
        .cuadro-pasos__data-table__columna
          span Explora (Catálogo de la UEX), Rebiun, etc.


</template>

<script>
export default {
  name: 'CuadroPasosA',
  data: () => ({
    showModal: false,
  }),
}
</script>

<style lang="sass" scoped>
.cuadro-pasos
  padding: 50px
  background-color: #F6F6F6
  position: relative

  &__paso
    padding: 40px 20px 20px
    height: 100%
    background-color: #fff
    border-radius: 15px
    position: relative
    &__cabeza
      position: absolute
      padding: 10px
      width: 50%
      background-color: #FFCB00
      left: 50%
      transform: translate(-50%,-70%)
      top: 0
      text-align: center
      color: #fff
      &::before
        content: ''
        position: absolute
        left: 50%
        top: 100%
        width: 20px
        height: 20px
        transform-origin: center
        transform: translate(-50%,-50%) rotate(45deg)
        background-color: #FFCB00
    &__contenido

  &__cuotacion
    position: absolute
    transform: translateX(-50%)
    left: 50%
    width: fit-content
    padding-left: 50px
    &__icono
      width: 100px
      position: absolute
      top: 50%
      transform: translate(-50%,-50%)

    &__texto
      padding: 20px 20px 20px 60px
      background-color: #fff

  &__modal
    position: absolute
    top: 50%
    left: 50%
    width: 95%
    padding: 50px
    max-height: 95vh
    overflow: auto
    background-color: #fff
    box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.2)
    transform: translate(-50%,-50%)

    &__cerrar
      cursor: pointer
      position: absolute
      top: 10px
      right: 10px
      width: 20px
      height: 20px

  &__data-table

    &__header
      display: flex
      border-radius: 10px
      overflow: hidden
      .cuadro-pasos__data-table__columna
        background-color: #00D1E3
        color: #fff
        text-align: center

    &__row
      display: flex
      border-radius: 10px
      overflow: hidden
      &:nth-child(odd)
        .cuadro-pasos__data-table__columna
          background-color: #EFEFEF

    &__columna
      flex: 1
      padding: 10px 15px
      display: flex
      align-items: center
      justify-content: center
      span
        display: block
        text-align: center
        line-height: 1.2em
</style>
