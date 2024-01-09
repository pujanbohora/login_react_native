import { View, Button } from "react-native";

import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-material-cards";

function CardDetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Card>
        <CardImage
          source={{ uri: "http://placehold.it/480x270" }}
          title="Above all i am here"
        />
        <CardTitle title="This is a title" subtitle="This is subtitle" />
        <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
        <CardAction separator={true} inColumn={false}>
          <CardButton onPress={() => {}} title="Push" color="blue" />
          <CardButton onPress={() => {}} title="Later" color="blue" />
        </CardAction>
      </Card>
      {/* <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.goBack()}
      /> */}
    </View>
  );
}

export default CardDetailsScreen;
