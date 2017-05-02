/**
 * Created by guillaume on 8/16/16.
 */

// Icon

import React from 'react';
import PropTypes from 'prop-types';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const Morpheo = ({width, height, style, color}) =>
    <svg
        width={width}
        height={height}
        viewBox="615 1046 95 94"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <desc>Created with Sketch.</desc>
        <defs>
            <linearGradient x1="52.0941413%" y1="9.34631553%" x2="52.0941435%" y2="103.257031%" id="linearGradient-1">
                <stop stopColor="#5656ED" offset="0%" />
                <stop stopColor="#B238CE" offset="100%" />
            </linearGradient>
        </defs>
        <g
            id="Group-6-Copy-16" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"
            transform="translate(620.000000, 1050.000000)" opacity="0.323143116"
        >
            <polygon
                id="Path-3" stroke="#AD96C1" strokeWidth="2"
                points="1.64461635 69.8717613 1.64461635 10.8289836 23.5472626 0.788207377 43.5799905 12.6005533 64.9637378 1.49396379 84.0339483 12.6166849 84.0339483 69.8234222 63.4514026 81.9408682 63.5092074 45.0254926 43.6351067 34.2280916 22.9880347 45.2594004 21.8722674 81.556399"
            />
            <path d="M20.8218307,44.9585591 L0,35" id="Path-4" stroke="#AD96C1" strokeWidth="2" />
            <path d="M21.8218307,63.9585591 L1,54" id="Path-4-Copy" stroke="#AD96C1" strokeWidth="2" />
            <path d="M65,43.9961995 L85.9065215,34" id="Path-5" stroke="#AD96C1" strokeWidth="2" />
            <path d="M63,66 L84.9065215,53" id="Path-5-Copy-2" stroke="#AD96C1" strokeWidth="2" />
            <polyline
                id="Path-6" stroke="#AD96C1" strokeWidth="2"
                points="22.7796685 48.2352031 22.7514383 21.893685 43.7050102 12.0225052 63.9447599 22.7486585"
            />
            <path d="M44,37.7080059 L44,12.1663451" id="Path-7" stroke="#AD96C1" strokeWidth="2" />
            <path
                d="M64.1947994,22.4058625 L63.8022644,48.4301263" id="Path-8" stroke="#AD96C1"
                strokeWidth="2"
            />
            <path
                d="M1.88121278,11.1245142 L22.0766007,22.5429809" id="Path-9" stroke="#AD96C1"
                strokeWidth="2"
            />
            <path
                d="M63.8466262,22.6827879 L84.5232728,12.0964416" id="Path-10" stroke="#AD96C1"
                strokeWidth="2"
            />
        </g>
        <path
            d="M643.5,1081 C639.357864,1081 636,1077.64214 636,1073.5 C636,1069.35786 639.357864,1066 643.5,1066 C647.642136,1066 651,1069.35786 651,1073.5 C651,1077.64214 647.642136,1081 643.5,1081 Z M643,1102 C639.134007,1102 636,1098.86599 636,1095 C636,1091.13401 639.134007,1088 643,1088 C646.865993,1088 650,1091.13401 650,1095 C650,1098.86599 646.865993,1102 643,1102 Z M664,1091 C660.686292,1091 658,1088.31371 658,1085 C658,1081.68629 660.686292,1079 664,1079 C667.313708,1079 670,1081.68629 670,1085 C670,1088.31371 667.313708,1091 664,1091 Z M683.5,1122 C679.910149,1122 677,1119.08985 677,1115.5 C677,1111.91015 679.910149,1109 683.5,1109 C687.089851,1109 690,1111.91015 690,1115.5 C690,1119.08985 687.089851,1122 683.5,1122 Z M683,1140 C679.686292,1140 677,1137.31371 677,1134 C677,1130.68629 679.686292,1128 683,1128 C686.313708,1128 689,1130.68629 689,1134 C689,1137.31371 686.313708,1140 683,1140 Z M703.595988,1108.99916 C700.558885,1109.05218 698.053851,1106.63309 698.000838,1103.59599 C697.947825,1100.55888 700.366908,1098.05385 703.404012,1098.00084 C706.441115,1097.94782 708.946149,1100.36691 708.999162,1103.40401 C709.052175,1106.44112 706.633092,1108.94615 703.595988,1108.99916 Z M703,1126 C700.238576,1126 698,1123.76142 698,1121 C698,1118.23858 700.238576,1116 703,1116 C705.761424,1116 708,1118.23858 708,1121 C708,1123.76142 705.761424,1126 703,1126 Z M704,1090 C700.686292,1090 698,1087.31371 698,1084 C698,1080.68629 700.686292,1078 704,1078 C707.313708,1078 710,1080.68629 710,1084 C710,1087.31371 707.313708,1090 704,1090 Z M702,1069 C698.686292,1069 696,1066.31371 696,1063 C696,1059.68629 698.686292,1057 702,1057 C705.313708,1057 708,1059.68629 708,1063 C708,1066.31371 705.313708,1069 702,1069 Z M623,1068 C619.686292,1068 617,1065.31371 617,1062 C617,1058.68629 619.686292,1056 623,1056 C626.313708,1056 629,1058.68629 629,1062 C629,1065.31371 626.313708,1068 623,1068 Z M621,1090 C617.686292,1090 615,1087.31371 615,1084 C615,1080.68629 617.686292,1078 621,1078 C624.313708,1078 627,1080.68629 627,1084 C627,1087.31371 624.313708,1090 621,1090 Z M621.595988,1108.99916 C618.558885,1109.05218 616.053851,1106.63309 616.000838,1103.59599 C615.947825,1100.55888 618.366908,1098.05385 621.404012,1098.00084 C624.441115,1097.94782 626.946149,1100.36691 626.999162,1103.40401 C627.052175,1106.44112 624.633092,1108.94615 621.595988,1108.99916 Z M621,1126 C618.238576,1126 616,1123.76142 616,1121 C616,1118.23858 618.238576,1116 621,1116 C623.761424,1116 626,1118.23858 626,1121 C626,1123.76142 623.761424,1126 621,1126 Z M642.5,1121 C638.910149,1121 636,1118.08985 636,1114.5 C636,1110.91015 638.910149,1108 642.5,1108 C646.089851,1108 649,1110.91015 649,1114.5 C649,1118.08985 646.089851,1121 642.5,1121 Z M642,1140 C638.686292,1140 636,1137.31371 636,1134 C636,1130.68629 638.686292,1128 642,1128 C645.313708,1128 648,1130.68629 648,1134 C648,1137.31371 645.313708,1140 642,1140 Z M643,1056 C640.238576,1056 638,1053.76142 638,1051 C638,1048.23858 640.238576,1046 643,1046 C645.761424,1046 648,1048.23858 648,1051 C648,1053.76142 645.761424,1056 643,1056 Z M664,1067 C660.686292,1067 658,1064.31371 658,1061 C658,1057.68629 660.686292,1055 664,1055 C667.313708,1055 670,1057.68629 670,1061 C670,1064.31371 667.313708,1067 664,1067 Z M684.5,1081 C680.357864,1081 677,1077.64214 677,1073.5 C677,1069.35786 680.357864,1066 684.5,1066 C688.642136,1066 692,1069.35786 692,1073.5 C692,1077.64214 688.642136,1081 684.5,1081 Z M684,1102 C680.134007,1102 677,1098.86599 677,1095 C677,1091.13401 680.134007,1088 684,1088 C687.865993,1088 691,1091.13401 691,1095 C691,1098.86599 687.865993,1102 684,1102 Z M684,1056 C681.238576,1056 679,1053.76142 679,1051 C679,1048.23858 681.238576,1046 684,1046 C686.761424,1046 689,1048.23858 689,1051 C689,1053.76142 686.761424,1056 684,1056 Z"
            id="Combined-Shape-Copy-43" stroke="none" fill="url(#linearGradient-1)" fillRule="evenodd"
        />
    </svg>;

Morpheo.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.shape({}),
    color: PropTypes.string,
};

Morpheo.defaultProps = {
    width: 95,
    height: 94,
    style: {},
    color: '#1883FF',
};

export default onlyUpdateForKeys(['width', 'height', 'style'])(Morpheo);
