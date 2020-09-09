import React, { useEffect, useState } from 'react'

import styles from './index.module.css'

const Tabs = ({ dataAddress }) => {
  const [tabsState, setTabsState] = useState({
    tabs: [],
    loading: true,
    errorMsg: ''
  })

  const [activeTabId, setActiveTabId] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataAddress)
        const results = await response.json()
        setTabsState({ tabs: results, loading: false, errorMsg: '' })
      } catch (e) {
        setTabsState({ tabs: [], loading: false, errorMsg: e.message })
      }
    }
    fetchData()
  }, [dataAddress])

  return (
    <div className={styles.tabs}>
      {tabsState.loading && <p>Yükleniyor...</p>}
      {tabsState.errorMsg && <p>Hata: {tabsState.errorMsg}</p>}

      {tabsState.tabs && (
        <div className={styles.buttons}>
          {tabsState.tabs.map((tab) => {
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
        {tabsState.tabs.map((tab) => {
          return tab.id == activeTabId ? tab.content : ''
        })}
      </div>
    </div>
  )
}

export default Tabs
