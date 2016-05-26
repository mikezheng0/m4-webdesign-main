/**
 * Created by mattlee on 2016-05-21.
 */
(function() {
  'use strict';

  angular
    .module('m4WebDevApp')
    .service('serviceData', serviceData);

  /** @ngInject */
  function serviceData() {
    var service = [
      {
        'id': 0,
        'name':'Web Development',
        'image':'',
        'description': 'Description about what this is'
      },{
        'id': 1,
        'name':'Mobile App Development',
        'image':'',
        'description': 'Description about what this is'
      },{
        'id': 2,
        'name':'Stack Migration',
        'image':'',
        'description': 'Description about what this is'
      },{
        'id': 3,
        'name':'Search Engine Optimization',
        'image':'',
        'description': 'Description about what this is'
      },{
        'id': 4,
        'name':'Web Maintenance',
        'image':'',
        'description': 'Description about what this is'
      },{
        'id': 5,
        'name':'Social Media Packages',
        'image':'',
        'description': 'Description about what this is'
      }
    ];

    this.getServices = getServices;

    function getServices() {
      return service;
    }

  }
})();
