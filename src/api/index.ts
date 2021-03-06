import { ISocialMediaData, IStockData, IRecommendationData } from "../types";
import { generateRandomPositiveNumber, generateDatesArray } from "../helpers";
//@ts-ignore
import generateRandomSentence from "random-sentence";

const maxStockPrice = 400;
const minStockPrice = 0;
const maxSocialMediaPostCount = 100;
const minSocialMediaPostCount = 0;
const socialMediaPostsCount = 15;

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

function recommendationAlgorithm(
  stockData: Array<IStockData>,
  socialMediaData: ISocialMediaData
): string {
  return "hold";
}
export function getAvailableSocialMediaPlatforms(): Array<string> {
  return ["Facebook", "Twitter", "Linkedin"];
}

export function getSocialMediaPostsForStock(stockSymbol: string): string[] {
  const arr: string[] = [];
  for (let index = 0; index < socialMediaPostsCount; index++) {
    arr.push("#" + stockSymbol + ": " + generateRandomSentence());
  }
  return arr;
}

export function getPredictionForStock(
  stockSymbol: string,
  numberOfDays: number,
  source: string
): Promise<IRecommendationData | undefined> {
  //simulating fetch behaviour as set time out
  let p: Promise<IRecommendationData | undefined> = new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        if (stockSymbol === "") reject("stock symbol is emtpy");
        if (numberOfDays <= 0) reject("number of days is invalid");
        if (source === "") reject("no social media is source is provided");
        const stockData = stockPriceGenerator(
          stockSymbol,
          generateDatesArray(numberOfDays)
        ).reverse();
        const socialMediaData = socialMediaCountGenerator(stockSymbol, source);
        const recommendation = recommendationAlgorithm(
          stockData,
          socialMediaData
        );
        const pr: IRecommendationData = {
          recommendation,
          stockData,
          socialMediaData
        };
        resolve(pr);
      }, 500);
    }
  );
  return p;
}
