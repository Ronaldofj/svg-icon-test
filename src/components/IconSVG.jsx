import React from 'react';

export default function IconSVG({ 
  icon,
  width,
  height,
  fill
}) {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
    >
      <use xlinkHref={`/static/icons/symbol-defs.svg#icon-${icon}`} />
    </svg>
  );
}
