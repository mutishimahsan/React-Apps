import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>Heading with Function Testing</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click here to visit google'
// }

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click here to visit google'
)

const anotherElement = (
  <a href="https://google.com">Visit Google</a>
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   {/* <App /> */}
  //   {/* <MyApp /> */}
  //   reactElement
  // </StrictMode>,
  reactElement
)
