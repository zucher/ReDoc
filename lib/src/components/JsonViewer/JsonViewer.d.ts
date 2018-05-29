import { ResolvedThemeInterface, StyledComponentClass } from '../../styled-components';
export interface JsonProps {
    data: any;
    className?: string;
}
export declare const JsonViewer: StyledComponentClass<JsonProps, ResolvedThemeInterface, Pick<JsonProps, "className" | "data"> & {
    theme?: ResolvedThemeInterface | undefined;
}>;
