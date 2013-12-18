'use strict';

angular.module('vinifyApp')

	.factory('VinibarWines', function($resource){
		return {
			wines: null,
			ratedwines: null,
			getWines: function(success, failure) {
				var that = this;
				if (that.wines) {
					success(that.wines);
				}
				else {
					$resource('/vinibarlist/').query(
						function(abc){
							that.wines = abc;
							success(that.wines);
						}, 
						failure
						);
				}
			},
			getRatedWines: function(success, failure) {
				var that = this;
				if (that.ratedwines) {
					success(that.ratedwines);
				}
				else {
					$resource('/ratedlist/').query(
						function(abc){
							that.ratedwines = abc;
							success(that.ratedwines);
						}, 
						failure
						);
				}
			},
			updateWines: function(success, failure) {
				var that = this;
				$resource('/ratedlist/').query(
					function(abc){
						that.ratedwines = abc;
						success(that.ratedwines);
					}, 
					failure
					);
				$resource('/vinibarlist/').query(
					function(abc){
						that.wines = abc;
						success(that.wines);
					}, 
					failure
					);
			},
			resetWines: function () {
				this.wines = null;
				this.ratedwines = null;
			}
		}
	});