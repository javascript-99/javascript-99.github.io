'use strict';

var js99App = angular.module('js99App', [])
.controller('AppController', function ($scope, $http) {
  $scope.problems = [];

  $http({
    method: 'GET',
    url: 'problems.json'
  }).then(function successCallback(response) {
    $scope.problems = response.data;
  });

});