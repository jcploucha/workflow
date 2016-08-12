//var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		handlebars: {
			all: {
				files: {
					'app/public/js/templates.js': 'app/views/templates/*.handlebars'
				}
			},
			options: {
				namespace: 'Handlebars.templates',
				processName: function(filename){
					filename = filename.replace('app/views/templates/', '');
					filename = filename.replace('.handlebars', '');
					return filename;
				}
			}		
		},

		sass: {
			build: {
				files: {
					'app/public/css/home.css':'app/public/sass/home.scss',
					'app/public/css/testruns.css':'app/public/sass/testruns.scss',
				}
			}			
		},

		jshint: {
			all: {
				src: [
					'app/public/js/**/*.js'
				]
			},
			options: {
				reporter: require('jshint-stylish')	
			}
		},

		jscs: {
			src: 'app/public/js/**/*.js',
			options: {
				"fix": true,
				"requireCurlyBraces": [
					"if",
					"else",
					"for",
					"while",
					"do",
					"try",
					"catch"
				],
				"requireOperatorBeforeLineBreak": true,
				"requireCamelCaseOrUpperCaseIdentifiers": {
					"ignoreProperties": true,
					"allowedPrefixes": [
						"opt_"
					],
					"allExcept": [
						"var_args",
						"property_id",
						"client_id",
						"class_name",
						{
							"regex": {
								"pattern": "bb_.*",
								"flags": "i"
							}
						}
					]
				},
				"maximumLineLength": {
					"value": 160,
					"allExcept": [
						"comments"
					]
				},
				"validateIndentation": "\t",
				"validateQuoteMarks": "'",
				"disallowMultipleLineStrings": true,
				"disallowMixedSpacesAndTabs": true,
				"disallowTrailingWhitespace": true,
				"disallowSpaceAfterPrefixUnaryOperators": true,
				"disallowMultipleVarDecl": true,
				"disallowKeywordsOnNewLine": [
					"else"
				],
				"requireSpaceAfterKeywords": [
					"if",
					"else",
					"for",
					"while",
					"do",
					"switch",
					"return",
					"try",
					"catch"
				],
				"requireSpaceBeforeBinaryOperators": [
					"=",
					"+=",
					"-=",
					"*=",
					"/=",
					"%=",
					"<<=",
					">>=",
					">>>=",
					"&=",
					"|=",
					"^=",
					"+=",
					"+",
					"-",
					"*",
					"/",
					"%",
					"<<",
					">>",
					">>>",
					"&",
					"|",
					"^",
					"&&",
					"||",
					"===",
					"==",
					">=",
					"<=",
					"<",
					">",
					"!=",
					"!=="
				],
				"requireSpaceAfterBinaryOperators": true,
				"requireSpacesInConditionalExpression": true,
				"requireSpaceBeforeBlockStatements": true,
				"requireSpacesInForStatement": true,
				"requireLineFeedAtFileEnd": true,
				"requireSpacesInFunctionExpression": {
					"beforeOpeningCurlyBrace": true
				},
				"disallowSpacesInAnonymousFunctionExpression": {
					"beforeOpeningRoundBrace": true
				},
				"disallowSpacesInsideObjectBrackets": "all",
				"disallowSpacesInsideArrayBrackets": "all",
				"disallowSpacesInsideParentheses": true,
				"disallowMultipleLineBreaks": false,
				"disallowNewlineBeforeBlockStatements": true,
				"disallowKeywords": [
					"with"
				],
				"disallowSpacesInFunctionExpression": {
					"beforeOpeningRoundBrace": true
				},
				"disallowSpacesInFunctionDeclaration": {
					"beforeOpeningRoundBrace": true
				},
				"disallowSpacesInCallExpression": true,
				"disallowSpaceAfterObjectKeys": false,
				"requireSpaceBeforeObjectValues": true,
				"requireCapitalizedConstructors": true,
				"requireDotNotation": true,
				"requireSemicolons": true,
				"validateParameterSeparator": ", ",
				"jsDoc": {
					"checkAnnotations": "closurecompiler",
					"checkParamNames": true,
					"requireParamTypes": true,
					"checkRedundantParams": true,
					"checkReturnTypes": true,
					"checkRedundantReturns": true,
					"requireReturnTypes": true,
					"checkTypes": true,
					"checkRedundantAccess": true,
					"requireNewlineAfterDescription": true
				}

			}
		},

		watch: {
			css: {
				files: 'app/public/css/*.css'
			},
			sass: {
				files: 'app/public/sass/*.scss',
				tasks: 'sass'
			},
			html: {
				files: [
					'app/views/*.haml', 
					'app/views/*.erb',
				]
			},
			hbs: {
				files: 'app/views/templates/*.handlebars',
				tasks: 'handlebars'
			},
			scripts: {
				files: [
					'app/public/libs/**/*.js',
					'app/public/js/**/*.js',
					'app/public/js/*.js'
				],
				tasks: ['jshint','jscs']
			},
			options: {
				spawn: false,
				livereload: true
			}
		}
		
	});

	grunt.registerTask('default', ['watch'])

	grunt.loadNpmTasks('grunt-jscs');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.event.on('watch', function(action, filepath) {
		grunt.config('jshint.all.src', filepath);
		grunt.config('jscs.src', filepath);
	});

}