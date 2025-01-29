import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/$service')({
  component: RootServiceComponent,
})

function RootServiceComponent() {
  console.log('RootServiceComponentがレンダリング')
  return (
    <div>
      <div>Hello "/$service"!</div>
      <Outlet />
    </div>
  )
}
