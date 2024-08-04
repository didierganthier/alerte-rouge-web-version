import Link from "next/link"
import Navbar from "./shared/Navbar"
import Hero from "./shared/Hero"
import LayoutComponent from "./shared/LayoutComponent"

export function AboutComponent() {
  return (
    <LayoutComponent hero imageUrl="https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/448388556_18027610481504500_8701504396152498592_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEgztwsn37freTz3Eyx1_QR5_s2xZBPKeHn-zbFkE8p4d4g1ia7rPjvlzPsNuH3Re5x2L37pvGIRkqRnx3K7FFi&_nc_ohc=X3ZklNZXGDAQ7kNvgHTo3Um&_nc_ht=scontent-sof1-1.xx&oh=00_AYC1Rqh6vN8Z-oPEfyL6bGFaBJhGfZnDbujdWM4vn8mMOQ&oe=66B2A3EB">
      <main className="flex-grow">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-center">Our Mission</h2>
                <p className="text-muted-foreground mt-4 text-center">
                  At the Blood Donation Center, our mission is to ensure a safe and sustainable blood supply for our
                  community. We are committed to providing the highest quality blood products and services to those in
                  need. Through our dedicated team of professionals and the generosity of our donors, we strive to make
                  a positive impact on the lives of patients and their families.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-center">Our History</h2>
                <p className="text-muted-foreground mt-4 text-center">
                  The Blood Donation Center was founded in 1985 with the goal of addressing the critical shortage of
                  blood donations in our region. Over the past three decades, we have grown to become a leading provider
                  of blood products, serving hospitals and medical facilities throughout the state. Our organization has
                  been at the forefront of innovation, implementing cutting-edge technologies and best practices to
                  ensure the safety and quality of our blood supply.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-center">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  <div className="bg-muted p-6 rounded-lg shadow">
                    <div className="flex items-center gap-4">
                      <img src="https://avatars.githubusercontent.com/u/45739963?v=4" alt="Team Member 1" width={64} height={64} className="rounded-full" />
                      <div>
                        <h4 className="font-medium">Dr. Emily Johnson</h4>
                        <p className="text-sm text-muted-foreground">Medical Director</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      Dr. Johnson has over 15 years of experience in the field of hematology and transfusion medicine.
                      She is passionate about ensuring the safety and quality of our blood supply.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg shadow">
                    <div className="flex items-center gap-4">
                      <img src="https://avatars.githubusercontent.com/u/45739963?v=4" alt="Team Member 2" width={64} height={64} className="rounded-full" />
                      <div>
                        <h4 className="font-medium">Sarah Lee</h4>
                        <p className="text-sm text-muted-foreground">Donor Recruitment Manager</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      Sarah has been with the Blood Donation Center for over a decade, and she is dedicated to building
                      strong relationships with our community of donors.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg shadow">
                    <div className="flex items-center gap-4">
                      <img src="https://avatars.githubusercontent.com/u/45739963?v=4" alt="Team Member 3" width={64} height={64} className="rounded-full" />
                      <div>
                        <h4 className="font-medium">Michael Chen</h4>
                        <p className="text-sm text-muted-foreground">Operations Manager</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      Michael oversees the day-to-day operations of our blood collection and distribution facilities,
                      ensuring that our processes are efficient and effective.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-center">Our Partnerships</h2>
                <p className="text-muted-foreground mt-4 text-center">
                  The Blood Donation Center has established strong partnerships with local hospitals, medical centers,
                  and community organizations to ensure that our blood products are distributed to those in need. We
                  work closely with these partners to identify areas of need and develop innovative solutions to address
                  them.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-center">Awards and Recognition</h2>
                <p className="text-muted-foreground mt-4 text-center">
                  Over the years, the Blood Donation Center has been recognized for our commitment to excellence and our
                  positive impact on the community. We are proud to have received numerous awards and accolades,
                  including the prestigious &quot;Blood Bank of the Year&quot; award from the American Association of Blood Banks,
                  and the &quot;Community Impact&quot; award from the local Chamber of Commerce.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </LayoutComponent>
  )
}
