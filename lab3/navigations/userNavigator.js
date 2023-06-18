import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import routes from "../common/routes";
import Details from "../components/users/userDetails";
import UsersList from "../components/users/allUser";
const UsersNavigator = () => {
  const stack = createNativeStackNavigator();

  return (
    <stack.Navigator>
      <stack.Screen name={routes.users} component={UsersList} />
      <stack.Screen name={routes.details} component={Details} />
    </stack.Navigator>
  );
};

export default UsersNavigator;