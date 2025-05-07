import C from '@/stores/C'
import React, { useEffect } from 'react';


const classNames = ['A', 'B']
    .map(n => import(`@/stores/${n}`)
        .then(m => {
            debugger;
            console.log(m.default);
            return m.default
        })
);

export default function test() {
    const [classes, setClasses] = React.useState<string[]|null>(null);

    useEffect(() => {
        Promise.all(classNames).then(m => {
            setClasses(m.map(m => m.toString()))
        })
    },[]);

    return <div>
        <p>
            C: {C.toString()}
        </p>        
        {classes?.map(c => <p>{c}</p>)}
        <h2>Should write:</h2>
        <p>{`C: class C { constructor(){ this.C = 1; } }`}</p>
        <p>{`class A { constructor(){ this.A = 1; } }`}</p>
        <p>{`class B { constructor(){ this.B = 1; } }`}</p>
    </div>;
}