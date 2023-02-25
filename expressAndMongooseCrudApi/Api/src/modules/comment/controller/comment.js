import { commentModel } from "../../../../DB/model/Comment.model.js"
import { userModel } from "../../../../DB/model/User.model.js"

const homePage = async (req, res, next) => {
    return res.json({ message: 'commentPage' })
}


const addComment = async (req, res, next) => {
    try {
        const { userId, content } = req.body
        const userObj = await userModel.findById(userId)
        if (!userObj) {
            return res.status(400).json({ message: 'User not found' })
        }

        // userId is required
        const newComment = await commentModel.create({
            content,
            userId: userObj
        })
        if (!newComment) {
            return res.status(400).json({ message: 'Comment not created' })
        }
        return res.json({ message: 'Comment added', newComment })

    } catch (err) {
        if (err.name === 'CastError') {
            return res.status(400).json({ message: 'user not found', err })
        }
        return res.status(500).json({ message: 'catched error', err })
    }
}

const updateCommentByOwner = async (req, res, next) => {
    try {
        const { id } = req.params
        const { userId, content } = req.body

        const comment = await commentModel.findById(id)
        if (!comment) {
            return res.status(400).json({ message: 'Comment not found' })
        }
        if (comment.userId.toString() !== userId) {
            return res.status(400).json({ message: 'you cant update the comment' })
        }

        const update = await commentModel.findOneAndUpdate({
            _id: id
        }, {
            content
        })

        return res.json({ message: 'Comment updated', update })

    } catch (err) {
        return res.status(500).json({ message: 'catched error', error: err.stack })
    }



}

const deleteCommentByOwner = async (req, res, next) => {
    try {
        const { id } = req.params
        const { userId } = req.body

        const comment = await commentModel.findById(id)
        if (!comment) {
            return res.status(400).json({ message: 'Comment not found' })
        }

        if (comment.userId.toString() !== userId) {
            return res.status(400).json({ message: 'you canyt delete the comment' })
        }

        const deletedComment = await commentModel.findByIdAndDelete(id)
        return res.json({ message: 'Comment deleted', deletedComment })

    } catch (err) {
        return res.status(500).json({ message: 'catched error', err })
    }
}

const getAllCommentsWithUser = async (req, res, next) => {
    try {
        const allComments = await commentModel.find().populate({
            path: 'userId',
            select: '-cliPassword'
        })

        return res.json({ message: 'All comments', allComments })

    } catch (err) {
        return res.status(500).json({ message: 'catched Error', err })
    }
}

const getCommentById = async (req, res, next) => {
    try {
        const { id } = req.params
        const comment = await commentModel.findById(id).populate({
            path: 'userId',
            select: '-_id -cliPassword'
        })
        if (!comment) {
            return res.status(400).json({ message: 'Comment not found' })
        }
        return res.json({ message: 'Comment by id', comment })
    }
    catch (err) {
        return res.status(500).json({ message: 'catched Error', err })
    }
}



export {
    homePage,
    addComment,
    getAllCommentsWithUser,
    updateCommentByOwner,
    deleteCommentByOwner,
    getCommentById
}