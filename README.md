# scroll-length-progress
A tiny script to get scrolling progress in real time

## Usage
Install scroll-length-progress in your project using yarn (or npm)
```PowerShell
yarn add scroll-length-progress
```

Then simply import scroll-length-progress to your project to start using it
```javascript
import scroll from 'scroll-length-progress'

// Output current scroll progress in % to the console
console.log(scroll.progress)
```

## Example
Let's build a simple progress bar indicating scrolling progress

### The JS
```javascript
import scroll from 'scroll-length-progress'

const { requestAnimationFrame: raf } = window

const loop = () => {
    document.body.style.setProperty('--scroll-progress', `${scroll.progress}%`)
    raf(loop)
}

raf(loop)
```

### The CSS
```css
body::after {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: var(--scroll-progress);
    height: 0.25rem;
    background-color: yellowgreen;
    content: '';
}
```
