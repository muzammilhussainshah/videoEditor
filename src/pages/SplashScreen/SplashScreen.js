// @app
import React, {
  useEffect,
  useMemo,
  useState
} from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';

import Loader from '../../components/Loader';
import Colors from '../../styles/Colors';
import { styles } from './styles';


const SplashScreen = ({ navigation }) => {

  const [loder, setloader] = useState(false)

  const imgPath = useMemo(() => ("https://cdn3d.iconscout.com/3d/premium/thumb/male-video-editor-5571462-4659663.png"), [])
  const imgPath2 = useMemo(() => ("https://static.vecteezy.com/system/resources/previews/009/313/997/original/interface-of-sound-and-video-editor-on-screen-free-png.png"), [])

  useEffect(() => {
    // setTimeout(() => {
       setloader(true) 
      // }, 1000);
    // setTimeout(() => {
       navigation.navigate('Home') 
  // }, 5000);
  }, [])

  return (
    <View style={styles.Container}>

      <View style={[styles.imgContainer(4.5),]}>
        <Image
          source={{ uri: imgPath2 }}
          style={styles.coverImg}
          resizeMode='contain'
        />
        
      </View>

      <View style={[styles.imgContainer(.7), styles.titleContainer]}>
        <Text style={styles.title(RFPercentage(3))}>
          Video Editing Studio
        </Text>
      </View>

      <View style={[styles.imgContainer(3.8),]}>
        <Image
          source={{ uri: imgPath }}
          style={styles.coverImg}
          resizeMode='contain'
        />
      </View>

      <View style={[styles.imgContainer(1),]}>
        <Text style={styles.title(RFPercentage(1.5))}>
          Create Video| Edit Video | Extract Audio | Cut Audio
        </Text>
      </View>

      {loder &&
        <View style={styles.loaderStyle}>
          <Loader color={Colors.Primaryfontcolor} />
        </View>
      }

    </View >
  );
};
export default SplashScreen;
