import * as React from 'react';
import Logo from '../../assets/logo';
import classes from './styles.module.scss';

interface HeaderProps {
    label: string;
    color?: string;
    style?: React.CSSProperties;
}

const Header = (props: HeaderProps) => {
    const { label, color, style } = props;

    return (
        <div className={classes.headerWrapper}>
            <Logo size={48} />
            <div className={classes.header} style={{ ...style, color }}>
                {label}
            </div>
        </div>
    );
};

export default Header;

Header.defaultProps = {
    color: '#FFF',
    style: {},
};
