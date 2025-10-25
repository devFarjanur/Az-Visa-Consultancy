import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Hero } from './../Components/Home/Hero';
import { WhyChoose } from './../Components/Home/WhyChoose';
import { VisaServices } from './../Components/Home/VisaServices';
import { StepProcess } from './../Components/Home/StepProcess';

export default function Home() {
    return (
        <AppLayout>
            <Head title="Home - Az Visa Consultancy" />
            <Hero />
            <WhyChoose />
            <VisaServices />
            <StepProcess />
        </AppLayout>
    );
}
