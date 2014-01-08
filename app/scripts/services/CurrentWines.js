'use strict';

angular.module('vinifyApp')
  .factory('WinesREST',function($resource){
    return $resource('http://devinify1.herokuapp.com/wines/');    
    })
  .controller('GetWinesRESTCtrl', function($scope, WinesREST){
    $scope.WINES=WinesREST.query();
  })


  .controller('GetWinesCtrl', function($scope, Wines){
    // $scope.Wines=Wines.query();
    $scope.Wines=[
        {
            "id": 1,
            "url": "http://192.168.9.184:8000/wines/1/", 
            "couleur": "Rouge", 
            "region": "Bordeaux", 
            "appellation": "Pauillac", 
            "domaine": "Mouton Rotschild", 
            "cuvee": "", 
            "millesime": 1982, 
            "prix": 1350, 
            "description": "Today, with an average price of $1,307 per bottle, Mouton 1982 is selling for more than 40 times its futures price\u2014a fabulous return on an investment."
        }, 
        {
            "id": 2,
            "url": "http://192.168.9.184:8000/wines/2/", 
            "couleur": "Rouge", 
            "region": "Bordeaux", 
            "appellation": "Pauillac", 
            "domaine": "Mouton Rotschild", 
            "cuvee": "", 
            "millesime": 1982, 
            "prix": 1350, 
            "description": "Today, with an average price of $1,307 per bottle, Mouton 1982 is selling for more than 40 times its futures price\u2014a fabulous return on an investment."
        }, 
        {
            "id": 3,
            "url": "http://192.168.9.184:8000/wines/3/", 
            "couleur": "Rouge", 
            "region": "Bordeaux", 
            "appellation": "Pauillac", 
            "domaine": "De La Rochiere", 
            "cuvee": "", 
            "millesime": 2012, 
            "prix": 15, 
            "description": "Un bon rouge qui tache"
        }
    ];

      $scope.Users=[
        {
            domaine:"Felix",
            region:"18",
            millesime:"M",
            prix:"12"
        }, 
        {
            domaine:"Benjamin",
            region:"12",
            millesime:"F",
            prix:"12"
        },
        {
            domaine:"Estelle",
            region:"18",
            millesime:"F",
            prix:"12"
        },
        {
            domaine:"Delphine",
            region:"18",
            millesime:"F",
            prix:"12"
        },   
    ];

    $scope.greeting= {text: 'place'};
    
  });
