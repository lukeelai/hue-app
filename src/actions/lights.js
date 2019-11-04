import { SET_LIGHT_STATE } from "./actionTypes";

export const setLightState = (light = 1) => ({
  type: SET_LIGHT_STATE,
  light
});
