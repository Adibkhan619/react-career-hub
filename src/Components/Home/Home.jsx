import Categories from "../Categories/Categories";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Hero from "../Hero/Hero";




const Home = () => {
    return (
        <div>
            <h2>I am from home</h2>
            <Hero></Hero>
            <Categories></Categories>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;