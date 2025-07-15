import Hero from "../components/home/Hero";
import Highlights from "../components/home/Highlights";
import KeynoteSpeakers from "../components/home/KeynoteSpeakers";
import Overview from "../components/home/Overview";
import Tracks from "../components/home/Tracks";
import ImportantDates from "../components/home/ImportantDates";
import MinisterSection from "../components/home/MinisterSection";
import Patners from "../components/home/Patners";

const Home = () => {
    return (
        <>
            <Hero />
            <MinisterSection />
            <Overview />
            <Tracks />
            <ImportantDates />
            <KeynoteSpeakers />
            <Patners />
            <Highlights />
        </>
    )
}

export default Home;