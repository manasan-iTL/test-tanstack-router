import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/$service/_teams/$teamId/reservations')({
  component: RootReservationComponent,
})

function RootReservationComponent() {
  console.log('RootReservationComponentがレンダリング')
  return (
    <div>
      <div>Hello "/$service/_teams/reservations"!</div>
      <Outlet />
    </div>
  )
}
