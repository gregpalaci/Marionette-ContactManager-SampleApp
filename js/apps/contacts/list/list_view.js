ContactManager.module("ContactsApp.List", function(List,ContactManager, Backbone,Marionette,$,_){
	List.Contact = Marionette.ItemView.extend({
		tagName: "li",
		template: "#contact-list-item"
	});

	List.ContactsView = Marionette.CollectionView.extend({
		tagName: 'ul',
		itemView: List.Contact
	});
});