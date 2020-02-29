class  RegularItems {
  decreaseQuality(i, num, items) {
    if (items[i].quality > 0 && items[i].name != 'Sulfuras, Hand of Ragnaros') {
        if (items[i].quality - num < 0) {
          items[i].quality = 0
        } else {
          items[i].quality = items[i].quality - num;
        }
      }
  };

  increaseQuality(i, num, items) {
    if (items[i].quality + num >= 50) {
      items[i].quality = 50
    } else {
      items[i].quality = items[i].quality + num
    }
  };
}

class Shop { // extract regularItems, put versions of all functions in each seperated class so dont have to inject shop/this
  constructor(items=[], specialItems=new SpecialItems, regularItems = new RegularItems){
    this.items = items;
    this.specialItems = specialItems
    this.regularItems = regularItems
  }

  decreaseSellIn(i) {
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
  };

//   decreaseQuality(i, num) {
//       if (this.items[i].quality > 0 && this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//           if (this.items[i].quality - num < 0) {
//             this.items[i].quality = 0
//           } else {
//             this.items[i].quality = this.items[i].quality - num;
//           }
//       }
//   };

//   increaseQuality(i, num) {
//     if (this.items[i].quality + num >= 50) {
//      this.items[i].quality = 50
//     } else {
//      this.items[i].quality = this.items[i].quality + num
//     }
// };

  updateItems() {
    for (var i = 0; i < this.items.length; i++) {
      this.decreaseSellIn(i)
      if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
        this.specialItems.backstagePasses(i, this.items)
      } else if (this.items[i].name == "Aged Brie") {
        this.specialItems.agedBrie(i, this.items)
      } else if (this.items[i].sellIn < 0 || this.items[0].name.includes("Conjured")) {
        this.regularItems.decreaseQuality(i, 2, this.items)
      } else {
        this.regularItems.decreaseQuality(i, 1, this.items)
      }
    }
    return this.items;
  };
};