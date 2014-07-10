var path = '../controllers/';

module.exports = function(router){

  require(path + 'homeController')(router.route('/'));

  return router;
};
