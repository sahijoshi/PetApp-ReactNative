import { StyleSheet } from 'react-native';
import { theme } from '../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
    },
    h1: {
        fontSize: theme.sizes.h1,
        fontWeight: "bold", 
    },
    h2: {
        fontSize: theme.sizes.h2,
        fontWeight: "500", 
    },
    h3: {
        fontSize: theme.sizes.h3,
        fontWeight: "300", 
    },
    button: {
        borderRadius: theme.sizes.radius,
        height: theme.sizes.base * 3,
        justifyContent: "center",
        marginVertical: theme.sizes.padding / 3,
        fontSize: theme.sizes.h3,
      },
    logo: {
        height: 100,
        width: 100,
        borderRadius: 100 / 2
    },
    textInput: {
        height: 40,
        backgroundColor: "white",
        marginBottom: 15,
        color: theme.colors.gray,
        paddingHorizontal: 10,
        borderRadius: 10
    },
})

export default styles;
