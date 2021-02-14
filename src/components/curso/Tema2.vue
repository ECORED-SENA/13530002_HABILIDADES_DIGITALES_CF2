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
    
        LineaTiempo.mb-6

        #t_1_1_1.header-ecored--b.mb-5
          h2 2.1.1 Breve historia de Internet
        
        p.mb-5 Actualmente, internet es una herramienta fundamental para muchas personas en diversas tareas que pueden ir desde consultar una receta hasta permitir una reunión de trabajo, sin embargo, muchos desconocen la evolución que ha tenido, su origen y la forma en que se usó desde su inicio; por ello, les invitamos a ver atentamente el siguiente video y a sacar sus propias conclusiones:

        //- iframe.mb-6(
        //-   width='100%', 
        //-   height='600', 
        //-   src='https://www.youtube.com/embed/OUA-M4LqynA', 
        //-   frameborder='0', 
        //-   allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
        //-   allowfullscreen=''
        //- )

        #t_1_1_1.header-ecored--b.mb-5
          h2 2.1.2 ¿Qué son los navegadores?

        .tarjeta--azul.mb-6
          .row.align-items-center
            .col-5
              img(src="@/assets/images/pages/tema2/img_21.svg")
            .col-7
              p Internet brinda un amplio mundo de conocimiento y entretenimiento, ya que en 1 (un) minuto se crean más de 600 páginas web, lo que hace este mundo cada vez más y más grande. Para poder acceder a estas páginas se necesita de una herramienta digital llamada Navegador, la cual se encarga de hacer lo que muchos llamarían ¡magia!, pero no lo es, porque se está hablando de algo muy real. 
                br
                br
                | Los navegadores son aplicaciones que permiten a los usuarios de internet encontrar lo que desean con facilidad, es una interfaz gráfica que permite a los internautas visualizar cualquier tipo de archivo multimedia independientemente de su localización o formato. En casi todos los casos se encuentra un navegador en todo tipo de sistemas operativos, lo que permite sin ser expertos, navegar por el interesante mundo de la red de internet.

        #t_1_1_1.header-ecored--b.mb-5
          h2 2.1.2 ¿Qué son los navegadores?

        p Las personas usan navegadores por diferentes características, pero ¿cuáles son los más usados?, ¿Por qué los usuarios los eligen? A continuación, conoceremos cada uno de estos aspectos con mayor detalle: 
          br
          br
          | Partiendo de la idea de que un navegador es una herramienta que permite acceder a la información alojada en internet, es un software que permite, agregar, intercambiar y distribuir información, utilizando herramientas online y offline para mostrar a través de multimedias textos, imágenes, videos y música; se debe conocer que los navegadores más conocidos para realizar estas acciones son:

        .row.justify-content-center
          .col-lg-10
            .navegadores.mb-4
              .navegadores__item(v-for="item of navedadoresData")
                .navegadores__item__icono
                  img(:src="item.img")
                .navegadores__item__texto
                  span
                    strong {{item.titulo}}
                    br
                    | {{item.texto}}
        
        p.h2.mb-6 Algunos de estos navegadores vienen instalados con el sistema operativo prestablecido de cada computador, donde cada usuario puede utilizar el que más le guste o se siente seguro de usar.

        .row.mb-4
          .col-6
            p.h1 Luego de conocer lo anterior, al momento de utilizar un navegador, tenga en cuenta las siguientes 
              span.texto-azul variables:
          .col-6
            p Seguridad, rapidez, funcionalidad y consumo. Otro aspecto importante que es necesario conocer, es que para poder utilizar motores de búsqueda y tener acceso a las direcciones “URL”, los navegadores se comunican con servidores web a través de un protocolo de transferencia de hipertextos.

        p.mb-5 Por su parte, el 
          strong https:// 
          | es un sistema de organización de datos que se basa en la vinculación de fragmentos textuales o gráficos de estos fragmentos y todos estos incluyen la mayoría de estas características:

        #pn
        PartesNavegador.mb-5

        p.mb-6 Un factor importante que conozca es que, para mantener la privacidad, por lo general los navegadores tienen maneras precisas de guardar cookies, enlaces web y el historial, que son datos que pueden ser descartados para optimizar el funcionamiento de los equipos. Así mismo, se posee una navegación que puede hacerse de incognito y por lo general, una página de inicio que funciona como buscador, la cual facilita la búsqueda de información.
          br
          br
          | Ya conociendo estos aspectos, 
          strong está en la capacidad de seleccionar qué navegador es el que desea utilizar.

        //- iframe.mb-6(
        //-   width='100%', 
        //-   height='600', 
        //-   src='https://www.youtube.com/embed/OUA-M4LqynA', 
        //-   frameborder='0', 
        //-   allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
        //-   allowfullscreen=''
        //- )

        //- iframe.mb-6(
        //-   width='100%', 
        //-   height='600', 
        //-   src='https://www.youtube.com/embed/OUA-M4LqynA', 
        //-   frameborder='0', 
        //-   allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
        //-   allowfullscreen=''
        //- )
        
        //- #t_1_1.header-ecored.title-full-width
        //-   h1 2.2  Buscadores

        //- iframe.mb-5(
        //-   width='100%', 
        //-   height='600', 
        //-   src='https://www.youtube.com/embed/OUA-M4LqynA', 
        //-   frameborder='0', 
        //-   allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
        //-   allowfullscreen=''
        //- )

        .row.mb-6
          .col-6
            p.h1 Para buscar servicios, información o imágenes se utiliza 
              span.texto-azul un buscador.
          .col-6
            p ¿Las brujas existen? ¿Es papá Noel real? ¿Por qué se casó Adonay? Pueden encontrar la respuesta a estas y a cualquier otra pregunta, por absurda o rara que parezca, usando un buscador como Google. ¿Les suena familiar?

        .header-ecored--b.mb-5
          h2 ¿Cómo funciona un motor de búsqueda?

        p De acuerdo con lo descrito por Simone (2019) en el portal web Noticias LTDA: el trabajo de los motores de búsqueda se puede dividir en tres fases: 
          strong análisis, catalogación y respuesta.

        .p-6
          h1 GRAFICO

        #t_1_1.header-ecored.title-full-width
          h1 2.2.1 ¿Qué son los buscadores Web?

        //- iframe.mb-5(
        //-   width='100%', 
        //-   height='600', 
        //-   src='https://www.youtube.com/embed/OUA-M4LqynA', 
        //-   frameborder='0', 
        //-   allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
        //-   allowfullscreen=''
        //- )

        .row.mb-6
          .col-6
            p.h1 A diario buscamos casi cualquier cosa
              strong.texto-azul.d-inline-block en internet.
          .col-6
            p Lo que conocemos como “Googlear” (o guglear), nos permite acceder a diversos tipos de información o recursos multimedia sea audio, video o imágenes, entre otros, dependiendo de la necesidad; pero, te has preguntado 
              i ¿cómo realizar una búsqueda exitosa en Google?

        .header-ecored--b.mb-5
          h2 2.2.2 ¿Cuáles son los más utilizados?

        p.mb-6 En internet se encuentra una gran variedad de buscadores, pero para ser más puntuales, se mencionarán algunos de los más usados en Colombia para el año 2020, donde según el portal web NETMARKETSHARE el servicio online de estadísticas sobre la distribución y el reparto del mercado de navegadores, sistemas operativos y buscadores en ordenadores personales, tabletas y teléfonos móviles, Google es el navegador más usado por los colombianos seguido de Baidu, DuckDuckGo, AOL, Bing, Ask, Yahoo!, Yandex, Qwant, Ecosia.
        
        .row.justify-content-center.mb-6
          .col-8
            img(src="@/assets/images/pages/tema2/img_23.svg")

        p.mb-5 Existen varias opciones de motores de búsqueda según el contenido que se quiera encontrar y cada uno de ellos cuenta con características y opciones que nos permiten acceder a esa información solicitada de manera efectiva, lo que nos lleva a preguntarnos ¿hay motores de búsqueda mejores que otros en internet?
          br
          br
          | A continuación conoceremos algunos de los buscadores 
          strong más conocidos.

        //- iframe.mb-6(
        //-   width='100%', 
        //-   height='600', 
        //-   src='https://www.youtube.com/embed/OUA-M4LqynA', 
        //-   frameborder='0', 
        //-   allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
        //-   allowfullscreen=''
        //- )
        
        #t_1_1_1.header-ecored--b.mb-5
          h2  2.2.3 Truncamientos y operadores booleanos

        p.mb-6 Existen varias opciones de motores de búsqueda según el contenido que se quiera encontrar y cada uno de ellos cuenta con características y opciones que nos permiten acceder a esa información solicitada de manera efectiva, lo que nos lleva a preguntarnos ¿hay motores de búsqueda mejores que otros en internet? A continuación, conoceremos algunos de los buscadores más conocidos:

        .row.justify-content-between.align-items-center.mb-6
          .col-5
            p.h1 
              strong Todos en algún momento hemos deseado saber cómo hacer 
                span.texto-azul.pr-2 búsquedas más eficientes
                | o de qué forma filtrar la información en las búsquedas que realizamos, así que ¡encontremos las respuestas!:
            p Cuando se utilizan motores de búsqueda para lo que sea que se necesite (investigación, curiosidades, elaborar un documento, encontrar una herramienta digital para satisfacer una necesidad), siempre en los resultados de búsqueda se encontrará información de sobra; por ejemplo, si busca la palabra gatos, en menos de 1 segundo podrán aparecer cerca de 412,000,000 resultados; al hallar tal magnitud de resultados tiene la posibilidad de utilizar una técnica para encontrar la información correcta en bases de datos y sitios web, obteniendo resultados que serán más exactos, la cual se denomina truncamiento.

          .col-6
            img(src="@/assets/images/pages/tema2/img_1.svg")

        #t_1_1_1.header-ecored--b.mb-5
          h2 ¿Qué es truncamiento?

        p Son operadores que permiten ampliar una búsqueda, se sitúan a la derecha o izquierda de un término sustituyendo uno o varios caracteres y se utilizan cuando es necesario localizar los términos derivados de la palabra a buscar: prefijos, sufijos, variantes léxicas, etc.

        .p-6
          h1 GRAFICO

        p Por ejemplo, el término 
          strong escue?a 
          | utilizado en una búsqueda de palabra clave bibliográfica obtiene bibliografías que contienen tanto el término 
          strong escuela 
          | como 
          strong escueta
          |; y polig???a permitirá encontrar bibliografías que contienen 
          strong poligamia 
          | o 
          strong políglota
          |, pero no poligráfica.
        
        p.mb-6
          i Tomado de la biblioteca digital de la Universidad de Alcalá (s.f.).

        #t_1_1_1.header-ecored--b.mb-5
          h2 ¿Qué son los operadores booleanos?

        p.mb-6 Los operadores booleanos se utilizan para crear estrategias de búsqueda en bases de datos y buscadores, permitiendo ser eficientes y filtrando los resultados de búsqueda a tan solo la información relevante bajo el contexto de la búsqueda.
          br
          br
          | Sus estrategias sirven para conectar palabras o frases dentro de un contexto. Por ejemplo, esto se da en una búsqueda con operadores booleanos como 
          strong AND, OR o NOT.
        
        .row.justify-content-center
          .col-10
            p 
              i Lo anterior se da al combinar las palabras clave de la búsqueda con los operadores, ya sea con uno o más de ellos, esto se hace para restringir o ampliar el rango de la búsqueda.
