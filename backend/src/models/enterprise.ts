import * as mongoose from 'mongoose';

export interface IEnterprise extends mongoose.Document {
    initials: string,
    name: string,
    branch: string,
    price: number,
    volume: number,
    isActive: boolean,


}

const EnterpriseSchema: mongoose.Schema = new mongoose.Schema({
    initials: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    branch: { type: String, required: true },
    price: { type: Number, required: true },
    volume: { type: Number, default: 0 },

    isActive: {
        type: Boolean,
        default: true,
    },

    stocks: [{ //a array fill with the stocks
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stock'
    
    }],

    addedAt: {
        type: Date,
        default: Date.now,
    },

    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model<IEnterprise>('Enterprise', EnterpriseSchema);