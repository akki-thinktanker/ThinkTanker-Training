const mongoose = require("mongoose");

const todoschema = new mongoose.Schema(
  {
    content: {
        type: String,
        required: true,

    },
    complete: {
        type: Boolean,
        default: false,

    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"

        }
    ] // Array of subtodos
  },
  // we use timestamp(s) cause it have 2 things, createtdAt and updatedAt
  { timestamps: true }
);

export const todo = mongoose.model("Todo", todoschema)
// when stored in mongodb the name Todo will be convereted to todos, in plural also it will be convereted to lowercase.