const TodoModel = require('../models/TodoModel')


module.exports.getTodo = async (req, res) => {
    const todo = await TodoModel.find()
    res.send(todo)
}

module.exports.saveTodo = async (req, res) => {

    const { text } = req.body

    TodoModel
        .create({ text })
        .then((data) => {
            console.log("Added SucessFully...");
            console.log(data);
            res.send(data);
        })
}