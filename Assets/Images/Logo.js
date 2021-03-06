import Svg, { G, Path, Mask, } from 'react-native-svg';
import React from 'react';

export default class SvgExample extends React.Component {
  render() {
    return (
       <Svg xmlns="http://www.w3.org/2000/svg" height='90' width='90'  viewBox="0 0 160 172" >
        <Mask id="a" width="158" height="168" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha">
          <Path fill="#fff" fillOpacity={1} d="M145.7 63.9a23 23 0 0 1 0 40.2L33.7 165A22.9 22.9 0 0 1 0 144.7V23.3A22.9 22.9 0 0 1 33.7 3l112 60.8Z"/>
        </Mask>
        <G mask="url(#a)">
          <Path fill="#E50914" d="M0 0h167v167H0z" />
          <Path fill="#B81D24"d="M-15 102.2c19.5 18.5 33.5 29.4 87 10.6 73.4-25.7 86-26 88.2-43.4l18.5 70-197.1 34.9 3.4-72.1Z"/>
        </G>
          <Path fill="#fff" d="M32.3 154.7a12 12 0 0 1-4.4 1.4 6.7 6.7 0 0 1-7-3.5l5.4-2.8a3 3 0 0 0 1.7 1.4 3 3 0 0 0 2-.4c.8-.4 1.3-.9 1.5-1.4a2 2 0 0 0 0-1.8c-.3-.5-.7-.8-1.3-1-.5-.1-1-.2-1.7-.1l-2.4.4a26 26 0 0 1-4 .5c-1 0-2-.2-3-.7-1-.5-2-1.3-2.6-2.6a6 6 0 0 1-.3-5.6 9.6 9.6 0 0 1 4.5-4.5 9.7 9.7 0 0 1 6.3-1.2c2 .3 3.5 1.4 4.6 3.3l-5.4 2.8c-.3-.6-.9-1-1.5-1.1-.7-.2-1.3 0-2 .3-.6.3-1 .8-1.2 1.3-.2.5-.2 1 .2 1.6.3.7.9 1 1.7 1.1.8 0 2 0 3.6-.4 1.5-.2 2.8-.4 3.8-.4s2.1.2 3.1.7c1 .4 1.9 1.2 2.5 2.5.7 1.1 1 2.4.8 3.6a7 7 0 0 1-1.3 3.7 10 10 0 0 1-3.6 3Zm6.7-24.9 2.2 4.2 6.6-3.6 2 3.9-6.6 3.5 2.4 4.5 7.6-4 2 4-12.5 6.6L32 128.5l12.5-6.7 2.1 4-7.5 4Zm27 7a12 12 0 0 1-4.4 1.4 6.7 6.7 0 0 1-7-3.5L60 132a3 3 0 0 0 1.7 1.4c.6.1 1.3 0 2-.4.8-.4 1.3-.9 1.5-1.4a2 2 0 0 0 0-1.8c-.4-.5-.7-.8-1.3-1-.5-.1-1-.2-1.7-.1l-2.4.4a26 26 0 0 1-4 .5c-1 0-2-.2-3-.7-1-.5-2-1.3-2.6-2.6a6 6 0 0 1-.3-5.6 9.6 9.6 0 0 1 4.5-4.5 9.7 9.7 0 0 1 6.3-1.2c2 .3 3.5 1.4 4.6 3.3L60 121c-.4-.6-.9-1-1.5-1.1-.7-.2-1.3 0-2 .3-.6.3-1 .7-1.2 1.3-.2.5-.2 1 .1 1.6.4.7 1 1 1.8 1 .8.1 2 0 3.5-.3 1.6-.2 2.9-.4 4-.4 1 0 2 .2 3 .6 1 .5 1.9 1.3 2.5 2.6.7 1.1 1 2.3.8 3.6a7 7 0 0 1-1.3 3.7 10 10 0 0 1-3.6 3Zm18-9.5a12 12 0 0 1-4.5 1.4c-1.4.1-2.7 0-4-.6a6.7 6.7 0 0 1-2.9-2.9l5.3-2.8a3 3 0 0 0 1.7 1.3 3 3 0 0 0 2-.3c.8-.4 1.3-.9 1.6-1.5a2 2 0 0 0-.2-1.7c-.2-.5-.6-.9-1.1-1-.6-.1-1.1-.2-1.7-.1l-2.5.3c-1.6.3-2.9.5-3.9.5s-2.1-.1-3.1-.6-1.9-1.4-2.6-2.7a6 6 0 0 1-.3-5.5 9.6 9.6 0 0 1 4.5-4.5 9.7 9.7 0 0 1 6.4-1.3c1.9.4 3.4 1.5 4.6 3.3l-5.4 2.9c-.4-.6-1-1-1.6-1.2-.6-.1-1.3 0-2 .4-.6.3-1 .7-1.2 1.2-.2.5-.2 1.1.2 1.7.3.7.9 1 1.7 1 .8 0 2 0 3.6-.3 1.5-.3 2.8-.4 3.9-.4 1 0 2 .1 3 .6s2 1.3 2.6 2.5c.6 1.2.8 2.4.7 3.7a7 7 0 0 1-1.3 3.6 10 10 0 0 1-3.6 3Zm4.5-29 10.8 20.5-5 2.7L83.6 101l5-2.6Zm24.2 13.7a11.5 11.5 0 0 1-16.1-4.9c-1-2-1.5-4-1.4-6.2 0-2 .7-4 1.8-5.7 1.1-1.8 2.7-3.1 4.6-4.2 2-1 4-1.5 6-1.4 2 0 4 .6 5.8 1.7 1.7 1 3.2 2.6 4.2 4.6 1 2 1.6 4 1.5 6.2 0 2-.7 4-1.8 5.7a12 12 0 0 1-4.6 4.2Zm-2.4-4.6a5.6 5.6 0 0 0 3-3.7 7 7 0 0 0-.8-5c-1-1.9-2.2-3-3.7-3.6a5.6 5.6 0 0 0-4.8.4 5.8 5.8 0 0 0-3.1 3.8 7 7 0 0 0 .8 5c1 1.9 2.3 3 3.8 3.6 1.6.6 3.2.4 4.8-.5ZM144.2 95l-5 2.7-15-8.2 6.6 12.6-5 2.6L115 84.3l5-2.7 15 8.3-6.7-12.7 5-2.6L144.2 95Z"/>
        </Svg>
    );
  }
}