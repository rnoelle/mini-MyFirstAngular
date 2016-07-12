angular.module('friendsList').controller('mainCtrl', function($scope) {
  // $scope.friends = [
  //   {name:'Caitlin', livesIn: 'Ann Arbor'}, {name: 'Hannah', livesIn: 'Mississippi'}, {name: 'Lisa', livesIn: 'Provo'}
  // ];
  $scope.friends = [];
  $scope.addFriend = function () {
    $scope.friends.push({name: $scope.friend.name, livesIn: $scope.friend.livesIn});
    $scope.reset();
  };
});
