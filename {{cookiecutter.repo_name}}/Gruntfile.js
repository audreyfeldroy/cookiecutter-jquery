module.exports = function(grunt) {

  grunt.initConfig({

    // Import package manifest
    pkg: grunt.file.readJSON("{{ cookiecutter.repo_name }}.jquery.json"),

    // Banner definitions
    meta: {
      banner: "/*\n" +
        " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
        " *  <%= pkg.description %>\n" +
        " *  <%= pkg.homepage %>\n" +
        " *\n" +
        " *  Made by <%= pkg.author.name %>\n" +
        " *  Under <%= pkg.licenses[0].type %> License\n" +
        " */\n"
    },

    // Concat definitions
    concat: {
      dist: {
        src: ["src/jquery.{{ cookiecutter.repo_name }}.js"],
        dest: "dist/jquery.{{ cookiecutter.repo_name }}.js"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    // Lint definitions
    jshint: {
      files: ["src/jquery.{{ cookiecutter.repo_name }}.js"],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    // Minify definitions
    uglify: {
      my_target: {
        src: ["dist/jquery.{{ cookiecutter.repo_name }}.js"],
        dest: "dist/jquery.{{ cookiecutter.repo_name }}.min.js"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    // CoffeeScript compilation
    coffee: {
      compile: {
        files: {
          "dist/jquery.{{ cookiecutter.repo_name }}.js": "src/jquery.{{ cookiecutter.repo_name }}.coffee"
        }
      }
    },

    // CSS minification
    cssmin: {
      add_banner: {
        options: {
          banner: '/* {{ cookiecutter.repo_name }} by {{ cookiecutter.github_username }} ~ https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.repo_name }} */'
        },
        files: {
          'dist/jquery.{{ cookiecutter.repo_name }}.min.css': ['src/{{ cookiecutter.repo_name }}.css']
        }
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-coffee");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  grunt.registerTask("default", ["jshint", "concat", "uglify", "cssmin"]);
  grunt.registerTask("travis", ["jshint"]);

};
