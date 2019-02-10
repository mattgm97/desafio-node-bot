const db = require('mongoose');

const messageSchema = db.Schema({
    id: db.Schema.Types.ObjectId,
    conversationId: db.Schema.Types.ObjectId,
    timestamp: Date,
    from: db.Schema.Types.ObjectId,
    to: db.Schema.Types.ObjectId,
    text: String

});

module.exports = mongoose.model('Bot', messageSchema);