import { Camera, CameraType } from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react'
import { Alert, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CameraComponent = ({ onClose }) => {
    let cameraRef = useRef();
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraType, setCameraType] = useState(CameraType.back);
    const [photo, setPhoto] = useState()

    useEffect(() => {
        (async () => {
            const status = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted')
            console.log("Access granted")
        })();
    }, []);

    if (hasPermission === undefined) {
        console.log("Null permission")
        return <Text> Undefined permission </Text>
    }
    if (hasPermission === false) {
        console.log("No permission")
        return <Text>No access to camera</Text>
    }

    let takePic = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false
        }

        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto)
    }

    if (photo) {
        let sharePic = () => {

        }
    }
    const toggleCameraType = () => {
        setCameraType(
            cameraType === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        )
    }
    return (
        <Camera style={styles.container} type={cameraType} ref={cameraRef}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    title="Take Pic"
                    style={styles.button}
                    onPress={takePic}
                />
            </View>
            <StatusBar style="auto" />

        </Camera >
    )
}

export default CameraComponent

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        backgroundColor: 'white',
        alignSelf: 'flex-end'
    }

})