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

        iframe.mb-6(
          width='100%', 
          height='600', 
          src='https://www.youtube.com/embed/-JVdH8ne-2s', 
          frameborder='0', 
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
          allowfullscreen=''
        )

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

        iframe.mb-6(
          width='100%', 
          height='600', 
          src='https://www.youtube.com/embed/eml0TxkJFIM', 
          frameborder='0', 
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
          allowfullscreen=''
        )

        #t_1_1_1.header-ecored--b.mb-5
          h2 2.1.3 ¿Cúales son los mas usados en internet?

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

        iframe.mb-6(
          width='100%', 
          height='600', 
          src='https://www.youtube.com/embed/24xhDJpGa6k', 
          frameborder='0', 
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
          allowfullscreen=''
        )

        .row.mb-6
          .col-6
            p.h1 Para buscar servicios, información o imágenes se utiliza 
              span.texto-azul un buscador.
          .col-6
            p ¿Las brujas existen? ¿Es papá Noel real? ¿Por qué se casó Adonay? Pueden encontrar la respuesta a estas y a cualquier otra pregunta, por absurda o rara que parezca, usando un buscador como Google. ¿Les suena familiar?

        .header-ecored--b.mb-5
          h2 ¿Cómo funciona un motor de búsqueda?

        p.mb-6 De acuerdo con lo descrito por Simone (2019) en el portal web Noticias LTDA: el trabajo de los motores de búsqueda se puede dividir en tres fases: 
          strong análisis, catalogación y respuesta.

        PestanasVerticales.mb-6

        #t_1_1.header-ecored.title-full-width
          h1 2.2.1 ¿Qué son los buscadores Web?

        iframe.mb-5(
          width='100%', 
          height='600', 
          src='https://www.youtube.com/embed/99G6_y2TZPo', 
          frameborder='0', 
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
          allowfullscreen=''
        )

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

        iframe.mb-6(
          width='100%', 
          height='600', 
          src='https://www.youtube.com/embed/dROvRuvnYd4', 
          frameborder='0', 
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
          allowfullscreen=''
        )
        
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

        #maomaomaomaoma.header-ecored--b.mb-5
          h2 ¿Qué es truncamiento?

        p.mb-6 Son operadores que permiten ampliar una búsqueda, se sitúan a la derecha o izquierda de un término sustituyendo uno o varios caracteres y se utilizan cuando es necesario localizar los términos derivados de la palabra a buscar: prefijos, sufijos, variantes léxicas, etc.

        CuadrosTruncamiento.mb-6

        BarraBusqueda.mb-5(texto="Truncamiento derecho (fortalece*) le permite recuperar variaciones a mano derecha de un término.")
        
        BarraBusqueda.mb-5(texto="Truncamiento izquierdo (*digital) le permite recuperar variaciones a mano izquierda de un término.")
        
        BarraBusqueda.mb-6(texto="“?” representa un solo carácter en una palabra a fin de obtener varias formas de esta.")

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
        
        .row.justify-content-center.mb-5
          .col-10
            p 
              i Lo anterior se da al combinar las palabras clave de la búsqueda con los operadores, ya sea con uno o más de ellos, esto se hace para restringir o ampliar el rango de la búsqueda.
        
        Boleanos.mb-2

        p Puede utilizar AND para buscar varios términos y que el resultado de la búsqueda incluya ambos términos así:

        BarraBusqueda.mb-5(texto="Arquitectura AND diseño")

        p El operador OR lo puede utilizar si quiere encontrar relaciones entre varios términos que desconoce, por ejemplo:

        BarraBusqueda.mb-5(texto="Café OR salud")

        p Con el operador NOT reducirá considerablemente los resultados de la búsqueda, ya que excluye un término, por ejemplo:

        BarraBusqueda.mb-6(texto="América NOT fútbol")

        .tarjeta-borde-amarillo.mb-6
          p.mb-0
            strong Nota: 
            | hay que tener presente que los anteriores no son los únicos operadores y que también se usan símbolos para mejorar la búsqueda.
            br
            br
            | Ahora que ya conoce algunos de los operadores y que no solo llegará como lo hacía antes de manera natural solo a escribir la consulta y filtrar entre los millones de páginas de información que necesitaba, recuerde que tiene a la mano unos operadores muy sencillos que le permitirán realizar consultas más precisas.

        .header-ecored--b.mb-5
          h2 2.2.4 Recomendaciones para la búsqueda de recursos

        BarraBusqueda(texto="¿Alguna vez les ha pasado que han intentado buscar una información muy específica")
        .mb-5
          .cuadro-dialogo--azul
            span.h3 pero los resultados difieren de lo que realmente se quiere buscar?

        p.mb-6 Cuando se realizan búsquedas en internet es importante tener en cuenta algunas recomendaciones que permitan obtener el resultado esperado y que sean realmente exitosas. ¿Qué se debe tener en cuenta?, podemos resumirlo en unos simples pasos:

        CuadroPasosA.mb-7

        .tarjeta-borde-amarillo.pb-5.mb-7
          p.mb-0 Los invitamos a conocer el sistema de bibliotecas SENA, un sitio muy completo donde se puede encontrar, tanto recursos digitales en línea suscritos por el SENA, como en acceso libre, en diferentes disciplinas (salud, agricultura, biología, legislatura, administración, emprendimiento, entre otros) y en diferentes formatos (texto, audio, video, imagen).
            br
            br
            | Recuerden que sus consultas solo estarán disponibles para la comunidad SENA y que, para ingresar, deben incluir su usuario y contraseña, que corresponde a su número de documento de identidad. Si lo desean, también pueden consultarlos a través de nuestra plataforma de descubrimiento IRIS, de manera centralizada encontrará infinidad de recursos de información que le serán útiles y podrá practicar estrategias de búsqueda: 

          .boton-spbresale
            .boton-spbresale__icono
              img(src="@/assets/images/pages/tema2/img_24.svg")

            a.h1(href="") Sistema de 
              strong Bibliotecas SENA

        #t_1_1_1.header-ecored--b.mb-5
          h2 2.2.5 Tipos de licencia, referencia y recomendaciones uso de recursos

        p.mb-6 Las páginas web que encontramos en internet están compuestas por imágenes, texto, animaciones, videos, sonidos, entre otros formatos. Todos estos contenidos digitales son creaciones de terceros y están sujetos a unas condiciones o limitaciones de uso, las cuales son definidas por su autor con la licencia elegida para ser publicada posteriormente. Esta licencia en su expresión básica las conoceremos como 
          strong Copyright y Copyleft.


        .row.align-items-end.justify-content-around
          .col-4.pb-4
            img(src="@/assets/images/pages/tema2/img_25.svg")
          .col-4.pb-4
            img(src="@/assets/images/pages/tema2/img_26.svg")
        
        .row.justify-content-around.mb-5
          .col-4
            .d-flex.justify-content-center.mb-4
              span.title-bg-yellow.h1.mb-0 Copyright
            p Este tipo de licencia limita la utilización del contenido digital, como también su modificación y distribución. Es una licencia restringida, en otras palabras, si un tercero desea utilizar el contenido requiere de autorización del autor y, en la mayoría de los casos, se paga por su uso.

          .col-4
            .d-flex.justify-content-center.mb-4
              span.title-bg-yellow.h1.mb-0 Copyleft
            p Los contenidos digitales que tienen este tipo de licencia permiten usar, copiar y redistribuir una obra y sus versiones derivadas simplemente reconociendo su autoría. En esencia, es el sistema opuesto al Copyright y no exige autorización del autor para su uso.

        .row.justify-content-center.mb-5
          .col-1
            img(src="@/assets/images/pages/tema2/img_27.svg")
          .col-6
            p.fs-6
              i Una de las licencias derivadas de Copyleft es la conocida como Creative Commons, se utiliza en todo tipo de contenidos en internet y la podemos identificar con el símbolo CC dentro de un círculo.

        .barra-completa-azul.mb-5
          span.h2.mb-0 Hagámoslo con un ejemplo

        p.mb-5 Supongamos que necesitamos un video sobre salud mental en tiempos de Covid-19 y que sea de distribución gratuita. Para eso, nos dirigimos a YouTube y realizamos los siguientes pasos: 

        CuadroPasosB

        .tarjeta-borde-amarillo.pb-5.mb-7
          p.mb-0 Algo muy importante que debemos hacer siempre es reconocer la autoría de este y cualquier contenido que esté ligado a la licencia CC, es lo único que se pide reconocer o, incluso, si es posible, hacer una donación a los creadores de contenido como incentivo y agradecimiento por todos esos maravillosos recursos digitales que nos brindan.

