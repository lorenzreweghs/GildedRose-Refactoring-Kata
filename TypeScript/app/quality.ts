const MIN_QUALITY = 0;
const MAX_QUALITY = 50;

export const isMoreThanMinimum = (quality: number) => quality > MIN_QUALITY;
export const isLessThanMaximum = (quality: number) => quality < MAX_QUALITY;

export const increaseQuality = (quality: number) =>
  isLessThanMaximum(quality) ? quality + 1 : quality;
export const decreaseQuality = (quality: number) =>
  isMoreThanMinimum(quality) ? quality - 1 : quality;
