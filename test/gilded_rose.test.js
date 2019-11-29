const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  
  it("should work with base case", function () {

    const name = "foo";
    const sellIn = 0;
    const quality = 0;

    const gildedRose = new Shop([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();
  
    expect(items[0].name).toBe(name);
    expect(items[0].sellIn).toBe(sellIn-1);
    expect(items[0].quality).toBe(quality);
  });

  it("should work with quality > 0", function () {

    const name = "foo";
    const sellIn = 0;
    const quality = 1;

    const gildedRose = new Shop([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();
  
    expect(items[0].name).toBe(name);
    expect(items[0].sellIn).toBe(sellIn-1);
    expect(items[0].quality).toBe(quality-1);
  });


});
