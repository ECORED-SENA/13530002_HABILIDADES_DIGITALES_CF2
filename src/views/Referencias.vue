<template lang="pug">

.container

  .header-ecored
    h1 Referencias bibliográficas

  .jumbotron.bg-white.referencias
    template(v-for="(item, index) of referencias")
      p(:ref="'referencia-'+index") {{item.referencia}}
        a(:href="item.enlace", target="_blank").ml-2 
          | {{item.tituloenlace.length ? item.tituloenlace : item.enlace}}
      hr


    .row.justify-content-between.align-items-center

      .col-12.col-md-5.my-4
        .jumbotron.p-4
          .d-flex.justify-content-center.align-items-center
            p.text-center.pl-4
              i.fa.fa-picture-o.fa-2x.text-center
            p.text-center.flex-grow-1 Fotografías y vectores tomados de <a href="https://www.shutterstock.com/" target="_blank">https://www.shutterstock.com/</a> y <a href="https://www.freepik.es/" target="_blank">https://www.freepik.es/</a>

      .col-12.col-md-5.my-4
        .jumbotron.p-4
          .d-flex.justify-content-center.align-items-center
            p.text-center.pl-4
              i.fa.fa-creative-commons.fa-2x.text-center
            p.text-center.flex-grow-1 Licencia Creative Commons <br> <strong>CC BY-NC-SA</strong><br> <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/es/" target="_blank">Ver licencia.</a>            
</template>

<script>
import { referencias } from '../config/global'
export default {
  name: 'Referencias',
  data: () => ({
    referencias: referencias,
  }),
}
</script>

<style lang="sass" scoped></style>
