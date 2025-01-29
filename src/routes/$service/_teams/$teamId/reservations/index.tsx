import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$service/_teams/$teamId/reservations/')({
  component: ReservationIndexComponent,
})

function ReservationIndexComponent() {
  console.log('ReservationIndexComponentがレンダリング')
  return <div>予約一覧ページ</div>
}
