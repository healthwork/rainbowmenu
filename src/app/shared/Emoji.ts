export class Emoji
{
    readonly shortcode: string;
    readonly definition: string;
    readonly path: string;

    constructor(path: string, shortcode?: string, definition?: string)
    {
        this.shortcode = shortcode;
        this.definition = definition;
        this.path = path;
    }

    getShortCode(): string
    {
        return this.shortcode;
    }

    getDefinition(): string
    {
        return this.definition;
    }

    getPath(): string
    {
        return this.path;
    }
}
