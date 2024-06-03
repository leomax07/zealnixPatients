import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Image, Flex, Text, Button, Colors} from 'squashapps-react-native-uikit';
import {screens} from './mock';

interface OnboardingScreenProps {
  navigation: any;
}

const styles = StyleSheet.create({
  image: {
    height: 375,
    width: 375,
    marginTop: 70,
    marginBottom: 28,
    resizeMode: 'contain',
  },
  textContainer: {
    marginBottom: 30,
    padding: 20,
  },
  descriptionText: {
    marginTop: 20,
  },
  progressBar: {
    marginHorizontal: 32,
    marginVertical: 32,
  },
  step: {
    width: 60,
    borderColor: Colors.TEXT_GREY_300,
    marginHorizontal: 8,
    height: 2,
  },
  activeStep: {
    backgroundColor: Colors.NEUTRAL_800,
    borderColor: Colors.NEUTRAL_800,
  },
  inActiveStep: {
    backgroundColor: Colors.TEXT_GREY_300,
    borderColor: Colors.TEXT_GREY_300,
  },
});

const OnboardingScreen = ({navigation}: OnboardingScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [skipped, setSkip] = useState(false);

  const handleSkip = () => {
    setSkip(true);
    navigation.navigate('LoginScreen');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(progresss => progresss + 2);
    }, 110);

    const timer = setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex < screens.length && !skipped) {
        setCurrentIndex(nextIndex);
        setProgress(0);
      } else {
        navigation.navigate('LoginScreen');
        clearInterval(interval);
      }
    }, 5000);
    if (skipped) {
      clearInterval(interval);
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [currentIndex, skipped]);

  return (
    <Flex overrideStyle={{backgroundColor: Colors.WHITE}}>
      <Flex center>
        <Image src={screens[currentIndex].image} overrideStyle={styles.image} />
      </Flex>
      <Flex overrideStyle={styles.textContainer}>
        <Text size={30} type="heading800">
          {screens[currentIndex].title}
        </Text>
        <Text
          type="body300"
          color="gray"
          overrideStyle={styles.descriptionText}>
          {screens[currentIndex].description}
        </Text>
      </Flex>
      <Flex center between row overrideStyle={styles.progressBar}>
        <Flex row>
          {screens.map((data, index) => (
            <View
              key={data.title}
              style={[
                styles.step,
                index < currentIndex ? styles.activeStep : styles.inActiveStep,
                {overflow: 'hidden'},
              ]}>
              {index === currentIndex && (
                <View
                  style={[
                    styles.activeStep,
                    {width: `${progress}%`, borderWidth: 1},
                  ]}
                />
              )}
            </View>
          ))}
        </Flex>
        <Button type="link" onClick={handleSkip}>
          <Text>Skip</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default OnboardingScreen;
