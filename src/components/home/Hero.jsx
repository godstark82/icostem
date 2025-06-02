'use client'
export default function Hero() {
    return (
        <div className="bg-secondary pb-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-center py-4 md:py-6">
                    <img
                        src="images/simdte-logo-hero.png"
                        alt="SIMDTE Logo"
                        className="max-w-[280px] md:max-w-xl w-full h-auto"
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center text-white w-full md:w-auto">
                        <button className="border border-white text-light px-6 py-2 hover:bg-white hover:text-secondary transition-colors w-full md:w-auto" onClick={() => window.location.href = '/upload-paper'}>
                            Submit Paper
                        </button>
                    </div>
                    <div className="text-center text-white bg-primary p-2 w-full md:w-auto">
                        <p className="text-white text-lg md:text-xl font-semibold">14-15 October</p>
                    </div>
                    <div className="text-center text-white w-full md:w-auto">
                        <img
                            src="images/scopus-logo-hero.png"
                            alt="Scopus Logo"
                            className="max-w-[120px] md:max-w-[150px] w-full h-auto mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}