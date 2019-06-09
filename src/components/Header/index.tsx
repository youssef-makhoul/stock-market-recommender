import * as React from "react";
import "./index.scss";
import { stockPriceGenerator, socialMediaCountGenerator } from "../../api";
import { generateDates } from "../../helpers";

const Header: React.FC = () => {
  const stocks = stockPriceGenerator("FB", generateDates(10));
  const socialMedia = socialMediaCountGenerator("FB", "FaceBook");
  const renderDate = (date: Date) => {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };
  return (
    <header className="App-header">
      <div>
        {stocks.map(stock => {
          return (
            <React.Fragment key={stock.id}>
              <i>
                {renderDate(stock.date)} {stock.price.toFixed(2)}
              </i>
              <br />
            </React.Fragment>
          );
        })}
      </div>
      <div>
        {socialMedia.source} {socialMedia.postsCount}
      </div>
    </header>
  );
};

export default Header;
