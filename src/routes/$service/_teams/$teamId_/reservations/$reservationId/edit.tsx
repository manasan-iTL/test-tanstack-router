import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/$service/_teams/$teamId_/reservations/$reservationId/edit',
)({
  component: ReservationEdit,
})

function ReservationEdit() {
  return (
    <div>
      予約更新ページ
    </div>
  )
}
