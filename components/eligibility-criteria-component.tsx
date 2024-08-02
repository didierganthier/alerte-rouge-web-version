"use client";
import React, { useState } from 'react';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import Navbar from "./shared/Navbar"
import { ChevronDown, ChevronUp } from 'lucide-react'
import Hero from './shared/Hero';

export function EligibilityCriteriaComponent() {
  const [openFAQ, setOpenFAQ] = useState<number>(50);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? 50 : index);
  };

  const faqs = [
    {
      question: "Who can donate blood?",
      answer: "Most healthy adults aged 18-65 can donate blood. There are some eligibility requirements, such as minimum weight and hemoglobin levels."
    },
    {
      question: "How often can I donate?",
      answer: "You can typically donate whole blood every 56 days, or up to 6 times per year."
    },
    {
      question: "Does it hurt to donate blood?",
      answer: "The actual blood draw is generally painless, but you may feel a slight pinch or sting when the needle is inserted. Our staff is highly trained to make the process as comfortable as possible."
    },
    {
      question: "What should I do before donating?",
      answer: "It's recommended to drink plenty of fluids and have a snack before your donation appointment. Avoid skipping meals, as this can increase the risk of feeling lightheaded."
    }
  ];

  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <Hero imageUrl="https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/448361251_18027536972504500_6161641216015918584_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeExlLeBSVUmiWltrgF5tkBi-wcQ1iIMmPT7BxDWIgyY9HJcHs69i4s0pXnEqcrPbzsOfPx-1yUZfduwibVb78Yp&_nc_ohc=ZAcNPX4_o5AQ7kNvgEkLKTj&_nc_ht=scontent-sof1-1.xx&oh=00_AYD3vEOr0Cf_nnzRmnyq6rg7pUkyDJ5IecljgUP9b6ApMQ&oe=66B2C431" />
      <main className="flex-1 flex justify-center items-center">
        <section className="py-20 bg-background w-full max-w-7xl">
          <div className="container">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-center mb-8">Eligibility Criteria</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Age", content: "You must be between the ages of 18 and 65 to donate blood." },
                    { title: "Weight", content: "You must weigh at least 110 pounds to donate blood." },
                    { title: "Health Conditions", content: "You must be in good general health and free from any infectious diseases or other conditions that could affect the safety of the blood supply." },
                    { title: "Medications", content: "Certain medications may affect your eligibility to donate blood. Please inform our staff of any medications you are currently taking." },
                    { title: "Travel History", content: "If you have recently traveled to certain regions, you may need to wait a period of time before donating blood to ensure the safety of the blood supply." }
                  ].map((item, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <h3 className="text-lg font-medium">{item.title}</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-center mb-6">FAQs</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="cursor-pointer" onClick={() => toggleFAQ(index)}>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <h4 className="text-lg font-medium">{faq.question}</h4>
                        {openFAQ === (index + 1) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </CardHeader>
                      {openFAQ === index && (
                        <CardContent>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <h3 className="text-2xl font-bold">Pre-Donation Guidelines</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <p className="text-muted-foreground">
                          Drink plenty of fluids in the days leading up to your donation.
                        </p>
                      </li>
                      <li>
                        <p className="text-muted-foreground">
                          Eat a healthy meal and avoid skipping meals before your appointment.
                        </p>
                      </li>
                      <li>
                        <p className="text-muted-foreground">Get a good night&apos;s sleep the night before.</p>
                      </li>
                      <li>
                        <p className="text-muted-foreground">Avoid alcohol for 24-48 hours prior to your donation.</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <h3 className="text-2xl font-bold">Post-Donation Care</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <p className="text-muted-foreground">
                          Drink plenty of fluids and have a snack to help replace the donated blood.
                        </p>
                      </li>
                      <li>
                        <p className="text-muted-foreground">Avoid strenuous activity for the rest of the day.</p>
                      </li>
                      <li>
                        <p className="text-muted-foreground">
                          If you experience any dizziness, lightheadedness, or other unusual symptoms, contact us
                          immediately.
                        </p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
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