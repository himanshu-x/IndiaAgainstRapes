angular.module("myApp").controller("cardsController", ["$scope", "cardService", function ($scope, cardService) {

    function init() {

        cardService.getCard().then(function success(result) {
            $scope.cardData = result.data.data.carddata;
            $scope.walletData = result.data.data.walletdata;
        }, function error(err) {
            console.log(err);
        })
    };

    init();
}]);