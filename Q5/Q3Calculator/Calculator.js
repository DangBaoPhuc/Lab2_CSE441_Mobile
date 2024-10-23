import React, { useState } from 'react';
import styles from './style';
import { View, Text, TouchableOpacity } from 'react-native';


const Calculator = () => {

    // State variables
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [firstValue, setFirstValue] = useState(null);

    // Function to handle number inputs
    const handleNumberInput = (num) => {
        if (displayValue === '0') {
            setDisplayValue(num.toString());
        } else {
            setDisplayValue(displayValue + num);
        }
    };

    // Function to handle operator inputs
    const handleOperatorInput = (operator) => {
        setOperator(operator);
        setFirstValue(displayValue); setDisplayValue('0');
    };

    // Function to handle equal button press
    const handleEqual = () => {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(displayValue);

        if (operator === '+') {
            setDisplayValue((num1 + num2).toString());
        } else if (operator === '-') {
            setDisplayValue((num1 - num2).toString());

        } else if (operator === '*') {
            setDisplayValue((num1 * num2).toString());
        } else if (operator === '/') {
            setDisplayValue((num1 / num2).toString());
        }

        setOperator(null);
        setFirstValue('');
    }


    // Function to handle clear button press
    const handleClear = () => {
        setDisplayValue('0');
        setOperator(null);
        setFirstValue(null);
    };
    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.buttonText}>{displayValue}</Text>
            </View>
            <View style={styles.buttonContainer}>
                {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '/', 'C', '='].map((item) => (
                    <TouchableOpacity
                        key={item}
                        style={[styles.button, item === '=' ? styles.buttonEqual : styles.buttonOperator]}
                        onPress={() => {
                            if (item === 'C') {
                                handleClear();
                            } else if (item === '=') {
                                handleEqual();
                            } else if (['+', '-', '*', '/'].includes(item)) {
                                handleOperatorInput(item);
                            } else {
                                handleNumberInput(item);
                            }
                        }}
                    >
                        <Text style={styles.buttonText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};
export default Calculator; 