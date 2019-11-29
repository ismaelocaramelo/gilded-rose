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

  it("should lowers sellIn values for every item", function () {

    const name = "foo";
    const sellIn = 0;
    const quality = 0;

    const gildedRose = new Shop([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(sellIn - 1);
  });

  it("should lowers quality values for every item", function () {

    const name = "foo";
    const sellIn = 1;
    const quality = 1;

    const gildedRose = new Shop([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(quality - 1);
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


  it("should \"Sulfuras\" never has to be sold", function () {

    const name = "Sulfuras, Hand of Ragnaros";
    const sellIn = 10;
    const quality = 8;

    const gildedRose = new Shop([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(sellIn);
  });

  it("should \"Sulfuras\" never decreases in Quality", function () {

    const name = "Sulfuras, Hand of Ragnaros";
    const sellIn = 10;
    const quality = 8;

    const gildedRose = new Shop([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(quality);
  });

  it("should \"Backstage passes\" increases in Quality by 2 when there are 10 days or less", function () {

    const name = "Backstage passes to a TAFKAL80ETC concert";
    const sellIn = 10;
    const quality = 8;

    const gildedRose = new Shop([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(quality + 2);
  });

  it("should \"Backstage passes\" increases in Quality by 3 when there are 5 days or less", function () {

    const name = "Backstage passes to a TAFKAL80ETC concert";
    const sellIn = 5;
    const quality = 8;

    const gildedRose = new Shop([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(quality + 3);
  });

  it("should \"Backstage passes\" quality drops to 0 after the concert", function () {

    const name = "Backstage passes to a TAFKAL80ETC concert";
    const sellIn = 0;
    const quality = 8;

    const gildedRose = new Shop([new Item(name, sellIn, quality)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  });

});
