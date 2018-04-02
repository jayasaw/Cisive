app
    .directive('wizardApp', function () {

        return {
            restrict: "E",
            templateUrl: "rest/app/client/components/wizard/wizard.view.html",
            link: function ($scope, $elem, $attr, $q, $timeout, WizardHandler) {
                console.log('wizard')
                //this will cause the step to be hidden
                // $scope.disabled = 'true';

                $scope.canExit = true;
                $scope.stepActive = true;
        
                $scope.finished = function() {
                    alert("Wizard finished :)");
                };
                $scope.logStep = function(insuredInfo) {
                    console.log("Step continued",insuredInfo);
                };
                $scope.goBack = function() {
                    WizardHandler.wizard().goTo(0);
                };
                $scope.exitWithAPromise = function() {
                    var d = $q.defer();
                    $timeout(function() {
                        d.resolve(true);
                    }, 1000);
                    return d.promise;
                };
                $scope.exitToggle = function() {
                    $scope.canExit = !$scope.canExit;
                };
                $scope.stepToggle = function() {
                    $scope.stepActive = !$scope.stepActive;
                }
                $scope.exitValidation = function() {
                    return $scope.canExit;
                };
            }
        }
    });