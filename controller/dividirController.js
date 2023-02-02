const dividirFun = (req, res) => {
    if(req.params.divisor == 0){
        res.json({
            error : 'No se puede dividir por cero'
        })
    }else{ res.json({
        resultado : req.params.dividendo / req.params.divisor
    })}
    
}

module.exports={dividirFun}