import * as React from 'react';
import classes from './styles.module.scss';

interface LoaderProps {
    primaryColor?: string;
    secondaryColor?: string;
    size?: number | string;
}

const Loader = (props: LoaderProps) => {
    const { primaryColor, secondaryColor, size } = props;
    return (
        <div className={classes.loaderWrapper}>
            <div
                className={classes.circleOne}
                style={{ backgroundColor: primaryColor, height: size, width: size }}
            ></div>
            <div
                className={classes.circleTwo}
                style={{ backgroundColor: secondaryColor, height: size, width: size }}
            ></div>
        </div>
    );
};

export default Loader;
