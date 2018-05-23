/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface AnimatedBackgroundDipOnScroll {

    }
  }

  interface HTMLAnimatedBackgroundDipOnScrollElement extends StencilComponents.AnimatedBackgroundDipOnScroll, HTMLStencilElement {}

  var HTMLAnimatedBackgroundDipOnScrollElement: {
    prototype: HTMLAnimatedBackgroundDipOnScrollElement;
    new (): HTMLAnimatedBackgroundDipOnScrollElement;
  };
  interface HTMLElementTagNameMap {
    'animated-background-dip-on-scroll': HTMLAnimatedBackgroundDipOnScrollElement;
  }
  interface ElementTagNameMap {
    'animated-background-dip-on-scroll': HTMLAnimatedBackgroundDipOnScrollElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'animated-background-dip-on-scroll': JSXElements.AnimatedBackgroundDipOnScrollAttributes;
    }
  }
  namespace JSXElements {
    export interface AnimatedBackgroundDipOnScrollAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
