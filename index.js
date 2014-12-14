var sharp = require('sharp');

module.exports = function(fn) {
	return {
		transform: function(server, req, buffer, headers, callback) {
			var image = sharp(buffer);
			try { fn(image, sharp); }
			catch (err) { return callback(err); }
			image.toBuffer(function(err, buffer, info) {
				if (err) return callback(err);
				headers['Content-Type'] = 'image/' + info.format;
				callback(null, buffer, headers);
			});
		}
	};
};