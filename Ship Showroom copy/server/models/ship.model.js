import { model, Schema } from 'mongoose';

const ShipSchema = new Schema(
    {
        shipFocus: {
            type: String,
            required: [true, "What is the focus of this ship?"],
            enum: ['Industrial','Fighter']
        },
        
        shipModel: {
            type: String,
            required: [true, "ship model name is required!"],
            minlength: [2, "The Ships model name must be at least 3 characters long!"],
            maxlength: [20, "The ships model name must be less than 20 characters long"]
        },
        shipManufacturer: {
            type: String,
            required: [true, "Manufacturer's name is required!"],
            enum: ['Anvil Aerospace', 'Aegis Dynamics', 'Roberts Space Industries (RSI)',
                'Origin Jumpworks', 'Drake Interplanetary', 'Consolidated Outland', 'Esperia',
                'MISC (Musashi Industrial & Starflight Concern)', 'Argo Astronautics',
                'Kruger Intergalactic', 'Tumbril Land Systems', 'Vanduul', 'Banu', 'Xi\'an',
                'Greycat Industrial']
        },
        shipPicture: {
            type: String,
            required: [true, "Please upload an URL image link of your ship!"]
        },
        shipReview: {
            type: String,
            required: [true, "What are your thoughts on this ship?"],
            minlength: [10, "Your explanation has to longer than 10 characters"],
            maxlength: [500,"Your explanation shouldn't need to be over 500 characters"]
        },
    },
    { timestamps: true }
);
const Ship = model("Ship", ShipSchema);
export { Ship };