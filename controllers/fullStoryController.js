
angular.module("myApp")
    .controller('fullStoryController', ['$scope', '$stateParams', function ($scope, $stateParams) {


        var jack = $stateParams;
        $scope.totalStories = [

            {
                id: 1,
                title: "Justice",
                descr: "Candle March is set against the backdrop of the issues of women empowerment and injustice in india.It releases on December.",
                imageUrl: "../images/womenProtest.jpg"
            },
            {
                id: 2,
                title: "Movement",
                descr: "Candle March is set against the backdrop of the issues of women empowerment and injustice in india.It releases on December.",
                imageUrl: "../images/story1.jpg"
            },
            {
                id: 3,
                title: "Candle March",
                descr: "Candle March is set against the backdrop of the issues of women empowerment and injustice in india.It releases on December.",
                imageUrl: "../images/womenProtest.jpg"
            },
            {
                id: 4,
                title: "Justice",
                descr: "Candle March is set against the backdrop of the issues of women empowerment and injustice in india.It releases on December.",
                imageUrl: "../images/story1.jpg"
            },
            {
                id: 5,
                title: "Movement",
                descr: "Candle March is set against the backdrop of the issues of women empowerment and injustice in india.It releases on December.",
                imageUrl: "../images/womenProtest.jpg"
            },
            {
                id: 6,
                title: "Candle March",
                descr: "Candle March is set against the backdrop of the issues of women empowerment and injustice in india.It releases on December.",
                imageUrl: "../images/story1.jpg"
            }
        ]

        $scope.currentStory = [];
        console.log($stateParams.currentStory)

        function init() {
            $scope.currentStory = $scope.totalStories.filter(function (item) {
                if (item.id == $stateParams.storyId) {
                    return true;
                }
                else {
                    return false;
                }
            });
        };
        init();
    }]);




