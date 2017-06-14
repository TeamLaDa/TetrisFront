var app = angular.module("TetrisFront");

/*
 * factory
 */
app.factory("loginF", function() {

  var username = "";

  return {
    setUsername : function(_username) {
      username = _username;
    },
    getUsername : function() {
      return username;
    },
    isLogged: function() {
      if (username == "") {
        return false;
      } else {
        return true;
      }
    }
  };

});
