import React from 'react';
import {
  CardItem,
  Image,
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Form,
  Text,
  Card,
  H1,
  Icon
} from "native-base";
import { Grid, Col } from 'react-native-easy-grid';
import styles from '../styles/homeScreen';
import { SpendingChart } from './chart';
import Icons from 'react-native-vector-icons/FontAwesome';

export class Home extends React.Component {

    render(){
        return(
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent>
                        <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Dashboard</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='settings' />
                        </Button>
                    </Right>
                </Header>

                <Content>
                    <Card style={styles.cardArea}>
                        <SpendingChart/>
                    </Card>
                    <Card>
                        {/* <Image source={require('../res/paris.jpg')} style={{height: 200, width: null, flex: 1}}/> */}
                    </Card>
                </Content>
            </Container>
        );
    }
}