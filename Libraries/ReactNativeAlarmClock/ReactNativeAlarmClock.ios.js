/**
 * @providesModule ReactNativeAlarmClock
 * @flow
 */
'use strict';

var NativeReactNativeAlarmClock = require('NativeModules').ReactNativeAlarmClock;

/**
 * High-level docs for the ReactNativeAlarmClock iOS API can be written here.
 */

var ReactNativeAlarmClock = {
  test: function() {
    NativeReactNativeAlarmClock.test();
  }
};

module.exports = ReactNativeAlarmClock;
