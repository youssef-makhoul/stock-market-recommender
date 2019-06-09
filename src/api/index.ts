import { ISocialMediaData, IStockData } from "../types";
import { generateRandomPositiveNumber } from "../helpers";

const maxStockPrice = 400;
const minStockPrice = 0;
const maxSocialMediaPostCount = 100;
const minSocialMediaPostCount = 0;

export function stockPriceGenerator(
  stockSymbol: string,
  dates: Array<Date>
): Array<IStockData> {
  let stocks: Array<IStockData> = [];
  dates.forEach((date, id) => {
    const price = generateRandomPositiveNumber(maxStockPrice, minStockPrice);
    stocks.push({ id, stockSymbol, price, date });
  });
  return stocks;
}

export function socialMediaCountGenerator(
  stockSymbol: string,
  source: string
): ISocialMediaData {
  return {
    id: 1,
    stockSymbol,
    postsCount: Math.floor(
      generateRandomPositiveNumber(
        maxSocialMediaPostCount,
        minSocialMediaPostCount
      )
    ),
    source
  };
}

export function recommendationAlgorithm() {}
