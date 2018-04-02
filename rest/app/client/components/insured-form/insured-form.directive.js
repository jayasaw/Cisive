app
    .directive('insuredForm', function ($state) {
        return {
            restrict: "E",
            templateUrl: 'rest/app/client/components/insured-form/insured-form.view.html',
            link: function ($scope, $elem, $attr) {

                var vm = this;

                $scope.date = moment().format("MM-DD-YYYY");
                $scope.time = moment().format("HH:mm a");
                
                $scope.adverseData = {
                    adverseConditions: [
                        {
                            id: '1',
                            name: 'Option A'
                        }, {
                            id: '2',
                            name: 'Option B'
                        }, {
                            id: '3',
                            name: 'Option C'
                        }, {
                            id: '4',
                            name: 'None'
                        }
                    ],
                    selectedAdverse: {
                        id: '4',
                        name: 'None'
                    } //This sets the default value of the select in the ui
                };

                $scope.insuranceCompanyData = {
                    insuranceCompanies: [
                        {
                            id: '1',
                            name: 'Option A'
                        }, {
                            id: '2',
                            name: 'Option B'
                        }, {
                            id: '3',
                            name: 'Option C'
                        }, {
                            id: '4',
                            name: 'A Central'
                        }
                    ],
                    selectedInsuranceCompany: {
                        id: '4',
                        name: 'A Central'
                    } //This sets the default value of the select in the ui
                };

                $scope.typeOfPhoneNumbers = [
                    {
                        name: 'Mobile',
                        checked: true
                    }, {
                        name: 'Landline',
                        checked: false
                    }
                ];

                $scope.handleRadioClick = function (item) {
                    alert(item.name);
                };

                //     $scope.insuredData = function (insuredInfo) {
                // console.log('insuredInfo.firstName',insuredInfo.firstName)    };

                $scope.logStep = function (insuredInfo) {
                    console.log("Step continued", insuredInfo);
                };
            }
        }
    })