
describe("Gilded Rose Feature", function() {
  it("should return several items after 1 day", function() {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20), //
      new Item("Aged Brie", 2, 0), //
      new Item("Elixir of the Mongoose", 5, 7), //
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    ];

    var gildedRose = new Shop(items)
    var days = 1;
    var result = `-------- day 0 --------
name, sellIn, quality
+5 Dexterity Vest, 10, 20
Aged Brie, 2, 0
Elixir of the Mongoose, 5, 7
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 15, 20
Backstage passes to a TAFKAL80ETC concert, 10, 49
Backstage passes to a TAFKAL80ETC concert, 5, 49\n`
    
    var actualResult = ""
    console.log("working")
    for (let i = 0; i < days; i++) {
    actualResult = actualResult + ("-------- day " + i + " --------\n");
    actualResult = actualResult + ("name, sellIn, quality\n");
    items.forEach(element => {
      actualResult = actualResult + (element.name + ', ' + element.sellIn + ', ' + element.quality +"\n");
    });
    console.log();
    gildedRose.updateQuality()
    }
    expect(actualResult).toEqual(result)
  })
})