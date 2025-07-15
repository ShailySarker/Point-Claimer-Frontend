import Banner from "./Components/Banner";
import FAQ from "./Components/FAQ";
import Features from "./Components/Features";

const Home = () => {
    return (
        <>
            <Banner />
            <Features/>
            {/* <PointsClaim />
            <AddUser /> */}
            <FAQ/>
        </>
    );
};

export default Home;