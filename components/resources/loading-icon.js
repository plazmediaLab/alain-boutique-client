import React from 'react';

export default function LoadingIcon({
  w = '20',
  h = '20',
  fill = '#635BFF',
  alpha = '0.3',
  speed = '.8s',
  classN = ''
}) {
  return (
    <>
      <svg
        id="e5ddfqfwsd6g1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 19.500000 19.500000"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        width={w}
        height={h}
        className={classN}>
        <g id="e3qmh9rzshsw2">
          <g id="e3qmh9rzshsw3">
            <path
              id="e3qmh9rzshsw4"
              d="M9.750000,0C4.365224,0,0,4.365224,0,9.750000C0,15.134776,4.365224,19.500000,9.750000,19.500000C15.134776,19.500000,19.500000,15.134776,19.500000,9.750000C19.494488,4.367508,15.132492,0.005512,9.750000,0ZM9.750000,17C5.745936,17,2.500000,13.754064,2.500000,9.750000C2.500000,5.745936,5.745936,2.500000,9.750000,2.500000C13.754064,2.500000,17,5.745936,17,9.750000C16.994492,13.751781,13.751781,16.994492,9.750000,17Z"
              opacity={alpha}
              fill={fill}
              stroke="none"
              strokeWidth="1"
            />
            <g id="e3qmh9rzshsw5_tr">
              <path
                id="e3qmh9rzshsw5"
                d="M9.750000,19.500000C5.164961,19.500000,1.199410,16.305341,0.223442,11.825378C-0.752526,7.345415,1.524816,2.790730,5.694368,0.883527C9.863919,-1.023677,14.798976,0.231968,17.550000,3.900000C17.964214,4.452285,17.852285,5.235786,17.300000,5.650000C16.747715,6.064214,15.964214,5.952285,15.550000,5.400000C14.189221,3.564353,12.034985,2.487234,9.750000,2.500000C5.745936,2.500000,2.500000,5.745936,2.500000,9.750000C2.500000,13.754064,5.745936,17,9.750000,17C12.034985,17.012766,14.189221,15.935647,15.550000,14.100000C15.964214,13.547715,16.747715,13.435786,17.300000,13.850000C17.852285,14.264214,17.964214,15.047715,17.550000,15.600000C15.715994,18.063867,12.821497,19.511116,9.750000,19.500000Z"
                fill={fill}
                stroke="none"
                strokeWidth="1">
                {/* <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 9.750866 9.749820"
                  to="360 9.750866 9.749820"
                  dur={speed}
                  repeatCount="indefinite"
                /> */}
              </path>
            </g>
          </g>
        </g>
      </svg>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        svg {
          animation-name: spin;
          animation-duration: ${speed};
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      `}</style>
    </>
  );
}
