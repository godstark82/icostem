export default function Hero() {
    return (
        <div className="bg-secondary pb-4">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <img
                        src="images/simdte-logo-hero.png"
                        alt="SIMDTE Logo"
                        className="max-w-xl w-full h-full"
                    />
                </div>
                <div className="flex justify-evenly items-center">
                    <div className="text-center text-white">
                        <button className="border border-white text-light px-6 py-2 hover:bg-white hover:text-secondary transition-colors">Submit Paper</button>
                    </div>
                    <div className="text-center text-white bg-primary p-2">
                        <p className="text-white">14-15 October</p>
                    </div>
                    <div className="text-center text-white">
                        <img src="images/scopus-logo-hero.png" alt="SIMDTE Logo" className="max-w-[150px] w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}