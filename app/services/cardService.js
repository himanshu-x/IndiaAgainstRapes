// angular.module("myApp").factory('cardService', ["$http", "$q", function ($http, $q,) {
//     function getcard(data) {

//         var dfd = $q.defer();
//         $http({
//             url: 'https://stg.fyndster.com/wildcard/beta/boss.php?beta_cardstore_onCardStoreSync_MyOnCardStoreSync/fetchCompleteData/164/54548376/',
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
//             },
//             data:data,
//         })
//             .then(successCallBack, errorCallBack);

//         var successCallBack = function (response) {
//             dfd.resolve(response.data.data.carddata);
//             dfd.resolve(response.data.data.walletdata);
//             // $scope.cardData = response.data.data.carddata;
//             // $scope.walletData = response.data.data.walletdata;


//         };
//         var errorCallBack = function (reason) {
//             dfd.reject(reason.data);
//         };

//         return dfd.promise; //resolve, reject   
//     }
//     // return getcard(data);
//     return {
//         getcard: getcard
//     };

// }]);


// angular.module("myApp").service("cardService", ["$http", function ($http) {
//     return {
//         test: function () {
//             alert("This is our dummy function. $http is provided: " + (!!$http));
//         }
//     }
// }]);


angular.module("myApp").factory('cardService', ["$http", "$q","$httpParamSerializer", function ($http, $q, $httpParamSerializer,) {

    function getCard() {
        var dfd = $q.defer();

        $http(
            {
                method: 'post',
                url: 'https://stg.fyndster.com/wildcard/beta/boss.php?beta_cardstore_onCardStoreSync_MyOnCardStoreSync/fetchCompleteData/164/54548376/',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
                },

            }
        ).then(function success(response) {
            dfd.resolve(response);


        }, function error(reason) {
            dfd.reject(reason);

        });

        return dfd.promise; //resolve, reject
    };

  function searchCard(jujuuu) {
        var requestData = { keyword: jujuuu }

        var dfd = $q.defer();

        $http(
            {
                method: 'post',
                url: 'https://stg.fyndster.com/wildcard/beta/boss.php?beta_cardstore_cardWork_MyCardWork/searchCard/',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
                },
                data: $httpParamSerializer(requestData)
            }
        ).then(function success(response) {
            dfd.resolve(response);


        }, function error(reason) {
            dfd.reject(reason);

        });

        return dfd.promise; //resolve, reject
    };
    function searchCid(cid) {
        var requestData = { cid: cid }

        var dfd = $q.defer();

        $http({
            url: 'https://stg.fyndster.com/wildcard/v1/beta/boss.php?beta_cardstore_onCardStoreSync_MyOnCardStoreSync/getCardByCid/',
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
            },
            data: $httpParamSerializer(requestData)
        }).then(function success(response) {
            dfd.resolve(response);


        }, function error(reason) {
            dfd.reject(reason);

        });

        return dfd.promise; //resolve, reject
    };



    return {
        getCard: getCard,
        searchCard: searchCard,
        searchCid : searchCid
    }

}]);