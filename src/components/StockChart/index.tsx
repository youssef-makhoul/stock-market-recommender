import * as React from "react";
import { IStockData } from "../../types";
import { Line } from "react-chartjs-2";

interface IProps {
  stockData: Array<IStockData>;
}
const ResultsForm: React.FC<IProps> = props => {
  const getChartData = (stockData: IStockData[]) => {
    const labels = stockData.map(stock => {
      return `${stock.date.getDate()}/${stock.date.getMonth()}/${stock.date.getFullYear()}`;
    });
    const datasets = [
      {
        label: "Price On Date",
        data: stockData.map(stock => {
          return stock.price;
        }),
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2
      }
    ];
    return {
      labels,
      datasets
    };
  };
  return (
    <div>
      <Line
        width={100}
        height={400}
        options={{ maintainAspectRatio: false }}
        data={getChartData(props.stockData)}
      />
    </div>
  );
};

export default ResultsForm;
