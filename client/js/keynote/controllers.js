'use strict';
 
angular
 .module('app')
 .controller('KeynoteCtrl', ['$scope', '$state', 'Keynote', function($scope,
     $state, Keynote) {
   $scope.keynotes = [];
   function getKeynotes() {
     Keynote
       .find()
       .$promise
       .then(function(results) {
         $scope.keynotes = results;
       });
   }
   getKeynotes();
 
   $scope.addKeynote = function() {
     Keynote
       .create($scope.newKeynote)
       .$promise
       .then(function(keynote) {
         $scope.newKeynote = '';
         $scope.keynoteForm.content.$setPristine();
         $('.focus').focus(); 
         getKeynotes();
       });
   };
 
   $scope.removeKeynote = function(item) {
     Keynote
       .deleteById(item)
       .$promise
       .then(function() {
         getKeynotes();
       });
   };
 }]);

