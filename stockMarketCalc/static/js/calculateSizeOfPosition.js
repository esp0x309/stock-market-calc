var calculateSizeOfPosition = function () {

    var risk_percent = Number(document.getElementById("risk_percent").value)/100
    document.getElementById("risk_money").value = risk_percent * Number(document.getElementById("capital").value) 


    //document.getElementById("amount_money").value =  

    //document.getElementById("max_loss").value =  

    //document.getElementById("max_profit").value =  
}