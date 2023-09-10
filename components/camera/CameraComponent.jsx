import { Camera, CameraType } from 'expo-camera';
import React, { useEffect, useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'

const CameraComponent = ({ onClose }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraType, setCameraType] = useState(CameraType.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted')
            console.log("Access granted")
        })();
    }, []);

    if (hasPermission === null) {
        return <View />
    }
    if (hasPermission === false) {
        return <Alert>No access to camera</Alert>
    }

    const toggleCameraType = () => {
        setCameraType(
            cameraType === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        )
    }
    return (
        <View >
            <Camera style={{ flex: 1 }} type={cameraType}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                        }}
                        onPress={toggleCameraType}
                    >
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                            Flip
                        </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>)
}

export default CameraComponent