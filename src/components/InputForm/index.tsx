import * as React from "react";
import * as api from "../../api";
import { connect } from "react-redux";
import { updateStockPredictionData } from "../../ducks/actions";
interface IState {
  numberOfDaysValue: number;
  stockSymbolValue: string;
  socialMediaPlatformValue: string;
}
interface IProps {
  dispatch: Function;
}
class InputForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      numberOfDaysValue: 10,
      stockSymbolValue: "",
      socialMediaPlatformValue: ""
    };
  }
  handleNumberOfDaysChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (!isNaN(parseInt(event.target.value, 10)))
      this.setState({ numberOfDaysValue: parseInt(event.target.value, 10) });
  };
  handlestockSymbolChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    this.setState({ stockSymbolValue: event.target.value });
  };
  handleSocialMediaPlatformChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    this.setState({ socialMediaPlatformValue: event.target.value });
  };
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api
      .getPredictionForStock(
        this.state.stockSymbolValue,
        this.state.numberOfDaysValue,
        this.state.socialMediaPlatformValue
      )
      .then(result => {
        if (result) this.props.dispatch(updateStockPredictionData(result));
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    let socialMediaPlatforms = api.getAvailableSocialMediaPlatforms();
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="numberOfDaysInput">Number Of Days</label>
                </td>
                <td>
                  <input
                    type="number"
                    id="numberOfDaysInput"
                    onChange={this.handleNumberOfDaysChange}
                    value={this.state.numberOfDaysValue}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <label htmlFor="stockSymbolInput">Stock Symbol</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="stockSymbolInput"
                    onChange={this.handlestockSymbolChange}
                    value={this.state.stockSymbolValue}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="SocialMediaPlatformInput">social media</label>
                </td>
                <td>
                  <select
                    id="SocialMediaPlatformInput"
                    defaultValue={""}
                    onChange={this.handleSocialMediaPlatformChange}
                  >
                    <option value={""}>please select</option>
                    {socialMediaPlatforms.map(
                      (socialMedia: string, index: number) => {
                        return (
                          <option value={socialMedia} key={index}>
                            {socialMedia}
                          </option>
                        );
                      }
                    )}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="submit">submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default connect()(InputForm);
