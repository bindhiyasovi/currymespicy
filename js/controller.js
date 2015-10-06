//***** HOME Page *****
mainApp.controller('mainController', ['$scope', '$http', function($scope, $http){

	$scope.message = "Welcome to Curry Me Spicy!!! <br />Search for a recipe...";
	$scope.myVal = false;

	//***** Search Query *****
	$scope.showResult = function(){
		if ($scope.query != "")
		{
			$scope.myVal = true;
		} else {
			$scope.myVal = false;
		}
	};
//***** get the data from (DB) through JSON file from the server *****
	//$http.get("http://localhost:3000/posts")
	$http.get("db_data.JSON")
		.then(function(data, status, headers, config){
			//console.log("status is :", status);
			//console.log("Received response :" + data.data);
			$scope.cmsData = data.data;
		});

	$scope.currentPage = 1;
  	$scope.pageSize = 12;

  	$scope.getRecipe = function(recipeContent){
  		$scope.recipe_Content = recipeContent;
  	};

}]);

//***** ABOUT Page *****
mainApp.controller('aboutController', ['$scope', function($scope){
	$scope.message = "Its all about home cooking. I share few recipes that I make at home for my family. You can find recipes from typical Tamil household. Also you can see recipes from other parts of India that has been loved by my family.";
}]);

//***** CONTACT US Page *****
mainApp.controller('contactController', ['$scope', function($scope){
	$scope.message = "Contact Us!";
}]);