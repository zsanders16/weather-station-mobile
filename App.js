import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container,
  Content,
  H1,
  Header,
  Title,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base';

export default class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Friend Manager</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Body>
            <H1>Friends</H1>
          </Body>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
