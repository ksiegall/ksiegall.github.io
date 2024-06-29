export default function Badge(props: any) {
    return <span style={{backgroundColor: props.bg}} className={"p-2 m-2 text-xs text-center rounded-sm rounded-tl-xl rounded-br-xl min-w-10 "+props.className}>
            {props.children}
        </span>
}