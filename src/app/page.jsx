import Hero from "../components/home/Hero";
import Highlights from "../components/home/Highlights";
import KeynoteSpeakers from "../components/home/KeynoteSpeakers";
import Overview from "../components/home/Overview";
import Tracks from "../components/home/Tracks";
import ImportantDates from "../components/home/ImportantDates";
import MinisterWelcome from "../components/home/MinisterWelcome";

const Home = () => {
    return (
        <>
            <Hero />
            {/* <MinisterWelcome /> */}
            <Overview />
            <Tracks />
            <ImportantDates />
            <KeynoteSpeakers />
            <Highlights />
        </>
    )
}

export default Home;