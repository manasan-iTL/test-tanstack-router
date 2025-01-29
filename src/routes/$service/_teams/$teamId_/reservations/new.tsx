import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/$service/_teams/$teamId_/reservations/new',
)({
  component: ReservationNewComponent,
})

function ReservationNewComponent() {
  return (
    <div>新規作成</div>
    )
}
