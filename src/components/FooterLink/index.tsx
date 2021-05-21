import classes from './styles.module.scss';

interface FooterLinkProps {
    uri: string;
    label: string;
}

const FooterLink = (props: FooterLinkProps) => {
    const { uri, label } = props;
    return (
        <a className={classes.footerLink} href={uri}>
            {label}
        </a>
    );
};

export default FooterLink;