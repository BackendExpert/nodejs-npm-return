function ReturnSuccess(res){
    return res.status(200).json({ Status: "Success"})
}

function ReturnSuccessMsg(res, msg){
    return res.status(200).json({ Status: "Success", Message: msg })
}

function ReturnResourceExists(res, Error){
    return res.status(409).json({ Error: Error})
}

function ReturnInternalServerError(res, Error){
    return res.status(500).json({ Error: Error })
}

module.exports = { ReturnSuccess, ReturnSuccessMsg, ReturnResourceExists, ReturnInternalServerError };