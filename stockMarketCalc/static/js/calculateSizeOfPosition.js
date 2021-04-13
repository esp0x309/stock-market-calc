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
        // sl
        var sl_money = $("#sl_money").val();
        var sl_percent = ((price - sl_money)/price) * 100;
        $("#sl_percent").val(sl_percent);
        // tp
        var tp_percent = sl_percent * reward;
        $("#tp_percent").val(tp_percent);

        var tp_money = parseFloat(price) + (price * tp_percent/100);
        $("#tp_money").val(tp_money);
    });
});