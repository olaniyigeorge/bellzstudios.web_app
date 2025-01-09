"use client";
import Typewriter from "typewriter-effect";

interface TyperProps {
    words: string[];  
    id: string;
    className?: string;
    delay?: number
    loop: boolean
}

export default function Typer(props: TyperProps) {
    const {words, className, id, delay, loop} = props;
    
    return (
        <div id={id}>
            <Typewriter
                options={{
                    strings: words,
                    autoStart: true,
                    loop: loop,
                    delay: delay,
                    wrapperClassName: className,
                }}
            />
        </div>
    );
}
