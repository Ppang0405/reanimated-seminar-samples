import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler } from "react-native-reanimated";
import { Button, Text, View } from 'react-native'

const SimpleBottomSheet = () => {   
    const guestureHandler = useAnimatedGestureHandler({})

    return (
        <>
            <View style={[{flex: 1,
            justifyContent: 'center',
            alignItems: 'center'}]}>
                <Button title="Open Sheet" onPress={() => {}} />
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
                }]}>
                    <Text>{'Sheet >'}</Text>
                </Animated.View>
            </PanGestureHandler>
        </>
    )
}

export default SimpleBottomSheet
