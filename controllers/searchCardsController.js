angular.module("myApp")
    .controller('searchCardsController', ["$scope", "cardService", function ($scope, cardService, ) {

        $scope.searchCards = function () {
            SearchedCards($scope.searchText);
        }

        function init() {
            $scope.searchText = "";
        }

        var successCallBack = function (response) {
            $scope.abcd = response.data.data;
        };

        var errorCallBack = function (reason) {
            $scope.error = reason.data;
        };

        function SearchedCards(searchtxt) {
            cardService.searchCard(searchtxt).then(successCallBack, errorCallBack);
        }

        init();

    }]);