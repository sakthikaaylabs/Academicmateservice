const get={
    home: async (req, res, next) => {
        try {
            return res.status(200).json({ data: "Home", success: true })
        } catch (error) {
            return res.status(404).json({ error, success: false })
        }
    },
    group: async (req, res, next) => {
        try {
            return res.status(200).json({ data: "group", success: true })
        } catch (error) {
            return res.status(404).json({ error, success: false })
        }
    },
    acadamic: async (req, res, next) => {
        try {
            return res.status(200).json({ data: "academic", success: true })
        } catch (error) {
            return res.status(404).json({ error, success: false })
        }
    },
}

module.exports=get;