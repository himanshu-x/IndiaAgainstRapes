angular.module("myApp")
    .controller('cardsController', ["$scope", "$http", function ($scope,$http) {


        var successCallBack = function (response) {
            $scope.cardData = response.data.data.carddata;
            $scope.walletData = response.data.data.walletdata;

            console.log(response.data.data)
        };
        var errorCallBack = function (reason) {
            $scope.error = reason.data;
        };
        
        $http({
            url: 'https://stg.fyndster.com/wildcard/beta/boss.php?beta_cardstore_onCardStoreSync_MyOnCardStoreSync/fetchCompleteData/164/54548376/',
            method: "POST",
            
        })
        .then(successCallBack, errorCallBack);

    }]);



    // $http({
    //     url: 'https://stg.fyndster.com/wildcard/beta/boss.php?beta_cardstore_onCardStoreSync_MyOnCardStoreSync/fetchCompleteData/160/973951182/',
    //     method: "POST",

    // })
    //     .then(function (response) {
    //         $scope.yadavs=response.data;
    //         // success
    //     },
    //         function (reason) {
    //             $scope.error = reason.data; // optional
    //             // failed
    //         });
