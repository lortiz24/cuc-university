import { AdmisionsUp } from '@/components/admissions/AdmisionsUp'
import { AdmissionBackground } from '@/components/admissions/AdmissionBackground'
import { AdmissionsRequirements } from '@/components/admissions/AdmissionsRequirements'
import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding'
import { MainLayout } from '@/components/layouts/MainLayout'
import React from 'react'

const index = () => {
    return (
        <MainLayout title='Admissions'>
            <ComponentWithPadding>
                <AdmisionsUp />
            </ComponentWithPadding>
            <AdmissionBackground src='/assets/Paper.jpg'>
                <AdmissionsRequirements />
            </AdmissionBackground>
        </MainLayout>
    )
}

export default index