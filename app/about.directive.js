(function () {
  'use strict';

    angular.module('myApp')
      .directive('myAbout', aboutDirective);

      function aboutDirective() {
        return {
          restrict: 'E',
          scope: {},
          templateUrl: '/partials/about.html',
          controller: controller,
          controllerAs: 'vm'
        }
      }

      controller.$inject = ["$log"]

      function controller ($log) {
        var vm = this;

      }
}());