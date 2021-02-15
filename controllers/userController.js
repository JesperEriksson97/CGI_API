  
const userController = {}

userController.getExampleUser = (req, res) => {

    res.status(200).send(
        {
            "username": "Jesper Eriksson",
            "id": "1"
        }
    )
}

module.exports = userController