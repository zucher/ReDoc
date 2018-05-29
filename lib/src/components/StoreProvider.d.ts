import { Component } from 'react';
import { AppStore } from '../services/';
import { RedocRawOptions } from '../services/RedocNormalizedOptions';
export interface StoreProviderProps {
    specUrl?: string;
    spec?: object;
    store?: AppStore;
    options?: RedocRawOptions;
    children: (props: {
        loading: boolean;
        store?: AppStore;
    }) => any;
}
export interface StoreProviderState {
    error?: Error;
    loading: boolean;
    store?: AppStore;
}
export declare class StoreProvider extends Component<StoreProviderProps, StoreProviderState> {
    store: AppStore;
    private _resolvedSpec;
    constructor(props: StoreProviderProps);
    componentDidMount(): void;
    load(): Promise<void>;
    updateStore(resolvedSpec: any, specUrl: any, options: any): void;
    componentWillReceiveProps(nextProps: any): void;
    setError(e?: Error): void;
    render(): any;
}
