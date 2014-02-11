var ContactManager = new Marionette.Application();

ContactManager.addRegions({
	mainRegion: "#main-region"
});

ContactManager.Contact = Backbone.Model.extend({});

ContactManager.ContactCollection = Backbone.Collection.extend({
	model: ContactManager.Contact,
	comparator: function(contact) {
		return contact.get("firstName") + " " + contact.get("lastName");
	}
});

ContactManager.ContactItemView = Marionette.ItemView.extend({
	tagName: "li",
	template: "#contact-list-item"
});

ContactManager.ContactsView = Marionette.CollectionView.extend({
	tagName: 'ul',
	itemView: ContactManager.ContactItemView
});

ContactManager.on("initialize:after", function() {
	var contacts = new ContactManager.ContactCollection([
	{
		firstName: "Greg",
		lastName: "Doe",
		phoneNumber: "545-1212"
	},
	{
		firstName: "Bob",
		lastName: "Doe",
		phoneNumber: "545-1212"
	},
	{
		firstName: "Bob",
		lastName: "Boe",
		phoneNumber: "545-1212"
	},
	{
		firstName: "Bob",
		lastName: "Doe",
		phoneNumber: "545-1212"
	},
	{
		firstName: "Jim",
		lastName: "Doe",
		phoneNumber: "545-1212"
	}
	]);

	var contactsListView = new ContactManager.ContactsView({
		collection: contacts
	});

	ContactManager.mainRegion.show(contactsListView);
	
});


ContactManager.start();








