angular.module('project', ['nrich']).
    config(function($routeProvider) {
        $routeProvider.
        when('/',{
            controller:ListAllCtrl,
            templateUrl:'all.html'
        }).
        when('/:id', {
            controller:ListCtrl, 
            templateUrl:'list.html'
        }).
        when('/edit/:projectId', {
            controller:EditCtrl, 
            templateUrl:'detail.html'
        }).
        when('/new', {
            controller:CreateCtrl, 
            templateUrl:'detail.html'
        }).
        otherwise({
            redirectTo:'/'
        });
    });
 
function ListAllCtrl($scope,$location,$routeParams, Projectx) {
    var resources = Projectx.query({
        resreq:'id'
    },function() {
        //little hack to make the resource IDs ints so the ordering works
        for (var i =0;i < resources.length;i++)
            resources[i].id = resources[i].id*1;
    });
    $scope.resources = resources;
}
 
function ListCtrl($scope,$location,$routeParams, Projectx) {
    $scope.info = Projectx.get({
        id:$routeParams.id,
        resreq:'resreq'
    });
    var math = document.getElementById("mcm");
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,math]);
}
 
 
function CreateCtrl($scope, $location, Projectx) {
//other stuff
}
 
 
function EditCtrl($scope, $location, $routeParams, Projectx) {
//some stuff
}


