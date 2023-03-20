// @app
import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

const Loader = ({ color }) => {
    return (
        <ActivityIndicator size="large" color={color} />
    );
};
export default Loader;
