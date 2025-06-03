var config = {
    style: 'mapbox://styles/antiareino/cmb83loqh00qz01r2fmbh409c',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYW50aWFyZWlubyIsImEiOiJjbWIwemhmcWoweW51MmtzaHpldjhnMmkxIn0.30YR5RBDd1Zqyiv4LMP2Jg',
    showMarkers: true, 
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Recorrido por la Navidad más luminosa de Madrid',
    subtitle: 'Storymap del alumbrado y decoración navideña en la ciudad de Madrid',
    byline: 'Por Antía Reino',
    footer: 'Fuentes: Ayuntamiento de Madrid <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Puerta del Sol',
            image: './assets/arbol-sol.jfif',
            description: '12 millones de bombillas LED iluminaron más de 230 emplazamientos, repartiéndose por toda la capital 7.100 cadenetas, 121 cerezos y diez grandes abetos luminosos.',
            location: {
                center: [-3.70339, 40.41693],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            speed: 6,
            curve: 5,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Más gasto, más luces',
            image: './assets/grafico-gasto.jpg',
            description: 'Madrid gastó en su iluminación navideña en 2024 5,3 millones de euros, incluyendo la instalación, mantenimiento y desmontaje de todos los elementos. El año anterior fueron 4,3 millones, en 2022 4 millones, en 2021 3,6 millones y 3,17 millones en 2020. En los últimos cuatro años el gasto en iluminación ha aumentado un 67,2%, en parte debido a la inflación según alega el propio Ayuntamiento de Madrid.',
            location: {
                center: [-3.69281, 40.42005],
                zoom: 15,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            speed: 6,
            curve: 5,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Plaza Mayor',
            image: './assets/plaza-mayor.jpg',
            description: 'Este año, por primera vez, a la lista de diseñadores de las luces de la capital se sumaron las propuestas de niños y niñas de primaria. En el entorno de la Plaza Mayor, el Ayuntamiento dio vida a los dibujos ganadores de un concurso para formar parte de la iluminación navideña de 2024.',
            location: {
                center: [-3.70739, 40.41539],
                zoom: 15,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Ópera',
            image: './assets/opera.jpg',
            description: 'Entre los diseñadores de renombre, Ópera estrenó un nuevo abeto luminoso creado por Ulises Mérida. Pedro del Hierro fue el autor del nuevo diseño de la calle Serrano y Juana Martín del de la calle Fuencarral.',
            location: {
                center: [-3.70963, 40.41813],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Gran Vía',
            image: './assets/gran-via.jpg',
            description: 'El gran nacimiento iluminado que otros años se situaba en la plaza de Colón, en esta ocasión se instaló junto al edifico Metrópolis, en la confluencia de las calles Gran Vía y Alcalá. Esta formado por una figura tridimensional de diez metros de altura, 4,60 metros de ancho y dos metros de fondo, la estructura está hecha de perfiles de aluminio que forman el contorno exterior y delinean las figuras que componen la superficie del nacimiento.',
            location: {
                center: [-3.69710, 40.41879],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Plaza España',
            image: './assets/plaza-españa.jpg',
            description: 'El hueco que deja el nacimiento en Colón será ocupado por un enorme ángel con 36.400 puntos de luz. Otro de los cambios de ubicación ocurre con la bola luminosa de la calle Alcalá, que estas últimas navidades se encontraba en la plaza de España.',
            location: {
                center: [-3.71323, 40.42196],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Parque El Retiro',
            image: './assets/retiro.jpg',
            description: 'El Retiro incorporó un alce luminoso de más de cuatro metros y medio de altura a su decoración navideña y un ciervo de algo más de dos metros. También añaden los cuatro paneles a modo de vidrieras con escenas de la tradición cristiana que el año anterior se situaban en torno al árbol de Puerta del Sol. A estos elementos se suman los ya vistos en años anteriores como los cerezos luminosos que rodean el lago de El Retiro.',
            location: {
                center: [-3.68475, 40.41694],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Puerta de Alcalá',
            image: './assets/alcala.jpg',
            description: 'Continúan los tradicionales belenes figurativos situados en puertas históricas de Madrid, como la de Alcalá, que en 2024 renovó su diseño. También se podían encontrar en Puerta de Toledo, Puerta de San Vicente, en el viaducto de la calle de Segovia y las entradas a la plaza Mayor.',
            location: {
                center: [-3.68872, 40.41998],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Barrios periféricos a oscuras',
            image: './assets/lucero.jpg',
            description: 'Aunque cada año la inversión en la iluminación y decoración navideña va en aumento, su distribución por la ciudad sigue siendo desigual. La mayoría de estos adornos que atraen a turistas y potencian la economía de la zona van destinados al distrito Centro. Los barrios periféricos como Lucero, Latina o Puerta del Ángel se han quedado, un año más, al margen de la planificación del alumbrado de Navidad.',
            location: {
                center: [-3.74518, 40.40446],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
