import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const UpdateCoffee = () => {

    const loadedCoffees = useLoaderData();
    const { _id, name, chef, supplier, taste, category, details, photo } = loadedCoffees;
    console.log(loadedCoffees)

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photo };
        console.log(newCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className='container mx-auto'>
            <Link to="/">
                <button className="p-5 text-xs font-bold italic">Back to Home</button>
            </Link>
            <div className="bg-[#F4F3F0] p-24 font-medium my-20">
                <h2 className="text-3xl font-bold text-center mb-2">Update Coffee {name}</h2>
                
                <form onSubmit={handleUpdate} className="space-y-6">

                    {/* form 1st row */}
                    <div className="flex gap-6">
                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" defaultValue={name} placeholder="Enter Coffee Name " className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Chef</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="chef" defaultValue={chef} placeholder="Enter Chef Name " className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* form 2nd row */}
                    <div className="flex gap-6">
                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Supplier</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter Coffee Supplier " className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Taste</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="taste" defaultValue={taste} placeholder="Enter Taste Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* form 3rd row */}
                    <div className="flex gap-6">
                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Category</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="category" defaultValue={category} placeholder="Enter Coffee Category" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Details</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="details" defaultValue={details} placeholder="Enter Details Name " className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* form 4th row */}
                    <div className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={photo} placeholder="Enter Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Coffee" className="btn btn-block bg-[#D2B48C]" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;