var firebase = require('firebase')
var AppActions = require('../actions/AppActions');

module.exports = {
	saveContact: function(contact){
		this.firebaseRef = new firebase('https://contactlist-43c1c.firebaseio.com/contactlist')
		this.firebaseRef.push({
			contact: contact
		})
	},

	getContacts: function(){
		this.firebaseRef = new firebase('https://contactlist-43c1c.firebaseio.com/contactlist')
		this.firebaseRef.once('value', function(snapshot){
			var contacts =[];
			snapshot.forEach(function(childSnapshot){
				var contact = {
					id: childSnapshot.key(),
					name: childSnapshot.val().contact.name,
					phone: childSnapshot.val().contact.phone,
					email: childSnapshot.val().contact.email
				}
				contacts.push(contact);
				AppActions.receiveContacts(contacts);
			})
		})
	},

	removeContact: function(contactId){
		console.log(contactId)
		this.firebaseRef = new firebase('https://contactlist-43c1c.firebaseio.com/contactlist/'+contactId)
		this.firebaseRef.remove();
	},

	updateContact: function(contact){
		var id = contact.id;
		var updatedContact = {
			name: contact.name,
			phone: contact.phone,
			email: contact.email
		}
		this.firebaseRef = new firebase('https://contactlist-43c1c.firebaseio.com/contactlist/'+contact.id+'/contact')
		this.firebaseRef.update(updatedContact);
	}
}
