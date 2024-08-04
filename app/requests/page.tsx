import Navbar from '@/components/shared/Navbar'
import Link from 'next/link'
import React from 'react'

const BloodRequestComponent = () => {
    return (
        <div className="flex flex-col min-h-dvh">
            <Navbar />
            <main className="flex-1">
                <section className="py-20 bg-background px-4 md:px-6">
                    <div className="container">
                        <h2 className="text-4xl font-bold">Blood Requests</h2>
                        <p className="mt-4 text-muted-foreground">
                            Help save lives by fulfilling urgent blood requests.
                        </p>
                        <div className="mt-8 grid md:grid-cols-3 gap-8">
                            <div className="flex items-start gap-4">
                                <div className='shadow p-4 flex flex-col gap-3'>
                                    <h4 className="font-medium">Urgent Blood Needed - Type A+</h4>
                                    <h5 className="text-muted-foreground">John Doe</h5>
                                    <h5 className="text-muted-foreground">Age: 45</h5>
                                    <p className="text-muted-foreground">
                                        Patient requires Type A+ blood for immediate surgery.
                                    </p>
                                    <Link href="#" className="shadow px-2 bg-primary text-secondary rounded-md text-center" prefetch={false}>
                                        Respond
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div>
                                    <h4 className="font-medium">Blood Request - Type O-</h4>
                                    <p className="text-muted-foreground">
                                        Patient in need of Type O- blood for transfusion.
                                    </p>
                                    <Link href="#" className="text-primary" prefetch={false}>
                                        Respond
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div>
                                    <h4 className="font-medium">Plasma Needed - AB+</h4>
                                    <p className="text-muted-foreground">
                                        Urgent request for AB+ plasma.
                                    </p>
                                    <Link href="#" className="text-primary" prefetch={false}>
                                        Respond
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-background py-6 border-t">
                <div className="container flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">&copy; 2024 Blood Donation Center. All rights reserved.</p>
                    <nav className="flex items-center gap-4">
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
                            Contact Us
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default BloodRequestComponent