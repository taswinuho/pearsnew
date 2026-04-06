import Header from "@/components/header"
import Footer from "@/components/footer"
import { RegisterHero } from "@/components/register-hero"
import { RegistrationForm } from "@/components/registration-form"
import { RegistrationBenefits } from "@/components/registration-benefits"

export const metadata = {
  title: "Register | PEARS - Pushbike Events and Ranking System",
  description: "Register your young rider for PEARS pushbike racing events and start their racing journey today.",
}

export default function RegisterPage() {
  return (
    <main className="relative">
      <Header />
      <RegisterHero />
      <div className="relative z-10">
        <RegistrationBenefits />
        <RegistrationForm />
        <Footer />
      </div>
    </main>
  )
}
