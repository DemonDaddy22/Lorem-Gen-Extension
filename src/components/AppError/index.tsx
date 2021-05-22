import * as React from 'react';
import ErrorImage from '../../assets/error';
import Button from '../Button';
import classes from './styles.module.scss';

interface ErrorProps {
    label: string;
    onClick?: () => void;
    buttonLabel?: string;
    containerStyle?: React.CSSProperties;
}

const AppError = (props: ErrorProps) => {
    const { label, onClick, buttonLabel, containerStyle } = props;

    return (
        <div className={classes.appError} style={containerStyle}>
            <div className={classes.errorImageWrapper}>
                <ErrorImage height={200} width={350} />
            </div>
            <div className={classes.errorLabel}>{label}</div>
            {onClick && (
                <Button id={buttonLabel || label} onClick={onClick} style={{ marginTop: 8 }}>
                    {buttonLabel}
                </Button>
            )}
        </div>
    );
};

export default AppError;

AppError.defaultProps = {
    containerStyle: {},
};
