import { AdmisionsUp } from '@/components/admissions/AdmisionsUp'
import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding'
import { MainLayout } from '@/components/layouts/MainLayout'
import React from 'react'

const index = () => {
    return (
        <MainLayout>
            <ComponentWithPadding>
                <AdmisionsUp />
            </ComponentWithPadding>
        </MainLayout>
    )
}

export default index