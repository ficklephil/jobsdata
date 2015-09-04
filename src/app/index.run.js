(function() {
  'use strict';

  angular
    .module('jobsdata')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
