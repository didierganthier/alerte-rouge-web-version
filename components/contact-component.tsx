import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "./shared/Navbar"
import MailIcon from "./shared/icons/MailIcon"
import PhoneIcon from "./shared/icons/PhoneIcon"
import LocateIcon from "./shared/icons/LocateIcon"
import LayoutComponent from "./shared/LayoutComponent"

export function ContactComponent() {
  return (
    <LayoutComponent>
      <main className="flex-1 container mx-auto px-4">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-4xl font-bold text-center">Contact Us</h2>
                <p className="mt-4 text-muted-foreground text-center">
                  Get in touch with our team for any inquiries or support.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <PhoneIcon className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MailIcon className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">info@blooddonationcenter.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <LocateIcon className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-muted-foreground">123 Main Street, Anytown USA 12345</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-center">Get in Touch</h2>
                <p className="mt-4 text-muted-foreground text-center">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <form className="mt-8 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center">Find Us</h2>
            <div className="mt-8">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <div />
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </LayoutComponent>
  )
}
