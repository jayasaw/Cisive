app
.controller('ResetPasswordController', function ($scope,$state, $css) {
    console.log('ResetPasswordController..');
    var vm = this;

    $css.bind({
        href: 'rest/app/client/components/login/login.css'
    }, $scope);
   
    $scope.loader = function(){
        vm.dataLoading = true;
    }

    // $scope.cancel = function () {
    //     // $location.path('/home');
    //     console.log('cancel')
    //     $state.transitionTo('forgotPassword')
    // }

    $scope.onSubmit = function () {
       // $state.transitionTo('resetPassword')
       console.log('Password Changed..');
       alert('Password Changed..')
    }
});