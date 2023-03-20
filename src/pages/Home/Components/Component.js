// @app
import React from 'react';
import {
    Share,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Rate, { AndroidMarket } from 'react-native-rate'
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

export const onShare = async () => {
    try {
        const result = await Share.share({
            message:
                'React Native | A framework for building native apps using React',
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        Alert.alert(error.message);
    }
};

export const rateUs = () => {
    const options = {
        AppleAppID: "2193813192",
        GooglePackageName: "com.videoeditor",
        AmazonPackageName: "com.videoeditor",
        OtherAndroidURL: "http://www.randomappstore.com/app/47172391",
        preferredAndroidMarket: AndroidMarket.Google,
        preferInApp: true,
        openAppStoreIfInAppFails: true,
        fallbackPlatformURL: "http://www.mywebsite.com/myapp.html",
    }

    Rate.rate(options, (success, errorMessage) => {
        if (success) {
            console.log(success, 'successsuccesssuccess', errorMessage)
        }
        if (errorMessage) {
            // errorMessage comes from the native code. Useful for debugging, but probably not for users to view
            console.error(`Example page Rate.rate() error: ${errorMessage}`)
        }
    })
}