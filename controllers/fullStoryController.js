
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

        console.log($scope.jack);

        function init() {
            $scope.currentStory = $scope.totalStories.forEach(function (item) {
                if (item.id == $stateParams.storyId) {
                    return true;
                }
                else {
                    return false;
                }
            });
        };

        init();

        // $scope.results = [];

        // $scope.jack.filter(function(item) {
        //    angular.forEach($scope.totalStories, function(totalStorie) {
        //       if(jack === totalStorie.id){
        //         $scope.results.push(item);
        //       }
        //    });
        // });



        // $scope.currentStory = [];
        // totalStorie.forEach(function(value){
        // if(value.id == totalStorie.id== jack.id){
        //     currentStory.push(jack.id);
        // }
        // });

        // $scope.currentStory = [];
        // totalStorie.forEach(function(value){
        // if(value.id == totalStorie.id== jack.id){
        //     currentStory.push(value);
        // }
        // });



    }]);



// function divideHighLessVeryHighSalaryData() {
//     data.forEach(function (item) {

//         console.log(item.salary);
//         if (item.salary <= 50000) {
//             dataLessSalary.push(item);
//         }
//         else if (item.salary > 50000 && item.salary <= 70000) {
//             dataHighSalary.push(item);
//         }
//         else {
//             dataVeryHighSalary.push(item);
//         }
//     })
//     console.log(dataVeryHighSalary);
//     console.log(dataHighSalary);
//     console.log(dataLessSalary);

// };
// divideHighLessVeryHighSalaryData();
