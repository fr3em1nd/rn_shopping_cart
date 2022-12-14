import { Colors, IconButton } from "react-native-paper";

const CartHeaderRight = ({ navigation }) => {
    const _handleSearchNavigation = () => {
        navigation.navigate("Search");
    };

    return (
        <>
            <IconButton
                icon="search"
                onPress={_handleSearchNavigation}
                color={Colors.white}
            />
            <IconButton icon="message-circle" disabled />
        </>
    );
};

const cartheaderOptions = ({ navigation }) => ({
    headerRight: () => <CartHeaderRight navigation={navigation} />,
});

export default cartheaderOptions;
