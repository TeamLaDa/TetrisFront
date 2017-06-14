var app = angular.module("TetrisFront");

/*
 * factory
 */
app.factory("loginF", function() {

  var user = {
    username: "",
    id: ""
  };

  return {
    setUsername : function(_username) {
      user.username = _username;
    },
    setUser : function(_username,_id) {
      user.username = _username;
      user.id = _id;
    },
    getUser : function() {
      console.log(user);
      console.log("getUser");
      return user;
    },
    getUsername : function() {
      return user.username;
    },
    isLogged: function() {
      if (user.username == "") {
        return false;
      } else {
        return true;
      }
    }
  };

});
