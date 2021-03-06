interface LogoProps {
    colorPrimary?: string;
    colorSecondary?: string;
    size?: number | string;
}

const Logo = (props: LogoProps) => {
    const { colorPrimary, colorSecondary, size } = props;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 215 214.001'>
            <g transform='translate(-490 -265)'>
                <path
                    d='M-876-394a75.885,75.885,0,0,1-15.921-1.686,75.857,75.857,0,0,1-14.829-4.836,77.9,77.9,0,0,1-13.419-7.653,80.561,80.561,0,0,1-11.692-10.135,82.853,82.853,0,0,1-9.647-12.284,84.424,84.424,0,0,1-7.284-14.1,85.683,85.683,0,0,1-4.6-15.58A87.709,87.709,0,0,1-955-477a87.71,87.71,0,0,1,1.6-16.727,85.685,85.685,0,0,1,4.6-15.58,84.419,84.419,0,0,1,7.284-14.1,82.85,82.85,0,0,1,9.647-12.284,80.556,80.556,0,0,1,11.692-10.135,77.889,77.889,0,0,1,13.419-7.652,75.861,75.861,0,0,1,14.829-4.836A75.892,75.892,0,0,1-876-560v83h79a87.7,87.7,0,0,1-1.605,16.727,85.672,85.672,0,0,1-4.6,15.58,84.415,84.415,0,0,1-7.284,14.1,82.845,82.845,0,0,1-9.647,12.284,80.556,80.556,0,0,1-11.692,10.135,77.894,77.894,0,0,1-13.419,7.653,75.854,75.854,0,0,1-14.829,4.836A75.883,75.883,0,0,1-876-394Z'
                    transform='translate(1445 873)'
                    fill={colorSecondary}
                />
                <path
                    d='M-667.574-221.138H-679.75l49.566-49.748h12.176l-49.566,49.748Zm-80.361,0H-760.11l49.566-49.748h12.175l-49.566,49.748Zm133.935,0h0l-12.174,0,23.538-23.624v12.22Zm-26.786,0h0l-12.175,0,49.566-49.748h.758v11.459Zm-53.573,0h0l-12.175,0,49.566-49.748h12.176Zm-26.788,0h0l-12.173,0,49.566-49.748h12.175Zm-42.49-11.125v-12.218l50.375-50.56v12.219l-50.373,50.558Zm0-26.885v-12.22l50.375-50.56v12.22l-50.373,50.558Zm0-26.885v-12.22l50.375-50.56v12.22l-50.373,50.558Zm0-26.885v-12.221l50.375-50.56v12.221l-50.373,50.559Zm0-26.886v-12.22l28.012-28.115h12.175l-40.185,40.333Zm0-26.885V-378.91l1.224-1.228h12.177l-13.4,13.448Z'
                    transform='translate(1307.638 645.138)'
                    fill={colorPrimary}
                />
            </g>
        </svg>
    );
};

export default Logo;

Logo.defaultProps = {
    size: 200,
    colorPrimary: '#FFF',
    colorSecondary: '#b8c0e7',
};
