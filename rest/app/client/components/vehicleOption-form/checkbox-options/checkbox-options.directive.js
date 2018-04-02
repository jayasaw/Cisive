app
    .directive('carcoCheckbox', function ($state) {
        return {
            restrict: "E",
            scope: {
                label: '@',
                options: '=',
                model: '=',
                onCheckboxClick: '&',
                onRadioChange1: '&'
            },
            transclude: true,
            templateUrl: 'rest/app/client/components/vehicleOption-form/checkbox-options/checkbox-options.directive.html',
            link: function ($scope, $elem, $attr) {

                //var vm = this;
            },
            controller: function ($scope) {
                var vm = this;
                vm.onRadioChange = function (option) {
                    vm.onRadioChange1({ option: option });
                }
            },
            controllerAs: 'check',
            bindToController: true
        }
    })
