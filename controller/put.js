const User=require("../schema/user")

const put={
    forgot: async (req, res, next) => {
        try {
            const { email, confirmPassword } = req.body;
            const hash = await bcrypt.hash(confirmPassword, 10)
            const Update = await User.findOneAndUpdate({ email }, { password: hash }, { new: true })
            if (!Update) {
                return res.status(404).json({ error: "error", success: false })
            }
            return res.status(200).json({ user: Update, success: true })
        } catch (error) {
            return res.status(404).json({ error, success: false })
        }
    },
}

module.exports=put;