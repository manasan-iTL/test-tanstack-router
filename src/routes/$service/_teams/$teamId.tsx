import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/$service/_teams/$teamId')({
  component: TeamIdRootComponent,
})

function TeamIdRootComponent() {
    console.log('TeamIdRootComponentがレンダリング')
  return (
    <div>
        <div>Hello "/$service/_teams/$teamId"!</div>
        <Outlet />
    </div>
    )
}
