import React, { useEffect, useState } from 'react'

import styles from './index.module.css'

const Tabs = ({ tabData }) => {
  const [tabs, setTabs] = useState([])

  const [activeTabId, setActiveTabId] = useState(1)

  useEffect(() => {
    setTabs(tabData)
  }, [tabData])

  return (
    <div className={styles.tabs}>
      {tabs && (
        <div className={styles.buttons}>
          {tabs.map((tab) => {
            return (
              <button
                key={tab.id}
                className={tab.id == activeTabId ? styles.active : ''}
                onClick={() => {
                  setActiveTabId(tab.id)
                }}
              >
                {tab.title}
              </button>
            )
          })}
        </div>
      )}

      <div className={styles.content}>
        {tabs.map((tab) => {
          return tab.id == activeTabId ? tab.content : ''
        })}
      </div>
    </div>
  )
}

export default Tabs
