$(document).ready(function() {
    $(".form-control").keyup(function() {
        // Basic informations
        var capital = $("#capital").val();
        var risk_percent = $("#risk_percent").val();
        var risk_money = capital * (risk_percent/100);
        $("#risk_money").val(risk_money);

        // Position
        var price = $("#price").val();
        var sl_money = $("#sl_money").val();
        var sl_percent = price - sl_money/price * 100;

        console.log(price);
        console.log(sl_money);
        console.log(sl_percent);
        var tp_money = $("#tp_money").val();
        var tp_percent = ((tp_money-price)/price) * 100;
        $("#sl_percent").val(sl_percent);
        $("#tp_percent").val(tp_percent);
    });
});