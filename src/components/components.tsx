import { h } from "preact";

export interface IScalableTextProps {
    text: string;
}

export function ScalableText(props: IScalableTextProps) {
    return (<svg viewBox="0 0 56 18" style="width: 100%;"><text x="0" y="15">{props.text}</text></svg>);
}

export function OutsideClickHander(element: () => Element, callback: () => void) {
    const handler = (event: MouseEvent) => {
        const e = element();
        const t = event.target as Element;
        if (e && e.contains(t)) return;
        cancel();
    }

    const cancel = () => {
        document.removeEventListener('click', handler);
        callback();
    }

    setTimeout(() => document.addEventListener('click', handler));

    return cancel;
}

export function seedEncode(value: string) {
    return btoa(value);
}

export function seedDecode(value: string) {
    return atob(value);
}

export function ForEach<T = any>(obj: T, action: (value: any, key: string) => boolean | any) {
    for (let prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop) && action(obj[prop], prop) === true) break;
    }
}

export function Select<T = any>(obj: any, selector: (value: any, key: string) => T) {
    const result: T[] = [];
    for (let prop in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, prop)) continue;
        result.push(selector(obj[prop], prop));
    }
    return result;
}