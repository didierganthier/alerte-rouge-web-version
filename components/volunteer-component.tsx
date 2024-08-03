import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Navbar from "./shared/Navbar"

export function VolunteerComponent() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-1 flex justify-center items-center">
        <section className="py-20 bg-background w-full max-w-4xl">
          <div className="container">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-center">Volunteer Opportunities</h2>
                <div className="mt-6 space-y-4">
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-medium">Blood Drive Volunteer</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p>
                          Help us organize and staff our community blood drives. Volunteers are needed to greet donors,
                          assist with registration, and provide refreshments.
                        </p>
                        <div>
                          <h4 className="text-md font-medium">Requirements:</h4>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Friendly and outgoing personality</li>
                            <li>Ability to stand for extended periods</li>
                            <li>Basic computer skills</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-md font-medium">Application Process:</h4>
                          <p>
                            Complete the volunteer application form and submit it to our volunteer coordinator. We&apos;ll
                            review your application and get in touch to schedule an interview.
                          </p>
                          <Button className="mt-4">Apply Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-medium">Donor Recruitment Volunteer</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p>
                          Help us spread the word about the importance of blood donation and recruit new donors in your
                          community. This could involve tabling at local events, distributing informational materials,
                          and sharing social media posts.
                        </p>
                        <div>
                          <h4 className="text-md font-medium">Requirements:</h4>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Passion for community service</li>
                            <li>Strong communication skills</li>
                            <li>Ability to work independently</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-md font-medium">Application Process:</h4>
                          <p>
                            Complete the volunteer application form and submit it to our volunteer coordinator. We&apos;ll
                            review your application and get in touch to discuss your interests and availability.
                          </p>
                          <Button className="mt-4">Apply Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-medium">Administrative Support Volunteer</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p>
                          Assist our staff with various administrative tasks, such as data entry, filing, and organizing
                          supplies. This is a great opportunity to gain experience in a nonprofit office environment.
                        </p>
                        <div>
                          <h4 className="text-md font-medium">Requirements:</h4>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Strong organizational skills</li>
                            <li>Proficient in Microsoft Office</li>
                            <li>Attention to detail</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-md font-medium">Application Process:</h4>
                          <p>
                            Complete the volunteer application form and submit it to our volunteer coordinator. We&apos;ll
                            review your application and get in touch to discuss your skills and availability.
                          </p>
                          <Button className="mt-4">Apply Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
