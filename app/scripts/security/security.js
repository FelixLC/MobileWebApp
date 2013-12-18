// Based loosely around work by Witold Szczerba - https://github.com/witoldsz/angular-http-auth
angular.module('security.service', [
  'security.retryQueue',    // Keeps track of failed requests that need to be retried once the user logs in
  'security.login',         // Contains the login form template and controller
  'ui.bootstrap.dialog'     // Used to display the login form as a modal dialog.
])

.factory('security', ['$route', '$http', '$q', '$location', 'securityRetryQueue', '$dialog', function($route, $http, $q, $location, queue, $dialog) {

  // Redirect to the given url (defaults to '/')
  function redirect(url) {
    url = url || '/';
    $location.path(url);
  }

  // Login form dialog stuff
  var loginDialog = null;
  function openLoginDialog() {
    if ( loginDialog ) {
      throw new Error('Trying to open a dialog that is already open!');
    }
    loginDialog = $dialog.dialog();
    loginDialog.open('scripts/security/login/form.tpl.html', 'LoginFormController').then(onLoginDialogClose);
  }
  function closeLoginDialog(success) {
    if (loginDialog) {
      loginDialog.close(success);
    }
  }
  function onLoginDialogClose(success) {
    loginDialog = null;
    if ( success ) {
      queue.retryAll();
    } else {
      queue.cancelAll();
      redirect();
    }
  }

  // Register a handler for when an item is added to the retry queue
  queue.onItemAddedCallbacks.push(function(retryItem) {
    if ( queue.hasMore() ) {
      service.showLogin();
    }
  });

  // The public API of the service
  var service = {

    // Get the first reason for needing a login
    getLoginReason: function() {
      return queue.retryReason();
    },

    // Show the modal login dialog
    showLogin: function() {
     redirect('/login');
    },

    // Attempt to authenticate a user by the given email and password
    login: function(email, password) {
      var request = $http({
                            url: '/login/',
                            method: "POST",
                            data: 'username=' + email + '&password=' + password,
                            headers: {
                                     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                            }
                    });
      return request.then(function(response) {

        service.currentUser = response.data.email;
        service.currentUserData = response.data;
        // if ( service.isAuthenticated() ) {
        //   closeLoginDialog(true);
        // }
        return service.isAuthenticated();
      });
    },

    // Give up trying to login and clear the retry queue
    cancelLogin: function() {
      closeLoginDialog(false);
      redirect();
    },

    // Logout the current user and redirect
    logout: function(redirectTo) {
      $http.post('/logout/').then(function() {
        service.currentUser = null;
        redirect(redirectTo);
        $route.reload();
      });
    },

    // Ask the backend to see if a user is already authenticated - this may be from a previous session.
    requestCurrentUser: function() {
      if ( service.isAuthenticated() ) {
        return $q.when(service.currentUser);
      } else {
        return $http.get('/isloggedin/').then(
          //Success: set currentUser
          function(response) {
            service.currentUser = response.data.email;
            service.currentUserData = response.data;
            return service.currentUser;
          },
          //Error: Reroute User to login
          function(){
            $location.path('/login');
          }
        );
      }
    },

    // Information about the current user
    currentUser: null,
    currentUserData: null,

    // Is the current user authenticated?
    isAuthenticated: function(){
      return !!service.currentUser;
    },
    
    // Is the current user an adminstrator?
    isAdmin: function() {
      return !!(service.currentUser && service.currentUser.admin);
    }
  };

  return service;
}]);
