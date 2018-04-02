(function () {
    'use strict';

    app.factory('UserService', UserService);

    UserService.$inject = ['$timeout', '$filter', '$q', '$http'];
    function UserService($timeout, $filter, $q, $http) {

        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll() {
            var deferred = $q.defer();
            deferred.resolve(getUsers());
            return deferred.promise;
        }

        function GetById(id) {
            var deferred = $q.defer();
            var filtered = $filter('filter')(getUsers(), {id: id});
            var user = filtered.length
                ? filtered[0]
                : null;
            deferred.resolve(user);
            return deferred.promise;
        }

        function GetByUsername(username) {         
            var deferred = $q.defer();
            var filtered = getUsers(username);
            console.log('filtered',filtered)
            deferred.resolve(filtered);   
            console.log('deferred.promise',deferred.promise)
            return deferred.promise;
        }

        function Create(user) {
            var deferred = $q.defer();

            // simulate api call with $timeout
            $timeout(function () {
                GetByUsername(user.username)
                    .then(function (duplicateUser) {
                        console.log('duplicateUser>>>', duplicateUser)
                        if (duplicateUser == true) {
                            deferred.resolve({
                                success: false,
                                message: 'Username "' + user.username + '" is already taken'
                            });
                        } else {
                            var request = {
                                method: 'POST',
                                url: 'http://localhost:3000/Users',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                data: JSON.stringify(user)
                            }
                            $http(request).then(function () {
                                console.log("in success");
                                deferred.resolve({success: true});
                            }, function () {
                                console.log("error");
                                deferred.resolve({success: false});
                            });
                            deferred.resolve({success: true});
                        }
                    })
            }, 1000);

            return deferred.promise;
        }

        function Update(user) {
            var deferred = $q.defer();

            var users = getUsers();
            for (var i = 0; i < users.length; i++) {
                if (users[i].id === user.id) {
                    users[i] = user;
                    break;
                }
            }
            setUsers(users);
            deferred.resolve();

            return deferred.promise;
        }

        function Delete(id) {
            var deferred = $q.defer();

            var users = getUsers();
            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                if (user.id === id) {
                    users.splice(i, 1);
                    break;
                }
            }
            setUsers(users);
            deferred.resolve();

            return deferred.promise;
        }

        // private functions

        function getUsers(username) {

            return $http({
                    method: 'GET',
                    url: 'http://localhost:3000/Users?username=' + username
                }).then(function (response) {
                console.log('response', response)
                if (response.data.length > 0) {
                    console.log('response', response.data.length)
                    return true, response.data[0];
                } else {
                    return false, response.data[0];
                }
            });
        }

        function setUsers(users) {
            localStorage.users = JSON.stringify(users);
        }
    }
})();