import { MainLayout } from '@/components/layouts/MainLayout'
import React from 'react'
import ContactImage from '../../components/form-contact/ComponentWithImage';
import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding';


const index = () => {
    return (
        <MainLayout title='Students'>
            <ComponentWithPadding>
                <ContactImage />
            </ComponentWithPadding>
        </MainLayout>
    )
}

export default index