</template>

<script>
import LineaTiempo from './tema2/LineaTiempo'
import PartesNavegador from './tema2/PartesNavegador'
export default {
  name: 'Tema2',
  components: {
    LineaTiempo,
    PartesNavegador,
  },
  data: () => ({
    navedadoresData: [
      {
        img: require('@/assets/images/pages/tema2/ico4.png'),
        titulo: 'Google Chrome',
        texto: '1997',
      },
      {
        img: require('@/assets/images/pages/tema2/ico5.png'),
        titulo: 'Mozilla Firefox',
        texto: '2002',
      },
      {
        img: require('@/assets/images/pages/tema2/ico1.png'),
        titulo: 'Microsoft Edge',
        texto: '2015',
      },
      {
        img: require('@/assets/images/pages/tema2/ico2.png'),
        titulo: 'Safari',
        texto: '1997',
      },
      {
        img: require('@/assets/images/pages/tema2/ico3.png'),
        titulo: 'Opera',
        texto: '1995',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.navegadores
  display: flex
  padding-top: 50px
  &__item
    flex-grow: 1
    padding: 0 2%

    &__icono
      position: relative
      padding: 15%
      border-radius: 50%
      background: rgb(226,225,230)
      background: linear-gradient(135deg, rgba(226,225,230,1) 0%, rgba(255,255,255,1) 85%, rgba(255,255,255,1) 100%)
      box-shadow: 15px 15px 25px -10px rgba(0,0,0,0.4)
      margin-bottom: 10%
      transition: transform 0.3s ease-in-out

    &__texto
      display: flex
      justify-content: center
      transform: translateY(20px)
      transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out
      opacity: 0

    &:hover
      .navegadores
        &__item
          &__icono
            transform: scale(1.2) translateY(-10%)
          &__texto
            transform: translateY(0)
            opacity: 1
</style>
