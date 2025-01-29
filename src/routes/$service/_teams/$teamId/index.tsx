import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$service/_teams/$teamId/')({
  component: TeamIdIndexComponent,
})

function TeamIdIndexComponent() {
  console.log('TeamIdIndexComponentがレンダリング')
  return <div>Hello "/$service/_teams/$teamId/"!</div>
}
