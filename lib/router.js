Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('/', {name: 'home'});

Router.route('sponsors');

Router.route('join');

Router.route('category');

Router.route('share');

Router.route('main');
