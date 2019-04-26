import { h } from "preact";

export interface IScalableTextProps {
    text: string;
}

export function ScalableText(props: IScalableTextProps) {
    return (<svg viewBox="0 0 56 18" style="width: 100%;"><text x="0" y="15">{props.text}</text></svg>);
}
