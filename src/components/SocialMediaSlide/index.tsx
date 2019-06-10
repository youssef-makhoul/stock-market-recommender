import * as React from "react";
import "./index";
import { getSocialMediaPostsForStock } from "../../api";

interface IProps {
  socialMediaSource: string;
  stockSymbol: string;
}
interface IState {
  socialMediaPosts: string[];
  loaded: boolean;
  currentPostIndex: number;
}
class SocialMediaSlide extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      socialMediaPosts: [],
      loaded: false,
      currentPostIndex: 0
    };
  }

  componentWillReceiveProps(props: IProps) {
    this.setState({
      socialMediaPosts: getSocialMediaPostsForStock(props.stockSymbol),
      loaded: true
    });
  }
  componentDidMount() {
    this.setState({
      socialMediaPosts: getSocialMediaPostsForStock(this.props.stockSymbol),
      loaded: true
    });
    setInterval(() => {
      if (!this.state.loaded) return;
      if (this.state.currentPostIndex === this.state.socialMediaPosts.length) {
        this.setState({ currentPostIndex: 0 });
        return;
      }
      this.setState(prevState => {
        return {
          currentPostIndex: prevState.currentPostIndex + 1
        };
      });
    }, 5000);
  }
  render() {
    return (
      <div>
        <span>Posts From {this.props.socialMediaSource}</span>
        <br />
        <span>{this.state.socialMediaPosts[this.state.currentPostIndex]}</span>
      </div>
    );
  }
}

export default SocialMediaSlide;
