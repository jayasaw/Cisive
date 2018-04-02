app.controller('main-page', function($scope, $state, $rootScope) {
    console.log('main-page')
        // $state.go('home.server.organizations.companyTab.servers');
        $scope.activeTabIndex = 0;
        angular.element('.mytabsclass').each(function() {
            var ar = this.id;
            angular.element('#' + ar).tabs();
        });

        $scope.steps = [
            { name: 'Insured Info Form', route: 'home.insuredInformation' },
            { name: 'Vehicle Info Form', route: 'home.vehicleInformation' }         
        ]
})