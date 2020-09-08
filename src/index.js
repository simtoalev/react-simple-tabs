import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import 'css/normalize.css'
import 'css/simtonit.css'
import 'css/app.css'

//Import Components
import Tabs from 'components/Tabs'

const App = () => {
  return <Tabs dataAddress="src/data/tabs.json" />
}

ReactDOM.render(<App />, document.querySelector('#app'))
