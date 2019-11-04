import { SET_LIGHT_STATE } from "../actions/actionTypes";

const filtersReducerDefaultState = {
  sampleState: {
    1: {
      state: {
        on: false,
        bri: 1,
        hue: 33761,
        sat: 254,
        effect: "none",
        xy: [0.3171, 0.3366],
        ct: 159,
        alert: "none",
        colormode: "xy",
        mode: "homeautomation",
        reachable: true
      },
      swupdate: {
        state: "noupdates",
        lastinstall: "2018-01-02T19:24:20"
      },
      type: "Extended color light",
      name: "Hallway Light",
      modelid: "LCT007",
      manufacturername: "Philips",
      productname: "Hue color lamp",
      capabilities: {
        certified: true,
        control: {
          mindimlevel: 5000,
          maxlumen: 600,
          colorgamuttype: "B",
          colorgamut: [[0.675, 0.322], [0.409, 0.518], [0.167, 0.04]],
          ct: {
            min: 153,
            max: 500
          }
        },
        streaming: {
          renderer: true,
          proxy: false
        }
      },
      config: {
        archetype: "sultanbulb",
        function: "mixed",
        direction: "omnidirectional"
      },
      uniqueid: "00:17:88:01:00:bd:c7:b9-0b",
      swversion: "5.105.0.21169"
    },
    2: {
      state: {
        on: false,
        bri: 1,
        hue: 33761,
        sat: 254,
        effect: "none",
        xy: [0.3171, 0.3366],
        ct: 159,
        alert: "none",
        colormode: "xy",
        mode: "homeautomation",
        reachable: false
      },
      swupdate: {
        state: "noupdates",
        lastinstall: "2018-01-02T19:24:20"
      },
      type: "Extended color light",
      name: "Office Door Light",
      modelid: "LCT007",
      manufacturername: "Philips",
      productname: "Hue color lamp",
      capabilities: {
        certified: true,
        control: {
          mindimlevel: 5000,
          maxlumen: 600,
          colorgamuttype: "B",
          colorgamut: [[0.675, 0.322], [0.409, 0.518], [0.167, 0.04]],
          ct: {
            min: 153,
            max: 500
          }
        },
        streaming: {
          renderer: true,
          proxy: false
        }
      },
      config: {
        archetype: "sultanbulb",
        function: "mixed",
        direction: "omnidirectional"
      },
      uniqueid: "00:17:88:01:00:bd:c7:b9-0b",
      swversion: "5.105.0.21169"
    },
    3: {
      state: {
        on: false,
        bri: 1,
        hue: 33761,
        sat: 254,
        effect: "none",
        xy: [0.3171, 0.3366],
        ct: 159,
        alert: "none",
        colormode: "xy",
        mode: "homeautomation",
        reachable: true
      },
      name: "Office Light"
    },
    4: {
      state: {
        on: false,
        bri: 1,
        hue: 33761,
        sat: 254,
        effect: "none",
        xy: [0.3171, 0.3366],
        ct: 159,
        alert: "none",
        colormode: "xy",
        mode: "homeautomation",
        reachable: true
      },
      name: "Living Room Light"
    },
    5: {
      state: {
        on: false,
        bri: 1,
        hue: 33761,
        sat: 254,
        effect: "none",
        xy: [0.3171, 0.3366],
        ct: 159,
        alert: "none",
        colormode: "xy",
        mode: "homeautomation",
        reachable: true
      },
      name: "Bedroom Light"
    }
  }
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SET_LIGHT_STATE:
      return {
        ...state,
        sampleState: {
          ...state.sampleState,
          [action.light]: {
            ...state.sampleState[action.light],
            state: {
              ...state.sampleState[action.light].state,
              on: !state.sampleState[action.light].state.on
            }
          }
        }
      };
    default:
      return state;
  }
};
