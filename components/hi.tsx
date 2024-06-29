import ReactTypingEffect from 'react-typing-effect';

export default function Hi({className}: any) {
    return <>
        <div className={"flex flex-1 flex-col items-center justify-center text-center p-4 w-full h-20 "+className}>
            
            <h2 style={{fontFamily: 'Montserrat, Helvetica, sans-serif'}} className="text-2xl sm:text-3xl font-bold text-primary">
                    <ReactTypingEffect 
                        staticText={'👋 Hi!'}
                        text={"I'm Kay"}
                        eraseDelay={45000}
                        cursor={'_'} />
            </h2>
        </div>
    </>
}