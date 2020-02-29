class  RegularItems {

  decreaseSellIn(i, items) {
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sellIn = items[i].sellIn - 1;
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
