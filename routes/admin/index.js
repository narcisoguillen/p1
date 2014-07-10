var path = '../../controllers/';

module.exports = function(router){

  require(path + 'adminController')(router.route('/'));

  return router;
};
