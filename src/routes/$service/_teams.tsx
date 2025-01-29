import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/$service/_teams')({
  component: RootTeamsComponent,
})

function RootTeamsComponent() {
  console.log('RootTeamsComponentがレンダリング')
  return (
    <div>
      <div>Hello "/$service/teams"!</div>
      <Outlet />
    </div>
  )
}
