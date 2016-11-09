(function(){
  'use strict';

  angular.module('Mod1SolApp', [])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.items="";

    $scope.checkItems = function(){
      $scope.msgColor="green";
      $scope.inColor="green";
      var itemsArr = $scope.items.split(",");
      var itemsCount = 0;

      var idx = 0;
      for(idx=0; idx < itemsArr.length; idx++){
        if(itemsArr[idx].length > 0 && itemsArr[idx] != "")
          itemsCount++;
      }

      if(itemsCount == 0){
        $scope.message = "Please enter data first.";
        $scope.msgColor = "red";
        $scope.inColor="red";
      }
      else if (itemsCount <= 3) {
        $scope.message=  "Enjoy!";
      }else {
        $scope.message=  "Too Much!";
      }

    }

  }
})();
