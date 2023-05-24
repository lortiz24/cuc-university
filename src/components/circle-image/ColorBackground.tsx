interface IMyGradiantBackgroundProps {
    color: string,
    borderRadius: string
}

const MyGradiantBackground = ({ color, borderRadius }: IMyGradiantBackgroundProps) => {
    return (
        <div
            style={{
                borderRadius,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: color,
                zIndex:-2,
                opacity: 0.8,
            }}
        />
    )
}


export default MyGradiantBackground
