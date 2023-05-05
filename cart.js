window.addEventListener("load",function () {
   calcCart();
   var cart = document.forms.cart;
   cart.elements.insurance.onchange = calcCart;

   var shippingOptions = document.querySelectorAll('input[name="shipping"]');
   for (var i = 0;i <= shippingOptions.length; i++) {
       shippingOptions[i].onclick = calcCart;
   }

});

function calcCart() {
    var cart = document.forms.cart;
    var insuranceCost = document.querySelector('[name="insurance"]:checked').value;
    var shoeCost = document.querySelectorAll('[name="shoeCost"]').value;

   var shipCost = document.querySelector('input[name="shipping"]:checked').value;
   const sum = shipCost + shoeCost + insuranceCost;
   
}
function formatNumber(val, decimals) {
    return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                          maximumFractionDigits: decimals});
 }
 
 function formatUSCurrency(val) {
    return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
 }