import React, { Component } from 'react';

import { StyleSheet, Text, View, Dimensions, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import LoginForm from './LoginForm';

const width = Dimensions.get("window").width;
export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    /*
    *<KeyboardAvoidingView behavior={'position'}>

    Bu property uygulamada text inputlarının yazarken aşağıda kalmasını önler
    
    */

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headBackground} />

                <KeyboardAvoidingView behavior={'position'}>
                    <View>
                        <Text style={styles.logo}>UDAC</Text>
                        <Text style={styles.logoDescription}>Property & Tax Survey</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.loginArea}>
                            <Text style={styles.loginAreaTitle}>Property Tax Server</Text>
                            <Text style={styles.loginAreaDescription}>Unique Door No Easily Fill Your Entire Property Tax Using App</Text>
                            <LoginForm />
                        </View>

                    </ScrollView>
                    <View style={styles.signUpArea}>
                        <Text style={styles.signUpDescription}>Don't have an account?</Text>
                        <TouchableOpacity>
                            <Text style={styles.signUpText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    loginAreaDescription: {
        fontSize: 12,
        color: '#7e868f',
        marginVertical: 10,
        textAlign: 'center'
    },
    signUpText: { color: '#666', fontWeight: '600' },
    signUpArea: {
        alignItems: 'center'
    },
    signUpDescription: { color: '#999' },
    loginAreaTitle: {
        fontSize: 18,
        textAlign: 'center', fontWeight: 'bold'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 80
    },

    headBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 250,
        width: width,
        backgroundColor: '#1572de',
    },

    logo: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#f2f2f2'
    },

    logoDescription: {
        textAlign: 'center',
        color: '#f2f2f2',
    },

    loginArea: {
        marginHorizontal: 40,
        marginVertical: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 2,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
    }
});
