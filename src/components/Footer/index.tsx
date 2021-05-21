import * as React from 'react';
import { FOOTER_LINKS } from '../../constants';
import FooterLink from '../FooterLink';
import Version from '../Version';
import classes from './styles.module.scss';

const Footer = () => {
    const footerLinksKeys = React.useMemo(() => Object.keys(FOOTER_LINKS), []);

    return (
        <div className={classes.footer}>
            <Version />
            <div className={classes.divider}></div>
            {footerLinksKeys.map((entry: string, index: number) => (
                <React.Fragment key={`${entry}-${index}`}>
                    <FooterLink label={FOOTER_LINKS[entry].label} uri={FOOTER_LINKS[entry].uri} />
                    {index < footerLinksKeys.length - 1 && <div className={classes.divider}></div>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Footer;
