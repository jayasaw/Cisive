app
    .directive('carcoRadio', function ($state) {
        return {
            restrict: "E",
            scope: {
                label: '@',
                options: '=',
                model:'=',
                onRadioClick: '&'
            },
            templateUrl: 'rest/app/client/components/vehicleOption-form/radio-options/radio-options.directive.html',
            link: function ($scope, $elem, $attr) {

                //var vm = this;
            },
            controller: function ($scope) {
                var vm = this;
            },
            controllerAs: 'rad',
            bindToController: true
        }
    })
