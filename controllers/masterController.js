
angular.module("myApp")
    .controller('masterController', ['$scope', function ($scope) {
        $(document).ready(function () {
            $('.sidenav').sidenav();
        });
    }]);
