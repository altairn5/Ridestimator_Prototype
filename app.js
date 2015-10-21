var app = angular.module('ridestimatorApp', []);




// app.factory('RideEstimate' , function($resource){

// 	return $resource('https://api.uber.com/v1/estimates/price')
// 	$http({method: 'GET', url: '/entity/'+id+'?access_token='+token, headers: {'Authorization': 'Bearer '+token}}).then(function(response){ // do stuff }); - See more at: http://engineering.talis.com/articles/elegant-api-auth-angular-js/#sthash.LFMFfp7v.dpuf

// });

app.controller('RideEstimateController', ['$scope','$http', function ($scope, $http){

	$scope.ride = {};

	var uberClientId = "nve8UVY7Ehtc9_2BlbLqRFpKf_sR4URb";
	var uberServerToken = "T8mbwylMDwaXXDZMPt8wimfkhh2B3x6ONr_ZkeI9";
    var lglt = {
	  start_latitude: 37.763168,
      start_longitude: -122.4392017,
      end_latitude: 37.7908821,
      end_longitude: -122.4037407
  	};


	var method = 'GET';
	var url = 'https://api.uber.com/v1/estimates/price';

	// $scope.fetch = function() {
	// $scope.code = null;
	// $scope.response = null;

	$http({	
			method: method,
			url: url,
			headers: {'Authorization': 'Token'+ uberClientId},
			data: lglt
		})
		.then(function successCallback(response) {
			// this callback will be called asynchronously
			// when the response is available
	    	$scope.ride = response[0];
	    	console.log($scope.ride);
		}, function errorCallback(response) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			alert("BAD THING: Check your console errors")
		});

	// };

}]);