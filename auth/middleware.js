
module.exports = {
    checkLogin
}

function checkLogin(req,res,next) {
    if (req.body.username && req.body.password) {
        next();
    } else {
        res.status(400).json({message: "Sorry wrong username and password"})
    }
}