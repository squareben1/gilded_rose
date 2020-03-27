class  RegularItems {

  decreaseSellIn(item) {
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      return item.sellIn = item.sellIn - 1;
    } else {
      return item.sellIn
    }
  };

  decreaseQuality(i, num, items) {
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
        if (items[i].quality - num < 0) {
          items[i].quality = 0
        } else {
          items[i].quality = items[i].quality - num;
        }
      }
  };

  increaseQuality(i, num, items) {
      items[i].quality = items[i].quality + num
  };
}
