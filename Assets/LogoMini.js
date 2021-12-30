import Svg, { G, Path, Mask, } from 'react-native-svg';
import React from 'react';

export default class SvgExample extends React.Component {
  render() {
    return (
    <Svg xmlns="http://www.w3.org/2000/svg" height='60' width='60' fill="none" viewBox="0 0 42 44">
      <Mask id="a" width="42" height="44" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha">
        <Path fill="#fff" d="M38.2513 16.7234c4.1919 2.2689 4.1919 8.2843 0 10.5532L8.85607 43.1873C4.85832 45.3511-2e-7 42.4564 0 37.9106L.0000014 6.08936C.00000158 1.54357 4.85832-1.35111 8.85607.812736L38.2513 16.7234Z"/>
      </Mask>
      <G mask="url(#a)">
        <Path fill="#E50914" d="M0 0h43.8375v43.7381H0z"/>
        <Path fill="#B81D24" d="M-3.94126 26.7619c5.11005 4.8533 8.78955 7.7143 22.86436 2.7859 19.2415-6.7375 22.5294-6.8001 23.1402-11.3597l4.8401 18.3438-51.74233 9.1187.89767-18.8887Z"/>
      </G>
      <Path fill="#F5F5F1" d="M16.676 29.147c-1.078 0-2.044-.175-2.898-.525-.854-.35-1.54-.868-2.058-1.554-.504-.686-.77-1.512-.798-2.478h3.822c.056.546.245.966.567 1.26.322.28.742.42 1.26.42.532 0 .952-.119 1.26-.357.308-.252.462-.595.462-1.029 0-.364-.126-.665-.378-.903-.238-.238-.539-.434-.903-.588-.35-.154-.854-.329-1.512-.525-.952-.294-1.729-.588-2.331-.882-.602-.294-1.12-.728-1.554-1.302-.434-.574-.651-1.323-.651-2.247 0-1.372.497-2.443 1.491-3.213.994-.784 2.289-1.176 3.885-1.176 1.624 0 2.933.392 3.927 1.176.994.77 1.526 1.848 1.596 3.234h-3.885c-.028-.476-.203-.847-.525-1.113-.322-.28-.735-.42-1.239-.42-.434 0-.784.119-1.05.357-.266.224-.399.553-.399.987 0 .476.224.847.672 1.113.448.266 1.148.553 2.1.861.952.322 1.722.63 2.31.924.602.294 1.12.721 1.554 1.281.434.56.651 1.281.651 2.163 0 .84-.217 1.603-.651 2.289-.42.686-1.036 1.232-1.848 1.638-.812.406-1.771.609-2.877.609Z"/>
    </Svg>
    );
  }
}