var app = angular.module('ridestimatorApp', []);




// app.factory('RideEstimate' , function($resource){

// 	return $resource('https://api.uber.com/v1/estimates/price')
// 	$http({method: 'GET', url: '/entity/'+id+'?access_token='+token, headers: {'Authorization': 'Bearer '+token}}).then(function(response){ // do stuff }); - See more at: http://engineering.talis.com/articles/elegant-api-auth-angular-js/#sthash.LFMFfp7v.dpuf

// });

app.controller('RideEstimateController', ['$scope','$http', function ($scope, $http){

	$scope.ride = {};

	$scope.uberClientId = "nve8UVY7Ehtc9_2BlbLqRFpKf_sR4URb";
	$scope.uberServerToken = "T8mbwylMDwaXXDZMPt8wimfkhh2B3x6ONr_ZkeI9";
    $scope.lglt = {
	  start_latitude: 37.763168,
      start_longitude: -122.4392017,
      end_latitude: 37.7908821,
      end_longitude: -122.4037407
  };


	$scope.method = 'GET';
	$scope.url = 'https://api.uber.com/v1/estimates/price.json';

	$scope.fetch = function() {
	$scope.code = null;
	$scope.response = null;

	$http({method: $scope.method, url: $scope.url, headers: {'Authorization': 'Token'+ uberClientId}, data: $scope.lglt }).success(function(response){
    
    	$scope.ride = response[0];
    	console.log($scope.ride);

		});
};

}]);