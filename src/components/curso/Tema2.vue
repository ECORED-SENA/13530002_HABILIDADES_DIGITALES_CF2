<template lang="pug">
#mainContent.main-content
  .container
    #t_1.header-ecored
      h1 2. Empezando el aprendizaje, dispositivos y TIC
    .tarjeta
      section
        #t_1_1.header-ecored.title-full-width
          h1 2.1 Navegadores
        p.mb-6 Cada vez que una persona requiere hacer una búsqueda por internet, automáticamente piensa en usar un software o aplicación disponible en su dispositivo que representa una puerta de entrada a un gran número de información, estos son los denominados navegadores web, pero ¿todos los navegadores son iguales?, ¿cómo han evolucionado?, ¿cuál se debería de usar?, con la siguiente línea de tiempo daremos respuesta a estos y otros interrogantes relacionadas con el tema. Con un breve recorrido a través del tiempo conoceremos algunos de los hechos más importantes que hacen de internet lo que conocemos en la actualidad:
    
      section
        LineaTiempo

</template>

<script>
import LineaTiempo from './tema2/LineaTiempo'
export default {
  name: 'Tema2',
  components: {
    LineaTiempo,
  },
}
</script>

<style lang="sass" scoped></style>
