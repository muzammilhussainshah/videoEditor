// @app
import React, { useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Loader from '../../components/Loader';
import Colors from '../../styles/Colors';
import { FeatureCart, Header } from './Components/Component';
import { styles } from './styles';


const Home = ({ navigation }) => {

  const [loder, setloader] = useState(false)
  const dummyImg = <Image source={{ uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-video-editor-5571462-4659663.png"' }} style={{ height: '50%', width: '50%', }} resizeMode='contain' />

  return (
    <View style={styles.Container}>
      <Header />
      <View style={styles.featureContainer}>
        <FeatureCart size={2} icon={dummyImg} title="My Folder" />
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <FeatureCart size={1.5} icon={dummyImg} title="Trim Video" />
          <FeatureCart size={1.5} icon={dummyImg} title="Create Video" />
          <FeatureCart size={1.5} icon={dummyImg} title="Create Audio" />
        </View>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <FeatureCart size={1.5} icon={dummyImg} title="Extract Audio" />
          <FeatureCart size={1.5} icon={dummyImg} title="Trim Audio" />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity>
          <Image source={{ uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-video-editor-5571462-4659663.png"' }} style={{ height: RFPercentage(5), width: RFPercentage(5), }} resizeMode='contain' />
          <Text style={styles.title(RFPercentage(1.5))}>{`Share`}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-video-editor-5571462-4659663.png"' }} style={{ height: RFPercentage(5), width: RFPercentage(5), }} resizeMode='contain' />
          <Text style={styles.title(RFPercentage(1.5))}>{`Rate Us`}</Text>
        </TouchableOpacity>
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
