const toString = Object.prototype.toString;
import { isValidElement } from 'react';

/**
 * @description: 判斷值是否為某個類型
 */
export function is(val, type) {
    return toString.call(val) === `[object ${type}]`;
}

/**
 * @description:  是否為函數
 */
export function isFunction(val) {
    return is(val, 'Function');
}

/**
 * @description: 是否已定義
 */
export const isDef = (val) => {
    return typeof val !== 'undefined';
};

export const isUnDef = (val) => {
    return !isDef(val);
};
/**
 * @description: 是否為物件
 */
export const isObject = (val) => {
    return val !== null && is(val, 'Object');
};

/**
 * @description:  是否為時間
 */
export function isDate(val) {
    return is(val, 'Date');
}

/**
 * @description:  是否為數字
 */
export function isNumber(val) {
    return is(val, 'Number');
}

/**
 * @description:  是否為AsyncFunction
 */
export function isAsyncFunction(val) {
    return is(val, 'AsyncFunction');
}

/**
 * @description:  是否為promise
 */
export function isPromise(val) {
    return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

/**
 * @description:  是否為字串
 */
export function isString(val) {
    return is(val, 'String');
}

/**
 * @description:  是否為boolean
 */
export function isBoolean(val) {
    return is(val, 'Boolean');
}

/**
 * @description:  是否為認列
 */
export function isArray(val) {
    return val && Array.isArray(val);
}

/**
 * @description: 是否客戶端
 */
export const isClient = () => {
    return typeof window !== 'undefined';
};

/**
 * @description: 是否為瀏覽器
 */
export const isWindow = (val) => {
    return typeof window !== 'undefined' && is(val, 'Window');
};

// export const isElement = (val) => {
//     return isObject(val) && !!val.tagName;
// };

export const isServer = typeof window === 'undefined';

// 是否為圖片截點
export function isImageDom(o) {
    return o && ['IMAGE', 'IMG'].includes(o.tagName);
}

export function isNull(val) {
    return val === null;
}

export function isNullAndUnDef(val) {
    return isUnDef(val) && isNull(val);
}

export function isNullOrUnDef(val) {
    return isUnDef(val) || isNull(val);
}

// 判斷 react component

export function isClassComponent(component) {
    return typeof component === 'function' && !!component.prototype.isReactComponent;
}

export function isFunctionComponent(component) {
    return typeof component === 'function' && String(component).includes('return React.createElement');
}

export function isReactComponent(component) {
    return isClassComponent(component) || isFunctionComponent(component);
}

export function isElement(element) {
    return isValidElement(element);
}

export function isDOMTypeElement(element) {
    return isElement(element) && typeof element.type === 'string';
}

export function isCompositeTypeElement(element) {
    return isElement(element) && typeof element.type === 'function';
}
