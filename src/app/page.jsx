import Hero from "../components/home/Hero";
import Highlights from "../components/home/Highlights";
import KeynoteSpeakers from "../components/home/KeynoteSpeakers";
import Overview from "../components/home/Overview";
import Tracks from "../components/home/Tracks";
import ImportantDates from "../components/home/ImportantDates";

const Home = () => {
    return (
        <>
            <Hero />
            <Overview />
            <Tracks />
            <ImportantDates />
            <KeynoteSpeakers />
            <Highlights />
        </>
    )
}

export default Home;