export const global = {
  tituloPrincipal: 'Módulo 2. Navegadores y buscadores',
  subtituloPrincipal:
    'Desarrollo de habilidades digitales para la gestión de la información',
  descripcionCurso:
    'Este módulo aborda conceptos básicos relacionados con los dispositivos usados para navegar en internet, así como la influencia que tiene el uso de las tecnologías de información y comunicación - TIC en diferentes contextos',
  imagen: require('@/assets/images/pages/tema2/img_21.svg'),
}

export const desarrolloDeContenidos = [
  // {
  //   type: 'play',
  //   title: 'Introducción',
  //   route: 'introduccion',
  // },
  {
    type: '2',
    title: 'Empezando el aprendizaje, dispositivos y TIC',
    route: 'curso',
  },
  {
    type: 'question',
    title: 'Actividad didáctica',
    route: 'actividad',
  },
]

export const menuPrincipal = {
  menu: [
    {
      icon: 'fa fa-home',
      title: 'Volver al inicio',
      routeName: 'inicio',
    },
    // {
    //   icon: 'fa fa-play-circle',
    //   title: 'Introduccion',
    //   routeName: 'introduccion',
    // },
    {
      routeName: 'tema1',
      icon: 'fa fa-play-circle',
      title: '2. Empezando el aprendizaje, dispositivos y TIC',
      tags: [
        'Navegadores',
        'Buscadores',
        'Truncamiento',
        'OperadoresBooleanos',
        'Digital',
      ],
      submenu: [
        {
          icon: 'fa fa-file-text',
          title: '2.1 Internet',
          hash: 't_2_1',
        },
        {
          icon: 'fa fa-file-text',
          title: '2.1.1 ¿Qué son los navegadores?',
          hash: 't_2_1_1',
        },
        {
          icon: 'fa fa-file-text',
          title: '2.2 Navegadores',
          hash: 't_2_2',
        },
        {
          icon: 'fa fa-file-text',
          title:
            '2.2.1 ¿Cuáles son los navegadores más utilizados en Internet?',
          hash: 't_2_2_1',
        },
        {
          icon: 'fa fa-file-text',
          title: '2.3 Buscadores',
          hash: 't_2_3',
        },
        {
          icon: 'fa fa-file-text',
          title: '2.3.1 ¿Cuáles son los buscadores más utilizados?',
          hash: 't_2_3_1',
        },
        {
          icon: 'fa fa-file-text',
          title: '2.3.2 Truncamientos y operadores booleanos',
          hash: 't_2_3_2',
        },
        {
          icon: 'fa fa-file-text',
          title: '2.3.3 Recomendaciones para la búsqueda de recursos',
          hash: 't_2_3_3',
        },
        {
          icon: 'fa fa-file-text',
          title:
            '2.3.4 Tipos de licencia, referencias y recomendaciones para el uso de recursos',
          hash: 't_2_3_4',
        },
      ],
    },
    {
      icon: 'fa fa-question-circle',
      title: 'Actividad didáctica',
      routeName: 'actividad',
    },
  ],
  subMenu: [
    {
      icon: 'fa fa-sort-alpha-asc',
      title: 'Glosario',
      routeName: 'glosario',
    },
    // {
    //   icon: 'fa fa-folder-open',
    //   title: 'Material complementario',
    //   routeName: 'complementario',
    // },
    {
      icon: 'fa fa-book',
      title: 'Referencias bibliográficas',
      routeName: 'referencias',
    },
    {
      icon: 'fa fa-download',
      title: 'Descargar material',
      download: 'downloads/material.zip',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Atzori, L., Iera, A. y Morabito, G., (2017) Understanding the internet of things: Definition, Potentials, And Societal Role of a Fast Evolving Paradigm',
    enlace: 'https://doi.org/10.1016/j.adhoc.2016.12.004',
    tituloenlace: 'Ad Hoc Networks, 56, 122-140.',
  },
  {
    referencia:
      'Castro, S., Medina, B. y Camargo, L., (2016) Supervisión y Control Industrial a través de Teléfonos Inteligentes Usando un Computador de Placa Única Raspberry Pi',
    enlace: 'http://dx.doi.org/10.4067/S0718-07642016000200015',
    tituloenlace: 'Inf. Tecnol. 27(2), 121-130.',
  },
  {
    referencia:
      'Eines, Mónica E.; Aranda, Nélida Inés y Amilivia, Luis Alberto. (2018) Las Píldoras de Contenidos. Rev. iberoam. tecnol. educ. educ. tecnol. [online]., n.21 [citado 2020-12-18], pp.15-23. Disponible en:',
    enlace:
      'http://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S1850-99592018000100003&lng=es&nrm=iso',
    tituloenlace: 'ISSN 1851-0086',
  },
  {
    referencia:
      'Moreira, Gislene (2011). Democracia WiFi: Dinámicas de la política y la comunicación en la era digital. Quórum Académico, 8(2),183-208. [fecha de Consulta 18 de diciembre de 2020]. ISSN: 1690-7582. Disponible en:',
    enlace:
      'https://biblat.unam.mx/es/revista/quorum-academico/articulo/democracia-wifi-dinamicas-de-la-politica-y-la-comunicacion-en-la-era-digital',
    tituloenlace: '',
  },
]

export const glosario = [
  {
    termino: 'Android',
    significado:
      'sistema operativo que usan teléfonos móviles usa como base Linux.',
  },
  {
    termino: 'Raspberry',
    significado:
      'dispositivo embebido con una placa base emulando un computador de bajo costo para aplicaciones específicas.',
  },
  {
    termino: 'TIC',
    significado: 'acrónimo de tecnologías de la información y comunicación.',
  },
  {
    termino: 'Wifi',
    significado:
      'es una marca comercial que también es usada para designar a las tecnologías de red sin cable (Moreira, 2011).',
  },
]
