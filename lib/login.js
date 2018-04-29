import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
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
  Icon,
  Form,
  Text
} from "native-base";
import styles from '../styles/loginScreen';

export class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            password: ""
        };
    }

    logIn(){
        this.props.navigation.navigate("Home");
    }

    render(){
        return(
            <Container style={styles.container}>
                <Header>
                    <Body>
                        <Title>Log in!</Title>
                    </Body>
                </Header>

                <Content>
                    <Form>
                        <Item floatingLabel style={styles.textArea}>
                            <Label>Username</Label>
                            <Input/>
                        </Item>
                        <Item floatingLabel style={styles.textArea}>
                            <Label>Password</Label>
                            <Input secureTextEntry/>
                        </Item>
                        <Button primary style={styles.button} onPress={() => this.logIn()}>
                            <Text>Log in!</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}