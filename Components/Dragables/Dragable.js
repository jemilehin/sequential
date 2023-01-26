import React, {
    createRef, useRef
} from 'react';
import { Dimensions, ScrollView } from "react-native";
import {
    PanGestureHandler,
    NativeViewGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
    useAnimatedGestureHandler, useAnimatedStyle, Easing, withSpring, withTiming,
    runOnJS, useSharedValue
} from 'react-native-reanimated';
import tw from 'tailwind-react-native-classnames'

const deviceWidth = Dimensions.get('window').width;

const DragAble = (props) => {
    const scrollOffset = useSharedValue(0);
    const sharedValue = useSharedValue(props.entry !== undefined ? props.sharedValue.value : props.dh)

    const nativeScrollRef = createRef();
    const panContainerRef = createRef();


    const animatedStyle = useAnimatedStyle(
        () => {
                return {
                    transform: [{ translateY: withSpring(sharedValue.value)}]
                }
        }
    )

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (event, context) => {
            context.translateY = sharedValue.value;
        },
        onActive: (event, context) => {
            // const newValue = context.translateY + event.translationY
            // if(newValue > props.minLevel ){
                sharedValue.value = context.translateY + event.translationY * 2
            // }
        },
        onEnd: (event, context) => {
            props.setEntry(false)
            if (props.minLevel !== undefined && props.maxLevel !== undefined) {
                if (sharedValue.value < props.minLevel) {
                    sharedValue.value = withTiming(props.minLevel, { duration: 500, easing: Easing.out(Easing.exp) })
                } else if (sharedValue.value >= 200) {
                    sharedValue.value = withTiming(props.maxLevel, { duration: 500, easing: Easing.out(Easing.exp) })
                }
            }
        }
    })
    return (
        <PanGestureHandler
            ref={panContainerRef}
            simultaneousHandlers={[nativeScrollRef]}
            shouldCancelWhenOutside={true}
            onGestureEvent={gestureHandler}
        >
            <Animated.View
                style={[tw`absolute`, animatedStyle, { width: deviceWidth, backgroundColor: props.bgColor }]}
            >
                <NativeViewGestureHandler
                    ref={nativeScrollRef}
                    waitFor={panContainerRef}
                    simultaneousHandlers={[panContainerRef]}
                >
                    <ScrollView
                        bounces={false}
                        scrollEventThrottle={12}
                        onScroll={e => {
                            scrollOffset.value = e.nativeEvent.contentOffset.y;
                        }}
                    >
                        {props.children}
                    </ScrollView>
                </NativeViewGestureHandler>

            </Animated.View>
        </PanGestureHandler>
    )
}

export default DragAble