import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$service/detail')({
  component: ServiceDetailComponent,
})

function ServiceDetailComponent() {
  console.log('ServiceDetailComponentがレンダリング')
  return <div>Hello "/$service/detail"!</div>
}
