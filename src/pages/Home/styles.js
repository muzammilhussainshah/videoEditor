import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({

    Container: { flex: 1, backgroundColor: 'black' },

    headerContainer: { flex: 1.5, width: '100%', backgroundColor: Colors.headerColor, justifyContent: "flex-end", alignItems: 'center' },

    title: (fontSize) => ({ fontSize: fontSize, color: Colors.Primaryfontcolor, fontWeight: 'bold', textAlign: 'center', marginBottom: RFPercentage(2) }),

    cartContainer: { flex: 1, backgroundColor: Colors.primary, borderRadius: RFPercentage(1), margin: RFPercentage(.5), justifyContent: 'center', alignItems: 'center' },
    footerContainer: { flex: 2.5, flexDirection: 'row', paddingHorizontal: RFPercentage(1), justifyContent: "space-between" },
    featureContainer: { flex: 6, paddingVertical: RFPercentage(1) },
});