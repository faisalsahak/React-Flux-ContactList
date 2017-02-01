var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AddForm = React.createClass({

	render: function(){
		return(
			<div className = "well">
        <h3>Add Contact</h3>
          <form>
            <div className ="form-group">
              <input type = "text" ref= "name" className= "form-control" placeholder="Add Name" />
            </div>
            <div className ="form-group">
              <input type = "text" ref= "phone" className= "form-control" placeholder="Add phone" />
            </div>
            <div className ="form-group">
              <input type = "text" ref= "email" className= "form-control" placeholder="Add email" />
            </div>
          </form>
      </div>
		);
	},

});

module.exports = AddForm;
