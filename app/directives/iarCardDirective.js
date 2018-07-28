angular.module("myApp").directive("iarCard", function () {

    return {

        scope: {
            cardCompany: "=",
            cardPhone: "=",
            cardName: "=",
            cardAddress: "=",
            cardUcn: "=",
            cardEmail: "=",
            cardCid: "="
        },
        templateUrl: "../../views/directive-views/card.html",
        controller: ["$scope", "$window", function ($scope, $window) {

            var jack = $scope;

            $scope.openDialpad = function (phoneNumber) {
                $window.location = "tel:" + phoneNumber
            };
            $scope.sendMail = function (emailId) {
                $window.location = "mailto:" + emailId;
            };

        }]
    }
});