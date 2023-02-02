const authFun = (req, res) => {
    let num = req.query.num
    if(num % 2 == 0){
        res.send("Autorizado")
    }else{
        res.send("No autorizado")
    }
}

module.exports = {authFun}