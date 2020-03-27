describe('SpecialItems', function() {
  function ItemDouble(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  const specialItems = new SpecialItems

  describe('decreaseSellIn', function() {
    it('should decrease sellIn by 1', function() {
      const item = new ItemDouble("potion", 1, 0);
      expect(regularItems.decreaseSellIn(item)).toEqual(0);
    })

    it('should not decrease sellIn if item == Sulfuras', function() {
      const item = new ItemDouble("Sulfuras, Hand of Ragnaros", 1, 0);
      expect(regularItems.decreaseSellIn(item)).toEqual(1);
    })

  })
})