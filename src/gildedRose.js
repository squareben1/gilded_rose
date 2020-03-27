
class Shop {
  constructor(items=[], specialItems=new SpecialItems, regularItems = new RegularItems){
    this.items = items;
    this.specialItems = specialItems
    this.regularItems = regularItems
  }

  updateItems() {
    for (var i = 0; i < this.items.length; i++) {
      this.regularItems.decreaseSellIn(this.items[i]) //silly berk - just changed it to this, no diea why I was doing the thing before
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