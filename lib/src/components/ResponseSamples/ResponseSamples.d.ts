import * as React from 'react';
import { MediaContentModel, OperationModel } from '../../services/models';
export interface ResponseSampleProps {
    content: MediaContentModel;
}
export interface ResponseSamplesProps {
    operation: OperationModel;
}
export declare class ResponseSamples extends React.Component<ResponseSamplesProps> {
    operation: OperationModel;
    visited: Set<any>;
    render(): JSX.Element | null;
}
