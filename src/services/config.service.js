angular.module("app").factory("ConfigService", [
  function () {
    var service = {};

    service.apiBase =
      "https://QuizApiAt-env.eba-jkxme9y5.us-west-2.elasticbeanstalk.com/";

    return service;
  },
]);
