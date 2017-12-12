/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017.
 */
module.exports = {
  release: {
    files: {
      'css/epfl.css': [
        'src/css/epfl.css',
        'bower_components/cookieconsent/build/cookieconsent.min.css',
        'src/css/cookie.css'
      ],
      'css/epfl-cookie-consent.css': [
        'bower_components/cookieconsent/build/cookieconsent.min.css',
        'src/css/cookie.css'
      ],
    }
  }
};
