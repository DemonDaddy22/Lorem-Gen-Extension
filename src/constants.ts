export interface IFooterLinkValue {
    label: string;
    uri: string;
}

export interface IFooterLink {
    [key: string]: IFooterLinkValue;
}

export const LOREM_API_URI = 'https://demondaddy-api-den.herokuapp.com/api/v1/lorem';

export const FOOTER_LINKS: IFooterLink = {
    REPO: {
        label: 'GitHub',
        uri: 'https://github.com/DemonDaddy22/Lorem-Gen-Extension/',
    },
    COFFEE: {
        label: 'Buy me a Coffee',
        uri: 'https://www.buymeacoffee.com/rohangupta',
    },
};
