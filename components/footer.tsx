import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook } from "lucide-react"
import AnimatedElement from "@/components/animations/animated-element"

export default function Footer() {
  return (
    <footer className="bg-[#002366] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedElement animation="slideLeft" delay={100} triggerOnce={false}>
            <div>
              <Image
                src="/logo-white.png?height=40&width=140&query=WELLBE logo white"
                alt="WELLBE Logo"
                width={140}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-white/80 max-w-xs mb-4">
                La première plateforme beauté au Maroc qui connecte les clients aux meilleurs professionnels de beauté.
              </p>

              <div className="flex space-x-4">
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005.76 20.5a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.8-.5z" />
                  </svg>
                  <span className="sr-only">TikTok</span>
                </Link>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slideRight" delay={200} triggerOnce={false}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Prêt À Transformer La Beauté Au Maroc ?</h3>
              <div className="flex flex-col space-y-3">
                <Link
                  href="#clients"
                  className="btn-shine inline-flex justify-center items-center px-4 py-2 border border-white text-sm font-medium rounded-md text-white hover:bg-white/10 transition-colors"
                >
                  Rejoindre comme Client
                </Link>
                <Link
                  href="#professionnels"
                  className="btn-fill inline-flex justify-center items-center px-4 py-2 border border-white text-sm font-medium rounded-md text-white hover:bg-white/10 transition-colors"
                >
                  Rejoindre comme Professionnel
                </Link>
              </div>
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement animation="fadeIn" delay={400} triggerOnce={false}>
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} WELLBE. Tous droits réservés.</p>
          </div>
        </AnimatedElement>
      </div>
    </footer>
  )
}
