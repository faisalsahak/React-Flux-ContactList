var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	saveContact: function(contact){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SAVE_CONTACT,
			contact:contact
		})
	},

	receiveContacts: function(contacts){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_CONTACT,
			contacts: contacts
		})
	},



	editContact: function(contact){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.EDIT_CONTACT,
			contact: contact
		})
	},

	updateContact: function(contact){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.UPDATE_CONTACT,
			contact: contact
		})
	}
}

module.exports = AppActions;
