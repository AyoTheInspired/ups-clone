import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useTailwind } from "tailwind-rn/dist";
import {
	CompositeNavigationProp,
	RouteProp,
	useNavigation,
	useRoute,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import DeliveryCard from "../components/DeliveryCard";

type Props = {};

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;

type OrdersScreenNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<TabStackParamList, "Orders">,
	NativeStackNavigationProp<RootStackParamList>
>;

const OrderScreen = (props: Props) => {
	const tw = useTailwind();
	const navigation = useNavigation<OrdersScreenNavigationProp>();
	const {
		params: { order },
	} = useRoute<OrderScreenRouteProp>();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: order.trackingItems.customer.name,
			headerTitleStyle: { color: "black" },
			headerBackTitle: "Deliveries",
			headerTintColor: "#eb6a7c",
		});
	}, []);

	return (
		<View style={tw("-mt-2")}>
			<DeliveryCard order={order} fullWidth />
		</View>
	);
};

export default OrderScreen;
