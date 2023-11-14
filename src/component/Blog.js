import {useEffect} from 'react';
import {fromEvent} from 'rxjs'

export default function Blog(){

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
            <button id="myButton"> Click me !</button>
        </div>
    )
}