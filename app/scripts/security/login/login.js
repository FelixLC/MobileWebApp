angular.module('security.login', ['security.login.form', 'security.login.toolbar'])
.constant('I18N.MESSAGES', {
  'errors.route.changeError':'Route change error',
  'login.reason.notAuthorized':"You do not have the necessary access permissions.  Do you want to login as someone else?",
  'login.reason.notAuthenticated':"You must be logged in to access this part of the application.",
  'login.error.invalidCredentials': "Combinaison email mot de passe erronée",
  'login.error.serverError': "Combinaison email mot de passe erronée"
});