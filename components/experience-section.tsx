import { Clock, CheckCircle, Gift } from "lucide-react"
import Link from "next/link"
import AnimatedElement from "@/components/animations/animated-element"
import StaggeredAnimation from "@/components/animations/staggered-animation"

export default function ExperienceSection() {
  const benefits = [
    {
      icon: Clock,
      title: "UN MOMENT POUR SOI DE QUALITÉ",
      description:
        "Trouvez les meilleurs établissements de beauté proches de chez vous en quelques secondes grâce à des avis 100% certifiés.",
    },
    {
      icon: CheckCircle,
      title: "RÉSERVATION INSTANTANÉE",
      description: "Prenez rendez-vous à tout moment, même en dehors des heures d'ouverture habituelles.",
    },
    {
      icon: Gift,
      title: "BÉNÉFICIEZ D'OFFRES EXCLUSIVES",
      description: "Accédez à des promotions et réductions disponibles uniquement via notre plateforme.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedElement animation="slideUp" delay={100} triggerOnce={false}>
          <div className="inline-block rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#002366] mb-4">
            UNE NOUVELLE EXPÉRIENCE BEAUTÉ
          </div>
        </AnimatedElement>
        <AnimatedElement animation="flipUp" delay={200} triggerOnce={false}>
          <p className="text-sm sm:text-xl font-medium text-[#002366] mb-8">
            Rejoignez-nous en avant-première pour ne rien rater de nos actualités
          </p>
        </AnimatedElement>

        <StaggeredAnimation
          staggerDelay={150}
          mobileStaggerDelay={75}
          animation="scaleIn"
          className="grid md:grid-cols-3 gap-8 mt-12"
          triggerOnce={false}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="wave-card playing">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="card-content">
                  <IconComponent className="card-icon" />
                  <div className="card-title">{benefit.title}</div>
                  <div className="card-description">{benefit.description}</div>
                </div>
              </div>
            )
          })}
        </StaggeredAnimation>

        <AnimatedElement animation="slideUp" delay={600} triggerOnce={false}>
          <div className="mt-12 text-center">
            <Link
              href="#clients"
              className="btn-flip inline-flex justify-center items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-[#002366] hover:bg-[#001c52] transition-colors"
            >
              <span className="btn-text-original">
                <span className="hidden sm:inline">JE REJOINS EN AVANT-PREMIÈRE</span>
                <span className="sm:hidden">REJOINDRE</span>
              </span>
              <span className="btn-text-hover">
                <span className="hidden sm:inline">Commencer maintenant</span>
                <span className="sm:hidden">Commencer</span>
              </span>
            </Link>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}
