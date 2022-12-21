import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

const SoundPlayer = ({ bpm, soundFile }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const playSound = async () => {
    setIsPlaying(true);
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync(soundFile);
      await sound.setIsLoopingAsync(true); // loop indefinitely
      await sound.playAsync();
    } catch (error) {
      console.log(error);
    }

    // set interval to change playback rate based on bpm
    const interval = 60000 / bpm;
    const id = setInterval(async () => {
      try {
        await sound.setRateAsync(bpm / 60, false);
      } catch (error) {
        console.log(error);
      }
    }, interval);
    setIntervalId(id);
  };

  const stopSound = async () => {
    setIsPlaying(false);
    clearInterval(intervalId);
    try {
      await Audio.Sound.stopAsync();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {isPlaying ? (
        <TouchableOpacity onPress={stopSound}>
          <Text>Stop</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={playSound}>
          <Text>Play</Text>
        </TouchableOpacity>
      )}
    </View>
  )};

  export default SoundPlayer
