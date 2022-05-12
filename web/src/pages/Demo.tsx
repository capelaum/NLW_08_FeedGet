import { useEffect } from 'react'
import { Nav } from '../components/Demo/Nav'
import { Hero } from '../components/Demo/Sections/Hero'
import { Services } from '../components/Demo/Sections/Services'
import { Widget } from '../components/Widget'

export function Demo() {
  useEffect(() => {
    document.title = 'DoctorCare'
    const favicon = document.getElementById('favicon')

    if (favicon instanceof HTMLLinkElement) favicon.href = '/spinner_purple.ico'
  }, [])

  return (
    <>
      <Nav />

      <Hero />

      <Services />

      <Widget />
    </>
  )
}
