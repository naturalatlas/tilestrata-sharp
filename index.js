var sharp = require('sharp');

module.exports = function(fn) {
	return {
		name: 'sharp',
		transform: function(server, req, buffer, headers, callback) {
			var image;

			try { image = sharp(buffer); fn(image, sharp); }
			catch (err) { return callback(err); }

			image.toBuffer(function(err, buffer, info) {
				if (err) return callback(err);
				headers['Content-Type'] = 'image/' + info.format;
				callback(null, buffer, headers);
			});
		}
	};
};
