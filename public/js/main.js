// Require JS boostrap file

require.config({
	baseURL: "../js",
	paths: {
		jquery: "../assets/jquery/jquery.min",
		underscore: "../assets/underscore/underscore-min",
		backbone: "../assets/backbone/backbone-min",
		crypto: "http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/sha256",
		jqueryui: "../assets/jquery.ui/dist/jquery-ui.min",
		timeago: "../assets/jquery-timeago/jquery.timeago",
		spectrum: "../assets/spectrum/spectrum",
		CKEditor: "../assets/CKEditor/ckeditor"
	},
	shim: {
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},
		crypto: {
			exports: "CryptoJS"
		},
		jqueryui: ['jquery'],
		timeago: ['jquery'],
		CKEditor: {
			exports: "CKEDITOR"
		},
		spectrum: ['jquery']
	}
});

define(["app"], function (App) {
	rwdwire = new App();
});

//TODO: Add More Actions
//TODO: Can't find layout
//TODO: Add Share
//TODO: Add Title
//TODO: Update current width when updates
//TODO: Add dimensions on hover
//TODO: better notification with humane