const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  
  it("should work with base case", function () {

    const name = "foo";
    const sellIn = 0;
    const quality = 0;

    const gildedRose = new Shop([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();
  
    expect(items[0].name).toBe(name);
  });

  it("should decrease the sellIn by one", function () {

    const name = "foo";
    const sellIn = 0;
    const quality = 0;

    const gildedRose = new Shop([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();
  
    expect(items[0].sellIn).toBe(sellIn-1);  
  });

  it("should work with quality >= 0 ", function () {

    const name = "foo";
    const sellIn = 0;
    const quality = 0;

    const gildedRose = new Shop([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();
  
    expect(items[0].quality).toBeGreaterThanOrEqual(0);
  });


  it("should work with quality <= 50 ", function () {

    const name = "foo";
    const sellIn = 0;
    const quality = 50;

    const gildedRose = new Shop([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();
  
    expect(items[0].quality).toBeLessThanOrEqual(50);
  });
  

});
