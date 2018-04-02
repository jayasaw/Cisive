app.config( function($stateProvider, $urlRouterProvider,$locationProvider) {

    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'rest/app/client/views/main-page.html',
            controller: 'main-page'
        })
       
        // login
        .state('login', {
            url: '/login',
            templateUrl: 'rest/app/client/components/login/login.view.html',
            controller: 'LoginController',
            css: 'rest/app/client/components/login/login.css'
           
        })

        // // register
        .state('register', {
            url: '/register',
            templateUrl: 'rest/app/client/components/register/register.view.html',
            controller: 'RegisterController',
            css: 'rest/app/client/components/login/login.css'
           
        })

        // Forgot Password

        .state('forgotPassword', {
            url: '/forgot-password',
            templateUrl: 'rest/app/client/components/forgotPassword/forgotPassword.view.html',
            controller: 'ForgotPasswordController',
            css: 'rest/app/client/components/login/login.css'
           
        })

        // Reset Password

        .state('resetPassword', {
            url: '/reset-password',
            templateUrl: 'rest/app/client/components/resetPassword/resetPassword.view.html',
            controller: 'ResetPasswordController',
            css: 'rest/app/client/components/login/login.css'
           
        })

        //Insured information
        .state('home.insuredInformation',{
            url:'/Insured-Information',
            templateUrl:'rest/app/client/views/insured-info.html',
            controller: 'insured-info'
        })

        // Vehicle information
        .state('home.vehicleInformation',{
            url:'/Vehicle-Information',
            templateUrl:'rest/app/client/views/vehicle-info.html',
            controller: 'vehicle-info'
        })
    });

// app.run(run);
// run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
// function run($rootScope, $location, $cookies, $http) {
//     // keep user logged in after page refresh
//     $rootScope.globals = $cookies.getObject('globals') || {};
//     if ($rootScope.globals.currentUser) {
//         $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
//     }

//     $rootScope.$on('$locationChangeStart', function (event, next, current) {
//         // redirect to login page if not logged in and trying to access a restricted page
//         var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
//         var loggedIn = $rootScope.globals.currentUser;
//         if (restrictedPage && !loggedIn) {
//             $location.path('/login');
//         }
//     });
// }