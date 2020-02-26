// var {Shop, Item} = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {
  describe("updateQuality", function() {
    function ItemDouble(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }

    it("should lower Sellin value", function() {
      const gildedRose = new Shop([ new ItemDouble("potion", 1, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
    })

    it("should lower quality value", function() {
      const gildedRose = new Shop([ new ItemDouble("potion", 0, 1) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    })

    it("should lower quality and value for multiple items", function() {
      const gildedRose = new Shop([ new ItemDouble("potion", 1, 1), new Item("mead", 1, 1) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[1].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(0);
      expect(items[1].sellIn).toEqual(0);
    })

    it("should degrade quality twice as fast after sellBy passed", function() {
      const gildedRose = new Shop([ new ItemDouble("potion", 1, 50) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(49);
      gildedRose.updateQuality();
      expect(items[0].quality).toEqual(47);
    })

    it("should not lower quality below 0", function() {
      const gildedRose = new Shop([ new ItemDouble("potion", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    })

    it("should not increase quality of an item beyond 50", function() {
      const gildedRose = new Shop([ new ItemDouble("Aged Brie", 2, 50) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    })

    it("Sulfuras- should not lower Sellin value of Sulfuras", function() {
      const gildedRose = new Shop([ new ItemDouble("Sulfuras, Hand of Ragnaros", 10, 80) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(10);
    })

    it("Sulfuras- should not lower Quality value of Sulfuras, should remain 80", function() {
      const gildedRose = new Shop([ new ItemDouble("Sulfuras, Hand of Ragnaros", 10, 80) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(80);
    })

    it("Brie- should increase quality of Aged Brie by 1 as it gets older (>10days)", function() {
      const gildedRose = new Shop([ new ItemDouble("Aged Brie", 15, 2) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(3);
    })

    it("Brie- should increase quality of Aged Brie by 2 as it gets older (<10days)", function() {
      const gildedRose = new Shop([ new ItemDouble("Aged Brie", 9, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(12);
    })

    it("Backstage passes - should increase quality by 2 below 10 days", function() {
      const gildedRose = new Shop([ new ItemDouble("Backstage passes to a TAFKAL80ETC concert", 9, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(12);
    })

  })
});
