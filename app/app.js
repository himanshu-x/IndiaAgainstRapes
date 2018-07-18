myApp = angular.module("myApp", ["ui.router"]);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/web/home");

    $stateProvider
        .state("web", {
            url: "/web",
            templateUrl: "../views/master.html",
           
        })

        .state("web.home", {
            url: "/home",
            views: {
                "@web": {
                    templateUrl: "../views/home.html",
                    controller: "homeController as ctrl"
                }
            }

        })
        .state("web.contact", {
            url: "/contact",
            views: {
                "@web": {
                    templateUrl: "../views/contact.html",
                    // controller: "contactController as ctrl"
                }
            }

        })
        .state("web.stories", {
            url: "/stories",
            views: {
                "@web": {
                    templateUrl: "../views/stories.html",
                    controller: "storiesController as ctrl"
                }
            }

        })
        .state("web.stories.fullStory", {
            url: "/:storyId",
            views: {
                "@web": {
                    templateUrl: "../views/fullStory.html",
                    controller: "fullStoryController as ctrl"
                }
            }

        })


});



