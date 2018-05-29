import * as React from 'react';
import { ResolvedThemeInterface, StyledComponentClass } from '../../styled-components';
import { AppStore } from '../../services';
export interface MDComponent {
    component: React.ComponentClass;
    propsSelector: (store?: AppStore) => any;
    attrs?: object;
}
export interface MarkdownProps {
    source: string;
    dense?: boolean;
    inline?: boolean;
    className?: string;
    raw?: boolean;
    components?: Dict<MDComponent>;
    sanitize?: boolean;
    store?: AppStore;
}
export declare const Markdown: StyledComponentClass<MarkdownProps, ResolvedThemeInterface, Pick<MarkdownProps, "className" | "source" | "dense" | "inline" | "raw" | "components" | "sanitize" | "store"> & {
    theme?: ResolvedThemeInterface | undefined;
}>;
