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
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
  }

  decreaseQuality(i, num) {
      if (this.items[i].quality > 0) {
        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this.items[i].quality = this.items[i].quality - num;
        }
      }
  }

  increaseQuality(i, num) {
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + num; //Increase BRIE QUALITY +1 more (2) if SELLIN <0
    }
  }

  updateItems() {
    for (var i = 0; i < this.items.length; i++) {
      this.decreaseSellIn(i)
      if (this.items[i].name == "Aged Brie") {
        this.increaseQuality(i, 1)
      }
      else if (this.items[i].sellIn < 0 || this.items[0].name.includes("Conjured")) {
        this.decreaseQuality(i, 2)
      } else {
        this.decreaseQuality(i, 1)
      }
        
    }
    return this.items;
  }
}