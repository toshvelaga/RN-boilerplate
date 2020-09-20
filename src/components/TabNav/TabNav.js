import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Creators from "../../screens/Creators/Creators";
import Feed from "../../screens/Feed/Feed";
import Profile from "../../screens/Profile/Profile";
// import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import theme from "../../styles/theme.style";
import Settings from "../../screens/Settings/Settings";

const Tab = createBottomTabNavigator();

function TabNav() {
	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
				style: {
					backgroundColor: theme.BACKGROUND_COLOR,
				},
			}}
		>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => (
						<SimpleLineIcons
							style={{ top: theme.ICON_TOP_PADDING }}
							name="home"
							size={theme.ICON_SIZE}
							color="white"
						/>
					),
				}}
				name="Creators"
				component={Creators}
			/>

			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => (
						<Fontisto
							name="compass"
							style={{ top: theme.ICON_TOP_PADDING }}
							size={theme.ICON_SIZE}
							color="white"
						/>
					),
				}}
				name="Feed"
				component={Feed}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome
							name="user-o"
							style={{ top: theme.ICON_TOP_PADDING }}
							size={theme.ICON_SIZE}
							color={theme.TEXT_COLOR}
						/>
					),
				}}
				name="Profile"
				component={Profile}
			/>
		</Tab.Navigator>
	);
}

export default TabNav;
