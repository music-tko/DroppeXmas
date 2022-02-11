import Categories from "./Categories";

const Home = () => {
    return ( 
        <>
        <header className="hero-img">
            <div className="hero-text">
            <h1 className='headline'>Don't let Xmas Get the Droppe On you</h1>
            <h3>Your kids' wishlist delivered to you.</h3>
            </div>
        </header>
        <Categories />
        </>
     );
}
 
export default Home;