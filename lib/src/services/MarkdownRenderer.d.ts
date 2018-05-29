import { MDComponent } from '../components/Markdown/Markdown';
export declare const COMPONENT_REGEXP = "^\\s*<!-- ReDoc-Inject:\\s+?{component}\\s+?-->\\s*$";
export declare function buildComponentComment(name: string): string;
export interface MarkdownHeading {
    id: string;
    name: string;
    items?: MarkdownHeading[];
    description?: string;
}
export declare class MarkdownRenderer {
    headings: MarkdownHeading[];
    currentTopHeading: MarkdownHeading;
    private headingEnhanceRenderer;
    private originalHeadingRule;
    constructor();
    saveHeading(name: string, container?: MarkdownHeading[]): MarkdownHeading;
    flattenHeadings(container?: MarkdownHeading[]): MarkdownHeading[];
    attachHeadingsDescriptions(rawText: string): void;
    headingRule: (text: string, level: number, raw: string) => string;
    renderMd(rawText: string, raw?: boolean): string;
    extractHeadings(rawText: string): MarkdownHeading[];
    renderMdWithComponents(rawText: string, components: Dict<MDComponent>, raw?: boolean): Array<string | MDComponent>;
}
