function ReturnSuccess(res){
    return res.status(200).json({ Status: "Success"})
}

function ReturnSuccessMsg(res, msg){
    return res.status(200).json({ Status: "Success", Message: msg})
}

module.exports = { ReturnSuccess, ReturnSuccessMsg };