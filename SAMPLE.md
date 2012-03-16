Creating your own project:

_attachments/app/config.js:

Change db_name:

Backbone.couch_connector.config.db_name = "coconut-sample";

A tiny overview on how this works:

Edit app.js for most of the MVC stuff. If you want to add a new page, first create a new route. Add the new route in 

 routes: {
	"newPage"	"newPageFunction"	//#newPage - how you access the new page
}

Create a function for route:

newPageFunction: function () {
        	$("#homePageView").remove();
        	$("#recordView").remove();
        	$("#formRenderingView").remove();
        	$("#newPageView").remove();
        	if (! $("#newPageView").length){
        		var viewDiv = document.createElement("div");
        		viewDiv.setAttribute("id", "newPageView");
        		$("#views").append(viewDiv);
        	}
        	FORMY.loadForm("newPage", null, {
        		success: function(form, resp){
        			var newModel = new Form();
        			var newPageFormView = new newPageView({model: newModel, el: $("#newPageView")});
        			newPageFormView.render();
        			$(document).ready(function() {
        			});
        		},
        		error: function() { 
        			console.log("Error loading incident: " + arguments); 
        		}
        	});
        },

In each function you must dispose of this new view. For example, add $("#newView").remove(); to the home function:

home: function (startkey, startkey_docid) {
        	console.log("home route." + startkey);
			$("#recordView").remove();
			$("#formRenderingView").remove();
			$("#designer").remove();
			$("#newView").remove();

Create a view in _attachments/app/views/NewView.js

var NewView = Backbone.View.extend({
	template: loadTemplate("newView.template.html"),
	initialize: function() {
		_.bindAll(this, 'render');
		return this;
	},
	render: function() {	   
		var viewHtml = this.template(this.model.toJSON());
		console.log("rendering NewView");
		$("#newView").html(viewHtml);
		return this;
	},
});

Create template in _attachments/app/templates/newView.template.html

<h1>Hello World!</h2>

Add a link to NewView.js and div for the new view in _attachments/index.html

in script section add:

<script type="text/javascript" src="app/views/NewView.js"></script>

In the views add a div id: newView:

  <div class="container">
		<div class="row">
			<div class="twelvecol" id="views">
		  		<div id="formRenderingView"></div>
		  		<div id="homePageView"></div>
		  		<div id="recordView"></div>
		  		<div id="designer"></div>
		  		<div id="newView"></div>
  			</div>
		</div>
	</div>

Add a button for the new view in hometemplate.html

<button id='form-client'class="menu-blue" style="width: 55px;">Incident</button>
<button id='form-newView'class="menu-blue" style="width: 55px;">NEW</button>
<button id='form-config' class="menu-blue" style="width: 40px;">Conf</button>

Wire up this new button in HomeView:

	events: {
		"click #form-search " : "search",
		"click #form-client " : "incidentLink",
		"click #form-newView " : "newViewLink",
		"click #form-config " : "configLink",
		"click #form-design " : "designLink",
		"click #nextLink"	  : "nextLink",
		"orientationEvent " : "orientation",
	},

	incidentLink: function() {
		FORMY.router.navigate('incident', true);
	},
	newViewLink: function() {
		FORMY.router.navigate('newView', true);
	},

