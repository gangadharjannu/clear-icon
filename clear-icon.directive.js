angular.module('clearIconModule', []).directive('clearIcon', clearIconDirective);

function clearIconDirective($compile) {
	return {
		require: 'ngModel',
		restrict: 'EA',
		link: function(scope, element, attrs, ctrl) {
			var resetInput = null;
			var template = '<a class="clear-icon ng-hide">&times;</a>';
			element.after($compile(template)(scope));
			resetInput = element.next();

			function isHover(e) {
				return (e.parentElement.querySelector(':hover') === e);
			}

			element.on('input paste focus change', function(event) {
				if (event.target.value.trim()) {
					resetInput.removeClass('ng-hide');
				} else {
					resetInput.addClass('ng-hide');
				}
			});

			element.on('blur', function() {
				if (!isHover(resetInput[0])) {
					resetInput.addClass("ng-hide")
				}
			});

			resetInput.on('click', function(event) {
				ctrl.$setPristine();
				ctrl.$setUntouched();
				ctrl.$setViewValue(null);
				scope.$apply(function() {
					event.target.value = null;
				});
				ctrl.$render();
				resetInput.addClass('ng-hide');
				element[0].focus();
			});

			//adding style tag for styles
			function appendStyle(css){
				if(document.getElementById('clearicon')){
					return false;
				}
				var	head = document.head || document.getElementsByTagName('head')[0],
				style = document.createElement('style');
				style.id="clearicon";
				style.type = 'text/css';
				if (style.styleSheet){
					style.styleSheet.cssText = css;
				} else {
					style.appendChild(document.createTextNode(css));
				}

				head.appendChild(style);
			}
			var cssText = 'input[clear-icon] {'+
			'padding-right:18px;'+
			'}'+
			'.clear-icon{'+
			'position: relative;'+
			'left: -18px;'+
			'vertical-align: middle;'+
			'}';

			appendStyle(cssText);
			
		}
	}
}