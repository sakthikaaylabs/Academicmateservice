const post={
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(404).json("No User Found");
            }
            if (!await bcrypt.compare(password, user.hash)) {
                return res.status(404).json("Incorrect Password");
            }
            return res.status(200).json({ success: true, msg: "Login Successfully" });

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
            return res.status(200).json({ user: createUser, success: true })
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
    }
}

module.exports=post;