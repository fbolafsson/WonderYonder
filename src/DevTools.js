import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
// import SliderMonitor from 'redux-slider-monitor'

export default createDevTools(
  <DockMonitor
    changePositionKey="ctrl-q"
    toggleVisibilityKey="ctrl-h" >
    <LogMonitor />
  </DockMonitor>
);
