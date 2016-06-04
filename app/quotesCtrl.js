angular.module('quotesApp')
  .controller('quotesCtrl', function($scope, quotesService) {

    $scope.quotes = quotesService.readQuote();

  });
