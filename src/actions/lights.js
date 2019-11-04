import { SET_LIGHT_STATE, UPDATE_LIGHT_STATE } from "./actionTypes";

export const setLightState = (light = 1) => ({
  type: SET_LIGHT_STATE,
  light
});

export const updateLightState = (light = 1, updates) => ({
  type: UPDATE_LIGHT_STATE,
  light,
  updates
});
