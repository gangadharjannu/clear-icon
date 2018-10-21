# clear-icon

An AngularJS directive for clearing HTML inputs using clear icon without any external dependencies.

**Feature list**:

 * clears HTML input.
 * validation friendly (resets input to default state).
 * No external dependencies (pure Angular).
 
#### How to guide

 * Manual method
   * Download clear-icon directive from [GitHub](https://raw.githubusercontent.com/CallMeAnil/clear-icon/master/clear-icon.directive.js)
 * Using Bower
 	* ```bower install clear-icon```
 * Include it in your main page (Usually it should be index.html)
 * Add **clearIconModule** as a dependency in your main module. 
 * Example: If your app name is 'myApp' you can add clearIconModule as a dependency like below

```javascript
angular.module('myApp',['clearIconModule']);	
```

And here's some code! :
```HTML
<body ng-app="myApp">
	<input type="text" ng-model="test" clear-icon>
</body>
```

#### Demo

[demo](https://gangadharjannu.github.io/clear-icon/)
