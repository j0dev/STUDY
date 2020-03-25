const User = require('../../../models/user')


exports.list = (req, res) => {
    if(!req.decoded.isAdmin) {
        return res.status(403).json({
            message: 'you are not admin'
        })
    }

    User.find({})
    .then( users => {
        res.json({ users })
    })
}


exports.assignAdmin = (req, res) => {
    if (!req.decoded.isAdmin) {
        return res.status(403).json({
            message: 'you are not admin'
        })
    }

    const user = User.findOneByUserid(req.params.userid)
    
    user.then(
        user => user.assignAdmin()
    ).then(
        res.json({
            success: true
        })
    ).catch(console.log('er'))
}