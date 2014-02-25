angular.module('{%= name %}', {%= importedModules %});

{%if (importedModules.indexOf('ui.router') !== -1 && importedModules.indexOf('pascalprecht.translate') === -1) {%}
angular.module('{%= name %}').config(function($stateProvider, $urlRouterProvider) {

    "use strict";

});
{%}%}

{%if (importedModules.indexOf('pascalprecht.translate') !== -1 && importedModules.indexOf('ui.router') === -1) {%}
angular.module('{%= name %}').config(function($translateProvider) {

    "use strict";

});
{%}%}

{%if (importedModules.indexOf('ui.router') !== -1 && importedModules.indexOf('pascalprecht.translate') !== -1) {%}
angular.module('{%= name %}').config(function($stateProvider, $urlRouterProvider, $translateProvider) {

    "use strict";

});
{%}%}


{%if (importedModules.indexOf('ngRoute') !== -1 && importedModules.indexOf('ui.router') === -1) {%}
angular.module('{%= name %}').config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
{%}%}