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