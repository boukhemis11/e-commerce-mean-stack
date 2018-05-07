const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema ({
    email: {type: string, unique: true, lowercase:true },
    name: string,
    password: string,
    picture: string,
    isSeller: {type:boolean, default:false},
    addresse : {
        addr1: string,
        addr2 : string,
        city:string,
        state: string,
        country: string,
        postalCode:string
    },
    created: {type: Date, default: Date.now}

});

UserSchema.pre('save', function(next) {
    var user = this;

    if (!user.isModified('password')) return next();

    bcrypt.hash(user.password, null, null, function(err,hash){
        if (err) return next(err)

        user.password = hash;
        next();
    });
});

