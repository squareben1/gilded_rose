class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  decreaseSellIn(i) {
    // for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1; // DECREASE SELLIN by 1
      }
    // }
    // return this.items;
  }

  decreaseQuality(i, num) {
    // for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].quality > 0) {
        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this.items[i].quality = this.items[i].quality - num; // DEcrease QUALITY by 1
        }
      }
    // }
    // return this.items;
  }

  updateItems() {
    for (var i = 0; i < this.items.length; i++) {
      this.decreaseSellIn(i)
      if (this.items[i].sellIn < 0 || this.items[0].name.includes("Conjured")) {
        this.decreaseQuality(i, 2)
      } else {
        this.decreaseQuality(i, 1)
      }
        
    }
    return this.items;
  }
}