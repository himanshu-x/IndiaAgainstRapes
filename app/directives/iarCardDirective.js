angular.module("myApp").directive("iarCard", function () {

    return {
        // template: "visahl himanshu ki girlfefe"
        scope: {
            cardTitle: "=",
            cardPhone: "="
        },
        templateUrl: "../../views/directive-views/card.html",
        controller: ["$scope", "$window", function ($scope, $window) {

            var jack = $scope;

            $scope.openDialpad = function (phoneNumber) {
                $window.location = "tel:" + phoneNumber
            };

        }]
    }
})
