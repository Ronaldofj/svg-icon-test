export const IconSVG = `
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
        <use xlinkHref={\`/static/icons/symbol-defs.svg#icon-\${icon}\`} />
      </svg>
    );
  }
`;

export const ImportIconSVG = `
  <IconSVG icon="like" width={100} height={100} fill=""></IconSVG>
  <IconSVG icon="like" width={80} height={80} fill=""></IconSVG>
  <IconSVG icon="like" width={60} height={60} fill=""></IconSVG>
  <IconSVG icon="like" width={40} height={40} fill=""></IconSVG>
  <IconSVG icon="like" width={20} height={20} fill=""></IconSVG>  
`;
