// app/models/sample.js
// grab the mongoose module
var mongoose = require('mongoose');
// define our user model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Sample', 
{message: { type: String, default: '' }
});