app
    .directive('vehicleInfoForm', function ($state) {
        return {
            restrict: "E",
            templateUrl: 'rest/app/client/components/vehicleInfo-form/vehicleInfo-form.view.html',
            link: function ($scope, $elem, $attr) {
                var vm = this;

                var year = new Date().getFullYear();
                var range = [];

                for (var i = 0; i < 7; i++) {
                    range.push({
                        label: year + i,
                        value: parseInt(String(year + i).slice(2, 4))
                    });
                }

                $scope.years = range;

                $scope.style = [
                    {
                        id: 1,
                        name: 'A'
                    }, {
                        id: 2,
                        name: 'b'
                    }, {
                        id: 3,
                        name: 'c'
                    }
                ]

                $scope.transmission = [
                    {
                        id: 1,
                        name: 'A'
                    }, {
                        id: 2,
                        name: 'b'
                    }, {
                        id: 3,
                        name: 'c'
                    }
                ]

                $scope.seatMaterial = [
                    {
                        id: 1,
                        name: 'A'
                    }, {
                        id: 2,
                        name: 'b'
                    }, {
                        id: 3,
                        name: 'c'
                    }
                ]

                $scope.states = [
                    {
                        "name": "Alabama",
                        "id": 1
                    }, {
                        "name": "Alaska",
                        "id": 2
                    }, {
                        "name": "American Samoa",
                        "id": 3
                    }, {
                        "name": "Arizona",
                        "id": 4
                    }, {
                        "name": "Florida",
                        "id": 12
                    }, {
                        "name": "Georgia",
                        "id": 13
                    }, {
                        "name": "Guam",
                        "id": 14
                    }, {
                        "name": "Hawaii",
                        "id": 15
                    }
                ];

                $scope.vehicleLocations = [
                    {
                        name: 'Dashboard',
                        checked: true
                    }, {
                        name: 'Other(Describe)',
                        checked: false
                    }
                ];

                $scope.handleRadioClick = function (item) {
                    $scope.flag = item.name === 'Other(Describe)'
                        ? true
                        : false
                };

                $scope.EPAStickers = [
                    {
                        name: 'EPA Sticker Not Clear',
                        checked: true
                    }, {
                        name: 'EPA Sticker Missing',
                        checked: false
                    }
                ];

                $scope.EPAStickerClick = function (item) {
                    alert(item.name);
                };

                $scope.principleLocations = [
                    {
                        name: 'Same as insured`s address',
                        checked: true
                    }, {
                        name: 'Other - Please Specify',
                        checked: false
                    }
                ];
                
                $scope.handleLocation = function (item) {
                    alert(item.name);

                    $scope.otherFlag = item.name === 'Other - Please Specify'
                    ? true
                    : false
                };
            }
        }
    })