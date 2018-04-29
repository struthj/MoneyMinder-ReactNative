import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { Button, Card, Text, H1 } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Grid, Col, Row } from 'react-native-easy-grid';
import styles from '../styles/homeScreen';

export class SpendingChart extends React.PureComponent {

    render() {

        const data = [ 50, 10, 40, 95, 91];
        const colors = ['#7FB7BE', '#D3F3EE', '#DACC3E', '#BC2C1A', '#7D1538'  ];

        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: colors[index],
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }));

        return (
                <Grid>
                    <Row>
                        <Col>
                            <PieChart
                                style={styles.chart}
                                data={ pieData }
                            />
                        </Col>
                        <Col>
                            <Button iconLeft transparent small primary>
                                <Icon name='circle' size={20} color={colors[0]} />
                                <Text uppercase={false}>Europe Trip</Text>
                            </Button>
                            <Button iconLeft transparent small primary>
                                <Icon name='circle' size={20} color={colors[1]} />
                                <Text uppercase={false}>Car Down Payment</Text>
                            </Button>
                            <Button iconLeft transparent small primary>
                                <Icon name='circle' size={20} color={colors[2]} />
                                <Text uppercase={false}>Spring Break Trip</Text>
                            </Button>
                            <Button iconLeft transparent small primary>
                                <Icon name='circle' size={20} color={colors[3]} />
                                <Text uppercase={false}>Savings</Text>
                            </Button>
                            <Button iconLeft transparent small primary>
                                <Icon name='circle' size={20} color={colors[4]} />
                                <Text uppercase={false}>Birthday Gift</Text>
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <H1>$2,312</H1>
                            <Text>Current account balance</Text>
                        </Col>
                        <Col style={styles.percentCol}>
                            <Text style={styles.balance}>+13%</Text>
                        </Col>
                    </Row>
                </Grid>
        );
    }

}