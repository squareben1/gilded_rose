describe('SpecialItems', function() {
  function ItemDouble(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  const specialItems = new SpecialItems

  describe('decreaseQuality', function() {
    it('should decrease quality of item by 1 when passed 1', function() {
      var item = new ItemDouble("potion", 1, 10);
      expect(specialItems.decreaseQuality(1, item)).toEqual(9);
    })

    it('should decrease quality of item by 2 when passed 2', function() {
      var item = new ItemDouble("potion", 1, 10);
      expect(specialItems.decreaseQuality(2, item)).toEqual(8);
    })

    it('should decrease quality of to ZERO if result would be negative', function() {
      var item = new ItemDouble("potion", -1, 1);
      expect(specialItems.decreaseQuality(2, item)).toEqual(0);
    })
  })


  describe('increaseQuaity', function() {
    it('should increase quality by 1 when passed 1', function() {
      var item = new ItemDouble("potion", 1, 1);
      expect(specialItems.increaseQuality(1, item)).toEqual(2);
    })

    it('should increase quality by 2 when passed 2', function() {
      var item = new ItemDouble("potion", 1, 1);
      expect(specialItems.increaseQuality(2, item)).toEqual(3);
    })

    it('should increase quality to no more than 50', function() {
      var item = new ItemDouble("potion", 1, 49);
      expect(specialItems.increaseQuality(2, item)).toEqual(50);
    })
  })

  describe('backstagePasses', function() {
    it('should decrease quality to 0 if sellin < 0', function() {
      var item = new ItemDouble("potion", -1, 49);
      expect(specialItems.backstagePasses(item)).toEqual(0);
    })

    it('should increase quality by 3 if < 5 sellin', function() {
      var item = new ItemDouble("potion", 4, 49);
      expect(specialItems.backstagePasses(item)).toEqual(50);
    })
  })

})

// 'Sulfuras, Hand of Ragnaros'