interface IMyGradiantBackgroundProps {
    color: string,
    borderRadius: string
}

const MyGradiantBackground = ({ color, borderRadius }: IMyGradiantBackgroundProps) => {
    return (
        <div
            style={{
                border: '0px solid',
                borderRadius,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: color,
                opacity: 0.8,
            }}
        />
    )
}

function hexToRgb(hex: string) {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r},${g},${b}`;
}

export default MyGradiantBackground
