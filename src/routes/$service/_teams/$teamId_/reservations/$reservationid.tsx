import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/$service/_teams/$teamId_/reservations/$reservationid',
)({
  component: ReservationDetail,
})

function ReservationDetail() {
  return (
    <div>
      予約詳細ページ
    </div>
  )
}
