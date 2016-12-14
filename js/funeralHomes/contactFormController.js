'use strict';
//This code was apdapted from http://www.bossable.com/1910/angularjs-nodemailer-contact-form/

angular.module('marigold')
.controller('ContactFormController', ContactFormController)

ContactFormController.$inject = ['$http', '$mdToast', '$animate', '$stateParams', '$state']

function ContactFormController ($http, $mdToast, $animate, $stateParams, $state) {
  var vm = this;
  vm.id = $stateParams.id

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
                id : vm.id
            });
            console.log(data)
            // Simple POST request example (passing data) :
            $http.post('http://localhost:3000/api/email', data).
                success(function(data, status, headers, config) {
                    // vm callback will be called asynchronously
                    // when the response is available
                    $state.go('funeralHomeShow', {id: vm.id })
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Thanks for your message ' + data.contactName + "."  + "  If the provider doesn't respond in 24 hours, please contact them directly.")
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
