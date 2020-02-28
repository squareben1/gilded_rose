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
      if (this.items[i].quality > 0 && this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this.items[i].quality = this.items[i].quality - num;
      }
  }

  backstagePasses(i) {
    if (this.items[i].sellIn < 0) {
      this.decreaseQuality(i, this.items[i].quality)
    } else if (this.items[i].sellIn < 5) {
      this.increaseQuality(i, 3)
    } else if (this.items[i].sellIn < 10) {
      this.increaseQuality(i, 2)
    } else {
      this.increaseQuality(i, 1)
    }
  }

  agedBrie(i) {
    if (this.items[i].sellIn < 0) {
      this.increaseQuality(i, 2)
    } else {
      this.increaseQuality(i, 1)
    }
  }

  increaseQuality(i, num) {
    // if (this.items[i].quality <= 50) {
       if (this.items[i].quality + num >= 50) {
        this.items[i].quality = 50
       } else {
        this.items[i].quality = this.items[i].quality + num
       }
    // }
  }

  updateItems() {
    for (var i = 0; i < this.items.length; i++) {
      this.decreaseSellIn(i)
      if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
        this.backstagePasses(i)
      } else if (this.items[i].name == "Aged Brie") {
        this.agedBrie(i)
      } else if (this.items[i].sellIn < 0 || this.items[0].name.includes("Conjured")) { // make a list of words here
        this.decreaseQuality(i, 2)
      } else {
        this.decreaseQuality(i, 1)
      }
    }
    return this.items;
  }
}