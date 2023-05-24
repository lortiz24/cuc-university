import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts/MainLayout'
import { CircleImage } from '@/components/circle-image/CircleImage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout title='Cuc University'>
      <CircleImage src={`/assets/team-working.jpg`}/>
    </MainLayout>
  )
}
