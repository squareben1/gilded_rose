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
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1; // decrease QUALITY by 1
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1; // increase QUALITY by 1
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') { //PASSES qality
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1; // increase QUALITY by 2 if sellIn <11
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1; // increase QUALITY by 3 if sellIn <6
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1; // decrease SELLIN by 1
      }
      if (this.items[i].sellIn < 0) { // SELLIN passed 
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1; // SELLIN passed - decrease QUALITY by 1 if not special item
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality; //passes lose all quality if sellIn < 0
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1; //Increase BRIE QUALITY +1 more (2) if SELLIN <0
          }
        }
      }
    }

    return this.items;
  }
}
// module.exports = {
//   Item,
//   Shop
// }
