import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding'
import { MainLayout } from '@/components/layouts/MainLayout'
import { ScolarhipsUp } from '@/components/scolarships/ScolarhipsUp'
import React from 'react'

const index = () => {
  return (
    <MainLayout title='Scholarships'>
      <ComponentWithPadding>
        <ScolarhipsUp />
      </ComponentWithPadding>
    </MainLayout>
  )
}

export default index