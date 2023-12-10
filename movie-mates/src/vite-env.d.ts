/// <reference types="vite/client" />
// src/vite-env.d.ts or src/declarations.d.ts
declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }  
