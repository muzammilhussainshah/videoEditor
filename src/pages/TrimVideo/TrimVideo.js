// @app
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import Ffmpeg from 'ffmpeg-kit-react-native';

import { styles } from './styles';


const TrimVideo = ({ navigation, route }) => {
  const { source } = route.params;
  console.log(source, 'videovideovideovideo')
  const [currentTime, setCurrentTime] = useState(0);
  const [startTrimTime, setStartTrimTime] = useState(0);
  const [endTrimTime, setEndTrimTime] = useState(0);
  const videoRef = useRef(null);

  const handleOnLoad = (data) => {
    console.log(data,'datadatadatadatadata')
    setEndTrimTime(data.duration);
  };

  const handleSliderChange = (values) => {
    const [start, end] = values;
    setStartTrimTime(start);
    setEndTrimTime(end);
    if (videoRef.current) {
      videoRef.current.seek(start);
    }
  };

  const handleSliderRelease = async (values) => {
    const [start, end] = values;
    const inputPath = source.sourceURL;
    const outputPath = '/Users/muzammil/Library/Developer/CoreSimulator/Devices/C597D11A-0F2C-4C3E-9582-B60A7CCFBDF3/data/Media/DCIM/trimmed/video.mp4';
    
    try {
      const result = await Ffmpeg.executeAsync(`-i ${inputPath} -ss ${start} -to ${end} -c copy ${outputPath}`);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };






{console.log(source.sourceURL,'source.sourceURLsource.sourceURL')}
  return (
    <View style={styles.container}>
      <Video
      
        ref={videoRef}
        source={{uri:'/Users/muzammil/Library/Developer/CoreSimulator/Devices/C597D11A-0F2C-4C3E-9582-B60A7CCFBDF3/data/Media/DCIM/100APPLE/1.MP4'}}
        style={styles.video}
        onProgress={(progress) => setCurrentTime(progress.currentTime)}
        onLoad={handleOnLoad}
      />
      {/* <Slider
        style={styles.slider}
        value={[startTrimTime, endTrimTime]}
        minimumValue={0}
        maximumValue={currentTime}
        step={0.1}
        onValueChange={handleSliderChange}
        onSlidingComplete={handleSliderRelease}
      /> */}
    </View>
  );
};
export default TrimVideo;
