const User = require('../model/User')
const userController = {}

userController.getExampleUser = (req, res) => {
    res.status(200).json(
        {
            "username": "Jesper Eriksson",
            "id": "1"
        }
    )
}

userController.getSpecificUser = (req, res) => {
    User.findOne({ 'id': req.body.userId }, (err, user) => {
        if (err) {
            console.log(err)
            res.send({ "msg": "Error! Could not find any User." })
        } else {
            res.send(user)
        }
    })
}

userController.saveUser = (req, res) => {

    console.log(req.body.email)

    const data = {
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        fullname: req.body.fullname
    }

    const user = new User(data)

    user.save((error) => {
        if (error) {
            console.log(error)
        } else {
            res.send({ "msg": "Success" })
        }
    })
}


userController.updateUser = (req, res) => {

    const data = {
        id: req.body.userId,
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        fullname: req.body.fullname
    }

    User.findOne({'id': req.body.userId}, (err, user) => {
        if(err) {
            res.send({"msg": "Error! No user with that ID."})
        } else {
            user.overwrite(data)
            user.save()
            res.send({"msg": "User saved successfully."})
        }
    })
}

userController.deleteUser = (req, res) => {
    User.deleteOne({'id': req.body.userId}, (err, user) => {
        if (err) {
            res.send({"msg": "Error! User was not deleted."})
        } else {
            res.send({"msg": "User deleted successfully."})
        }
    })
}

module.exports = userController