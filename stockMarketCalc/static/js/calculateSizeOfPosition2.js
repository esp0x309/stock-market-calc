var calculateSizeOfPosition = function () {

    // risk_money
    var capital = Number(document.getElementById("capital").value);
    var risk_percent = Number(document.getElementById("risk_percent").value)/100;
    var price = Number(document.getElementById("price").value);
    var sl_percent = Number(document.getElementById("sl_percent").value)/100;
    var tp_percent = Number(document.getElementById("tp_percent").value)/100;
    var reward = Number(document.getElementById("reward").value);
    var tp_money = price+(price*tp_percent);
    var amount_money = Number(document.getElementById("amount_money").value);
    //var sl_money = Number(document.getElementById("sl_money").value)
    var risk_money = Number(document.getElementById("risk_money").value);


    document.getElementById("risk_money").value = risk_percent * capital; 
    
    // sl_money
    document.getElementById("sl_money").value = price-(price*sl_percent);

    // tp_percent
    document.getElementById("tp_percent").value = sl_percent * 100 * reward;

    // tp_money
    document.getElementById("tp_money").value = tp_money;

    // amount
    document.getElementById("amount").value = amount_money/price

    // amount_money
    document.getElementById("amount_money").value = risk_money*(1/(sl_percent/100))

    // max_loss
    document.getElementById("max_loss").value = amount_money * sl_percent

    // max_profit
    document.getElementById("max_profit").value = amount_money * tp_percent
}