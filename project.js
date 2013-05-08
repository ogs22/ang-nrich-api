angular.module('project', ['nrich']).
  config(function($routeProvider) {
    $routeProvider.
      when('/',{controller:ListAllCtrl,templateUrl:'all.html'}).
      when('/:id', {controller:ListCtrl, templateUrl:'list.html'}).
      when('/edit/:projectId', {controller:EditCtrl, templateUrl:'detail.html'}).
      when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).
      otherwise({redirectTo:'/'});
  });
 
function ListAllCtrl($scope,$location,$routeParams, Projectx) {
  $scope.resources = Projectx.query({resreq:'id'});
  console.log($scope.resources);
}
 
function ListCtrl($scope,$location,$routeParams, Projectx) {
  $scope.info = Projectx.get({id:$routeParams.id,resreq:'resreq'});
}
 
 
function CreateCtrl($scope, $location, Projectx) {
//other stuff
}
 
 
function EditCtrl($scope, $location, $routeParams, Projectx) {
    //some stuff
}


