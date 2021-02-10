<template lang="pug">
.curso-portada
  .container
    .row.align-items-center
      .col-12.col-lg-6

        h3#curso-titulo-componente.curso-subtitulo Tecnología en Desarrollo Publicitario
        h1#curso-titulo-tema.curso-titulo Plan de Endomarketing

        .brand-line-primary

        template(v-if="$route.name === 'curso'")
          .keywords
            span.badge.badge-pill.badge-light.mr-2 #Ecosistema
            span.badge.badge-pill.badge-light.mr-2 #Base
            span.badge.badge-pill.badge-light.mr-2 #ECORED

          .barra-dots.mt-5
            img.img-fluid(src='@/assets/images/header/icon_dots.svg', alt='alt')

        template(v-else)
          p.curso-descripcion Equipo de Ecosistema de recursos educativos SENA encargado del desarrollo y rediseño de cursos virtuales de aprendizaje para el SENA.

        template(v-if="$route.name === 'inicio'")
          router-link.curso-btn-iniciar.btn.btn-light(to="/curso")
            span Iniciar curso

      .col-12.col-lg-6.text-center
        .d-none.d-lg-block
          img.curso-imagen(src="@/assets/images/pages/ilustraciones/group16263.svg")

</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>
<style scoped lang="sass">
.curso-portada
  padding: 0 2rem 2rem 2rem
</style>
