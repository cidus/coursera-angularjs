(function () {
'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService); 

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getToBuy();

        toBuy.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;

        bought.items = ShoppingListCheckOffService.getBought();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuy = [
            {name: "bags of cookies", quantity: 10}, 
            {name: "bottles of water", quantity: 3}, 
            {name: "bags of chips", quantity: 2}
        ];
        var bought = [];

        service.addItem = function (itemName, quantity) {
          var item = {
            name: itemName,
            quantity: quantity
          };
          toBuy.push(item);
        };

        service.buyItem = function (index) {
          var item = toBuy[index];
          bought.push(item);
          toBuy.splice(index, 1);
        };

        service.getToBuy = function () {
          return toBuy;
        };

        service.getBought = function () {
          return bought;
        };
    }

})();