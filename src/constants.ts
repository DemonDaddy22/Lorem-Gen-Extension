export interface IFooterLinkValue {
    label: string;
    uri: string;
}

export interface IFooterLink {
    [key: string]: IFooterLinkValue;
}

export const LOREM_API_URI = 'https://demondaddy-api-den.herokuapp.com/api/v1/lorem';

export const FOOTER_LINKS: IFooterLink = {
    WEBSITE: {
        label: 'Website',
        uri: 'https://demondaddy22.github.io/Lorem-Gen/',
    },
    REPO: {
        label: 'GitHub',
        uri: 'https://github.com/DemonDaddy22/Lorem-Gen-Extension/',
    },
    COFFEE: {
        label: 'Buy me a Coffee',
        uri: 'https://www.buymeacoffee.com/rohangupta',
    },
};

export const DEFAULT_ERROR_MESSAGE = 'Something went wrong! Please try again later.';