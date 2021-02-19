const User = require('../model/User')
const userController = {}

userController.getExampleUser = (req, res) => {

    // Change to connecting a mongoose service
    res.status(200).json(
        {
            "username": "Jesper Eriksson",
            "id": "1"
        }
    )
}

userController.getSpecificUser = (req, res) => {
    console.log(req.params.id)
}

userController.saveUser = (req, res) => {
    console.log(req.body)

    const email = req.body.email
    const password = req.body.password
    const username = req.body.username
    const fullname = req.body.fullname

    const newUser = new User({
        email: email,
        username: username,
        fullname: fullname,
        password: password
    })

    User.save(() => {
        res.send({ "msg": "Success" })
    })


}


userController.updateUser = (req, res) => {
    console.log(req.body)
}

module.exports = userController