</template>

<script>
import LineaTiempo from './tema2/LineaTiempo'
import PartesNavegador from './tema2/PartesNavegador'
import PestanasVerticales from './tema2/PestanasVerticales'
import CuadrosTruncamiento from './tema2/CuadrosTruncamiento'
import BarraBusqueda from './tema2/BarraBusqueda'
import Boleanos from './tema2/boleanos'
import CuadroPasosA from './tema2/CuadroPasosA'
import CuadroPasosB from './tema2/CuadroPasosB'
export default {
  name: 'Tema2',
  components: {
    LineaTiempo,
    PartesNavegador,
    PestanasVerticales,
    CuadrosTruncamiento,
    BarraBusqueda,
    Boleanos,
    CuadroPasosA,
    CuadroPasosB,
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

.cuadro-dialogo
  &--azul
    width: fit-content
    padding: 10px 20px
    background-color: #35D2DF
    position: relative
    margin-top: 10px
    margin-left: 5%
    &::before
      content: ''
      position: absolute
      left: 60%
      top: -10px
      width: 20px
      height: 20px
      transform: rotate(45deg)
      background-color: #35D2DF

    span
      color: #fff

.boton-spbresale
  position: absolute
  bottom: 0
  left: 50%
  transform: translate(-50%,60%)
  background-color: #35D2DF
  width: fit-content
  padding: 15px 30px
  border-radius: 10px
  a
    color: #fff
  &__icono
    position: absolute
    width: 50px
    top: 80%
    left: 95%

.title-bg-yellow
  background-color: #FFA900
  padding: 10px 15px
  color: #fff

.barra-completa-azul
  padding: 15px 30px
  background-color: #35D2DF
  color: #fff
  text-align: center
</style>
