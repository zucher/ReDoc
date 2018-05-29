import * as PropTypes from 'prop-types';
import * as React from 'react';
import { RedocRawOptions } from '../services/RedocNormalizedOptions';
export interface RedocStandaloneProps {
    spec?: object;
    specUrl?: string;
    options?: RedocRawOptions;
}
export declare class RedocStandalone extends React.Component<RedocStandaloneProps> {
    static propTypes: {
        spec: (props: any, _: any, componentName: any) => Error | null;
        specUrl: (props: any, _: any, componentName: any) => Error | null;
        options: PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
