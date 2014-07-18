var path = '../controllers/';

module.exports = function(router){

  require(path + 'homeController')(router.route('/'));
  require(path + 'listAController')(router.route('/list/a'));
  require(path + 'listBController')(router.route('/list/b'));

  return router;
};
