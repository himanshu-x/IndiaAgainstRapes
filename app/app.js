myApp = angular.module("myApp", ["ui.router"]);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/web/home");

    $stateProvider
        .state("web", {
            url: "/web",
            templateUrl: "../views/master.html",
            controller: "masterController as ctrl"
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
        .state("web.cards", {
            url: "/cards",
            views: {
                "@web": {
                    templateUrl: "../views/cards.html",
                    controller: "cardsController as ctrl"
                }
            }

        })

        .state("web.searchCards", {
            url: "/searchCards",
            views: {
                "@web": {
                    templateUrl: "../views/searchCards.html",
                    controller: "searchCardsController as ctrl"
                }
            }

        })
        .state("web.searchCards.fullCard", {
            url: "/:cid",
            views: {
                "@web": {
                    templateUrl: "../views/fullCard.html",
                    controller: "fullCardController as ctrl"
                }
            }

        })

});



