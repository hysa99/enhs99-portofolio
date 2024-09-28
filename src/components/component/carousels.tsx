/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/lvQNV2lEDio
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { JSX, SVGProps } from "react";
import BookingGlobetrotterHub from '/public/images/BookingGlobetrotterHub.png';
import CampaignGlobetrotterHub from '/public/images/CampaignGlobetrotterHub.png';
import ClientGlobetrotterHub from '/public/images/ClientGlobetrotterHub.png';
import DashboardGlobetrotterHub from '/public/images/DashboardGlobetrotterHub.png';
import DashboardTraveblo from '/public/images/DashboardTraveblo.png';
import InsightTraveblo from '/public/images/InsightsTraveblo.png';
import PostTraveblo from '/public/images/PostTraveblo.png';
import TravebloSearch from '/public/images/TravebloSearch.png';
import WelcomeGlobetrotterHub from '/public/images/WelcomeGlobetrotterHub.png';
import WelcomeTraveblo from '/public/images/WelcomeTraveblo.png';

export function CarouselsTraveblo() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel className="rounded-lg overflow-hidden">
        <CarouselContent>
          <CarouselItem>
            <div className="relative aspect-[16/9]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-semibold text-white">Welcome Page</h3>
              </div>
              <Image src={WelcomeTraveblo} alt="Slide 1" className="object-cover" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-[16/9]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-semibold text-white">Search Page</h3>
              </div>
              <Image src={TravebloSearch} alt="Slide 2" className="object-cover" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-[16/9]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-semibold text-white">Post Page</h3>
              </div>
              <Image src={PostTraveblo} alt="Slide 3" className="object-cover" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-[16/9]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-semibold text-white">Dashboard Page</h3>
              </div>
              <Image src={DashboardTraveblo} alt="Slide 4" className="object-cover" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-[16/9]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-semibold text-white">Insight Page</h3>
              </div>
              <Image src={InsightTraveblo} alt="Slide 5" className="object-cover" />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-primary transition-colors">
          <ChevronLeftIcon className="h-8 w-8" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-primary transition-colors">
          <ChevronRightIcon className="h-8 w-8" />
        </CarouselNext>
      </Carousel>
    </div>
  )
}


export function CarouselsGlobetrotterHub() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel className="rounded-lg overflow-hidden">
        <CarouselContent>
          <CarouselItem>
            <div className="relative aspect-[16/9]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-semibold text-white">Welcome Page</h3>
              </div>
              <Image src={WelcomeGlobetrotterHub} alt="Slide 1" className="object-cover" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-[16/9]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-semibold text-white">Dashboard Page</h3>
              </div>
              <Image src={DashboardGlobetrotterHub} alt="Slide 2" className="object-cover" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-[16/9]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-semibold text-white">Client Page</h3>
              </div>
              <Image src={ClientGlobetrotterHub} alt="Slide 3" className="object-cover" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-[16/9]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-semibold text-white">Campaign Page</h3>
              </div>
              <Image src={CampaignGlobetrotterHub} alt="Slide 4" className="object-cover" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-[16/9]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-semibold text-white">Booking Page</h3>
              </div>
              <Image src={BookingGlobetrotterHub} alt="Slide 5" className="object-cover" />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-primary transition-colors">
          <ChevronLeftIcon className="h-8 w-8" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-primary transition-colors">
          <ChevronRightIcon className="h-8 w-8" />
        </CarouselNext>
      </Carousel>
    </div>
  )
}







function ChevronLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}