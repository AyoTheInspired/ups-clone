import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	ActivityIndicator,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useTailwind } from "tailwind-rn";
import {
	CompositeNavigationProp,
	useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import { Image, Input } from "@rneui/themed";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<TabStackParamList, "Customers">,
	NativeStackNavigationProp<RootStackParamList>
>;

const CustomerScreen = () => {
	const [input, setInput] = useState("");
	const tw = useTailwind();
	const navigation = useNavigation<CustomerScreenNavigationProp>();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<ScrollView style={{ backgroundColor: "#59c1cc" }}>
			<Image
				source={{ uri: "https://links.papareact.com/3jc" }}
				containerStyle={tw("w-full h-64")}
				PlaceholderContent={<ActivityIndicator />}
			/>

			<Input
				placeholder="Search by customer"
				value={input}
				onChangeText={setInput}
				containerStyle={tw("bg-white pt-5 pb-0 px-10")}
			/>
		</ScrollView>
	);
};

export default CustomerScreen;
