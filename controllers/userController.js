  
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
}

userController.updateUser = (req, res) => {
    console.log(req.body)
}

module.exports = userController