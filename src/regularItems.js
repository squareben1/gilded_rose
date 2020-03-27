class  RegularItems {

  decreaseSellIn(item) {
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      return item.sellIn = item.sellIn - 1;
    } else {
      return item.sellIn
    }
  };

  decreaseQuality(num, item) { // move conjured check in here?
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      if (item.quality - num < 0) {
          return item.quality = 0
        } else {
          return item.quality = item.quality - num;
        }
      }
  };
}
