import { useLoaderData } from "react-router-dom";


const Home = () => {

    const loadedCoffees = useLoaderData();

    return (
        <div>
            <h1 className="text-6xl text-red-400">{loadedCoffees.length}</h1>
        </div>
    );
};

export default Home;