/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HttpUtil from './Demo/HttpUtil.js'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    componentDidMount() {
        // HttpUtil.get('https://www.baidu.com/').then((data) => {
        //     //正确请求的业务逻辑
        //     console.log(data);
        // }).catch((error) => {
        //     //处理请求失败业务逻辑
        //     console.log(error);
        // }).done();

        this.promiseChain1();
        this.promiseChain2();
    }

    /********************* promiseChain1 -----Task都是相互独立的************************/
    promiseChain1() {
        var promise = Promise.resolve();
        promise.then(this.taskA).then(this.taskB).catch(this.onRejected).then(this.finalTask);
    }

    taskA() {
        console.log("Task A");
    }

    taskB() {
        let arr = [1, 2];
        // arr.append(3);
        arr.push(3);
        console.log(arr);

        console.log("Task B");
    }

    onRejected(error) {
        console.log("Catch Error: A or B", error);
    }

    finalTask() {
        console.log("Final Task");
    }

    /********************* promiseChain1 ************************/

    /********************* promiseChain2 -----如果 Task A 想给 Task B 传递一个参数 ************************/
    promiseChain2() {
        var promise = Promise.resolve(1);
        promise.then(this.increment)
               .then(this.doubleUp)
               .then(this.output)
               .catch(function (error) {
                    // promise chain中出现异常的时候会被调用
                    console.error(error);
                });
    }

    doubleUp(value) {
        return value * 2;
    }

    increment(value) {
        return value + 1;
    }

    output(value) {
        console.log(value);// => (1 + 1) * 2;
    }
    /********************* promiseChain2 ************************/



    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!fanxc</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
