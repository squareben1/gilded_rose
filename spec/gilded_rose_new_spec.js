describe("Gilded Rose", function() {
  describe("updateItems", function() {
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

    it("should not lower quality below 0", function() {
      const gildedRose = new Shop([ new ItemDouble("potion", 0, 0) ]);
      const items = gildedRose.updateItems();
      expect(items[0].quality).toEqual(0);
    })

    it("Brie- should increase quality of Aged Brie by 1 when sellIn > 0", function() {
      const gildedRose = new Shop([ new ItemDouble("Aged Brie", 15, 2) ]);
      const items = gildedRose.updateItems();
      expect(items[0].quality).toEqual(3);
    })

    it("Brie- should increase quality of Aged Brie by 2 when sellIn < 0", function() {
      const gildedRose = new Shop([ new ItemDouble("Aged Brie", 0, 2) ]);
      const items = gildedRose.updateItems();
      expect(items[0].quality).toEqual(4);
    })

    it("should not increase quality of an item beyond 50", function() {
      const gildedRose = new Shop([ new ItemDouble("Aged Brie", 2, 50) ]);
      const items = gildedRose.updateItems();
      expect(items[0].quality).toEqual(50);
    })

    it("Sulfuras- should not lower Sellin value of Sulfuras", function() {
      const gildedRose = new Shop([ new ItemDouble("Sulfuras, Hand of Ragnaros", 10, 80) ]);
      const items = gildedRose.updateItems();
      expect(items[0].sellIn).toEqual(10);
    })

    it("Sulfuras- should not lower Quality value of Sulfuras, should remain 80", function() {
      const gildedRose = new Shop([ new ItemDouble("Sulfuras, Hand of Ragnaros", 10, 80) ]);
      const items = gildedRose.updateItems();
      expect(items[0].quality).toEqual(80);
    })

  })
})