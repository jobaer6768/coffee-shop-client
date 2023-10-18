import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Coffee from "../Coffee/Coffee";


const Home = () => {

    const loadedCoffees = useLoaderData();

    const [coffees, setCoffees] = useState(loadedCoffees);

    return (
        <div className="my-20 container mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Our Popular Products</h2>
                <Link to="/addCoffee">
                    <button className="btn bg-[#E3B577] text-white font-semibold">Add Coffee</button>
                </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    coffees.map(cof => <Coffee
                        key={cof._id}
                        cof={cof}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></Coffee>)
                }
            </div>

        </div>
    );
};

export default Home;