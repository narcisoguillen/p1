var path = '../../controllers/';

module.exports = function(router){

  // User should be Authenticated
  router.use(function(req, res, next){
    if(!req.isAuthenticated()){ return res.redirect('/'); }
    next();
  });

  require(path + 'adminController')(router.route('/'));

  return router;
};
