import Image from "next/image"
import { getArticles } from "@/lib/notion"
import { BlurIn } from "./ui/Blur-in";

async function Hero() {

    const articles = await getArticles();
    console.log(articles);

    return (
        <div className="w-full flex flex-col items-center">
            <Image
                src="/images/deborah.png"
                alt="Hero Image"
                width={200}
                height={200}
                className="rounded-full border-5 border-theme-lime mb-12"
            />
            <BlurIn>deborah reads a lot.</BlurIn>

            <p className="tracking-tight">✦ books • essays • things worth rereading ✦</p>
            {/* <p className="tracking-tight">✦ deborahreadsalot@gmail.com ✦</p> */}
        </div>
    )
}

export default Hero