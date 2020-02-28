describe("Gilded Rose", function() {
  describe("updateQuality", function() {
    function ItemDouble(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }

    it("should lower Sellin value", function() {
      const gildedRose = new Shop([ new ItemDouble("potion", 1, 0) ]);
      const items = gildedRose.updateItems();
      expect(items[0].sellIn).toEqual(0);
    })

    it("should lower quality value", function() {
      const gildedRose = new Shop([ new ItemDouble("potion", 1, 1) ]);
      const items = gildedRose.updateItems(1);
      expect(items[0].quality).toEqual(0);
    })

    it("should lower quality and value for multiple items", function() {
      const gildedRose = new Shop([ new ItemDouble("potion", 1, 1), new Item("mead", 1, 1) ]);
      const items = gildedRose.updateItems();
      expect(items[0].quality).toEqual(0);
      expect(items[1].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(0);
      expect(items[1].sellIn).toEqual(0);
    })

    it("should degrade quality twice as fast after sellBy passed", function() {
      const gildedRose = new Shop([ new ItemDouble("potion", 1, 50) ]);
      const items = gildedRose.updateItems();
      expect(items[0].quality).toEqual(49);
      gildedRose.updateItems();
      expect(items[0].quality).toEqual(47);
    })

    it("should degrade quality twice as fast if conjured item", function() {
      const gildedRose = new Shop([ new ItemDouble("Conjured Mana Cake", 10, 50) ]);
      const items = gildedRose.updateItems();
      expect(items[0].quality).toEqual(48);
      gildedRose.updateItems();
      expect(items[0].quality).toEqual(46);
    })
  })
})