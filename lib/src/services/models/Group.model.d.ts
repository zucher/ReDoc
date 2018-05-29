import { OpenAPIExternalDocumentation, OpenAPITag } from '../../types';
import { ContentItemModel } from '../MenuBuilder';
import { IMenuItem, MenuItemGroupType } from '../MenuStore';
/**
 * Operations Group model ready to be used by components
 */
export declare class GroupModel implements IMenuItem {
    id: string;
    absoluteIdx?: number;
    name: string;
    description?: string;
    type: MenuItemGroupType;
    items: ContentItemModel[];
    parent?: GroupModel;
    externalDocs?: OpenAPIExternalDocumentation;
    active: boolean;
    depth: number;
    constructor(type: MenuItemGroupType, tagOrGroup: OpenAPITag, parent?: GroupModel);
    activate(): void;
    deactivate(): void;
}
