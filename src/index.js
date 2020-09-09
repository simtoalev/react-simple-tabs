import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import 'css/normalize.css'
import 'css/simtonit.css'
import 'css/app.css'

//Import Components
import Tabs from 'components/Tabs'

const tabData = [
  {
    id: 1,
    title: 'perferendis ipsa',
    content:
      'Provident harum dolor, eligendi ad fuga, magni labore reprehenderit repellat adipisci soluta atque veniam dolorum nobis?'
  },
  {
    id: 2,
    title: 'Laperiam possimus',
    content:
      'Quisquam, excepturi odit molestiae harum dolorum perferendis ab ipsam ducimus repellendus voluptates quod. Ullam, deserunt quas.'
  },
  {
    id: 3,
    title: 'Lexpedita nostrum',
    content:
      'Ratione debitis id, molestias voluptate ex iure? Repellendus cum reprehenderit, delectus possimus impedit perspiciatis blanditiis iusto?'
  },
  {
    id: 4,
    title: 'molestias quaerat',
    content:
      'Itaque dignissimos dolorem iusto nostrum deserunt, in quidem labore ut! Voluptatum quisquam nulla doloribus eum quaerat?'
  }
]

const App = () => {
  return <Tabs tabData={tabData} />
}

ReactDOM.render(<App />, document.querySelector('#app'))
