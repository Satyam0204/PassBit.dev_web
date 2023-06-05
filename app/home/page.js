import React from 'react'
import Landing from '../../src/components/Dashboard/Landing'
import Features from '../../src/components/Dashboard/Features'
import PassBreachInfo from '../../src/components/Dashboard/password_breach'

function Dashboard() {
  return (
  <>
  <Landing />
  <PassBreachInfo />
  <Features />
  </>
  )
}

export default Dashboard