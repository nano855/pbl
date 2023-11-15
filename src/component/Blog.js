import { useEffect, useMemo, useState } from 'react';
import {fromEvent} from 'rxjs'

export default function Blog(){

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const expensiveValue = useMemo(() => {
        console.log('Calculating expensiveValue...');
        return a + b;
    }, [a, b]);

    useEffect(()=> {
        const button = document.getElementById('myButton')
        const clickObservable = fromEvent(button, 'click')
        const clickObserver = {
            next: event => console.log('click!', event),
            error: error => console.log('Error:', error),
            complete: () => console.log('Complete!')
        }
        clickObservable.subscribe(clickObserver)
    }, [])

    return (
        <div>

            <h1>Blog</h1>
            <ul>
                <li>Contenu 1</li>
                <li>Contenu 2</li>
                <li>Contenu 3</li>
            </ul>
            <button id="myButton"> Click me !</button>

                <p>a: ${a}, b: ${b}</p>
                <p>{`Expensive Value: ${expensiveValue}`}</p>
                <button onClick={() => setA(a + 1)}>Increment A</button>
                <button onClick={() => setB(b + 1)}>Increment B</button>
        </div>
    )
}