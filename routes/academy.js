const router = require('express').Router();

router.get("/",(req,res) =>{
    console.log("Academy page API End Point");
    res.send('Academy Page API End Point');
})

module.exports = router;