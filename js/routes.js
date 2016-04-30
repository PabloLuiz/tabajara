angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.webRuthinhaLogin', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/webRuthinhaLogin.html',
        controller: 'webRuthinhaLoginCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('eTECRuthCardoso', {
    url: '/page5',
    templateUrl: 'templates/eTECRuthCardoso.html',
    controller: 'eTECRuthCardosoCtrl'
  })

  .state('menu.cadastro', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cadastro.html',
        controller: 'cadastroCtrl'
      }
    }
  })

  .state('menu.registrado', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/registrado.html',
        controller: 'registradoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});