import { Dimensions } from "react-native";


function makeSlideOutTranslation(translationType, fromValue) {
  return {
    from: {
      [translationType]: 0,
    },
    to: {
      [translationType]: fromValue,
    },
  };
}

export const slideOutDown = makeSlideOutTranslation('translateY', Dimensions.get("window").height * 1.3);

export const slideOutUp = makeSlideOutTranslation('translateY', -Dimensions.get("window").height * 1.3);

export const slideOutLeft = makeSlideOutTranslation('translateX', -Dimensions.get("window").width * 1.3);

export const slideOutRight = makeSlideOutTranslation('translateX', Dimensions.get("window").width * 1.3);
