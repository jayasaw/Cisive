app
    .controller('RegisterController', function ($scope, $css, $http, $q, UserService, $location, $rootScope, FlashService) {
        console.log('RegisterController..');

        var vm = this;

        $css.bind({
            href: 'rest/app/client/components/login/login.css'
        }, $scope);

        vm.register = register;

        function register() {
            console.log('vm.user',vm.user)
            vm.dataLoading = true;
            UserService
                .Create(vm.user)
                .then(function (response) {
                    console.log('response',response)
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }

        $scope.getStates = function () {

            var defer = $q.defer();

            $http
                .get('http://localhost:3000/States')
                .then(function onSuccess(response) {
                    console.log(response.data);
                    $scope.states = response.data
                    defer.resolve({success: true});
                })
                .catch(function onError(response) {
                    console.log(response);
                    defer.resolve({success: false});
                });

        //     $scope.states = [{
        //         "name": "Alabama",
        //         "id": 1
        //       },
        //       {
        //         "name": "Alaska",
        //         "id": 2
        //       },
        //       {
        //         "name": "American Samoa",
        //         "id": 3
        //       },
        //       {
        //         "name": "Arizona",
        //         "id": 4
        //       }, {
        //         "name": "Florida",
        //         "id": 12
        //       },
        //       {
        //         "name": "Georgia",
        //         "id": 13
        //       },
        //       {
        //         "name": "Guam",
        //         "id": 14
        //       },
        //       {
        //         "name": "Hawaii",
        //         "id": 15
        //       },]
        }

        $scope.getStates();

        $scope.GetValue = function () {
            var state = vm.user.selectedState;

            console.log('state', state)

            if (state.name === 'Florida') {
                console.log('Florida')
                $scope.floridaState = true;
            }
        }
    });