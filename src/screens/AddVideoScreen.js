import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, ScrollView } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const AddVideoScreen = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  useEffect(() => {
    console.log(selectedVideo);
  }, [selectedVideo]);

  const selectVideo = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.video],
      });

      console.log('Document Picker Response:', res);

      if (Array.isArray(res) && res.length > 0 && res[0].uri) {
        setSelectedVideo(res[0].uri); // Accessing the URI from the first object in the array
        setUploadStatus('Uploaded successfully');
      } else {
        console.log('Error: Selected video URI is undefined');
        setUploadStatus('Error: Selected video URI is undefined');
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled video picker');
        setUploadStatus('User cancelled video picker');
      } else {
        console.log('Error picking video:', err);
        setUploadStatus('Error picking video');
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {selectedVideo && (
        <View style={styles.videoContainer}>
          <Text style={styles.videoText}>Selected Video URI:</Text>
          <Text style={styles.videoURI}>{selectedVideo}</Text>
        </View>
      )}
      {uploadStatus && <Text style={styles.uploadStatus}>{uploadStatus}</Text>}
      <Button title="Select Video" onPress={selectVideo} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  videoContainer: {
    marginBottom: 20,
  },
  videoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black'
  },
  videoURI: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  uploadStatus: {
    fontSize: 16,
    color: 'green',
    marginBottom: 10,
  },
});

export default AddVideoScreen;
