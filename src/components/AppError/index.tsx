import * as React from 'react';
import ErrorImage from '../../assets/error';
import classes from './styles.module.scss';

interface ErrorProps {
    label: string;
    containerStyle?: React.CSSProperties;
}

const AppError = (props: ErrorProps) => {
    const { label, containerStyle } = props;

    return (
        <div className={classes.appError} style={containerStyle}>
            <div className={classes.errorImageWrapper}>
                <ErrorImage height={200} width={350} />
            </div>
            <div className={classes.errorLabel}>{label}</div>
        </div>
    );
};

export default AppError;

AppError.defaultProps = {
    containerStyle: {},
};
