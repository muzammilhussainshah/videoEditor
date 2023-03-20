import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({
    Container: { flex: 1, backgroundColor: 'transparent', paddingHorizontal: RFPercentage(3) },

    imgContainer: (flex) => ({ flex: flex, justifyContent: "center", alignItems: 'center' }),

    title: (fontSize) => ({ fontSize: fontSize, fontWeight: 'bold', textAlign: 'center' }),

    titleContainer: { borderTopWidth: 2, borderBottomWidth: 2, justifyContent: "center", alignItems: 'center' },

    loaderStyle: { position: 'absolute', zIndex: 2, top: '45%', alignSelf: 'center', justifyContent: "center", alignItems: 'center', padding: RFPercentage(1.5), borderRadius: RFPercentage(1), backgroundColor: 'rgba(0,0,0,0.8)' },

    coverImg: { height: RFPercentage(30), width: RFPercentage(30), opacity: .5 },

});