class SpecialItems {

  decreaseQuality(num, item) {
    if (item.quality - num < 0) {
      return item.quality = 0
    } else {
      return item.quality = item.quality - num;
    }
  };

  increaseQuality(i, num, items) {
    if (items[i].quality + num >= 50) {
      items[i].quality = 50
    } else {
      items[i].quality = items[i].quality + num
    }
  };
  
  backstagePasses(i, items) {
    if (items[i].sellIn < 0) {
      this.decreaseQuality(i, items[i].quality, items)
    } else if (items[i].sellIn < 5) {
      this.increaseQuality(i, 3, items)
    } else if (items[i].sellIn < 10) {
      this.increaseQuality(i, 2, items)
    } else {
      this.increaseQuality(i, 1, items)
    }
  };

  agedBrie(i, items) {
    if (items[i].sellIn < 0) {
      this.increaseQuality(i, 2, items)
    } else {
      this.increaseQuality(i, 1, items)
    }
  };
}