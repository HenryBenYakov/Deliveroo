import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

export const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#004d76] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/order.gif")}
        animation="slideInUp"
        interactionCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        interactionCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your Order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};
