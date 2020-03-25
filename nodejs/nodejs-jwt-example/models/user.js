const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto')
const config = require('../config')



const User = new Schema({
    userid: String,
    password: String,
    isAdmin: { type: Boolean, defaul: false}
})



User.statics.create = function(userid, password) {

    const encrypted = crypto.createHmac('sha512', config.secret)
        .update(password)
        .digest('base64')

        
    //생성
    const user = new this({
        userid,
        password: encrypted
    })

    return user.save()
}


User.statics.findOneByUserid = function(userid) {
    //userid 값을 사용하여 유저를 찾음
    return this.findOne({
        userid
    }).exec()
}


User.methods.verify = function(password) {
    //비밀번호가 일치하지 확인
    const encrypted = crypto.createHmac('sha512', config.secret)
        .update(password)
        .digest('base64')

    return this.password === encrypted
    
}

User.methods.assignAdmin = function() {
    this.isAdmin = true
    return this.save()
}

module.exports = mongoose.model('User', User)
