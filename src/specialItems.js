class SpecialItems {

  decreaseQuality(num, item) {
    if (item.quality - num < 0) {
      return item.quality = 0
    } else {
      return item.quality = item.quality - num;
    }
  };

  increaseQuality(num, item) {
    if (item.quality + num >= 50) {
      return item.quality = 50
    } else {
      return item.quality = item.quality + num
    }
  };
  
  backstagePasses(item) {
    if (item.sellIn < 0) {
      return this.decreaseQuality(item.quality, item)
    } else if (item.sellIn < 5) {
      return this.increaseQuality(3, item)
    } else if (item.sellIn < 10) {
      return this.increaseQuality(2, item)
    } else {
      return this.increaseQuality(1, item)
    }
  };

  agedBrie(item) {
    if (item.sellIn < 0) {
      return this.increaseQuality(2, item)
    } else {
      return this.increaseQuality(1, item)
    }
  };
}