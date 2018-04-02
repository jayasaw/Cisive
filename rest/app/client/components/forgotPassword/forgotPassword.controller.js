app
    .controller('ForgotPasswordController', function ($scope, $state, $css) {
        console.log('ForgotPasswordController..');
        var vm = this;

        $css.bind({
            href: 'rest/app/client/components/login/login.css'
        }, $scope);

        $scope.loading = function () {
            vm.dataLoading = true;
        };

        $scope.cancel = function () {
            // $location.path('/home');
            console.log('cancel')
            $state.transitionTo('login')
        }

        $scope.onSubmit = function () {
            $state.transitionTo('resetPassword')
        }
    });