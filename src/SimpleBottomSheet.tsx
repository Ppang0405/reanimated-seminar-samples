import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Button, Text, useWindowDimensions, View } from 'react-native'
import * as React from "react";

const SPRING_CONFIG = {
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
}

const SimpleBottomSheet = () => {   
    const dimensions = useWindowDimensions()
    const guestureHandler = useAnimatedGestureHandler({
        onStart(_, context) {
            context.startTop = top.value;
        },
        onActive(event, context) {
            top.value = context.startTop + event.translationY;
        },
        onEnd() {
            // dismissing snap point
            if (top.value > dimensions.height / 2 + 200) {
                top.value = dimensions.height
            } else {
                top.value = dimensions.height / 2
            }
        }
    })
    const top = useSharedValue(dimensions.height)
    const style = useAnimatedStyle(() => {
        return {
            top: withSpring(top.value, SPRING_CONFIG),
        }
    })

    return (
        <>
            <View style={[{flex: 1,
            justifyContent: 'center',
            alignItems: 'center'}]}>
                <Button title="Open Sheet" onPress={() => {
                    top.value = withSpring(
                        dimensions.height / 2,
                        SPRING_CONFIG,
                    )
                }} />
            </View>

            <PanGestureHandler onGestureEvent={guestureHandler}>
                <Animated.View style={[{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowRadius: 3.84,
                    shadowOpacity: 0.25,
                    elevation: 5,
                    padding: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }, style]}>
                    <Text>{'Sheet >'}</Text>
                </Animated.View>
            </PanGestureHandler>
        </>
    )
}

export default SimpleBottomSheet
