import Link from "next/link"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Hero from "./shared/Hero"
import CheckIcon from "./shared/icons/CheckIcon"
import TwitterIcon from "./shared/icons/TwitterIcon"
import FacebookIcon from "./shared/icons/FacebookIcon"
import InstagramIcon from "./shared/icons/InstagramIcon"
import LayoutComponent from "./shared/LayoutComponent"

export function HomeComponent() {
  return (
    <LayoutComponent hero imageUrl="hero3.jpg">
      <section className="py-20 bg-background">
        <div className="container mx-auto grid gap-12 md:grid-cols-2 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              At our blood bank, our mission is to ensure a safe and sustainable blood supply for our community. We are
              committed to providing the highest quality blood products and services to those in need.
            </p>
            <p className="text-muted-foreground">
              Through our dedicated team of professionals and the generosity of our donors, we strive to make a positive
              impact on the lives of patients and their families.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Our Values</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckIcon className="h-6 w-6 text-primary" />
                <span>Compassion for those we serve</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="h-6 w-6 text-primary" />
                <span>Integrity in all our actions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="h-6 w-6 text-primary" />
                <span>Dedication to excellence</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="h-6 w-6 text-primary" />
                <span>Commitment to community</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted">
        <div className="container mx-auto grid gap-12 md:grid-cols-2 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">The Impact of Blood Donation</h2>
            <p className="text-muted-foreground">
              Your blood donation can make a profound difference in the lives of those in need. Here are some key
              statistics that highlight the importance of giving blood:
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg bg-background p-6 shadow text-center">
              <h3 className="text-3xl font-bold text-primary">3 Million</h3>
              <p className="text-muted-foreground">Patients receive blood transfusions each year</p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow text-center">
              <h3 className="text-3xl font-bold text-primary">38%</h3>
              <p className="text-muted-foreground">
                Of the population is eligible to donate blood, but only 10% actually do
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow text-center">
              <h3 className="text-3xl font-bold text-primary">1 Pint</h3>
              <p className="text-muted-foreground">Of blood can save up to 3 lives</p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow text-center">
              <h3 className="text-3xl font-bold text-primary">60 Minutes</h3>
              <p className="text-muted-foreground">Is all it takes to donate blood and make a difference</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Hear from Our Donors</h2>
            <p className="text-muted-foreground">
              Read heartfelt stories from our amazing blood donors and recipients.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img src="https://avatars.githubusercontent.com/u/45739963?v=4" alt="Donor Avatar" width={48} height={48} className="rounded-full" />
                  <div>
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Donor</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  &quot;Donating blood is one of the most rewarding experiences I&apos;ve had. Knowing that my donation can save
                  lives is truly humbling.&quot;
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img src="https://avatars.githubusercontent.com/u/45739963?v=4" alt="Recipient Avatar" width={48} height={48} className="rounded-full" />
                  <div>
                    <h4 className="font-medium">Michael Lee</h4>
                    <p className="text-sm text-muted-foreground">Recipient</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  &quot;I&apos;m forever grateful to the anonymous donor who gave me a second chance at life. Their selfless act
                  has truly transformed my world.&quot;
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img src="https://avatars.githubusercontent.com/u/45739963?v=4" alt="Donor Avatar" width={48} height={48} className="rounded-full" />
                  <div>
                    <h4 className="font-medium">Emily Chen</h4>
                    <p className="text-sm text-muted-foreground">Donor</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  &quot;Donating blood is a simple way for me to make a real difference in my community. I&apos;m proud to be a
                  part of this life-saving effort.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted">
        <div className="container mx-auto space-y-4 text-center">
          <h2 className="text-4xl font-bold">Stay Connected</h2>
          <p className="text-muted-foreground">
            Sign up for our newsletter, follow us on social media, or explore volunteer opportunities to stay involved
            with our mission.
          </p>
          <div className="mx-auto max-w-md">
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">Sign Up</Button>
            </form>
            <div className="flex justify-center gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <InstagramIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </LayoutComponent>
  )
}
