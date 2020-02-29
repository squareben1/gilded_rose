class Specialitems {

  decreaseQuality(i, num) {
      if (this.items[i].quality > 0 && this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          if (this.items[i].quality - num < 0) {
            this.items[i].quality = 0
          } else {
            this.items[i].quality = this.items[i].quality - num;
          }
      }
  };

  increaseQuality(i, num) {
    if (this.items[i].quality + num >= 50) {
    this.items[i].quality = 50
    } else {
    this.items[i].quality = this.items[i].quality + num
    }
  };

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
  };

  agedBrie(i) {
    if (this.items[i].sellIn < 0) {
      this.increaseQuality(i, 2)
    } else {
      this.increaseQuality(i, 1)
    }
  };
}