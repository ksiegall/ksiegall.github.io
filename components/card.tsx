import ReactTypingEffect from 'react-typing-effect';

const shapeTop = (reverse?: boolean) => {return reverse ? " rounded-tl-md rounded-tr-4xl" : " rounded-tr-md rounded-tl-4xl"};
const shapeBottom = (reverse?: boolean) => {return reverse ? " rounded-br-md rounded-bl-4xl" : " rounded-bl-md rounded-br-4xl"};
const shapeDefault = (reverse?: boolean) => shapeTop(reverse) + shapeBottom(reverse)

enum CardType {
    T = "T", // TOP
    B = "B", // BOTTOM
    M = "M", // MID
    D = "D" // DEFAULT
}

interface CardProps {
    type?: CardType | string
    className?: string
    reverse?: boolean
    override?: boolean
    color?: string
    children: any
}

export function CardOuter(props: CardProps) {
    return <>
        <div style={{backgroundColor: props.color || "#121212CC"}} className={(props.override ? props.className : "backdrop-blur-sm w-11/12 sm:w-10/12 lg:w-9/12 mr-10 ml-10 mt-5 mb-5 transition-all ease-in-out " + props.className) + shapeDefault(props.reverse)}>
                <div className="bg-transparent opacity-100">
                    {props.children}
                </div>
        </div>
    </>
}

export function CardInner(props: CardProps) {
    let shape: string = shapeDefault(props.reverse);
    if(props.type === 'T') {
        shape = shapeTop(props.reverse);
    } else if(props.type === 'B') {
        shape = shapeBottom(props.reverse);
    } else if (props.type === 'M') {
        shape = '';
    };

    return <>
        <div style={{backgroundColor: props.color || "#2c2c2cCC"}} className={"p-5 m-5 rounded " + shape}>
            <div className={"bg-transparent opacity-100 "+props.className}>
                {props.children}
            </div>
        </div>
    </>
}
