import { Item, ItemType } from "./item";
import { decreaseQuality, increaseQuality } from "./quality";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  private decreaseQualityItem = (item: Item): Item => {
    item.quality = decreaseQuality(item.quality);
    if (item.sellIn < 0) item.quality = decreaseQuality(item.quality);
    return item;
  };

  private updateQualityForNormalItem = (item: Item): Item => {
    item = this.decreaseQualityItem(item);
    return item;
  };

  private updateQualityForAgedBrie(item: Item): Item {
    item.quality = increaseQuality(item.quality);
    return item;
  }

  private updateQualityForSulfuras = (item: Item): Item => {
    item.quality = 80;
    return item;
  };

  private increaseQualityForConcert = (item: Item): number => {
    let quality = increaseQuality(item.quality);

    if (item.sellIn <= 10) quality = increaseQuality(quality);
    if (item.sellIn <= 5) quality = increaseQuality(quality);

    return quality;
  };

  private updateQualityForConcert = (item: Item): Item => {
    item.quality = item.sellIn < 0 ? 0 : this.increaseQualityForConcert(item);
    return item;
  };

  private updateQualityForConjured = (item: Item): Item => {
    item = this.decreaseQualityItem(item);
    item = this.decreaseQualityItem(item);
    return item;
  };

  private updateItemQuality = (item: Item): Item => {
    const updateFunctions = {
      [ItemType.AGED_BRIE]: this.updateQualityForAgedBrie,
      [ItemType.SULFURAS]: this.updateQualityForSulfuras,
      [ItemType.CONCERT]: this.updateQualityForConcert,
      [ItemType.CONJURED]: this.updateQualityForConjured,
    };

    const updateFunction =
      updateFunctions[item.name] || this.updateQualityForNormalItem;

    return updateFunction(item);
  };

  updateQuality(): Item[] {
    this.items.forEach((item) => {
      item = this.updateItemQuality(item);
      item.sellIn -= 1;
    });

    return this.items;
  }
}
