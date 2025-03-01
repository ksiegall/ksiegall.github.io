export default function Elec(props: any) {
    return <>
        <div className={props.className || ""}>
            <img src={'/assets/logo.png'}  
                        style={{maxHeight: 150, maxWidth: 150}}
                        className="mt-3 flex-none bulb"
                        alt="Kay's Logo, A burning piece of wood with a smiley face" />
        
            <div className="elec h-[150vh] ml-[74.75px]"></div>
        </div>
    </>
}