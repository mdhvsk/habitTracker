import React from 'react'
import { Controller } from 'react-hook-form'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const CustomInput = ({ control, rules = {}, name, placeholder, secureTextEntry }) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View style={[styles.container, { borderColor: error ? 'red' : 'grey' }]}>
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            style={styles.input}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                    {error && <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Some Error'}</Text>}
                </>
            )}
        />
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        padding: 15,
        marginVertical: 10,
        // alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1


    },
    input: {}
})