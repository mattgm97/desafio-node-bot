const db = require('mongoose');

const botSchema = db.Schema({
    id: db.Schema.Types.ObjectId,
    name: String
});

module.exports = mongoose.model('Bot', botSchema);