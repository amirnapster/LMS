import Router from 'next/router'
import { API } from 'utils/statics/routes/api'

const setUserVisitLog = async (asPath, id) => {
  if (
    typeof document !== 'undefined' &&
    process.env.NODE_ENV === 'productionDISABLE'
  ) {
    const visitId = Math.random() * 3372036854775807 - 372036854775807
    const { pathname, asPath: currentPath, query: currentQuery } = Router
    const userId = localStorage.getItem('userId')
    const sessionId = localStorage.getItem('SessionId')
    let visitLogId = 0
    let query = !id ? '' : `${id}&`
    const utm = {
      utm_source: currentQuery.utm_source,
      utm_medium: currentQuery.utm_medium,
      utm_campaign: currentQuery.utm_campaign,
    }
    const visits = JSON.parse?.(localStorage.getItem('visits'))

    let counter = 0
    let BrowserId = localStorage.getItem('BrowserId')
    let interval_id = window.setInterval(() => SetCounter(), 1000)

    const clearTimer = () => {
      window.clearInterval(interval_id)
      interval_id = 0
    }

    const setTimer = () => {
      if (!interval_id) interval_id = window.setInterval(SetCounter, 1000)
    }

    window.onblur = clearTimer
    window.onfocus = setTimer

    const SetCounter = async () => {
      const worker = new window.Worker('./serviceWorkers/visitLog-worker.js')
      if (currentPath !== asPath) {
        clearTimer()
        worker.terminate()
        return
      }
      worker.postMessage({ counter, visitLogId, visits, visitId })
      worker.onmessage = (e) => {
        const { clonedVisits } = e.data
        if (clonedVisits) {
          localStorage.setItem('visits', JSON.stringify(clonedVisits))
        }
        worker.terminate()
      }
      counter += 1
    }

    if (asPath.indexOf('?') > -1) {
      query += asPath.substring(asPath.indexOf('?') + 1)
    }

    if (!BrowserId) {
      BrowserId = Math.random() * 3372036854775807 - 372036854775807
      localStorage.setItem('BrowserId', BrowserId)
    }

    Object.keys(utm).forEach((key) => {
      if (utm[key]) localStorage.setItem(key, utm[key])
      else utm[key] = localStorage.getItem(key)
    })

    if (userId && sessionId) {
      await fetch(`${API.ANALYTICS_ROOT}${API.VISIT_LOG}`, {
        method: 'POST',
        body: {
          BrowserId,
          sessionId,
          userId,
          visit: {
            ...utm,
            path: pathname,
            query,
            date: new Date(),
          },
        },
      })
        .then((res) => res.json())
        .then((visitLogResult) => {
          visitLogId = visitLogResult.data.data.visitLogId
        })
    } else {
      const VisitsJson = localStorage.getItem('Visits')
      let Visits = []
      if (VisitsJson) Visits = JSON.parse(VisitsJson)

      Visits.push({
        ...utm,
        path: pathname,
        query,
        date: new Date(),
        visitId,
      })
      localStorage.setItem('Visits', JSON.stringify(Visits))
    }
  }
}

export default setUserVisitLog
