var updateMarketValue = function (ele) {
    var sharesOwned = parseFloat($(ele).children('.shares').text());
    var marketPrice = parseFloat($(ele).children('.marketPrice').text());
  
    // market value is shares times market price per share
    var marketValue = sharesOwned * marketPrice;
    $(ele).children('.marketValue').html(marketValue);
  
    return marketValue;
  }
  
  var updateUnrealizedProfit = function (ele, marketValue) {
    var sharesOwned = parseFloat($(ele).children('.shares').text());
    var costPerShare = parseFloat($(ele).children('.cost').text());
    var costOfPurchase = sharesOwned * costPerShare;
  
    // unrealized profit is market value minus cost of purchase
    var unrealizedProfit = marketValue - costOfPurchase;
    $(ele).children('.profit').html(unrealizedProfit);
  
    return unrealizedProfit;
  }
  
  $(document).ready(function () {
    $('tbody tr').each(function (i, ele) {
      var marketValue = updateMarketValue(ele);
      updateUnrealizedProfit(ele, marketValue);
    });
  });