import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreens/RegisterScreen";
import RegisterScreen2 from "../../screens/RegisterScreens/RegisterScreen2";
import RegisterScreen3 from "../../screens/RegisterScreens/RegisterScreen3";
import RegisterScreen4 from "../../screens/RegisterScreens/RegisterScreen4";
import RegisterScreen5 from "../../screens/RegisterScreens/RegisterScreen5";
import ForgotPassword from "../../screens/ForgotPasswordScreens/ForgotPassword";
import ForgotPassword2 from "../../screens/ForgotPasswordScreens/ForgotPassword2";
import Entry from "../../screens/EntryScreen/Entry";

const StackNav = () => {
	const Stack = createStackNavigator();

	return (
		<>
			<Stack.Navigator
				screenOptions={{
					headerTransparent: true,
					headerTitleStyle: {
						display: "none",
					},
				}}
			>
				<Stack.Screen options={{ title: "" }} name="Entry" component={Entry} />
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Register" component={RegisterScreen} />
				<Stack.Screen
					options={{ title: "Register" }}
					name="Register2"
					component={RegisterScreen2}
				/>
				<Stack.Screen
					options={{ title: "Register" }}
					name="Register3"
					component={RegisterScreen3}
				/>
				<Stack.Screen
					options={{ title: "Register" }}
					name="Register4"
					component={RegisterScreen4}
				/>
				<Stack.Screen
					options={{ title: "Register" }}
					name="Register5"
					component={RegisterScreen5}
				/>
				<Stack.Screen
					options={{ title: "" }}
					name="ForgotPassword"
					component={ForgotPassword}
				/>
				<Stack.Screen name="ForgotPassword2" component={ForgotPassword2} />
			</Stack.Navigator>
		</>
	);
};

export default StackNav;
