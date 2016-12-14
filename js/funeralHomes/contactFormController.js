'use strict';

angular.module('marigold')
.controller('ContactFormController', ContactFormController)

ContactFormController.$inject = ['$http', '$mdToast', '$animate', '$stateParams']

function ContactFormController ($http, $mdToast, $animate, $stateParams) {
  var vm = this;
  var _id = $stateParams.id

// Expose view variables

      vm.toastPosition = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };
        vm.getToastPosition = function () {
            return Object.keys(vm.toastPosition)
                .filter(function (pos) {
                    return vm.toastPosition[pos];
                })
                .join(' ');
        };

        vm.sendMail = function () {

            var data = ({
                contactName : vm.contactName,
                contactEmail : vm.contactEmail,
                contactMsg : vm.contactMsg,
                id : _id
            });
            console.log(data)
            // Simple POST request example (passing data) :
            $http.post('http://localhost:3000/api/email', data).
                success(function(data, status, headers, config) {
                    // vm callback will be called asynchronously
                    // when the response is available

                    $mdToast.show(
                        $mdToast.simple()
                            .content('Thanks for your message ' + data.contactName + ' You Rock!')
                            .position(vm.getToastPosition())
                            .hideDelay(5000)
                    );

                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });

        };
    }
