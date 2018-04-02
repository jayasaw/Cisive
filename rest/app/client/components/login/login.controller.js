app
    .controller('LoginController', function ($scope, $css, $location, AuthenticationService, FlashService) {
        console.log('LoginController..');
      
        $css.bind({
            href: 'rest/app/client/components/login/login.css'
        }, $scope);

        var vm = this;
        vm.login = login;
        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/home');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };

        $scope.setActiveTab = function (userName) {
            console.log('userName', userName)
            if (userName === 'Insured') {
                $scope.InsuredLoginForm = true;
                $scope.InspectorLoginForm = false;

            } else {
                $scope.InspectorLoginForm = false;
                $scope.InspectorLoginForm = true;
            }
        }
    });