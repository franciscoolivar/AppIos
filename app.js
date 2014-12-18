app = angular.module('sorteioCurtir', [])

app.controller('SorteioController', function($scope, $http) {

  $scope.pegarDadosNoFacebook = function() {
    $http.get('http://graph.facebook.com/' + $scope.pubID).success(function(data) {
      $scope.image      = data.images[5]
      $scope.name       = data.name
      $scope.publisher  = data.from.name

      $scope.likes      = data.likes.data


    }).error(function() { alert('Houve um problema com sua solicitação') })
  }


  $scope.$watch('pubID', function(value) {
    if(value) {
      $scope.pegarDadosNoFacebook()
    }
  })

  $scope.sortear = function() {
    var item = $scope.likes[Math.floor(Math.random()*$scope.likes.length)]
    console.log(item)
    $scope.sorteado = item
    return item
  }

})
