const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, checkDepartment('department'), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

function checkDepartment(department) {
  return function(req, res, next) {
    if (
      req.decodedToken &&
      req.decodedToken.department &&
      req.decodedToken.department.includes(department)
    ) {
      next();
    } else {
      res.status(403).json({ message: "can't touch this!" });
    }
  };
}

// const scopes = 'student:read;student:write;student:delete;salary:read'

module.exports = router;
