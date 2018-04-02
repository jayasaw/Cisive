app
    .directive('vehicleOptionForm', function ($state) {
        return {
            restrict: "E",
            templateUrl: 'rest/app/client/components/vehicleOption-form/vehicleOption-form.view.html',
            link: function ($scope, $elem, $attr) {
                var vm = this;
                $scope.selectedValue = '';
                $scope.checked = function (x) {
                    console.log(x);
                    console.log($scope.selectedPlayer1, $scope.selectedPlayer2);
                }
                $scope.radioEquipment = [
                    {
                        name: 'Dashboard',
                        checked: true,
                        model: 'dashboard',
                    }, {
                        name: 'Factory Installed',
                        model: 'factoryInstalled',
                        checked: true
                    },
                    {
                        name: 'GPS/Navigation System',
                        model: 'navigation',
                        checked: true,
                        radioItems: [
                            {
                                name: 'Yes',
                                checked: false,
                                model: 'navigationAnswer'
                            },
                            {
                                name: 'No',
                                checked: false,
                                model: 'navigationAnswer',
                            }
                        ]
                    }
                ];

                $scope.antitheftDevice = [
                    {
                        name: 'None',
                        model: 'none',
                        checked: true
                    }, {
                        name: 'System present, but inoperative',
                        model: 'inoperative',
                        checked: true
                    },
                    {
                        name: 'uto recovery system',
                        model: 'recovery',
                        checked: true
                    },
                    {
                        name: 'Passive disabling device',
                        model: 'passiveDevice',
                        checked: true
                    },
                    {
                        name: 'Active disabling device',
                        model: 'activeDevice',
                        checked: true
                    },
                    {
                        name: 'Combat auto theft (CAT)',
                        model: 'cat',
                        checked: true
                    },
                    {
                        name: 'Etched glass indicating VIN or coding',
                        model: 'vin',
                        checked: true
                    }
                ];

                $scope.exterior = [
                    {
                        name: 'Custom/MAG wheels',
                        model: 'magWheel',
                        checked: true
                    }, {
                        name: 'Special hub caps',
                        model: 'hubCaps',
                        checked: true
                    },
                    {
                        name: 'Special tires',
                        model: 'tires',
                        checked: true
                    },
                    {
                        name: 'Spoiler',
                        model: 'spoiler',
                        checked: true
                    },
                    {
                        name: 'Sunroof/Moonroof',
                        model: 'roofType',
                        checked: true
                    },
                    {
                        name: 'Rear window wiper',
                        model: 'rearWiper',
                        checked: true
                    },
                    {
                        name: 'Daytime running lights',
                        model: 'dayTimeLights',
                        checked: true
                    },
                    {
                        name: 'Backup camera',
                        model: 'camera',
                        checked: true
                    },
                    {
                        name: 'Collision avoidance system',
                        model: 'cas',
                        checked: true
                    },
                    {
                        name: 'Backup sensor',
                        model: 'sensor',
                        checked: true
                    }
                ];

                $scope.safty = [
                    {
                        name: 'Anti-lock brakes',
                        model: 'alb',
                        checked: true
                    },
                    {
                        name: 'Front air bags',
                        model: 'fab',
                        checked: true,
                        radioItems: [
                            {
                                name: '1',
                                model: 'fabType',
                                checked: false,
                            },
                            {
                                name: '2',
                                model: 'fabType',
                                checked: false,
                            }
                        ]
                    },
                    {
                        name: 'Side air bags',
                        model: 'sab',
                        checked: true,
                        radioItems: [
                            {
                                name: '1',
                                model: 'sabType',
                                checked: false,
                            },
                            {
                                name: '2',
                                model: 'sabType',
                                checked: false,
                            }
                        ]
                    },
                    {
                        name: 'Rear air bags',
                        model: 'rab',
                        checked: true,
                        radioItems: [
                            {
                                name: '1',
                                model: 'rabType',
                                checked: false,
                            },
                            {
                                name: '2',
                                model: 'rabType',
                                checked: false,
                            }
                        ]
                    },
                ]

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

                $scope.logModel = function () {
                    console.log($scope.antitheftDeviceModel);
                    console.log($scope.exteriorModel);
                    console.log($scope.saftyModel);

                }
            }
        }
    })
