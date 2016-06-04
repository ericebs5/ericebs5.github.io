angular.module('quotesApp')
  .controller('quotesCtrl', function($scope, quotesService) {

    $scope.quotes = quotesService.readQuote();

    $scope.createQuote = function() {
      quotesService.createQuote($scope.text, $scope.author);
      $scope.text = '';
      $scope.author = '';
    };

    $scope.deleteQuote = function(index) {
      quotesService.deleteQuote(index);
    };


  });
