import type { ReactNode } from "react";

export type ButtonProps = {
    children?: ReactNode;
    className?: string;
}

export type InputProps = {
    type: string;
    placeholder: string;
    id: string;
}

export type LabelProps = {
    children: ReactNode;
    htmlfor: string;
}

export type InputFormProps = {
    label: string;
    id: string;
    type: string;
    placeholder: string;
}