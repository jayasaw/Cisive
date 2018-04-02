app
    .controller('insured-info', function ($scope) {
        console.log('insured-info');
        // $scope.name = 'Enter Insured information'; var vm = this; $scope.date =
        // moment().format("MM-DD-YYYY"); $scope.time = moment().format("HH:mm a");
        // $scope.data = {     availableOptions: [       {id: '1', name: 'A'}, {id: '2',
        // name: 'B'},       {id: '3', name: 'None'}     ], selectedOption: {id: '3',
        // name: 'None'} //This sets the default value of the select in the ui     };
        // console.log('data.selectedOption',$scope.data.selectedOption)

        $scope.submitForm = function (isValid) {

            // check to make sure the form is completely valid
            if (isValid) {
                alert('our form is amazing');
            }
        }
    });