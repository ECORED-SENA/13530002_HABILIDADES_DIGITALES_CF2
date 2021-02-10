<template lang="pug">
#mainContent
  .container
    section#titulos
      .header-ecored
        h1
          | 1. Curso Identificar las herramientas y su intervenci&oacute;n en el desarrollo de los modelos y prototipos
      .header-ecored
        h2 1.1 T&iacute;tulo H2
      .header-ecored
        h3 1.1.1 T&iacute;tulo H3
      .header-ecored
        h4 1.1.1.1 T&iacute;tulo H4
      .header.my-md-5
        .header-body
          // Title
          h1.header-title T&iacute;tulo con separador
          // Subtitle
          p.header-subtitle Subt&iacute;tulo descriptivo
    #tipografia.header
      .header-body
        h1.header-title Tipograf&iacute;a base
        p.header-subtitle
          | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    .card
      .card-body
        .row
          .col-xl-6
            // Headings
            h1 h1. Bootstrap heading
            h2 h2. Bootstrap heading
            h3 h3. Bootstrap heading
            h4 h4. Bootstrap heading
            h5 h5. Bootstrap heading
            h6 h6. Bootstrap heading
          .col-xl-6
            // Text
            p
              | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            // Text
            p.text-muted Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
            // Text
            p
              a(href='#!') Link example
          // / .row
    #card
      // Header
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Cards
          // Subtitle
          p.header-subtitle Ejemplo para uso de tarjetas BS
      .card
        .card-body
          h3.card-title Card title
          p.card-text
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      hr.my-5
      .card-deck
        .card
          img.card-img-top(src='https://via.placeholder.com/230' alt='...')
          .card-body
            h3.card-title Card title
            p.card-text
              | This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            p.card-text
              small.text-muted Last updated 3 mins ago
        .card
          img.card-img-top(src='https://via.placeholder.com/230' alt='...')
          .card-body
            h3.card-title Card title
            p.card-text This card has supporting text below as a natural lead-in to additional content.
            p.card-text
              small.text-muted Last updated 3 mins ago
        .card
          img.card-img-top(src='https://via.placeholder.com/230' alt='...')
          .card-body
            h3.card-title Card title
            p.card-text
              | This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
            p.card-text
              small.text-muted Last updated 3 mins ago
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Card header
          // Subtitle
          p.header-subtitle Ejemplo para uso de card con cabezote.
      .card
        .card-header
          h3.card-header-title Card title
        .card-body
          p.card-text
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    #cardborder
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Card border bottom
          // Subtitle
          p.header-subtitle Ejemplo para uso de card con borde
      section.card-border-bottom
        .card
          .card-body
            p.card-text
              | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    #headerstep
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Header step
          // Subtitle
          p.header-subtitle Se recomienda el uso en listados de instrucciones o un paso a paso.
      .row.justify-content-between.align-items-start.mt-5
        .col-12.col-lg-6
          p.header-step
            span.header-step-number 01
            span.header-step-title
              strong La muestra debe tomarse dentro de las primeras 6 horas post mortem.
          hr
          p.header-step
            span.header-step-number 02
            span.header-step-title
              strong
              | La toma de la muestra deber&aacute; ser con hisopos en medio de transporte de viral (MTV) y los aspirados en soluci&oacute;n salina.
          hr
          p.header-step
            span.header-step-number 03
            span.header-step-title
              strong
              | Remitirlas de manera inmediata al Laboratorio de Salud P&uacute;blica Departamental o Distrital (LDSP).
          hr
          p.header-step
            span.header-step-number 04
            span.header-step-title
              strong
              | Dentro de las primeras 48 horas posterior a su recolecci&oacute;n, se deben conservar a una temperatura de refrigeraci&oacute;n entre -2 y 8&deg;C.
          hr
        .col-12.col-lg-6
          p.header-step
            span.header-step-number 05
            span.header-step-title
              strong
              | Si van a ser procesadas o enviadas al LDSP o al Instituto Nacional de Salud despu&eacute;s de las 48 horas de recolecci&oacute;n, se deben conservar congeladas a menos 70&deg;C.
          hr
          p.header-step
            span.header-step-number 06
            span.header-step-title
              strong
              | En los casos sin diagn&oacute;stico en los cuales se sospecha infecci&oacute;n por COVID-19, se hace obligatoria la aplicaci&oacute;n de todos los lineamientos de protecci&oacute;n y cuidados.
          hr
      .header
        .header-body
          // Subtitle
          p.header-subtitle
            | Para subt&iacute;tulos de parrafo. En el ejemplo se usa la clase .text-color-orange para darle un color naranja.
      p.header-step.my-5
        span.header-step-number.text-color-orange 01
        span.header-step-title
          strong
          | Como colocar un subt&iacute;tulo con header-step
    #cardimagen
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Card + Imagen + Header step
          // Subtitle
          p.header-subtitle Ejemplo para colocar una imagen en una card
      .card.mb-5
        img.card-img-top(src='assets/images/pages/ejemplos/imagenBanner.svg')
        .card-body
          p.header-step
            span.header-step-number 01
            span.header-step--title
              | Retirar y desechar en bolsa roja doble todos los elementos despu&eacute;s del deceso del paciente.
          p.header-step.my-5
            span.header-step-number 02
            span.header-step--title
              | El traslado interno del cad&aacute;ver deber&aacute; realizarse siguiendo la ruta establecida por el prestador de servicios de salud, garantizando las condiciones de bioseguridad sin poner en riesgo la comunidad hospitalaria, pacientes, familiares y usuarios.
    #cardvideo
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Card + Video Youtube
      .row.my-5
        .col
          .card
            .embed-responsive.embed-responsive-16by9
              iframe.embed-responsive-item(width='560' height='315' src='https://www.youtube.com/embed/HBgyl2vrLxw' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen='')
            .card-body.mt-0
              strong Informaci&oacute;n sobre el coronavirus | 
              | En diciembre de 2019 se detect&oacute; un grupo de casos de neumon&iacute;a en China, los investigadores encontraron que fue causado por un virus desconocido, ahora llamado el nuevo CORONAVIRUS o COVID-19. Acomp&aacute;&ntilde;anos a revisar lo que sabemos del nuevo virus.
    #headerfluid
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Header 
  .py-5(style='background-color:#E6E5E7')
    h3.text-center.mb-0 C&oacute;mo quitarse y c&oacute;mo ponerse el equipo de protecci&oacute;n personal.
    p.text-center.mb-0 Infograf&iacute;as de la OPS.
  .container
    #headerarrow
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Header Arrow 
  .header-arrow.my-5
    h3.text-center C&oacute;mo quitarse y c&oacute;mo ponerse el equipo de protecci&oacute;n personal.
    p.text-brand-color-light.text-center.my-2 Infograf&iacute;as de la OPS.
  .container
    .header.mt-md-5
      .header-body
        // Title
        h1.header-title Header Arrow Container
    .header-arrow.my-5
      h3.text-center C&oacute;mo quitarse y c&oacute;mo ponerse el equipo de protecci&oacute;n personal.
      p.text-brand-color-light.text-center.my-2 Infograf&iacute;as de la OPS.
    #jumbotron
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Jumbotron
      .jumbotron
        p
          | El duelo es un proceso que se lleva a cabo despu&eacute;s de una p&eacute;rdida, ya sea de una persona querida, de un empleo, de una relaci&oacute;n, de un objeto etc. Es un proceso necesario, universal y doloroso. Lo importante es integrarlo en la vida y restablecer una relaci&oacute;n con &eacute;l.
      .jumbotron.bg-danger
        .row.justify-content-center.align-items-center
          .col-auto
            img.img-fluid(src='assets/images/pages/ejemplos/modulo-7/icon-03.svg' style='max-width: 120px')
          .col-10
            p.text-white.text-center.mb-0
              | El duelo es un proceso que se lleva a cabo despu&eacute;s de una p&eacute;rdida, ya sea de una persona querida, de un empleo, de una relaci&oacute;n, de un objeto etc. Es un proceso necesario, universal y doloroso. Lo importante es integrarlo en la vida y restablecer una relaci&oacute;n con &eacute;l.
      .jumbotron
        .row.justify-content-center.align-items-center
          .col-auto
            img.img-fluid.mb-3.mb-md-0(src='assets/images/pages/ejemplos/iconos/icon_superar-duelo.svg' style='max-width: 120px')
          .col-10
            p.mb-0
              | El duelo es un proceso que se lleva a cabo despu&eacute;s de una p&eacute;rdida, ya sea de una persona querida, de un empleo, de una relaci&oacute;n, de un objeto etc. Es un proceso necesario, universal y doloroso. Lo importante es integrarlo en la vida y restablecer una relaci&oacute;n con &eacute;l.
      .jumbotron
        .row.justify-content-center.align-items-center
          .col-auto
            img.img-fluid.mb-3.mb-md-0(src='assets/images/pages/ejemplos/iconos/icon_superar-duelo.svg' style='max-width: 120px')
          .col-10
            h3 T&iacute;tulo elemento
            hr.border-color-primary.border-2
            p.mb-0
              | El duelo es un proceso que se lleva a cabo despu&eacute;s de una p&eacute;rdida, ya sea de una persona querida, de un empleo, de una relaci&oacute;n, de un objeto etc. Es un proceso necesario, universal y doloroso. Lo importante es integrarlo en la vida y restablecer una relaci&oacute;n con &eacute;l.
      .row.justify-content-center.align-items-center
        .jumbotron.col-12.col-md-8.bg-white
          p.header-step
            span.header-step-number 01
          .row.justify-content-center.align-items-center
            .col-auto
              img.img-fluid.mb-3.mb-md-0(src='assets/images/pages/ejemplos/modulo-3/a1.svg' style='max-width: 140px')
            .col-8
              p
                | Usar mascarilla respiratoria N 95 y guantes para trabajo pesado (guantes de caucho), lavarlos con jab&oacute;n l&iacute;quido despu&eacute;s de cada procedimiento y permitir su secado.
    #cardavatartop
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Card + Avatar Top
      section.pasos-protocolo.my-5.pt-5
        .row.justify-content-center.mt-5
          .col-12.col-md-4.my-6.my-md-0
            .card.bg-brand-color-light
              .card-body.text-center
                .avatar.avatar-super.card-avatar.card-avatar-top
                  img.avatar-img(src='assets/images/pages/ejemplos/iconos/icon_sintomas_01.svg')
                h4 Sintoma
                p
                  | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          .col-12.col-md-4.my-6.my-md-0
            .card
              .card-body.text-center
                .avatar.avatar-super.card-avatar.card-avatar-top
                  img.avatar-img(src='assets/images/pages/ejemplos/iconos/icon_sintomas_01.svg')
                h4 Sintoma
                p
                  | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          .col-12.col-md-4.mt-6.my-md-0
            .card
              .card-body.text-center
                .avatar.avatar-super.card-avatar.card-avatar-top
                  img.avatar-img(src='assets/images/pages/ejemplos/iconos/icon_sintomas_01.svg')
                h4 Sintoma
                p
                  | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      section.card-border-bottom.pt-md-5
        .row.justify-content-center.mt-5.no-margin
          .col-12.col-md-5.mb-5.mr-md-4.my-5
            .card
              .card-body.text-center
                .avatar.avatar-xxl.card-avatar.card-avatar-top
                  img.avatar-img.rounded-circle.border.border-card.border-4(src='assets/images/pages/ejemplos/modulo-3/d1.svg')
                p.header-step.flex-column.justify-content-center.align-items-center
                  span.header-step-number 01
                  span.header-step--title
                    strong Autopsia verbal:
                    |  documentar las circunstancias que rodearon el deceso y establecer las posibles causas de muerte.
          .col-12.col-md-5.mb-5.p-0.ml-md-4.my-5
            .card
              .card-body.text-center
                .avatar.avatar-xxl.card-avatar.card-avatar-top
                  img.avatar-img.rounded-circle.border.border-card.border-4(src='assets/images/pages/ejemplos/modulo-3/d2.svg')
                p.header-step.flex-column.justify-content-center.align-items-center
                  span.header-step-number 02
                  span.header-step--title
                    strong Toma de muestras:
                    |  que sean procedentes y la remisi&oacute;n inmediata al Laboratorio de Salud P&uacute;blica.
        .row.justify-content-center
          .card.col-12.col-md-5.p-0.mr-md-4.mt-5
            .card-body.text-center
              .avatar.avatar-xxl.card-avatar.card-avatar-top
                img.avatar-img.rounded-circle.border.border-card.border-4(src='assets/images/pages/ejemplos/modulo-3/d3.svg')
              p.header-step
                span.header-step-number 03
                span.header-step--title
                  strong Emisi&oacute;n del certificado de defunci&oacute;n y embalaje del cad&aacute;ver
                  |  para entrega al servicio funerario evitando as&iacute; el traslado del cad&aacute;ver al prestador de servicios de salud o al sistema judicial (art&iacute;culo 2.8.9.7 del Decreto 780 de 2016).
          .card.col-12.col-md-5.p-0.ml-md-4.mt-5
            .card-body.text-center
              .avatar.avatar-xxl.card-avatar.card-avatar-top
                img.avatar-img.rounded-circle.border.border-card.border-4(src='assets/images/pages/ejemplos/modulo-3/d4.svg')
              p.header-step
                span.header-step-number 04
                span.header-step--title
                  strong Alistamiento del cad&aacute;ver:
                  |  ser&aacute; realizado en el mismo sitio del deceso, por parte del personal de salud autorizado para la manipulaci&oacute;n del cad&aacute;ver. Deber&aacute; contar con los elementos de protecci&oacute;n personal y seguir los procedimientos de bioseguridad establecidos en este documento, as&iacute; como los elementos necesarios para la toma de muestras, bolsas para el embalaje e insumos para el manejo de residuos entre otros.
    #cardavatarleft
      .header.my-md-5
        .header-body
          // Title
          h1.header-title Card + Avatar Left
          // Subtitle
          p.header-subtitle
            | Ejemplo para colocar un listado con iconos. Clase .card-media. Recuerde que puede darle un color de fondo usando .bg-brand-color-light &oacute; .bg-brand-color-dark. Por defecto el componente tiene color azul claro.
      .row.justify-content-center.mt-5
        .col-10.col-md-8
          .card-media
            .card-media__body
              figure.card__figure
                img.img-fluid(src='assets/images/pages/ejemplos/modulo-7/icon-01.svg')
              p.card__copy
                span
                  | Salpicadura de fluidos biol&oacute;gicos o secreciones respiratorias que comprometan la membrana de los ojos, boca o nariz ola piel lastimada del trabajador.
        .col-10.col-md-8
          .card-media.bg-brand-color-light
            .card-media__body
              figure.card__figure
                img.img-fluid(src='assets/images/pages/ejemplos/modulo-7/icon-01.svg')
              p.card__copy
                span
                  | Salpicadura de fluidos biol&oacute;gicos o secreciones respiratorias que comprometan la membrana de los ojos, boca o nariz ola piel lastimada del trabajador.
        .col-10.col-md-8
          .card-media.bg-brand-color-dark
            .card-media__body
              figure.card__figure
                img.img-fluid(src='assets/images/pages/ejemplos/modulo-7/icon-02.svg')
              p.card__copy
                span
                  | Pinchazo o cortadura con superficies afiladas en contacto con material contaminado con fluidos biol&oacute;gicos o secreciones respiratorias.
      hr.mt-5
      .p-5
      .header.my-md-5
        .header-body
          // Title
          h1.header-title Card + Avatar Left (Colores personalizados)
          // Subtitle
          p.header-subtitle
            | Ejemplo para colocar un listado con iconos. Clase .card-media usando la etiqueta style para colores personalizados de fondo
        .row.justify-content-center.my-5
          .col-10.col-md-8
            .card-media(style='background: #FEF8A6;')
              .card-media__body
                figure.card__figure
                  img.img-fluid(src='assets/images/pages/ejemplos/modulo-7/imgP01.svg')
                p.card__copy
                  span
                    strong Grupo de riesgo 1:
                    br
                    | Microorganismos con m&iacute;nimo riesgo individual y colectivo con pocas probabilidades de causar enfermedades en humanos o en animales. Incluye aquellos microorganismos, bacterias, hongos, virus y par&aacute;sitos, que no causan enfermedades a trabajadores de la salud y animales.
          .col-10.col-md-8
            .card-media(style='background: #FDDFB1;')
              .card-media__body
                figure.card__figure
                  img.img-fluid(src='assets/images/pages/ejemplos/modulo-7/imgP02.svg')
                p.card__copy
                  span
                    strong Grupo de riesgo 2:
                    br
                    | Microorganismos con moderado riesgo individual y riesgo comunitario limitado, incluye pat&oacute;genos que pueden causar enfermedades a humanos o animales, pero que bajo condiciones normales no producen riesgos serios a trabajadores de la salud, la comunidad, los recursos naturales o el medioambiente. Existen medidas eficaces y el riesgo de propagaci&oacute;n es limitado.
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Imagen + Card 
      .row.align-items-center.justify-content-center.my-5
        .col-12.col-md-10
          article.custom-item.d-flex.align-items-center.flex-column.flex-md-row
            img.custom-item-img.my-2(src='assets/images/pages/ejemplos/iconos/icon1.svg')
            .custom-item-info.card-border-bottom.my-2
              .card.mb-0(style='border-color: #E3DAC6')
                .card-body
                  h3.card-title Cuchillas
                  p
                    | Es la herramienta que permite realizar el corte de los moldes y de las piezas de cuero y/o sint&eacute;tico. Debe estar afilada para lograr un buen corte, tanto en la molder&iacute;a como en el material.
      .row.align-items-center.justify-content-center.my-5
        .col-12.col-md-10
          article.custom-item.d-flex.align-items-center.flex-column.flex-md-row
            img.custom-item-img.my-2(src='assets/images/pages/ejemplos/iconos/icon1.svg')
            .custom-item-info.card-border-bottom.my-2
              .card.mb-0(style='border-color: #E3DAC6')
                .card-body
                  h3.card-title Cuchillas
                  p
                    | Es la herramienta que permite realizar el corte de los moldes y de las piezas de cuero y/o sint&eacute;tico. Debe estar afilada para lograr un buen corte, tanto en la molder&iacute;a como en el material.
    #medialink
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Bot&oacute;n enlace a recursos externos
        section.my-5
          a.media-link(href='media/ejemplos/documento.pdf' target='_blank')
            img.media-link-icon(src='assets/images/icons/icon_pdf.svg' alt='')
            .media-link-title
              p
                strong Anexo
                | . Consideraciones generales de tratamiento cl&iacute;nico del paciente con COVID-19 en el servicio de urgencias
        section.my-5
          p
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          a.media-link(href='media/ejemplos/documento.pdf' target='_blank')
            img.media-link-icon(src='assets/images/icons/icon_pdf.svg' alt='')
            .media-link-title
              p
                strong Anexo
                | . T&iacute;tulo del documento
    #question
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Question Header (Number)
      section.my-5
        .card
          .card-body
            .question
              .question-header
                .question-number
                  span 1.
                .question-title
                  span &iquest; Cu&aacute;l es el objetivo que pretende la telesalud ?
              .question-body
                p
                  | La Telesalud busca mejorar el acceso, la resolutividad, la continuidad y la calidad de la atenci&oacute;n cl&iacute;nica, impactar la salud p&uacute;blica y la educaci&oacute;n para la salud mediante el uso de las TIC.
            .question
              .question-header
                .question-number
                  span 2.
                .question-title
                  span
                    | &iquest;Los usuarios pueden sentirse tranquilos y seguros cu&aacute;ndo sean atendidos con actividades de telesalud?
              .question-body
                p
                  | Si. Todos los colombianos que sean atendidos con actividades de Telesalud como Teleorientaci&oacute;n en salud y Teleapoyo, porque se garantizan los siguientes principios:
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Question Header (Icon)
      section.my-5
        .card
          .card-body
            .question.mt-2
              .question-header
                .question-number
                  i.fa.fa-lg.fa-tint
                .question-title
                  span Toma de muestras para un correcto diagn&oacute;stico de los virus respiratorios.
              .question-body
                p.mb-5
                  | Para los casos de muerte hospitalaria o domiciliaria, por un presunto cuadro respiratorio no diagnosticado, el prestador de servicios de salud debe realizar la toma de muestras de secreci&oacute;n respiratoria con aspirado nasofar&iacute;ngeo e hisopado nasofaringeo y orofaringeo.
                .row.justify-content-between.align-items-start.mt-5
                  .col-12.col-lg-6
                    p.header-step
                      span.header-step-number 01
                      span.header-step-title
                        strong La muestra debe tomarse dentro de las primeras 6 horas postmortem.
                    hr
                    p.header-step
                      span.header-step-number 02
                      span.header-step-title
                        strong
                          | La toma de la muestra deber&aacute; ser con hisopos en medio de transporte de viral (MTV) y los aspirados en soluci&oacute;n salina.
                    hr
                    p.header-step
                      span.header-step-number 03
                      span.header-step-title
                        strong
                          | Remitirlas de manera inmediata al Laboratorio de Salud P&uacute;blica Departamental o Distrital (LDSP).
                    hr
                    p.header-step
                      span.header-step-number 04
                      span.header-step-title
                        strong
                          | Dentro de las primeras 48 horas posterior a su recolecci&oacute;n, se deben conservar a una temperatura de refrigeraci&oacute;n entre -2 y 8&deg;C.
                    hr
                  .col-12.col-lg-6
                    p.header-step
                      span.header-step-number 05
                      span.header-step-title
                        strong
                          | Si van a ser procesadas o enviadas al LDSP o al Instituto Nacional de Salud despu&eacute;s de las 48 horas de recolecci&oacute;n, se deben conservar congeladas a menos 70&deg;C.
                    hr
                    p.header-step
                      span.header-step-number 06
                      span.header-step-title
                        strong
                          | En los casos sin diagn&oacute;stico en los cuales se sospecha infecci&oacute;n por COVID-19, se hace obligatoria la aplicaci&oacute;n de todos los lineamientos de protecci&oacute;n y cuidados.
                    hr
    #tabsecored
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Nav Tab
          p.header-subtitle Navegaci&oacute;n por tabs.
      .card
        .card-body
          p
            | Se debe garantizar una comunicaci&oacute;n correcta que permita transmitir la informaci&oacute;n de la infecci&oacute;n por COVID-19 sin generar p&aacute;nico, pero tampoco infunda m&aacute;s tranquilidad de la necesaria. La Organizaci&oacute;n Panamericana de la Salud en atenci&oacute;n a esta necesidad establece estos principios fundamentales (OPS, 2020c):
          nav.nav-tab-ecored.my-5
            #nav-tab.nav.nav-tabs(role='tablist')
              a#nav-01-tab.nav-item.nav-link.active(data-toggle='tab' href='#nav-01' role='tab' aria-controls='nav-01' aria-selected='true')
                strong Confianza y credibilidad
              a#nav-02-tab.nav-item.nav-link(data-toggle='tab' href='#nav-02' role='tab' aria-controls='nav-02' aria-selected='false')
                strong Anuncio temprano
              a#nav-03-tab.nav-item.nav-link(data-toggle='tab' href='#nav-03' role='tab' aria-controls='nav-03' aria-selected='false')
                strong Transparencia
            #nav-tabContent.tab-content
              #nav-01.tab-pane.fade.show.active(role='tabpanel' aria-labelledby='nav-01-tab')
                ul.list-unstyled
                  li.mb-4
                    i.fa.fa-angle-right.fa-lg.mr-3
                    | Evite decir que todo ir&aacute; bien si, de hecho, no se sabe si ser&aacute; as&iacute;. Diga lo que sabe en ese momento y lo que la instituci&oacute;n de salud est&aacute; haciendo al respecto.
                  li.mb-4
                    i.fa.fa-angle-right.fa-lg.mr-3
                    | Es importante comunicar al p&uacute;blico lo que puede hacer (por ejemplo: &ldquo;l&aacute;vese las manos&rdquo;, &ldquo;tosa o estornude en el lado interno del codo&rdquo;).
                  li.mb-4
                    i.fa.fa-angle-right.fa-lg.mr-3
                    | No minimice la preocupaci&oacute;n de la poblaci&oacute;n. Reconozca el temor de la gente. Las personas pueden estar atemorizadas, lo cual es una reacci&oacute;n saludable.
                  li.mb-4
                    i.fa.fa-angle-right.fa-lg.mr-3
                    | Reconozca las equivocaciones. Si existe un error, corr&iacute;jalo r&aacute;pidamente.
              #nav-02.tab-pane.fade(role='tabpanel' aria-labelledby='nav-02-tab')
                ul.list-unstyled
                  li.mb-4
                    i.fa.fa-angle-right.fa-lg.mr-3
                    | El anuncio temprano es muestra de liderazgo, genera confianza, reduce los rumores y, en consecuencia, puede salvar vidas. En el denominado &ldquo;primer anuncio&rdquo; se debe indicar lo que se sabe, lo que esto significa y lo que se est&aacute; haciendo.
                  li.mb-4
                    i.fa.fa-angle-right.fa-lg.mr-3
                    | Los anuncios tard&iacute;os dan lugar a especulaciones, lo que hace que la gente se pregunte hasta qu&eacute; punto es realmente mala la situaci&oacute;n.
                  li.mb-4
                    i.fa.fa-angle-right.fa-lg.mr-3
                    | Evite la estigmatizaci&oacute;n. Podr&iacute;a presentarse una discriminaci&oacute;n y por tanto dar lugar a que los trabajadores no admitan que tienen sintomatolog&iacute;a asociada.
              #nav-03.tab-pane.fade(role='tabpanel' aria-labelledby='nav-03-tab')
                ul.list-unstyled
                  li.mb-4
                    i.fa.fa-angle-right.fa-lg.mr-3
                    | Sea transparente. Aseg&uacute;rese de que los criterios para tomar ciertas decisiones est&eacute;n disponibles. Por ejemplo, el criterio para reubicar a cierto grupo de trabajadores porque est&aacute;n en mayor exposici&oacute;n y en condici&oacute;n vulnerable.
                  li.mb-4
                    i.fa.fa-angle-right.fa-lg.mr-3
                    | Disemine informaci&oacute;n oportuna y transparente, t&eacute;cnicamente correcta y basada en evidencias.
                  li.mb-4
                    i.fa.fa-angle-right.fa-lg.mr-3
                    | Explique el proceso decisorio (por ejemplo: &ldquo;Creemos que hacer p&uacute;blico el nombre de la persona supondr&iacute;a estigmatizar a esa persona y a su familia&rdquo;).
                  li.mb-4
                    i.fa.fa-angle-right.fa-lg.mr-3
                    | Hable acerca de los riesgos, los beneficios y los retos.
    #gallery
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Galer&iacute;a
      p Click en cada imagen para visualizar el efecto de zoom y la galer&iacute;a con JS.
      .row.text-center.text-lg-left
        .col-lg-3.col-md-4.col-6
          a.d-block.mb-4.h-100(href='assets/images/pages/ejemplos/700x350.png' data-fancybox='gallery' data-caption='Espacio para la descripción de la foto' data-imagen='assets/images/pages/ejemplos/700x350.png')
            img.img-fluid.img-thumbnail(src='assets/images/pages/ejemplos/700x350.png' alt='')
        .col-lg-3.col-md-4.col-6
          a.d-block.mb-4.h-100(href='assets/images/pages/ejemplos/700x350.png' data-fancybox='gallery' data-caption='Espacio para la descripción de la foto' data-imagen='assets/images/pages/ejemplos/700x350.png')
            img.img-fluid.img-thumbnail(src='assets/images/pages/ejemplos/700x350.png' alt='')
        .col-lg-3.col-md-4.col-6
          a.d-block.mb-4.h-100(href='assets/images/pages/ejemplos/700x350.png' data-fancybox='gallery' data-caption='Espacio para la descripción de la foto' data-imagen='assets/images/pages/ejemplos/700x350.png')
            img.img-fluid.img-thumbnail(src='assets/images/pages/ejemplos/700x350.png' alt='')
        .col-lg-3.col-md-4.col-6
          a.d-block.mb-4.h-100(href='assets/images/pages/ejemplos/700x350.png' data-fancybox='gallery' data-caption='Espacio para la descripción de la foto' data-imagen='assets/images/pages/ejemplos/700x350.png')
            img.img-fluid.img-thumbnail(src='assets/images/pages/ejemplos/700x350.png' alt='')
    #bscomponentes
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Componentes Bootstrap
      // Header
      .header.mt-md-5
      .header-body
        // Title
        h2.header-title Navs
        // Subtitle
        p.header-subtitle
          | Please read the 
          a(target='_blank' href='http://getbootstrap.com/docs/4.1/components/navs/')
          | official Bootstrap documentation for a full list of options.
      .card.mt-4
        .card-body
          .row
            .col-3
              #v-pills-tab.nav.flex-column.nav-pills(role='tablist' aria-orientation='vertical')
                a#v-pills-home-tab.nav-link.active(data-toggle='pill' href='#v-pills-home' role='tab' aria-controls='v-pills-home' aria-selected='true') Home
                a#v-pills-profile-tab.nav-link(data-toggle='pill' href='#v-pills-profile' role='tab' aria-controls='v-pills-profile' aria-selected='false') Profile
                a#v-pills-messages-tab.nav-link(data-toggle='pill' href='#v-pills-messages' role='tab' aria-controls='v-pills-messages' aria-selected='false') Messages
                a#v-pills-settings-tab.nav-link(data-toggle='pill' href='#v-pills-settings' role='tab' aria-controls='v-pills-settings' aria-selected='false') Settings
            .col-9
              #v-pills-tabContent.tab-content
                #v-pills-home.tab-pane.fade.show.active(role='tabpanel' aria-labelledby='v-pills-home-tab') ...
                #v-pills-profile.tab-pane.fade(role='tabpanel' aria-labelledby='v-pills-profile-tab') ...
                #v-pills-messages.tab-pane.fade(role='tabpanel' aria-labelledby='v-pills-messages-tab') ...
                #v-pills-settings.tab-pane.fade(role='tabpanel' aria-labelledby='v-pills-settings-tab') ...
    #buttonav
      hr
      // Heading
      h2.mb-2 Button + nav
      // Subheading
      p.text-muted.mb-4 The basic page header extended with a button and a tabbed navigation.
      // Card
      .card
        .card-body
          .header
            .header-body
              .row.align-items-end
                .col
                  // Pretitle
                  h6.header-pretitle Members
                  // Title
                  h1.header-title Dianna Smiley
                .col-auto
                  // Buttom
                  a.btn.btn-primary(href='#!') Subscribe
                // / .row
            .row
              .col-12
                // Nav
                ul.nav.nav-tabs.header-tabs
                  li.nav-item
                    a.nav-link.text-center.active(href='#!') Daily
                  li.nav-item
                    a.nav-link.text-center(href='#!') Weekly
                  li.nav-item
                    a.nav-link.text-center(href='#!') Monthly
    #collapsable
      // Header
      .header.mt-md-5
        .header-body
          // Title
          h2.header-title Collapsable
          // Subtitle
          p.header-subtitle
            | Please read the 
            a(target='_blank' href='http://getbootstrap.com/docs/4.1/components/navs/') official Bootstrap documentation
            |  for a full list of options.
      #accordionExample.accordion
        .card
          #headingOne.card-header
            h2.mb-0
              button.btn.btn-link(type='button' data-toggle='collapse' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne')
                h2.mb-0.collapsable-title Collapsible Group Item #1
          #collapseOne.collapse.show(aria-labelledby='headingOne' data-parent='#accordionExample')
            .card-body
              | Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
        .card
          #headingTwo.card-header
            h2.mb-0
              button.btn.btn-link.collapsed(type='button' data-toggle='collapse' data-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo')
                h2.mb-0.collapsable-title Collapsible Group Item #2
          #collapseTwo.collapse(aria-labelledby='headingTwo' data-parent='#accordionExample')
            .card-body
              | Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
        .card
          #headingThree.card-header
            h2.mb-0
              button.btn.btn-link.collapsed(type='button' data-toggle='collapse' data-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree')
                h2.mb-0.collapsable-title Collapsible Group Item #3
          #collapseThree.collapse(aria-labelledby='headingThree' data-parent='#accordionExample')
            .card-body
              | Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
    #slider
      // Header
      .header.mt-md-5
        .header-body
          // Title
          h2.header-title Slider
      #carouselExampleIndicators.carousel.slide(data-ride='carousel')
        ol.carousel-indicators
          li.active(data-target='#carouselExampleIndicators' data-slide-to='0')
          li(data-target='#carouselExampleIndicators' data-slide-to='1')
          li(data-target='#carouselExampleIndicators' data-slide-to='2')
          li(data-target='#carouselExampleIndicators' data-slide-to='3')
          li(data-target='#carouselExampleIndicators' data-slide-to='4')
        .carousel-inner
          .carousel-item.active
            img.d-block.w-100(src='assets/images/pages/ilustraciones/sociedades_mercantiles-01.png' alt='0')
          .carousel-item
            img.d-block.w-100(src='assets/images/pages/ilustraciones/sociedades_mercantiles-02.png' alt='1')
          .carousel-item
            img.d-block.w-100(src='assets/images/pages/ilustraciones/sociedades_mercantiles-03.png' alt='2')
          .carousel-item
            img.d-block.w-100(src='assets/images/pages/ilustraciones/sociedades_mercantiles-04.png' alt='3')
          .carousel-item
            img.d-block.w-100(src='assets/images/pages/ilustraciones/sociedades_mercantiles-05.png' alt='4')
        a.carousel-control-prev(href='#carouselExampleIndicators' role='button' data-slide='prev')
          span.carousel-control-prev-icon(aria-hidden='true')
          span.sr-only Previous
        a.carousel-control-next(href='#carouselExampleIndicators' role='button' data-slide='next')
          span.carousel-control-next-icon(aria-hidden='true')
          span.sr-only Next 
    #tables
      // Header
      .header.mt-md-5
        .header-body
          // Title
          h1.header-title Tablas
      table.table.table-nowrap
        thead
          tr
            th(scope='col') #
            th(scope='col') First
            th(scope='col') Last
            th(scope='col') Handle
            th(scope='col') Decription
        tbody
          tr
            th(scope='row') 1
            td Mark
            td Otto
            td @mdo
            td Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          tr
            th(scope='row') 1
            td Mark
            td Otto
            td @mdo
            td Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          tr
            th(scope='row') 1
            td Mark
            td Otto
            td @mdo
            td Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          tr
            th(scope='row') 1
            td Mark
            td Otto
            td @mdo
            td Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    #lists
      // Header
      .header.mt-md-5
        .header-body
        // Title
        h1.header-title Lists
        // Subtitle
        p.header-subtitle
          | List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within. Please read the 
          a(target='_blank' href='http://getbootstrap.com/docs/4.1/components/list-group/')
          | official Bootstrap documentation for a full list of options.
      // Card
      .card
        .card-body
          // List group
          ul.list-group
            li.list-group-item.active Cras justo odio
            li.list-group-item Dapibus ac facilisis in
            li.list-group-item Morbi leo risus
            li.list-group-item Porta ac consectetur ac
            li.list-group-item.d-flex.justify-content-between.align-items-center
              | Morbi leo risus 
              span.badge.badge-primary.badge-pill 1
          // List group
          .list-group.mt-5
            a.list-group-item.list-group-item-action.active(href='#!') Cras justo odio
            a.list-group-item.list-group-item-action(href='#!') Dapibus ac facilisis in
            a.list-group-item.list-group-item-action(href='#!') Morbi leo risus
            a.list-group-item.list-group-item-action(href='#!') Porta ac consectetur ac
            a.list-group-item.list-group-item-action.d-flex.justify-content-between.align-items-center(href='#!')
              | Morbi leo risus 
              span.badge.badge-primary.badge-pill 1
</template>

<script>
export default {
  name: 'Tema1',
}
</script>

<style lang="sass" scoped></style>
