import Link from 'next/link'
import React from 'react'

const FooterComponent = () => {
    return (
        <footer className="bg-background py-6 border-t">
            <div className="container mx-auto flex items-center justify-between px-4">
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
    )
}

export default FooterComponent 