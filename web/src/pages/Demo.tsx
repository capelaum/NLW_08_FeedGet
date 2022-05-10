import { useEffect } from 'react'

export function Demo() {
  useEffect(() => {
    document.title = 'DoctorCare'
    const favicon = document.getElementById('favicon')

    if (favicon instanceof HTMLLinkElement) favicon.href = '/spinner_purple.ico'
  }, [])

  return (
    <>
      <div>
        <h1>DoctorCare</h1>
      </div>
    </>
  )
}
