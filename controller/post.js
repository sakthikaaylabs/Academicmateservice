const User = require("../schema/user")
const Group = require("../schema/group")
const Event = require("../schema/event")
const Academic = require("../schema/academic")
const bcrypt = require('bcrypt')


const create = async (req, res, next, Model,err) => {
    try {
        if (Object.keys(req.body).length === 0) return res.status(200).json({ success: false, error: err })        
        const create = await Model.create(req.body)
        if (!create) return res.status(200).json({ success: false, error: err })        
        return res.status(200).json({ success: true, data: create })
    } catch (error) {
        next(error)
    }

}
const post = {
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(200).json({ success: false, msg: "No User Found" });
            }
            if (!await bcrypt.compare(password, user.password)) 
                return res.status(200).json({ success: false, msg: "Incorrect Password" });
            
            return res.status(200).json(
                { success: true, msg: "Login Successfully", data: { email: user.email, id: user._id, userName: user.userName } });

        } catch (err) {
            next(err)

        }

    },
    rigister: async (req, res, next) => {
        try {
            const { password } = req.body;
            const hash = await bcrypt.hash(password, 10)
            req.body.password = hash;
            const createUser = await User.create(req.body);
            if (!createUser) return res.status(404).json({ error, success: false })
            return res.status(200).json({ data: { email: createUser.email, id: createUser._id, userName: createUser.userName }, success: true })
        } catch (error) {
            return res.status(404).json({ error, success: false })
        }
    },
    create: async (req, res, next) => {
        try {
            return res.status(200).json({ data: "create", success: true })
        } catch (error) {
            return res.status(404).json({ error, success: false })
        }
    },
    challenges: async (req, res, next) => {
        try {
            return res.status(200).json({ data: "challenges", success: true })
        } catch (error) {
            return res.status(404).json({ error, success: false })
        }
    },
    groupCreation: async (req, res, next) => {
        try {
            const err="Group creation failed"
            create(req,res,next,Group,err)
          
        } catch (error) {
            next(error)
        }
    },
    eventCreation: async (req, res, next) => {
        try {
            const err="Event creation failed"
            create(req,res,next,Event,err)
        
        } catch (error) {
            next(error)
        }
    },
    academicCreation: async (req, res, next) => {
        try {
            const err="Academic creation failed"
            create(req,res,next,Event,err) 
        } catch (error) {
            next(error)
        }
    },
}

module.exports = post;