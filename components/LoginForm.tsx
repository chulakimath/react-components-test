import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("Login");
    const emailRef=useRef<any>(null);
    const handlesubmit = () => {
        Alert.alert("Input Data", `email:${email}\npassword:${password}
            `, [{
            text: 'cancle',
            onPress: () => {
                Alert.alert("ok", "Input not cleared");
            },
            style: "default"

        },
        {
            text: "clear",
            onPress: () => {
                setEmail("");
                setPassword("");
                emailRef.current.focus()
            },

        },
        ], { cancelable: true })
    }



    return (
        <View style={[styles.mainBody]}>
            <Text style={[styles.heading]}>{text}</Text>
            <View style={[]}>
                <View style={[styles.inputContainer]}>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Enter Email'
                        keyboardType='email-address'
                        style={[styles.inputField]}
                        placeholderTextColor='black'
                        ref={emailRef}
                    />
                </View>
                <View style={[styles.inputContainer]}>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder='password'
                        keyboardType='default'
                        secureTextEntry={true}
                        style={[styles.inputField]}
                        placeholderTextColor='black'
                    />
                </View>
                <View style={[styles.buttonContainer]}>
                    <Pressable style={[{width:'100%'}]} onPress={handlesubmit}>
                        <View style={[styles.buttonStyle]}>
                            <Text style={[styles.buttonText]}>Login</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        backgroundColor: 'rgba(150,150,250,0.8)'
    },
    heading: {
        fontSize: 40,
        paddingVertical: 10,
        paddingHorizontal:30,
        fontWeight: 'bold',
        color: 'white',
    },
    inputField: {
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 8,
        color: 'black',
        backgroundColor: 'white',
    },
    inputContainer: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        width:"100%"
    },
    buttonStyle: {
        marginHorizontal: 20,
        marginVertical: 20,
        borderColor: 'white',
        borderWidth: 1,
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "blue", 
    },
    buttonText: {
        fontSize: 20,
        color: "white"
    }
})