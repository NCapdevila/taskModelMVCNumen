const sumarFun = (req, res) => {
    let num1= Number(req.params.num1);
    let num2= Number(req.params.num2);

    if(num1 && num2 > 0){
        res.json({
            resultado : num1 + num2
        })
    }else{
        res.json({
            error: "los números ingresados tienen que ser mayores a cero"
        })
    }
}

module.exports = {sumarFun}