'use client';

import { useId } from 'react';
import cn from 'classnames/dedupe';

// Tryzub from the Lesser Coat of Arms of Ukraine (public domain, Wikimedia Commons)
const CENTER =
  'M5.985561 78.82382a104.079383 104.079383 0 0 0 14.053598 56.017033 55 55 0 0 1-13.218774 70.637179A20 20 0 0 0 0 212.5a20 20 0 0 0-6.820384-7.021968 55 55 0 0 1-13.218774-70.637179A104.079383 104.079383 0 0 0-5.98556 78.82382l-1.599642-45.260519A30.103986 30.103986 0 0 1 0 12.5a30.103986 30.103986 0 0 1 7.585202 21.063301zM5 193.624749a45 45 0 0 0 6.395675-53.75496A114.079383 114.079383 0 0 1 0 112.734179a114.079383 114.079383 0 0 1-11.395675 27.13561A45 45 0 0 0-5 193.624749V162.5H5z';
const SIDE =
  'M27.779818 75.17546A62.64982 62.64982 0 0 1 60 27.5v145H0l-5-10a22.5 22.5 0 0 1 17.560976-21.95122l14.634147-3.292683a10 10 0 1 0-4.427443-19.503751zm5.998315 34.353887a20 20 0 0 1-4.387889 37.482848l-14.634146 3.292683A12.5 12.5 0 0 0 5 162.5h45V48.265462a52.64982 52.64982 0 0 0-12.283879 28.037802zM42 122.5h10v10H42z';

// Outline width in viewBox units; drawn as (shape dilated by STROKE) minus shape
const STROKE = 0.75;

function Shape({ color, dilate }) {
  const strokeProps = dilate
    ? { stroke: color, strokeWidth: STROKE * 2, strokeLinejoin: 'round' }
    : {};
  return (
    <g fill={color} {...strokeProps}>
      <path d={CENTER} />
      <path d={SIDE} />
      <path d={SIDE} transform="scale(-1 1)" />
    </g>
  );
}

export default function Tryzub({ className }) {
  const maskId = `tryzub-${useId().replace(/[^\w-]/g, '')}`;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={cn('pointer-events-none aspect-[123/203] select-none', className)}
      viewBox="-61.5 11 123 203"
      preserveAspectRatio="xMinYMid meet"
    >
      <mask
        id={maskId}
        maskUnits="userSpaceOnUse"
        x="-62"
        y="10"
        width="124"
        height="205"
      >
        <Shape color="white" dilate />
        <Shape color="black" />
      </mask>
      <rect
        x="-62"
        y="10"
        width="124"
        height="205"
        fill="currentColor"
        mask={`url(#${maskId})`}
      />
    </svg>
  );
}
