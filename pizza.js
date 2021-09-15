module.exports = function pizza() {

   let smallPizza = 0;
   let mediumPizza = 0;
   let largePizza = 0;
   let totalPrice = 0;

   let pizzaList = [];

   function addTotal(type) {
      if (type) {
         if (type === "small") {
            smallPizza += 31.99,
               totalPrice += 31.99
         }
         else if (type === "large") {
            largePizza += 87.99,
               totalPrice += 87.99
         }
         else if (type === "medium") {
            mediumPizza += 58.99,
               totalPrice += 58.99
         }
      }
      
     
// console.log(pizzaList);
   }
   function amaPizza(type) {
      if (type) {
         pizzaList.push(type)
      }
      return pizzaList
   }


   function getSmallPizza() {
      return smallPizza
   }

   function getLargePizza() {
      return largePizza
   }

   function getMediumPizza() {
      return mediumPizza
   }




   // function totals() {
   //    pizzaList.push({
   //       // name: type,
   //       orderId: '#' + pizzaList.length +1 *3,
   //       Status: "payment due",
   //       Amount: totalPrice,
   //    })
      // return pizzaList
      // let smallTotal = addTotal('small').toFixed(2)
      // let meduimTotal = addTotal('medium').toFixed(2)
      // let largeTotal = addTotal('large').toFixed(2)
      // return {
      //    smallTotal,
      //    meduimTotal,
      //    largeTotal,
      //    totalPrice: getPizza().toFixed(2)
      // }
   // }

   function getPizza() {
      return totalPrice

   }

   function pizza() {
      return pizzaList
   }

   function Detail(type){
      // if(type === 'small'|| type === 'medium'|| type === 'large'){
       pizzaList.push({
         name: type,
         orderId: '#' + pizzaList.length +1 *3,
         Status: "payment due",
         Amount: totalPrice,
       })
      // }
      return pizzaList;
   }

//    function actions() {
//       return pizzaList;
//   }

   return {
      getPizza,
      Detail,
      // actions,
      // totals,
      addTotal,
      pizza,
      amaPizza,
      getSmallPizza,
      getLargePizza,
      getMediumPizza
   }
}

