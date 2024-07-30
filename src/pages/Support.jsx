import React from 'react'
import SupportCard from '../components/card/SupportCard'
import TicketTable from '../components/table/TicketTable'

export default function Support() {
  return (
    <div className="h-[685px] bg-background p-4">
    <SupportCard/>
    <TicketTable/>
  </div>
  )
}
