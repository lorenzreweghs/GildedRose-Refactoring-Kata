import { GildedRose } from "@/gilded-rose";
import { Item } from "@/item";
import { ItemType } from "@/item";

describe("Gilded Rose", () => {
  describe(ItemType.NORMAL, () => {
    it("should decrease quality & sellIn", () => {
      const gildedRose = new GildedRose([new Item(ItemType.NORMAL, 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(9);
      expect(items[0].sellIn).toBe(9);
    });
    it("should decrease quality & sellIn x2 if sellIn is less than 0", () => {
      const gildedRose = new GildedRose([new Item(ItemType.NORMAL, -10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(8);
      expect(items[0].sellIn).toBe(-11);
    });
    it("should not decrease quality under 0", () => {
      const gildedRose = new GildedRose([new Item(ItemType.NORMAL, 10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(9);
    });
  });

  describe(ItemType.AGED_BRIE, () => {
    it("should increase quality", () => {
      const gildedRose = new GildedRose([new Item(ItemType.AGED_BRIE, 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(11);
      expect(items[0].sellIn).toBe(9);
    });
    it("should not increase quality over 50", () => {
      const gildedRose = new GildedRose([new Item(ItemType.AGED_BRIE, 10, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(9);
    });
  });

  describe(ItemType.CONCERT, () => {
    it("should increase quality", () => {
      const gildedRose = new GildedRose([new Item(ItemType.CONCERT, 15, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(11);
      expect(items[0].sellIn).toBe(14);
    });
    it("should increase quality by 2 if sellIn is equal to 10", () => {
      const gildedRose = new GildedRose([new Item(ItemType.CONCERT, 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(12);
      expect(items[0].sellIn).toBe(9);
    });
    it("should increase quality by 2 if sellIn is less than 10 but more than 5", () => {
      const gildedRose = new GildedRose([new Item(ItemType.CONCERT, 8, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(12);
      expect(items[0].sellIn).toBe(7);
    });
    it("should increase quality by 3 if sellIn is equal to 5", () => {
      const gildedRose = new GildedRose([new Item(ItemType.CONCERT, 5, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(13);
      expect(items[0].sellIn).toBe(4);
    });
    it("should increase quality by 3 if sellIn is less than 5", () => {
      const gildedRose = new GildedRose([new Item(ItemType.CONCERT, 3, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(13);
      expect(items[0].sellIn).toBe(2);
    });
    it("should set quality to 0 if sellIn is less than 0", () => {
      const gildedRose = new GildedRose([new Item(ItemType.CONCERT, -1, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-2);
    });
    it("should not increase quality over 50", () => {
      const gildedRose = new GildedRose([new Item(ItemType.CONCERT, 10, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(9);
    });
  });

  describe(ItemType.SULFURAS, () => {
    it("should set quality to 80 with positive sellIn", () => {
      const gildedRose = new GildedRose([new Item(ItemType.SULFURAS, 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(9);
    });
    it("should set quality to 80 with negative sellIn", () => {
      const gildedRose = new GildedRose([new Item(ItemType.SULFURAS, -10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(-11);
    });
  });

  describe(ItemType.CONJURED, () => {
    it("should decrease quality x2 with positive sellIn", () => {
      const gildedRose = new GildedRose([new Item(ItemType.CONJURED, 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(8);
      expect(items[0].sellIn).toBe(9);
    });
    it("should decrease quality x4 with negative sellIn", () => {
      const gildedRose = new GildedRose([new Item(ItemType.CONJURED, -10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(6);
      expect(items[0].sellIn).toBe(-11);
    });
    it("should not decrease quality under 0", () => {
      const gildedRose = new GildedRose([new Item(ItemType.CONJURED, 10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(9);
    });
  });
});
