import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
      },
      video: {
        flex: 1,
        alignSelf: 'stretch',
      },
      slider: {
        width: '80%',
        marginTop: 20,
      },
});