const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')
// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    username: {
      type: String,
      required: true
    },
    reactions: [
      reactionSchema
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//thoughtSchema.virtual('reactionCount').get(() => {
 // return this.reactions.length
// })

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
