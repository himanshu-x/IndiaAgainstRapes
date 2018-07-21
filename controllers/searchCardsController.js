angular.module("myApp")
    .controller('searchCardsController', ["$scope", "$http", "$httpParamSerializer", function ($scope, $http, $httpParamSerializer) {

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
            var requestData = { keyword: searchtxt }
            $http({
                url: 'https://stg.fyndster.com/wildcard/beta/boss.php?beta_cardstore_cardWork_MyCardWork/searchCard/',
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
                },
                data: $httpParamSerializer(requestData)
            })
                .then(successCallBack, errorCallBack);
        }

        init();

    }]);