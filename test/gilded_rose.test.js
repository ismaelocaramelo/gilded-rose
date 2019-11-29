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

    expect(items[0].sellIn).toBe(sellIn - 1);
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


  it("should degrades twice as fast when the sell by date has passed ", function () {

    const name = "foo";
    const sellIn = 0;
    const quality = 2;

    const gildedRose = new Shop([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(quality - 2);
  });


  it("should \"Aged Brie\" actually increases in Quality the older it gets", function () {

    const name = "Aged Brie";
    const sellIn = 10;
    const quality = 8;

    const gildedRose = new Shop([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBeGreaterThan(quality);
  });

});
