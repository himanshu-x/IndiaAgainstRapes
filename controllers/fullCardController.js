angular.module("myApp")
    .controller('fullCardController', ['$scope', "$http", '$stateParams', "$httpParamSerializer", function ($scope, $http, $stateParams, $httpParamSerializer) {

        function init() {
            var hitesh = $stateParams.cid;
            Searchedcid(hitesh);
            $scope.searchText = "";
        };

        var successCallBack = function (response) {
            $scope.details = response.data.data;

        };
        var errorCallBack = function (reason) {
            $scope.error = reason.data;
        };

        function Searchedcid(cid) {
            var requestData = { cid: cid }
            $http({
                url: 'https://stg.fyndster.com/wildcard/v1/beta/boss.php?beta_cardstore_onCardStoreSync_MyOnCardStoreSync/getCardByCid/',
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
                },
                data: $httpParamSerializer(requestData)
            })
                .then(successCallBack, errorCallBack);
        };

        init();
    }]);
        // var jimmy = $stateParams;


        // function Searchedcid(cid) {
        //     var requestData = { keyword: cid }
        //     $http({
        //         url: 'https://stg.fyndster.com/wildcard/beta/boss.php?beta_cardstore_cardWork_MyCardWork/searchCard/',
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
        //         },
        //         data: $httpParamSerializer(requestData)
        //     }).then(function success(resp) {
        //         $scope.cardDetails = resp.data;
        //     }, function error(err) {

        //     })
        //     return 10;
        // };



        // $scope.details = [];
        // console.log($stateParams.details)

        // function init() {
        //     Searchedcid();
        // };
        // init();

