(function () {
  'use strict';

  angular.module('myApp')
  .directive('myLayout', layoutDirective);

  function layoutDirective() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/layout.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }

  controller.$inject = ["$log"]

  function controller ($log) {
    var vm = this;
    vm.showNav = false;
    vm.toggleMenu = toggleMenu;

    function toggleMenu () {
      return vm.showNav = !vm.showNav;
    }

  }

}());
