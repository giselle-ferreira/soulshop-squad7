const { model, Schema } = require('mongoose')

const Cupom = model (
    "Cupom",
    new Schema({
        code: { type: String, required: true },
        discount: { type: Number, required: true },
        cashback: { type: Number, required: true },
        validity: { type: String, required: true },
        description: { type: String, required: true },
    })
)

module.exports = Cupom;