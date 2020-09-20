import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNav from "./src/components/TabNav/TabNav";
import LoadingScreen from "./src/screens/LoadingScreen/LoadingScreen";
import firebase from "./src/firebase/fbConfig";
import StackNav from "./src/components/StackNav/StackNav";

// Store imports react-redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./src/store/reducers/rootReducer";

const store = createStore(rootReducer);

export default function App() {
	const [user, setUser] = useState(null);
	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			setUser(user);
		});
	});
	return (
		<>
			<Provider store={store}>
				<NavigationContainer>
					<StatusBar style="light" />
					{user ? <TabNav /> : <StackNav />}
				</NavigationContainer>
			</Provider>
		</>
	);
}
