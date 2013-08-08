# {{ cookiecutter.project_name }} [![Build Status](https://secure.travis-ci.org/{{ cookiecutter.github_username }}/{{ cookiecutter.repo_name }}.png?branch=master)](https://travis-ci.org/{{ cookiecutter.github_username }}/{{ cookiecutter.repo_name }})

{{ cookiecutter.project_short_description }}

* Free software: [MIT License](http://{{ cookiecutter.github_username }}.mit-license.org/)
* History: [HISTORY.md](https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.repo_name }}/blob/master/HISTORY.md)
* How to contribute: [CONTRIBUTING.md](https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.repo_name }}/blob/master/CONTRIBUTING.md)

## Demo

TODO

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.{{ cookiecutter.repo_name }}.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").{{ cookiecutter.defaultPluginName }}({
		propertyName: "a custom value"
	});
	```

## Team

{{ cookiecutter.project_name }} was created by {{ cookiecutter.full_name }}, with help from these [contributors](https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.repo_name }}/graphs/contributors).

### Credits

* [Zeno Rocha](http://zenorocha.com) and [Addy Osmani](http://addyosmani.com) for creating [jquery-boilerplate](https://github.com/jquery-boilerplate/jquery-boilerplate).
* [Audrey Roy](http://www.audreymroy.com) for creating [cookiecutter-jquery](https://github.com/audreyr/cookiecutter-jquery).

