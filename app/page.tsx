import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionCard from "@/app/companions/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
        <section className="home-section">
            <CompanionCard
            id="123"
            name= "Neura the Brainy Explorer"
            topic ="Neural Netwrok of the brain"
            subject = "Science"
            duration={45}
            color = "#ffda6e"
            />
            <CompanionCard
                id="456"
                name= "Countsy the Number Wizard"
                topic ="Derivates and Integrals"
                subject = "Maths"
                duration={30}
                color = "#e5d0ff"
            />
            <CompanionCard
                id="789"
                name= "Verba the Vocabulary Builder"
                topic ="English Literature"
                subject = "Language"
                duration={30}
                color = "#BDE7FF"
            />

        </section>

        <section className="home-section">
            <CompanionsList
            title = "Recently completed Sessions"
            companions = {recentSessions}
            classNames = "w-2/3 max-lg:w-full"
            />
            <CTA />
        </section>
    </main>
  )
}

export default Page