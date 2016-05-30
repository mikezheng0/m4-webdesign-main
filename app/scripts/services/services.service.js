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
        'image':'images/web-dev.png',
        'description': 'Description about what this is'
      },{
        'id': 1,
        'name':'Mobile App Development',
        'image':'images/app-design.png',
        'description': 'Description about what this is'
      },{
        'id': 2,
        'name':'Stack Migration',
        'image':'images/stack-migration.png',
        'description': 'Description about what this is'
      },{
        'id': 3,
        'name':'Search Engine Optimization',
        'image':'images/SEO.png',
        'description': 'Description about what this is'
      },{
        'id': 4,
        'name':'Web Maintenance',
        'image':'images/web-mainten.png',
        'description': 'Description about what this is'
      },{
        'id': 5,
        'name':'Social Media Packages',
        'image':'images/social-packages.png',
        'description': 'Description about what this is'
      }
    ];

    this.getServices = getServices;

    function getServices() {
      return service;
    }

  }
})();
