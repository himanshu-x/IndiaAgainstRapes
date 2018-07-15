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

                }
            }

        });
});



