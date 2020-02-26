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

  })
});
