module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),
    'sprite':{
      'all': {
        'src': ['src/blocks/*.png', 'src/items/*.png'],
        'destImg': 'build/mc-icons.png',
        'destCSS': 'build/mc-icons.css',
        'algorithm': 'binary-tree',
        'cssOpts': {
          'cssClass': function (item) {
            return '.mc-icon-' + item.name;
          }
        }
      }
    },
    'cssmin': {
      'combine': {
        'files': {
          'build/mc-icons.min.css': ['build/mc-icons.css', 'src/mc-tools.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['sprite', 'cssmin']);
};
