onmessage = async (e) => {
  const { counter, visitLogId, visits, visitId } = e.data
  const clonedVisits = visits && [...visits]
  if (visitLogId && counter % 10 === 0) {
    await fetch('https://analytics.rasm.io/VisitLog', {
      method: 'POST',
      body: { visitLogId, duration: counter },
    })
  } else {
    if (!clonedVisits) return
    clonedVisits.map((element) => {
      if (element.visitId === visitId) return { ...element, duration: counter }
      return element
    })
  }
  postMessage({ clonedVisits })
}
