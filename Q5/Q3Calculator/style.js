import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 170,
        backgroundColor: '#f5f5f5',
    },

    display: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#fff',
        borderColor: '#e0e0e0',
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        fontSize: 48,
    },

    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
    },

    button: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },

    buttonText: {
        fontSize: 32,
        color: '#333',
    },

    buttonEqual: {
        backgroundColor: '#ff9800',
    },

    buttonOperator: {
        backgroundColor: '#e0e0e0',
    },
});

export default styles;
