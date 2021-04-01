const mongoose = require('mongoose');


const BootCompSchema = mongoose.Schema({
  name: {
      type: String,
      required: [true,'Please add a name'],
      unique: true,
      trim: true,
      maxlength: [50, 'Name can not be more than 50 characters']
    },
    slag: String,
    description:{
      type: string,
      required: [true,'Please add a discription'],
      maxlength: [500,'Discription cant be more than 500 characters']
    },
    website:{
       type: string,
       match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        'Please use a valid URL with HTTP or HTTPS'
      ]
    },
    phone:{
       type:string,
       maxlength: [20, 'Phone number cant have more than 20 characters']
    },
    email:{
        type: string,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
          ]

    },
    address:{
        type: string,
        required: [true, 'Please add an addrtess']
    },
    location: {
        // GeoJSON Point
        type: {
          type: String,
          enum: ['Point']
        },
    coordinates:{
       type: [Number],
       index: '2dsphere'
    },
    formattedAddress: string,
    street: string,
    city: string,
    state: zipcode,
    country: string,
    },
    careers: {
    type: [string],
    required: true,
    enum: [
        'Web Development',
        'Mobile Development',
        'UI/UX',
        'Data Science',
        'Business',
        'Other'
      ]
    },
    
    averageRating:{
       type: Number,
       min:[1, 'Rating must be at least 1'],
       max: [10, 'Rating must not be more than 10']
    },
    averageCost: Number,
    photo:{
       true: string,
       default: 'no-photo.jpg'
    },
    housing:{
       type: Boolean,
       default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
      }
    },
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
    }
);