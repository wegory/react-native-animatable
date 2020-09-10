import { Dimensions } from "react-native";

function makeSlideInTranslation(translationType, fromValue) {
  return {
    from: {
      [translationType]: fromValue,
    },
    to: {
      [translationType]: 0,
    },
  };
}

export const slideInDown = makeSlideInTranslation('translateY', -100);

export const slideInUp = makeSlideInTranslation('translateY', 100);

export const slideInLeft = makeSlideInTranslation('translateX', -Dimensions.get("window").width * 1.3);

export const slideInRight = makeSlideInTranslation('translateX', Dimensions.get("window").width * 1.3);
