'use strict';

angular.module('vinifyApp')
  .controller('VinibarCtrl', function ($scope) {
    $scope.items = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
    $scope.isCollapsed=false;
   	$scope.choices = [
                                              {name: 'Noter', link: 'appv1/note'},
                                              {name: 'Informations', link: 'appv1/infos'},
                                            ];

    $scope.Wines=[
        {
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
            "url": "http://192.168.9.184:8000/wines/3/", 
            "couleur": "Rouge", 
            "region": "Bordeaux", 
            "appellation": "Pauillac", 
            "domaine": "De La Rochiere", 
            "cuvee": "", 
            "millesime": 2012, 
            "prix": 15, 
            "description": "Un bon rouge qui tache"
        },
        {
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
            "url": "http://192.168.9.184:8000/wines/3/", 
            "couleur": "Rouge", 
            "region": "Bordeaux", 
            "appellation": "Pauillac", 
            "domaine": "De La Rochiere", 
            "cuvee": "", 
            "millesime": 2012, 
            "prix": 15, 
            "description": "Un bon rouge qui tache"
        },{
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
  });
