import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/$service/')({
  component: ServiceIndexComponent,
})

function ServiceIndexComponent() {
  console.log('ServiceIndexComponentがレンダリング')
  return (
    <div>
      <div>Hello "/$service/"!</div>
      <Outlet />
    </div>
)
}
