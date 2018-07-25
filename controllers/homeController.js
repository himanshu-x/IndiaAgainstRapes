
angular.module("myApp")
    .controller('homeController', ['$scope', function ($scope) {

        function init() {
            $scope.myCardTitle = "HItesh yadava ka direvtive";
            $scope.myCardPhone = "+919558211215";

            $scope.mySecondCardTitle = "Mty footerer diretive visahl";
            $scope.mySecondCardPhone = "+918860762607";

        };

        $scope.topStories = [
            {
                id: 1,
                title: "Justice",
                descr: "Candle March is set against the backdrop of the issues of women empowerment and injustice in india.It releases on December.",
                imageUrl: "../images/story1.jpg"
            },
            {
                id: 2,
                title: "Movement",
                descr: "Candle March is set against the backdrop of the issues of women empowerment and injustice in india.It releases on December.",
                imageUrl: "../images/womenProtest.jpg"
            },
            {
                id: 3,
                title: "Candle March",
                descr: "Candle March is set against the backdrop of the issues of women empowerment and injustice in india.It releases on December.",
                imageUrl: "../images/story1.jpg"
            }

        ]

        $(document).ready(function () {
            $('.slider').slider();
        });

        init();

    }]);
