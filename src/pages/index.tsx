import C from '@/stores/C'
import React, { useEffect } from 'react';


const classNames = ['A', 'B']
    .map(n => import(`@/stores/${n}`)
    .then(m => m.default)
);

export default function test() {
    const [classes, setClasses] = React.useState<string|null>(null);

    useEffect(() => {
        (Promise.all(classNames)).then(m => {
            setClasses(m.map(m => m.toString()).join('\n'))
        })
    },[]);

    return <div>
        <p>
            C: {C.toString()}
        </p>        
        <p>
            {classes}
        </p>
        <h2>Should write:</h2>
        {`C: class C { constructor(){ this.C = 1; } }`}
        <br />
        {`class A { constructor(){ this.A = 1; } } class B { constructor(){ this.B = 1; } }`}
    </div>;
}