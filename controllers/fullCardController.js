angular.module("myApp")
    .controller('fullCardController', ['$scope', '$stateParams', "cardService", function ($scope, $stateParams, cardService, ) {

        function init() {
            var cidParam = $stateParams.cid;
            Searchedcid(cidParam);
            $scope.searchText = "";
        };


        var successCallBack = function (response) {
            $scope.details = response.data.data;
        };

        var errorCallBack = function (reason) {
            $scope.error = reason.data;
        };

        function Searchedcid(cid) {
            cardService.searchCid(cid).then(successCallBack, errorCallBack);
        };

        init();
    }]);
