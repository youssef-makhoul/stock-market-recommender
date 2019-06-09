import { ISocialMediaData, IStockData, IPredictionData } from "../types";
import { generateRandomPositiveNumber, generateDatesArray } from "../helpers";

const maxStockPrice = 400;
const minStockPrice = 0;
const maxSocialMediaPostCount = 100;
const minSocialMediaPostCount = 0;

function stockPriceGenerator(
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

function socialMediaCountGenerator(
  stockSymbol: string,
  source: string
): ISocialMediaData {
  return {
    id: 1,
    stockSymbol,
    source,
    positivePostsCount: Math.floor(
      generateRandomPositiveNumber(
        maxSocialMediaPostCount,
        minSocialMediaPostCount
      )
    ),
    negativePostsCount: Math.floor(
      generateRandomPositiveNumber(
        maxSocialMediaPostCount,
        minSocialMediaPostCount
      )
    )
  };
}

function recommendationAlgorithm() {}
export function getAvailableSocialMediaPlatforms(): Array<string> {
  return ["Facebook", "Twitter", "Linkedin"];
}

export function getPredictionForStock(
  stockSymbol: string,
  numberOfDays: number,
  source: string
): Promise<IPredictionData | undefined> {
  //simulating fetch behaviour as set time out
  let p: Promise<IPredictionData | undefined> = new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        if (stockSymbol === "") reject("stock symbol is emtpy");
        if (numberOfDays <= 0) reject("number of days is invalid");
        if (source === "") reject("no social media is source is provided");
        const pr: IPredictionData = {
          prediction: "hold",
          stockData: stockPriceGenerator(
            stockSymbol,
            generateDatesArray(numberOfDays)
          ),
          socialMediaData: socialMediaCountGenerator(stockSymbol, source)
        };
        resolve(pr);
      }, 500);
    }
  );
  return p;
}
