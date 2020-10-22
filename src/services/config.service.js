angular.module("app").factory("ConfigService", [
  function () {
    var service = {};

    service.apiBase = "https://quiz-API-AT.eu-west-2.elasticbeanstalk.com/";

    return service;
  },
]);
