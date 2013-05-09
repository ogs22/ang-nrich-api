
angular.module('nrich', ['ngResource']).
    factory('Projectx', function($resource) {
        var Project = $resource('http://nrich.maths.org/public/api.php?tp=:resreq&obj_id=:id', {
            id: "@id",
            resreq: 'resreq'
        }
        );
        return Project;
    });


