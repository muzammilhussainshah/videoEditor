// @app
import React, { useEffect, useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Loader from '../../components/Loader';
import Colors from '../../styles/Colors';
import { FeatureCart, Header, onShare, rateUs } from './Components/Component';
import { styles } from './styles';
import { AppOpenAd, InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize, AdEventType, RewardedAdEventType } from 'react-native-google-mobile-ads';


const adUnitId = TestIds.INTERSTITIAL;
// const adUnitId = 'ca-app-pub-1601119629148767/3483731626';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});
const Home = ({ navigation }) => {

  const [loder, setloader] = useState(false)

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      interstitial.show();
    });
    // Start loading the interstitial straight away
    interstitial.load();
    // Unsubscribe from events on unmount
    return unsubscribe;

  }, [])

  const trimIcon = <MaterialCommunityIcons size={RFPercentage(6)} color={Colors.Primaryfontcolor} name={'scissors-cutting'} />
  const folderIcon = <MaterialIcons size={RFPercentage(10)} color={Colors.Primaryfontcolor} name={'folder-special'} />
  const videoIcon = <Entypo size={RFPercentage(6)} color={Colors.Primaryfontcolor} name={'video-camera'} />
  const recordIcon = <MaterialCommunityIcons size={RFPercentage(6)} color={Colors.Primaryfontcolor} name={'record-circle-outline'} />
  const extractMusic = <MaterialIcons size={RFPercentage(6)} color={Colors.Primaryfontcolor} name={'library-music'} />
  const trimAudio = <MaterialCommunityIcons size={RFPercentage(6)} color={Colors.Primaryfontcolor} name={'paper-cut-vertical'} />
  return (
    <View style={styles.Container}>
      <Header />
      <View style={styles.featureContainer}>
        <FeatureCart size={2.5} icon={folderIcon} title="My Folder" />
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <FeatureCart size={1.8} icon={trimIcon} title="Trim Video" />
          <FeatureCart size={1.8} icon={videoIcon} title="Create Video" />
          <FeatureCart size={1.8} icon={recordIcon} title="Create Audio" />
        </View>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <FeatureCart size={1.8} icon={extractMusic} title="Extract Audio" />
          <FeatureCart size={1.8} icon={trimAudio} title="Trim Audio" />
        </View>
      </View>
      <View style={[styles.footerContainer,]}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => onShare()}
            activeOpacity={.9} style={styles.footerBtnContainer}>
            <AntDesign name='sharealt' size={RFPercentage(3)} color="white" />
            <Text style={[styles.title(RFPercentage(1.5)), { marginBottom: 0 }]}>{`Share`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => rateUs()}

            activeOpacity={.9} style={styles.footerBtnContainer}>
            <Entypo name='star' size={RFPercentage(3)} color="white" />
            <Text style={[styles.title(RFPercentage(1.5)), { marginBottom: 0 }]}>{`Rate Us`}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bannerContainer}>
          <BannerAd
            size={BannerAdSize.BANNER}
            unitId={TestIds.BANNER}
          // unitId={"ca-app-pub-9152919921144751/4080981743"} 
          // requestOptions={{
          //   requestNonPersonalizedAdsOnly:true,
          // }}
          />
        </View>
      </View>
      {loder &&
        <View style={styles.loaderStyle}>
          <Loader color={Colors.Primaryfontcolor} />
        </View>
      }
    </View >
  );
};
export default Home;
