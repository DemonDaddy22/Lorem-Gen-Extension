import classes from './styles.module.scss';

const Version = () => {
    return (
        <div className={classes.version}>
            <a
                href={`https://github.com/DemonDaddy22/Lorem-Gen-Extension/releases/tag/v${process.env.REACT_APP_VERSION}`}
            >
                v {process.env.REACT_APP_VERSION}
            </a>
        </div>
    );
};

export default Version;
