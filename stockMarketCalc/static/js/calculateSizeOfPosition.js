$(document).ready(function() {
    $(".form-control").keyup(function() {
        // Basic informations
        var capital = $("#capital").val();
        var risk_percent = $("#risk_percent").val();
        var risk_money = capital * (risk_percent/100);
        var reward = $("#reward").val();
        $("#risk_money").val(risk_money);

        // Position

        var price = $("#price").val();
        var tp_money = $("#tp_money").val();
        var tp_percent = (((tp_money - price)/price) * 100).toFixed(3);
        $("#tp_percent").val(tp_percent);

        var sl_percent = (tp_percent/reward).toFixed(3);
        var sl_money = (price - (price * (sl_percent/100))).toFixed(2);
        $("#sl_percent").val(sl_percent);
        $("#sl_money").val(sl_money);

        // Calculations

        var amount = Math.floor(((risk_money * (100/sl_percent))/price));
        var amount_money = amount * price;// 
        var max_loss = (amount_money * sl_percent/100).toFixed(2);
        var max_profit = (amount_money * tp_percent/100).toFixed(2);
        $("#amount").val(amount)
        $("#amount_money").val(amount_money);
        $("#max_loss").val(max_loss);
        $("#max_profit").val(max_profit);

    });
});