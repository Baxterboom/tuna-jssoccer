import { h } from "preact";

export interface IScalableTextProps {
    text: string;
}

export function ScalableText(props: IScalableTextProps) {
    return (<svg viewBox="0 0 56 18" style="width: 100%;"><text x="0" y="15">{props.text}</text></svg>);
}

export function OutsideClickHander(element: () => Node, callback: () => void) {
    const handler = (event: MouseEvent) => {
        const e = element();
        const t = event.target as Node;
        if (e && e.contains(t)) return;
        console.log(1);
        cancel();
    }

    const cancel = () => {
        document.removeEventListener('click', handler);
        callback();
    }

    setTimeout(() => document.addEventListener('click', handler));

    return cancel;
}