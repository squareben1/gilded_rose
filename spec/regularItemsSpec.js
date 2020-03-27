describe('RegularItems', function() {
  describe('decreaseSellIn', function() {
    function ItemDouble(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }

    it('should decrease sellIn by 1', function() {
      const item = new ItemDouble("potion", 1, 0);
      const regularItems = new RegularItems
      expect(regularItems.decreaseSellIn(item)).toEqual(0);
    })

  })
})