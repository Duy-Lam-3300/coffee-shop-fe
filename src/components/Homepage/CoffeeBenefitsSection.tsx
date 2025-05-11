import Image from "next/image";
import "@/styles/shape.css";
import { Coffee, Menu, Home, Zap, Leaf, Star } from 'lucide-react';

<Coffee size={24} color="#3E2723" />


type HexagonProps = {
    label: string;
    content: string;
    Icon: React.ElementType
};
export default function CoffeeBenefitsSection() {
    const imageLink = "/BlackCupFinal.png"
    const benefitContentLeft: HexagonProps[] = [
        { label: "Premium Quality", content: "Freshly roasted and ground daily to preserve the original rich flavor.", Icon: Coffee },
        { label: "Clean & Traceable Sourcing", content: "100% traceable coffee beans, eco-friendly and sustainable.", Icon: Leaf },
        { label: "Exclusive Design", content: "Artistic CoffeLa cup style, memorable and unique brand identity.", Icon: Star },
    ]
    const benefitContentRight: HexagonProps[] = [
        { label: "Diverse Menu", content: "Espresso, Latte, Cold Brew… crafted to suit every taste preference.", Icon: Menu },
        { label: "Cozy Atmosphere", content: "Relaxing and friendly space, perfect for work or friendly meetups.", Icon: Home },
        { label: "Fast & Dedicated Service", content: "Professional team, passionately serving excellence in every cup.", Icon: Zap },
    ]
    const headers = ["All flavors one", "Cup up & slurp"]
    const BenifitItemLeft = ({ label, content, Icon }: HexagonProps) => {
        return (
            <div className="flex items-center gap-4 relative w-full">
                <div className="hexagon flex items-center justify-center  ">
                    <Icon size={50} color="white" />
                </div>
                <div className="">
                    <div className="font-bold text-xl">{label}</div>
                    <div className="">{content}</div>
                </div>
            </div>
        )
    }
    const BenifitItemRight = ({ label, content, Icon }: HexagonProps) => {
        return (
            <div className="flex items-center  gap-4 relative w-full">
                <div className="flex flex-col items-end">
                    <div className="font-bold text-xl">{label}</div>
                    <div className="text-end">{content}</div>
                </div>
                <div className="hexagon flex items-center justify-center ">
                    <Icon size={50} color="white" />
                </div>
            </div>
        )
    }
    return (
        <div className="w-full bg-[var(--background)]">
            <div className="max-w-7xl mx-auto h-[70vh] relative">
                <div className="flex bg-[var(--main-color)] justify-between items-center px-12 text-2xl font-semibold h-[8vh] absolute w-full top-16">
                    {headers.map((item, index) =>
                        <p key={index} className="text-white">
                            {item}
                        </p>)}
                </div>
                <div className=" flex justify-between  items-end">
                    <div className="flex flex-col items-center justify-start gap-20 w-[30%] ">
                        {benefitContentLeft.map((item, index) => (
                            <BenifitItemLeft {...item} key={index} />
                        ))}
                    </div>
                    <div className="relative translate-y-16"><Image src={imageLink} alt="Cup of Coffee" width={300} height={250} /></div>
                    <div className="flex flex-col items-center justify-start gap-20 w-[30%] ">
                        {benefitContentRight.map((item, index) => (
                            <BenifitItemRight {...item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}