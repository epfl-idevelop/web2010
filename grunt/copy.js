/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017.
 */
module.exports = {
  release: {
    files: [
      {
        expand: true,
        src: [
          'cgi-bin/**',
          'config_apache/**',
          'css/**',
          'errors/**',
          'images/**',
          'img/**',
          'js/**',
          'templates/**',
          'tools/**',
          '*.shtml',
          'favicon.ico',
          'package.json',
          'robots.txt',
        ],
        dest: 'release/',
      },
    ],
  },
};