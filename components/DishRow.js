import { Text, TouchableOpacity, View } from "react-native";

import React from "react";

const DishRow = ({ id, name, description, price, image }) => {
  return (
    <View>
      <TouchableOpacity>
        <View>
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DishRow;
