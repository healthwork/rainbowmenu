import {Emoji} from "./Emoji";

export class Expression
{
    readonly definition: string;
    readonly emojis: Emoji[];
    isEnabled: boolean;

    constructor(emojis: Emoji[], isEnabled: boolean, definition?: string)
    {
        if(definition != null)
            this.definition = definition;
        else
            this.definition = emojis[0].getDefinition()? emojis[0].getDefinition(): emojis[0].getShortCode();

        this.emojis = emojis;
        this.isEnabled = isEnabled;
    }

    getEmoji(x: number)
    {
        const iconPathColor = "../assets/icons/color/";
        const iconPathGRAY = "../assets/icons/gray/";

        if(this.isEnabled)
            return iconPathColor + this.emojis[x].getPath();

        return iconPathGRAY + this.emojis[x].getPath();
    }

    flipEnabled()
    {
        this.isEnabled = !this.isEnabled;
    }

    enable()
    {
        this.isEnabled = true;
    }

    disable()
    {
        this.isEnabled = false;
    }

    getShortCode(): string
    {
        let shortCode = "#:";

        this.emojis.forEach(emoji => shortCode += emoji.getShortCode() + ":");

        return shortCode;
    }

    getDefinition()
    {
        return this.definition;
    }
}
