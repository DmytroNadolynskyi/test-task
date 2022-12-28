import { Component } from 'react';
import {
  Logo,
  Background,
  Card,
  Button,
  Line,
  Icon,
  Tweets,
  Followers,
} from './UserCard.styled';
import icon from '../../images/icon.png';
import logo from '../../images/logo.png';
import image from '../../images/image.png';

export class UserCard extends Component {
  state = {
    followers: this.props.followers,
    follow: false,
  };

  componentDidUpdate(prevState) {
    if (prevState.follow !== this.state.follow) {
      localStorage.setItem('follow', JSON.stringify(this.state.follow));
    }
  }

  componentDidMount() {
    const parsedStatus = JSON.parse(localStorage.getItem('follow'));

    if (parsedStatus) {
      this.setState({ follow: parsedStatus });
    }
  }

  onToggle = () => {
    this.setState(prevState => ({
      follow: !prevState.follow,
    }));
  };

  render() {
    const { followers, follow } = this.state;
    return (
      <Card>
        <Logo src={logo} alt="Logo" />
        <Background src={image} alt="Background" />
        <Line></Line>
        <Icon>
          <img src={icon} alt="Avatar" />
        </Icon>
        <ul>
          <Tweets>777 tweets</Tweets>
          <Followers>
            {follow
              ? (followers + 1).toLocaleString('en-US')
              : followers.toLocaleString('en-US')}{' '}
            followers
          </Followers>
        </ul>

        <div>
          <Button type="button" onClick={this.onToggle} onFollowStatus={follow}>
            {follow ? 'Following' : 'Follow'}
          </Button>
        </div>
      </Card>
    );
  }
}
