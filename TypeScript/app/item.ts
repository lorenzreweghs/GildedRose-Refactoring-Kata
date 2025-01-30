export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export enum ItemType {
  NORMAL = "Normal",
  AGED_BRIE = "Aged Brie",
  SULFURAS = "Sulfuras, Hand of Ragnaros",
  CONCERT = "Backstage passes to a TAFKAL80ETC concert",
  CONJURED = "Conjured",
}

// Alternative way to define ItemType
// const ItemType = {
//   NORMAL: "Normal",
//   AGED_BRIE: "Aged Brie",
//   SULFURAS: "Sulfuras, Hand of Ragnaros",
//   CONCERT: "Backstage passes to a TAFKAL80ETC concert",
//   CONJURED: "Conjured",
// } as const;
