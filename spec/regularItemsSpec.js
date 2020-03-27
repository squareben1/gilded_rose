describe('RegularItems', function() {
  function ItemDouble(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  const regularItems = new RegularItems

  describe('decreaseSellIn', function() {
    it('should decrease sellIn by 1', function() {
      var item = new ItemDouble("potion", 1, 0);
      expect(regularItems.decreaseSellIn(item)).toEqual(0);
    })

    it('should not decrease sellIn if item == Sulfuras', function() {
      var item = new ItemDouble("Sulfuras, Hand of Ragnaros", 1, 0);
      expect(regularItems.decreaseSellIn(item)).toEqual(1);
    })
  })

  describe('decreaseQuality', function() {
    it('should decrease quality of item before sellIn by 1', function() {
      var item = new ItemDouble("potion", 1, 1);
      expect(regularItems.decreaseQuality(1, item)).toEqual(0);
    })

    it('should decrease quality of item AFTER sellIn by 2', function() {
      var item = new ItemDouble("potion", -1, 10);
      expect(regularItems.decreaseQuality(2, item)).toEqual(8);
    })

    it('should decrease quality of non-conjured item AFTER sellIn to ZERO if result would be negative', function() {
      var item = new ItemDouble("potion", -1, 1);
      expect(regularItems.decreaseQuality(2, item)).toEqual(0);
    })
  })
})