angular.module('myDirectiveModule', [])
	.directive("myAutoComplete", function(){
	return{
		restrict: 'EA',
		template: 'country is {{countries[0].name}}',
		link: function($scope, element, attrs){
			element.bind('click', function(){
				element.html('clicked element');
			});
			element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });
            element.bind('mouseleave', function(){
            	element.css('background-color', 'white');
            });
		}
	};
});