module.exports = {

	description: 'core implementation for QUIT command',
	author: 'Thomas Zilz',
	handler: function(req, res) {

		// disconnect the client
		res.end(221, 'bye');

	}

}