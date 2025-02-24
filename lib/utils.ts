import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import imagesLoaded from 'imagesloaded';

export const preloadImages = (selector: string = 'img'): Promise<void> => {
  return new Promise((resolve) => {
    const elements = document.querySelectorAll(selector);
    imagesLoaded(elements, { background: true }, () => resolve());
  });
};

export const calcWinsize = (): { width: number; height: number } => {
  return { width: window.innerWidth, height: window.innerHeight };
};

export const getScrollValues = (): { x: number; y: number } => {
  const supportPageOffset = window.pageXOffset !== undefined;
  const isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
  const x = supportPageOffset
    ? window.pageXOffset
    : isCSS1Compat
      ? document.documentElement.scrollLeft
      : document.body.scrollLeft;
  const y = supportPageOffset
    ? window.pageYOffset
    : isCSS1Compat
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
  return { x, y };
};

export const wrapLines = (
  elems: HTMLElement[],
  wrapType: string,
  wrapClass: string
): void => {
  elems.forEach((elem) => {
    const wrapEl = document.createElement(wrapType);
    wrapEl.className = wrapClass; // Set the class name
    if (elem.parentNode) {
      // Append the wrapper after the current element and then append the element into it.
      elem.parentNode.appendChild(wrapEl);
      wrapEl.appendChild(elem);
    }
  });
};

export interface AdjustedBoundingRect {
  x: number;
  y: number;
  width: number;
  height: number;
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export const adjustedBoundingRect = (
  el: HTMLElement
): DOMRect | AdjustedBoundingRect => {
  const rect = el.getBoundingClientRect();
  const style = getComputedStyle(el);
  const tx = style.transform;

  if (tx && tx !== 'none') {
    let sx: number, sy: number, dx: number, dy: number;
    if (tx.startsWith('matrix3d(')) {
      const ta = tx.slice(9, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[5];
      dx = +ta[12];
      dy = +ta[13];
    } else if (tx.startsWith('matrix(')) {
      const ta = tx.slice(7, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[3];
      dx = +ta[4];
      dy = +ta[5];
    } else {
      return rect;
    }
    const to = style.transformOrigin;
    const originValues = to.split(' ');
    const originX = parseFloat(originValues[0]);
    const originY = parseFloat(originValues[1] || '0');
    const x = rect.x - dx - (1 - sx) * originX;
    const y = rect.y - dy - (1 - sy) * originY;
    const w = sx ? rect.width / sx : el.offsetWidth;
    const h = sy ? rect.height / sy : el.offsetHeight;
    return {
      x,
      y,
      width: w,
      height: h,
      top: y,
      right: x + w,
      bottom: y + h,
      left: x,
    };
  } else {
    return rect;
  }
};
