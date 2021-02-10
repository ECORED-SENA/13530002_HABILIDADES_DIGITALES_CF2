export const global = {
  tituloPrincipal: 'TItulo Principal',
  desarrolloDeContenidos: [
    {
      type: 'play',
      title: 'Introducción',
      route: 'introduccion',
    },
    {
      type: '1',
      title: 'Componentes',
      route: 'curso',
    },
    {
      type: 'question',
      title: 'Actividad didáctica',
      route: 'actividad',
    },
  ],
}

export const menuPrincipal = {
  menu: [
    {
      icon: 'fa fa-home',
      title: 'Volver al inicio',
      routeName: 'inicio',
    },
    {
      icon: 'fa fa-play-circle',
      title: 'Introduccion',
      routeName: 'introduccion',
    },
    {
      icon: 'fa fa-play-circle',
      title: '1. Componentes',
      routeName: 'tema1',
      submenu: [
        {
          icon: 'fa fa-file-text',
          title: 'Títulos',
          hash: 'titulos',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Típografía',
          hash: 'tipografia',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Cards',
          hash: 'card',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Card border',
          hash: 'cardborder',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Header Step',
          hash: 'headerstep',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Card + Imagen',
          hash: 'cardimagen',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Card + Video',
          hash: 'cardvideo',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Header Fluido',
          hash: 'headerfluid',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Header Arrow',
          hash: 'headerarrow',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Jumbotron',
          hash: 'jumbotron',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Card Avatar Top',
          hash: 'cardavatartop',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Card Avatar Left',
          hash: 'cardavatarleft',
        },
      ],
    },
    {
      icon: 'fa fa-play-circle',
      title: '2. Componentes',
      routeName: 'tema2',
      submenu: [
        {
          icon: 'fa fa-file-text',
          title: 'Botón enlace a recursos externos',
          hash: 'medialink',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Question Header',
          hash: 'question',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Nav Tab',
          hash: 'tabsecored',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Galería',
          hash: 'gallery',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Navs Bootstrap',
          hash: 'bscomponentes',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Header + Nav',
          hash: 'buttonav',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Collapsable',
          hash: 'collapsable',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Slider',
          hash: 'slider',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Tables',
          hash: 'tables',
        },
        {
          icon: 'fa fa-file-text',
          title: 'Lists',
          hash: 'lists',
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
    {
      icon: 'fa fa-folder-open',
      title: 'Material complementario',
      routeName: 'complementario',
    },
    {
      icon: 'fa fa-book',
      title: 'Referencias bibliográficas',
      routeName: 'referencias',
    },
    {
      icon: 'fa fa-download',
      title: 'Descargar material',
      download: 'download/material.zip',
    },
  ],
}

export const referencias = [
  {
    referencia: 'Fiduprevisora. Contrato de Fiducia Mercantil No. 145 de 2019',
    enlace:
      'https://www.fiduprevisora.com.co/wp-content/uploads/2020/03/Anexo-No-7-CONCERTACI%C3%93N-MODALIDAD-DE-C%C3%81PITA.pdf',
    tituloenlace: '',
  },
  {
    referencia:
      'Decreto 1142 de 2016. Capítulo 11 del Título 1 de la Parte 2 del Libro 2 del Decreto 1069 de 2015, Decreto Único Reglamentario del Sector Justicia y del Derecho, y se adoptan otras disposiciones',
    enlace:
      'https://www.fiduprevisora.com.co/wp-content/uploads/2020/03/Anexo-No-7-CONCERTACI%C3%93N-MODALIDAD-DE-C%C3%81PITA.pdf',
    tituloenlace: '',
  },
  {
    referencia:
      'Decreto 2245 de 2015. Adición capítulo al decreto 1069 de 2015, Único reglamentario del sector Justicia y del derecho en lo relacionado con la prestación del servicio a las personas privadas de la libertad bajo vigilancia INPEC',
    enlace:
      'https://www.minjusticia.gov.co/Portals/0/Ministerio/decreto%20unico/%23%20decretos/13.DECRETO%202245%20DEL%2024%20DE%20NOVIEMBRE%20DE%202015.pdf',
    tituloenlace:
      'https://www.minjusticia.gov.co/Portals/0/Ministerio/decreto%20unico/%23%20decretos/13. DECRETO%202245%20DEL%2024%20DE%20NOVIEMBRE%20DE%202015.pdf',
  },
  {
    referencia:
      'Consejo Nacional De Política Económica Y Social República De Colombia Departamento Nacional De Planeación. Documento CONPES 3828 del 19 de Mayo de 2015. Política penitenciaria y carcelaria Colombia',
    enlace:
      'http://www.politicacriminal.gov.co/Portals/0/documento/CONPES%20Pol%C3%ADtica%20penitenciaria%20y%20carcelaria%202015.pdf',
    tituloenlace:
      'http://www.politicacriminal.gov.co/Portals/0/documento/CONPES%20Pol%C3%ADtica%20penitenciaria%20y%20carcelaria%202015.pdf',
  },
  {
    referencia:
      'Fernández, R. (2005). Introducción al Sistema Penitenciario Español',
    enlace:
      'https://docplayer.es/7900389-Introduccion-al-sistema-penitenciario-espanol-1-autor-rafael-fernandez-cubero.html',
    tituloenlace: '',
  },
  {
    referencia:
      'Ley 1709 de 2014. Se reforman algunos artículos de la Ley 65 de 1993, de la Ley 599 de 2000, de la Ley 55 de 1985 y se dictan otras disposiciones',
    enlace:
      'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/1686959',
    tituloenlace: '',
  },
  {
    referencia:
      'USPEC. Manual técnico para la prestación del servicio de salud a la población privada de la libertad INPEC (2016)',
    enlace:
      'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/INEC/IGUB/uspec-manual-tecnico-administrativo-servicio-salud.pdf',
    tituloenlace: '',
  },
  {
    referencia:
      'Resolución 5159 de 2015. “Por medio de la cual se adopta el Modelo de Atención en Salud para la población privada de la libertad bajo la custodia y vigilancia del Instituto Nacional Penitenciario y Carcelario – INPEC”. Bogotá, D.C., Ministerio de Salud y Protección Social. 30 de noviembre de 2015.',
    enlace: '',
    tituloenlace: '',
  },
  {
    referencia:
      'Sentencia T-035 de 2013. “Acción de tutela interpuesta por Germán Augusto Gómez Valdez contra el Juzgado Tercero de Ejecución de Penas y Medidas de Seguridad de Popayán y otros”. Bogotá, D.C., Magistrado Ponente: Jorge Iván Palacio Palacio. 28 de enero de 2013.',
    enlace: '',
    tituloenlace: '',
  },
]
