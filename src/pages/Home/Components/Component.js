// @app
import React from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { styles } from '../styles';

export const Header = ({ navigation }) => {

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title(RFPercentage(2.5))}>
                Video Audio And Editor
            </Text>
        </View >
    );
};

export const FeatureCart = ({ icon, title, size }) => {
    return (
        <TouchableOpacity activeOpacity={.9} style={styles.cartContainer}>
            {icon}
            <Text style={styles.title(RFPercentage(size))}>{title}</Text>
        </TouchableOpacity>
    )
}
