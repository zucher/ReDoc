import { ClassAttributes, HTMLAttributes } from 'react';
import { ResolvedThemeInterface, StyledComponentClass } from '../../styled-components';
import { ResponseTitleProps } from './ResponseTitle';
export declare const StyledResponseTitle: StyledComponentClass<ResponseTitleProps, ResolvedThemeInterface, Pick<ResponseTitleProps, "code" | "title" | "type" | "empty" | "opened" | "className" | "onClick"> & {
    theme?: ResolvedThemeInterface | undefined;
}>;
export declare const ResponseDetailsWrap: StyledComponentClass<ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>, ResolvedThemeInterface, ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>>;
export declare const HeadersCaption: StyledComponentClass<ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>, ResolvedThemeInterface, ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>>;
