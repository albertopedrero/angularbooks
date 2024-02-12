import { Component } from '@angular/core';
import { ListadoLibrosComponent } from '../../compartido/listado-libros/listado-libros.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [ListadoLibrosComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  listadoLibros =   {
    "kind": "books#volumes",
    "totalItems": 575,
    "items": [
      {
        "kind": "books#volume",
        "id": "q1FjDwAAQBAJ",
        "etag": "0OOygJ4YipE",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/q1FjDwAAQBAJ",
        "volumeInfo": {
          "title": "AngularJS: Conviértete en el profesional que las compañías de software necesitan.",
          "subtitle": "La constante evolución en la industria de las tecnologías de la información, demanda cada día más profesionales en el mundo del desarrollo web que conozcan el poderoso framework de AngularJS.",
          "authors": [
            "Paimi Arizmendi"
          ],
          "publisher": "Paiminix",
          "publishedDate": "2018-07-09",
          "description": "La constante evolución en la industria de las tecnologías de la información, demanda cada día más profesionales en el mundo del desarrollo web que conozcan el poderoso framework de AngularJS, este libro te lleva de la mano en la adopción de esta gran tecnología abarcando las mejores prácticas, tips y trucos sobre el framework de JavaScript, conocerás diferentes tipos sintaxis que en su momento han sido funcionales y que te puedes llegar a topar en desarrollos heredados, mostrándote la evolución sobre las mejores prácticas de la sintaxis, que te permitirá desarrollar aplicaciones de alta calidad. El framework de JavaScript AngularJS creado por el equipo de Google, ha tenido una constante evolución a lo largo de estos años, este libro está enfocado a personas que dan sus primeros pasos con el framework, así como desarrolladores que ya han tenido contacto con Angular y quieren incrementar su conocimiento para llevarlo al siguiente nivel. No te quedes atrás, forma parte de esta gran comunidad. 0. AngularJS mis primeros pasos 0.1 Introducción 0.2 ¿Qué es Angular? 0.3 ¿Es AngularJS o Angular? 0.4 El Zen de Angular 15 0.5 ¿Por qué usar AngularJS? 16 0.6 ¿Debo aprender AngularJS o Angular? 0.7 Arquitectura 1. Configuración del entorno de desarrollo 1.1 Dependencia de AngularJS 1.2 AngularJS de manera local 1.3 AngularJS mediante CDN 1.4 NodeJS 1.5 Manejador de paquetes (Package manager) 1.6 AngularJS mediante npm 1.7 AngularJS mediante Bower 1.8 Editores de desarrollo o IDEs 1.9 Instalación de un servidor de desarrollo 1.10 Estructura para proyectos escalables 1.11 Estructura de una aplicación por tipo 28 1.12 Estructura de una aplicación por característica, modulo o funcionalidad 28 1.13 Estructura de una aplicación por característica y por tipo 29 1.14 Resumen 2. Iniciando con AngularJS 2.1 Creando nuestra primera aplicación en AngularJS 2.2 AngularJS <script> Tag 2.3 Uso de ng-app 2.4 Consideraciones al usar ngApp 2.5 Inicialización manual 3. Descubriendo las directivas 3.1 ¿Qué son las directivas? 4. La magia de las directivas 4.1 Inicializando valores a través de directivas 4.2 Controlando la lógica de la aplicación 4.2.1 Usando la sintaxis “Controller As” en los controladores 4.2.2 Controladores paralelos 4.2.3 Controladores anidados 4.2.4 ¿Scope o this? 4.2.5 Nota importante sobre controladores 4.3 Poniendo orden a nuestra estructura 4.4 Modelo mediante ng-model 4.5 Estrategias y herramientas de minificación de código 4.5.1 Inyección de dependencias mediante array 4.5.2 Inyección manual de dependencias 4.5.3 El uso estricto de inyección de dependencia 4.5.4 Herramientas para minificar y ofuscar código 4.6 Mostrar y ocultar elementos DOM 4.6.1 Uso de ngShow 4.6.2 Uso de ngHide 4.7 Manipulación del DOM mediante ngIf 4.8 Estilos dinámicos 4.8.1 Clases dinámicas a elementos HTML 4.8.2 Usando ngClass mediante String 4.8.3 Usando ngClass mediante un Objeto 4.8.4 Usando ngClass mediante Array 4.8.5 Estilos de línea dinámicos 4.9 Ocultando el estado crudo de AngularJS (raw state) 4.9.1 Usando ngBind 4.9.2 Usando ngBindHtml 4.9.3 Usando ngBindTemplate 4.10 Ocultar o mostrar elementos DOM con ngSwitch 4.11 Deshabilitar elementos DOM 4.12 Directiva ngRepeat para el recorrido de colecciones 4.12.1 Iteración mediante propiedades del objeto 4.12.2 Propiedades especiales de ngRepeat 4.12.2.1 P. $index 4.12.2.2 P. $first $middle $last 4.12.2.3 P. $even $odd 4.13 Directiva ngOptions, para combos de tipo select 4.14 Reutilización de HTML 4.15 Resumen 5. Expresión e Interpolación 5.1 Expresiones 5.2 Expresiones AngularJS vs JavaScript Expresiones 5.2.1 Contexto 5.2.2 Indulgente 5.2.3 Sin declaraciones de flujo de control 5.2.4 No declarar funciones 5.2.5 No expresiones regulares 5.2.6 No a la creación de objetos 5.2.7 No a los operadores void 5.3 Interpolación y enlace de datos (data-binding) 5.3.1 ¿Cómo calcula la interpolación la representación de una cadena? 5.3.2 Cambio dinámico de un valor interpolado 5.3.3 Malas prácticas 6. Data Binding (Enlace de Datos) 6.1 Enlace de datos bidireccional (Two-Way Data Binding) 6.2 One-Way Data Binding 7. Filtros 7.1 Filtro incorporados 7.1.1 Filtro currency 7.1.2 Filtro number 7.1.3 Filtro date 7.1.4 Filtro json 7.1.5 Filtro lowercase 7.1.6 Filtro uppercase 7.1.7 Filtro filter 7.1.8 Filtro orderBy 7.1.9 Filtro limitTo 7.2 Filtro encadenados 7.3 Filtro personalizados 7.4 Filtro como servicios 8. Validación de Formularios 8.1 Directivas para validación de formularios 8.2 Propiedades y Clases 8.2.1 Propiedades 133 8.2.2 CSS Clases 133 8.2.3 $error 134 8.3 Validando nuestro primer formulario 8.3.1 irectiva ngRequired 8.3.2 Atributo novalidate y atributo name 8.3.3 Directivas ngMinlength y ngMaxlength 8.3.4 Directiva ng-pattern 8.3.5 Envió del formulario 8.3.6 Mensajes de error 8.3.7 Validaciones, agregando clases CSS 8.3.8 El objeto $error 8.3.9 Módulo ngMessages 8.3.10 Directiva ngMessagesInclude 9. Servicios 9.1 Creación de servicios 9.2 Servicio value y Servicio constant 9.2.1 Servicio value 9.2.2 Servicio constant 9.3 Servicios mediante factory 9.4 Servicios mediante service 9.5 Servicio provider 9.6 Usando el servicio $provide 9.7 Usando la función provider() 9.8 Resumen 10. Servicios incorporados 10.1 Servicio $http 10.1.1 Sintaxis del servicio $http 10.1.2 Funciones Callback 10.1.3 Funciones callback, respuesta obtenida 10.1.4 Códigos de estado HTTP 10.2 Servicio $window 10.3 Servicio $timeout 10.4 Servicio $interval 10.5 Servicio $location 10.6 Servicio $log 11. Scope y rootScope 11.1 $scope 11.2 $rootScope 12 Aplicaciones de una Sola Página (SPA) 12.1 Módulo $route 12.2 $routeProvider 12.3 Directiva ngView 12.4 Configurando nuestras rutas y vistas 12.5 Propiedad template vs templateUrl 12.6 Controladores en nuestro objeto route 12.7 Controller As, en nuestro objeto route 12.8 Propiedad resolve 12.9 Servicio $routeParams 12.10 Cambiando de rutas 12.11 La función otherwise 12.12 Resumen 13 Test Unitarios 13.1 Herramientas para Testing 13.2 Jasmine 13.2.1 ¿Qué es BDD? 13.2.2 Configurando Jasmine 13.2.3 SpecRunner.html 213 13.2.4 Elementos y sintaxis de una prueba 214 13.2.5 Jasmine, Hola Mundo! 215 13.2.6 Métodos matchers 216 13.2.7 Probando Componentes en AngularJS 217 13.2.8 Probando controladores con Jasmine 219 13.2.9 Probando filtros con Jasmine 222 13.2.10 Probando servicios con Jasmine 223 13.2.11 Resumen 224 13.4 Karma 13.4.1 Configurando Karma 13.4.2 karma.conf.js 13.4.3 Ejecución de test en un solo paso 13.5 Resumen 14. Extras, código fuente 14. Agradecimientos",
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 229,
          "printType": "BOOK",
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.1.2.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "thumbnail": "http://books.google.com/books/content?id=q1FjDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "es",
          "previewLink": "http://books.google.es/books?id=q1FjDwAAQBAJ&printsec=frontcover&dq=Angular&hl=&cd=1&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=q1FjDwAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=q1FjDwAAQBAJ"
        },
        "saleInfo": {
          "country": "ES",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
            "amount": 2.85,
            "currencyCode": "EUR"
          },
          "retailPrice": {
            "amount": 2.85,
            "currencyCode": "EUR"
          },
          "buyLink": "https://play.google.com/store/books/details?id=q1FjDwAAQBAJ&rdid=book-q1FjDwAAQBAJ&rdot=1&source=gbs_api",
          "offers": [
            {
              "finskyOfferType": 1,
              "listPrice": {
                "amountInMicros": 2850000,
                "currencyCode": "EUR"
              },
              "retailPrice": {
                "amountInMicros": 2850000,
                "currencyCode": "EUR"
              },
              "giftable": true
            }
          ]
        },
        "accessInfo": {
          "country": "ES",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.es/books/download/AngularJS_Convi%C3%A9rtete_en_el_profesional-sample-epub.acsm?id=q1FjDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.es/books/download/AngularJS_Convi%C3%A9rtete_en_el_profesional-sample-pdf.acsm?id=q1FjDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=q1FjDwAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "La constante evolución en la industria de las tecnologías de la información, demanda cada día más profesionales en el mundo del desarrollo web que conozcan el poderoso framework de AngularJS, este libro te lleva de la mano en la ..."
        }
      },
      {
        "kind": "books#volume",
        "id": "huPLEAAAQBAJ",
        "etag": "lYA43EPbBy4",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/huPLEAAAQBAJ",
        "volumeInfo": {
          "title": "Angular Projects",
          "subtitle": "Build modern web apps in Angular 16 with 10 different projects and cutting-edge technologies",
          "authors": [
            "Aristeidis Bampakos"
          ],
          "publisher": "Packt Publishing Ltd",
          "publishedDate": "2023-07-19",
          "description": "Take Angular to the next level – build captivating real-world applications while exploring modern web technologies and best practices Purchase of the print or Kindle book includes a free PDF eBook Key Features Explore Angular's capabilities for cross-platform app development Combine Angular with popular web technologies such as Nx monorepos, server-side rendering, and progressive web apps Build your own libraries and schematics using Angular CDK and Angular CL Book DescriptionAngular Projects isn't like other books on Angular – this is a project-based guide that helps budding Angular developers get hands-on experience while developing cutting-edge applications. In this updated third edition, you’ll master the essential features of the framework by creating ten different real-world web applications. Each application will demonstrate how to integrate Angular with a different library and tool, giving you a 360-degree view of what the Angular ecosystem makes possible. Updated to the newest version of Angular, the book has been revamped to keep up with the latest technologies. You’ll work on a PWA weather application, a mobile photo geotagging application, a component UI library, and other exciting projects. In doing so, you’ll implement popular technologies such as Angular Router, Scully, Electron, Angular service workers, Jamstack, NgRx, and more. By the end of this book, you will have the skills you need to build Angular apps using a variety of different technologies according to your or your client’s needs.What you will learn Set up Angular applications using Angular CLI and Nx Console Create a personal blog with Jamstack, Scully plugins, and SPA techniques Build an issue management system using typed reactive forms Use PWA techniques to enhance user experience Make SEO-friendly web pages with server-side rendering Create a monorepo application using Nx tools and NgRx for state management Focus on mobile application development using Ionic Develop custom schematics by extending Angular CLI Who this book is forThis book is for developers with beginner-level Angular experience who want to become proficient in using essential tools and dealing with the various use cases in Angular. Beginner-level knowledge of web application development and basic experience of working with ES6 or TypeScript is essential before you dive in. This book focuses on practical applications of Angular. If you want to deepen your understanding of this framework, we recommend that you also look at Learning Angular from the same author.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781803243306"
            },
            {
              "type": "ISBN_10",
              "identifier": "1803243309"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 313,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.5.3.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=huPLEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=huPLEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.es/books?id=huPLEAAAQBAJ&printsec=frontcover&dq=Angular&hl=&cd=2&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=huPLEAAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=huPLEAAAQBAJ"
        },
        "saleInfo": {
          "country": "ES",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
            "amount": 27.03,
            "currencyCode": "EUR"
          },
          "retailPrice": {
            "amount": 25.68,
            "currencyCode": "EUR"
          },
          "buyLink": "https://play.google.com/store/books/details?id=huPLEAAAQBAJ&rdid=book-huPLEAAAQBAJ&rdot=1&source=gbs_api",
          "offers": [
            {
              "finskyOfferType": 1,
              "listPrice": {
                "amountInMicros": 27030000,
                "currencyCode": "EUR"
              },
              "retailPrice": {
                "amountInMicros": 25680000,
                "currencyCode": "EUR"
              },
              "giftable": true
            }
          ]
        },
        "accessInfo": {
          "country": "ES",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=huPLEAAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Take Angular to the next level – build captivating real-world applications while exploring modern web technologies and best practices Purchase of the print or Kindle book includes a free PDF eBook Key Features Explore Angular&#39;s ..."
        }
      },
      {
        "kind": "books#volume",
        "id": "OXpDBAAAQBAJ",
        "etag": "FS4BIlMocxk",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/OXpDBAAAQBAJ",
        "volumeInfo": {
          "title": "Desarrollo Web ágil con AngularJS",
          "subtitle": "Aprendes buenas prácticas y desarrollo ágil con el framework de JavaScript AngularJS",
          "authors": [
            "Carlos Azaustre"
          ],
          "publisher": "Carlos Azaustre Books",
          "publishedDate": "2014-08-16",
          "description": "Hazte con uno de los libros sobre desarrollo web con Angular.js más descargados en español. Con más de 7000 descargas en España y Latinoamérica. Con él aprenderás buenas prácticas en el desarrollo de aplicaciones web con el framework de JavaScript Angular.js y aprenderás a automatizar tus tareas cotidianas en el Frontend con Gulp.js, para ser más productivo y ágil. Contenidos: Estructura de una aplicación web moderna, Tecnologías, Configuración del entorno de trabajo, Estructura de directorios y ficheros, Automatizando nuestro flujo de trabajo, Anatomía de una aplicación Angular JS, HTML5Boilerplate, Instalando dependencias, Módulos de la aplicación, Arquitectura Principal, Servicios, Controladores, Vistas parciales, Diseño con preprocesadores CSS, Optimizando para Producción, Cacheado de plantillas, Concatenación de ficheros JS y CSS, Servidor de archivos de producción, Reducción de código CSS.",
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 62,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.1.1.0.preview.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=OXpDBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=OXpDBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "es",
          "previewLink": "http://books.google.es/books?id=OXpDBAAAQBAJ&printsec=frontcover&dq=Angular&hl=&cd=3&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=OXpDBAAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=OXpDBAAAQBAJ"
        },
        "saleInfo": {
          "country": "ES",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
            "amount": 3.32,
            "currencyCode": "EUR"
          },
          "retailPrice": {
            "amount": 3.32,
            "currencyCode": "EUR"
          },
          "buyLink": "https://play.google.com/store/books/details?id=OXpDBAAAQBAJ&rdid=book-OXpDBAAAQBAJ&rdot=1&source=gbs_api",
          "offers": [
            {
              "finskyOfferType": 1,
              "listPrice": {
                "amountInMicros": 3320000,
                "currencyCode": "EUR"
              },
              "retailPrice": {
                "amountInMicros": 3320000,
                "currencyCode": "EUR"
              },
              "giftable": true
            }
          ]
        },
        "accessInfo": {
          "country": "ES",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.es/books/download/Desarrollo_Web_%C3%A1gil_con_AngularJS-sample-pdf.acsm?id=OXpDBAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=OXpDBAAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Hazte con uno de los libros sobre desarrollo web con Angular.js más descargados en español."
        }
      },
      {
        "kind": "books#volume",
        "id": "XTgzEAAAQBAJ",
        "etag": "ct25dujvVb4",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/XTgzEAAAQBAJ",
        "volumeInfo": {
          "title": "Angular in Action",
          "authors": [
            "Jeremy Wilken"
          ],
          "publisher": "Simon and Schuster",
          "publishedDate": "2018-03-07",
          "description": "Summary Angular in Action teaches you everything you need to build production-ready Angular applications.Thoroughly practical and packed with tricks and tips, this hands-on tutorial is perfect for web devs ready to build web applications that can handle whatever you throw at them. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications. About the Technology Angular makes it easy to deliver amazing web apps. This powerful JavaScript platform provides the tooling to man- age your project, libraries to help handle most common tasks, and a rich ecosystem full of third-party capabilities to add as needed. Built with developer productivity in mind, Angular boosts your efficiency with a modern component architecture, well-constructed APIs, and a rich community. About the Book Angular in Action teaches you everything you need to build production-ready Angular applications. You'll start coding immediately, as you move from the basics to advanced techniques like testing, dependency injection, and performance tuning. Along the way, you'll take advantage of TypeScript and ES2015 features to write clear, well-architected code. Thoroughly practical and packed with tricks and tips, this hands-on tutorial is perfect for web devs ready to build web applications that can handle whatever you throw at them. What's Inside Spinning up your first Angular application A complete tour of Angular's features Comprehensive example projects Testing and debugging Managing large applications About the Reader Written for web developers comfortable with JavaScript, HTML, and CSS. About the Author Jeremy Wilken is a Google Developer Expert in Angular, Web Technologies, and Google Assistant. He has many years of experience building web applications and libraries for eBay, Teradata, and VMware. Table of Contents Angular: a modern web platform Building your first Angular app App essentials Component basics Advanced components Services Routing Building custom directives and pipes Forms Testing your application Angular in production",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781638356004"
            },
            {
              "type": "ISBN_10",
              "identifier": "1638356009"
            }
          ],
          "readingModes": {
            "text": true,
            "image": false
          },
          "pageCount": 415,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.2.2.0.preview.2",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=XTgzEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=XTgzEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.es/books?id=XTgzEAAAQBAJ&printsec=frontcover&dq=Angular&hl=&cd=4&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=XTgzEAAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=XTgzEAAAQBAJ"
        },
        "saleInfo": {
          "country": "ES",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
            "amount": 39.13,
            "currencyCode": "EUR"
          },
          "retailPrice": {
            "amount": 39.13,
            "currencyCode": "EUR"
          },
          "buyLink": "https://play.google.com/store/books/details?id=XTgzEAAAQBAJ&rdid=book-XTgzEAAAQBAJ&rdot=1&source=gbs_api",
          "offers": [
            {
              "finskyOfferType": 1,
              "listPrice": {
                "amountInMicros": 39130000,
                "currencyCode": "EUR"
              },
              "retailPrice": {
                "amountInMicros": 39130000,
                "currencyCode": "EUR"
              },
              "giftable": true
            }
          ]
        },
        "accessInfo": {
          "country": "ES",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.es/books/download/Angular_in_Action-sample-epub.acsm?id=XTgzEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=XTgzEAAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "About the Book Angular in Action teaches you everything you need to build production-ready Angular applications."
        }
      },
      {
        "kind": "books#volume",
        "id": "WJzcDgAAQBAJ",
        "etag": "BiIeCp/Kn0Q",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/WJzcDgAAQBAJ",
        "volumeInfo": {
          "title": "Angular 2 Components",
          "authors": [
            "Nir Kaufman",
            "Thierry Templier"
          ],
          "publisher": "Packt Publishing Ltd",
          "publishedDate": "2016-11-30",
          "description": "A quick and concise guide to Angular 2 Components About This Book First look to the Angular 2 Components architecture Creating your own Angular 2 Component Integrating your components with third party components Who This Book Is For If you are a front-end developer with some experience in Angular and want to understand Angular 2 Components, and easily put it to use to create powerful user interfaces and views, then this book is for you What You Will Learn Break your application into reusable dynamic components Take advantage of TypeScript in Angular 2 Migrate your Angular 1 directive to an Angular 2 Component Understand the Angular 2 component structure and APIs Hook to component life cycle events Bind dynamic data to your component properties Communicate with other components using events Compose complicated UIs from simple components In Detail This book is a concise guide to Angular 2 Components and is based on the stable version of Angular 2. You will start with learning about the Angular 2 Components architecture and how components differ from Angular directives in Angular 1. You will then move on to quickly set up an Angular 2 development environment and grasp the basics of TypeScript. With this strong foundation in place, you will start building components. The book will teach you, with an example, how to define component behavior, create component templates, and use the controller of your component. You will also learn how to make your components communicate with each other. Once you have built a component, you will learn how to extend it by integrating third-party components with it. By the end of the book, you will be confident with building and using components for your applications. Style and approach A step-by-step guide covering features and working of Angular 2 Components along with the process for creating your own components.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781785889400"
            },
            {
              "type": "ISBN_10",
              "identifier": "1785889400"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 124,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.0.1.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=WJzcDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=WJzcDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.es/books?id=WJzcDgAAQBAJ&printsec=frontcover&dq=Angular&hl=&cd=5&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=WJzcDgAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=WJzcDgAAQBAJ"
        },
        "saleInfo": {
          "country": "ES",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
            "amount": 20.79,
            "currencyCode": "EUR"
          },
          "retailPrice": {
            "amount": 19.75,
            "currencyCode": "EUR"
          },
          "buyLink": "https://play.google.com/store/books/details?id=WJzcDgAAQBAJ&rdid=book-WJzcDgAAQBAJ&rdot=1&source=gbs_api",
          "offers": [
            {
              "finskyOfferType": 1,
              "listPrice": {
                "amountInMicros": 20790000,
                "currencyCode": "EUR"
              },
              "retailPrice": {
                "amountInMicros": 19750000,
                "currencyCode": "EUR"
              },
              "giftable": true
            }
          ]
        },
        "accessInfo": {
          "country": "ES",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=WJzcDgAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "A quick and concise guide to Angular 2 Components About This Book First look to the Angular 2 Components architecture Creating your own Angular 2 Component Integrating your components with third party components Who This Book Is For If you ..."
        }
      },
      {
        "kind": "books#volume",
        "id": "zVMoDwAAQBAJ",
        "etag": "V38+5Iu7UdA",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/zVMoDwAAQBAJ",
        "volumeInfo": {
          "title": "Angular Services",
          "authors": [
            "Sohail Salehi"
          ],
          "publisher": "Packt Publishing Ltd",
          "publishedDate": "2017-02-24",
          "description": "Design state-of-the-art applications with customized Angular services About This Book Leverage the latest Angular and ES2016 features to create services Integrate third-party libraries effectively and extend your app's functionalities Implement a real-world case study from scratch and level up your Angular skills Who This Book Is For If you are a JavaScript developer who is moving on to Angular and have some experience in developing applications, then this book is for you. You need not have any knowledge of on Angular or its services. What You Will Learn Explore various features and topics involved in modules, services, and dependency injection Sketch and create wire-frames for your project Use controllers to collect data and populate them into NG UIs Create a controller and the required directives to build a tree data structure Implement a logic to decide the relevancy of any given evidence Create a partially-AI service Build controllers to set the template for the report Collect, investigate, perform decision making, and generate reports in one the big automated process In Detail A primary concern with modern day applications is that they need to be dynamic, and for that, data access from the server side, data authentication, and security are very important. Angular leverages its services to create such state-of-the-art dynamic applications. This book will help you create and design customized services, integrate them into your applications, import third-party plugins, and make your apps perform better and faster. This book starts with a basic rundown on how you can create your own Angular development environment compatible with v2 and v4. You will then use Bootstrap and Angular UI components to create pages. You will also understand how to use controllers to collect data and populate them into NG UIs. Later, you will then create a rating service to evaluate entries and assign a score to them. Next, you will create \"cron jobs\" in NG. We will then create a crawler service to find all relevant resources regarding a selected headline and generate reports on it. Finally, you will create a service to manage accuracy and provide feedback about troubled areas in the app created. This book is up to date for the 2.4 release and is compatible with the 4.0 release as well, and it does not have any code based on the beta or release candidates. Style and approach This step-by-step tutorial starts by showing how you can create your first Angular services, then customizing it to suit your needs, and finally implementing some real-world case studies on your own to make you confident designing your own application using effective services from scratch.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781785880483"
            },
            {
              "type": "ISBN_10",
              "identifier": "1785880489"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 287,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "1.1.2.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=zVMoDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=zVMoDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.es/books?id=zVMoDwAAQBAJ&printsec=frontcover&dq=Angular&hl=&cd=6&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=zVMoDwAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=zVMoDwAAQBAJ"
        },
        "saleInfo": {
          "country": "ES",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
            "amount": 27.03,
            "currencyCode": "EUR"
          },
          "retailPrice": {
            "amount": 25.68,
            "currencyCode": "EUR"
          },
          "buyLink": "https://play.google.com/store/books/details?id=zVMoDwAAQBAJ&rdid=book-zVMoDwAAQBAJ&rdot=1&source=gbs_api",
          "offers": [
            {
              "finskyOfferType": 1,
              "listPrice": {
                "amountInMicros": 27030000,
                "currencyCode": "EUR"
              },
              "retailPrice": {
                "amountInMicros": 25680000,
                "currencyCode": "EUR"
              },
              "giftable": true
            }
          ]
        },
        "accessInfo": {
          "country": "ES",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=zVMoDwAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Design state-of-the-art applications with customized Angular services About This Book Leverage the latest Angular and ES2016 features to create services Integrate third-party libraries effectively and extend your app&#39;s functionalities ..."
        }
      },
      {
        "kind": "books#volume",
        "id": "g8zDEAAAQBAJ",
        "etag": "m63XNDGstxY",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/g8zDEAAAQBAJ",
        "volumeInfo": {
          "title": "Learn Angular: 4 Angular Projects",
          "authors": [
            "Manjunath M",
            "Jeremy Wilken",
            "Simon Holmes",
            "Ilya Bodrov-Krukowski"
          ],
          "publisher": "SitePoint Pty Ltd",
          "publishedDate": "2018-06-15",
          "description": "Angular is not just a framework, but rather a platform that empowers developers to build applications for the web, mobile, and the desktop. This book presents a collection of complete project tutorials: building a bucket-list MEAN stack app; user authentication with MEAN; building a Twitter client with Node and Angular; and connecting Angular and the WordPress API. Along the way, you'll learn how to use Angular and some of its best features. This book is for all front-end developers who want to get proficient with Angular and its related tools. You'll need to be familiar with HTML and CSS and have a reasonable level of understanding of JavaScript in order to follow the discussion.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781492068273"
            },
            {
              "type": "ISBN_10",
              "identifier": "1492068276"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 70,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=g8zDEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=g8zDEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.es/books?id=g8zDEAAAQBAJ&printsec=frontcover&dq=Angular&hl=&cd=7&source=gbs_api",
          "infoLink": "http://books.google.es/books?id=g8zDEAAAQBAJ&dq=Angular&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Learn_Angular_4_Angular_Projects.html?hl=&id=g8zDEAAAQBAJ"
        },
        "saleInfo": {
          "country": "ES",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "ES",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.es/books/download/Learn_Angular_4_Angular_Projects-sample-epub.acsm?id=g8zDEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.es/books/download/Learn_Angular_4_Angular_Projects-sample-pdf.acsm?id=g8zDEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=g8zDEAAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "This book presents a collection of complete project tutorials: building a bucket-list MEAN stack app; user authentication with MEAN; building a Twitter client with Node and Angular; and connecting Angular and the WordPress API."
        }
      },
      {
        "kind": "books#volume",
        "id": "6aHTDwAAQBAJ",
        "etag": "EeW4M1AUJvE",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/6aHTDwAAQBAJ",
        "volumeInfo": {
          "title": "Angular",
          "subtitle": "TypeScript – Arquitectura – Instalación – Directivas y Bindings – Forms – Ruteo y más",
          "authors": [
            "Luciano Puciarelli"
          ],
          "publisher": "RedUsers",
          "publishedDate": "2020-03-01",
          "description": "Crea aplicaciones web de página única, SPA (Single Page Application, por sus siglas en inglés) con el framework front-end más utilizado. Angular fue ganando terreno hasta posicionarse como un pilar fundamental en el ecosistema tecnológico actual. Una de las características y ventajas que lo identifican es su diseño modular y estructurado. Esto nos ayudará a diseñar, desde el momento cero, aplicaciones que cumplan con los estándares de arquitectura más conocidos y usados en el mercado. En este e-book aprenderemos en forma práctica, con explicaciones detalladas y paso a paso, todo lo necesario para instalar y crear una aplicación web utilizando el framework JavaScript Angular. En cada capítulo trataremos temas fundamentales de este framework desde el punto de vista teórico y práctico, como por ejemplo: su arquitectura, captura de datos mediante formularios, directivas y bindings, navegación mediante el módulo de ruteo, operaciones para obtener datos de una API expuesta en Internet y, además, un ejemplo de la librería de componentes gráficos llamada Angular Material.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9789874958273"
            },
            {
              "type": "ISBN_10",
              "identifier": "9874958278"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 105,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "0.0.1.0.preview.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=6aHTDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=6aHTDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "es",
          "previewLink": "http://books.google.es/books?id=6aHTDwAAQBAJ&pg=PA8&dq=Angular&hl=&cd=8&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=6aHTDwAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=6aHTDwAAQBAJ"
        },
        "saleInfo": {
          "country": "ES",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
            "amount": 4.75,
            "currencyCode": "EUR"
          },
          "retailPrice": {
            "amount": 4.75,
            "currencyCode": "EUR"
          },
          "buyLink": "https://play.google.com/store/books/details?id=6aHTDwAAQBAJ&rdid=book-6aHTDwAAQBAJ&rdot=1&source=gbs_api",
          "offers": [
            {
              "finskyOfferType": 1,
              "listPrice": {
                "amountInMicros": 4750000,
                "currencyCode": "EUR"
              },
              "retailPrice": {
                "amountInMicros": 4750000,
                "currencyCode": "EUR"
              },
              "giftable": true
            }
          ]
        },
        "accessInfo": {
          "country": "ES",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.es/books/download/Angular-sample-pdf.acsm?id=6aHTDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=6aHTDwAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "... <b>Angular</b>? <b>Angular</b> es un framework JavaScript de código abierto mantenido por Google, que se utiliza para crear páginas web de tipo SPA (Single Page Application). Esto significa que la página se carga solo al inicio y, luego, las&nbsp;..."
        }
      },
      {
        "kind": "books#volume",
        "id": "Znc5DwAAQBAJ",
        "etag": "Zbei/kDw0u8",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/Znc5DwAAQBAJ",
        "volumeInfo": {
          "title": "Essential Angular",
          "authors": [
            "Victor Savkin",
            "Jeff Cross"
          ],
          "publisher": "Packt Publishing Ltd",
          "publishedDate": "2017-05-31",
          "description": "Essential Angular is a concise, complete overview of the key aspects of Angular, written by two Angular core contributors. The book covers the framework's mental model, its API, and the design principles behind it. It is fully up to date with the latest release of Angular. About This Book Written by two Angular core contributors A complete overview of the key aspects of Angular Up to date with the latest Angular release Who This Book Is For To get the most from this book, you should already have a good understanding of Angular and general web development. The book dives quickly into the core Angular systems without stepping through the basics. What You Will Learn Understand why and how to use JIT and AOT compilation in Angular Bootstrap and inject NgModules Learn about the component lifecycle Understand the two phases of Change Detection Visualize and parse the Injector tree Understand advanced Lazy Loading Integrate and run different testing strategies on your code In Detail Essential Angular is a concise, complete overview of the key aspects of Angular, written by two Angular core contributors. The book covers the framework's mental model, its API, and the design principles behind it. This book is fully up to date with the latest release of Angular. Essential Angular gives you a strong foundation in the core Angular technology. It will help you put all the concepts into the right places so you will have a good understanding of why the framework is the way it is. Read this book after you have toyed around with the framework, but before you embark on writing your first serious Angular application. This book covers concepts such as the differences between Just-In-Time (JIT) and Ahead-Of-Time (AOT) compilation in Angular, alongside NgModules, components and directives. It also goes into detail on Dependency Injection and Change Detection: essential skills for Angular developers to master. The book finishes with a look at testing, and how to integrate different testing methodologies in your Angular code. Style and approach Essential Angular is a complete overview of the key aspects of the latest release of Angular, written by two core Angular contributors. It goes far beyond a how-to-get-started guide and dives into the most important topics in modern Angular development at depth.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781788291040"
            },
            {
              "type": "ISBN_10",
              "identifier": "1788291042"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 102,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "1.2.2.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=Znc5DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=Znc5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.es/books?id=Znc5DwAAQBAJ&printsec=frontcover&dq=Angular&hl=&cd=9&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=Znc5DwAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=Znc5DwAAQBAJ"
        },
        "saleInfo": {
          "country": "ES",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
            "amount": 23.91,
            "currencyCode": "EUR"
          },
          "retailPrice": {
            "amount": 22.71,
            "currencyCode": "EUR"
          },
          "buyLink": "https://play.google.com/store/books/details?id=Znc5DwAAQBAJ&rdid=book-Znc5DwAAQBAJ&rdot=1&source=gbs_api",
          "offers": [
            {
              "finskyOfferType": 1,
              "listPrice": {
                "amountInMicros": 23910000,
                "currencyCode": "EUR"
              },
              "retailPrice": {
                "amountInMicros": 22710000,
                "currencyCode": "EUR"
              },
              "giftable": true
            }
          ]
        },
        "accessInfo": {
          "country": "ES",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=Znc5DwAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "The book covers the framework&#39;s mental model, its API, and the design principles behind it. This book is fully up to date with the latest release of Angular. Essential Angular gives you a strong foundation in the core Angular technology."
        }
      },
      {
        "kind": "books#volume",
        "id": "WFQLDgAAQBAJ",
        "etag": "702WqHznn8M",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/WFQLDgAAQBAJ",
        "volumeInfo": {
          "title": "Pro Angular",
          "authors": [
            "Adam Freeman"
          ],
          "publisher": "Apress",
          "publishedDate": "2017-01-24",
          "description": "Angular 5 updates for this book are now available. Follow the Download source code link for this book on the Apress website. Get the most from Angular 2, the leading framework for building dynamic JavaScript applications. Best-selling author Adam Freeman begins by describing the MVC pattern and the benefits it can offer and then shows you how to use Angular in your projects, starting from the nuts-and-bolts and building up to the most advanced and sophisticated features, going in-depth to give you the knowledge you need. Each topic is covered clearly and concisely and is packed with the details you need to learn to be truly effective. The most important features are given a no-nonsense in-depth treatment and chapters include common problems and details of how to avoid them. What you’ll learn Gain a solid architectural understanding of the MVC Pattern Learn how to create rich and dynamic web app clients using Angular 2 Learn how to extend and customize Angular 2 Learn how to test your Angular 2 projects Who this book is for Web developers with a foundation knowledge of HTML and JavaScript who want to create rich client-side applications.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781484223079"
            },
            {
              "type": "ISBN_10",
              "identifier": "1484223071"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 791,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "2.6.5.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=WFQLDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=WFQLDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.es/books?id=WFQLDgAAQBAJ&printsec=frontcover&dq=Angular&hl=&cd=10&source=gbs_api",
          "infoLink": "http://books.google.es/books?id=WFQLDgAAQBAJ&dq=Angular&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Pro_Angular.html?hl=&id=WFQLDgAAQBAJ"
        },
        "saleInfo": {
          "country": "ES",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "ES",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.es/books/download/Pro_Angular-sample-epub.acsm?id=WFQLDgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.es/books/download/Pro_Angular-sample-pdf.acsm?id=WFQLDgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=WFQLDgAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Angular 5 updates for this book are now available. Follow the Download source code link for this book on the Apress website. Get the most from Angular 2, the leading framework for building dynamic JavaScript applications."
        }
      }
    ]
  }

  anadirFavoritoPrincipal(libro:any){
    console.log(`en componente principal recibio el título ${libro.volumeInfo.title}`)
  }

}
