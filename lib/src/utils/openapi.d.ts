import { OpenAPIParser } from '../services/OpenAPIParser';
import { OpenAPIMediaType, OpenAPIOperation, OpenAPIParameter, OpenAPISchema, Referenced } from '../types';
export declare function getStatusCodeType(statusCode: string | number, defaultAsError?: boolean): string;
export declare function isOperationName(key: string): boolean;
export declare function getOperationSummary(operation: OpenAPIOperation): string;
export declare function detectType(schema: OpenAPISchema): string;
export declare function isPrimitiveType(schema: OpenAPISchema): boolean;
export declare function isJsonLike(contentType: string): boolean;
export declare function langFromMime(contentType: string): string;
export declare function isNamedDefinition(pointer?: string): boolean;
export declare function humanizeConstraints(schema: OpenAPISchema): string[];
export declare function sortByRequired(fields: Array<{
    required: boolean;
    name: string;
}>, order?: string[]): void;
export declare function mergeParams(parser: OpenAPIParser, pathParams?: Array<Referenced<OpenAPIParameter>>, operationParams?: Array<Referenced<OpenAPIParameter>>): Array<Referenced<OpenAPIParameter>>;
export declare function mergeSimilarMediaTypes(types: Dict<OpenAPIMediaType>): Dict<OpenAPIMediaType>;
export declare const SECURITY_SCHEMES_SECTION = "section/Authentication/";
