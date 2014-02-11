ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _) {
	
	Entities.Contact = Backbone.Model.extend({});

	Entities.ContactCollection = Backbone.Collection.extend({
		model: Entities.Contact,
		comparator: function(contact) {
			return contact.get("firstName") + " " + contact.get("lastName");
		}
	});

	var contacts;

	var	initializeContacts = function(){
		contacts = new Entities.ContactCollection([
			{
				id: 1,
				firstName: "Greg",
				lastName: "Doe",
				phoneNumber: "545-1212"
			},
			{
				id: 2,
				firstName: "Bob",
				lastName: "Doe",
				phoneNumber: "545-1212"
			},
			{
				id: 3,
				firstName: "Jim",
				lastName: "Doe",
				phoneNumber: "545-1212"
			}
		]);
	};

	var API = {
		getContactEntities: function() {
			if(contacts === undefined) {
				initializeContacts();
			}
			return contacts;
		}
	};

	ContactManager.reqres.setHandler("contact:entities", function(){
		return API.getContactEntities();
	});

});