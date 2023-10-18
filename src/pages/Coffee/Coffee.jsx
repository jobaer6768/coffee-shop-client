import PropTypes from 'prop-types';
import Swal from 'sweetalert2'


const Coffee = ({ cof, coffees, setCoffees }) => {

    const { _id, name, chef, supplier, taste, photo } = cof;

    const handleDelBtn = id => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remainingCoffees = coffees.filter(cofee => cofee._id !== id);
                            setCoffees(remainingCoffees);
                        }
                    })
            }
        })
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="name" /></figure>
            <div className="flex justify-between items-center w-full p-6">
                <div>
                    <p>
                        <span className='font-semibold text-xl'>Name: </span>
                        <span className='opacity-90'>{name}</span>
                    </p>
                    <p>
                        <span className='font-semibold text-xl'>Chef: </span>
                        <span className='opacity-90'>{chef}</span>
                    </p>
                    <p>
                        <span className='font-semibold text-xl'>Taste: </span>
                        <span className='opacity-90'>{taste}</span>
                    </p>
                    <p>
                        <span className='font-semibold text-xl'>Supplier: </span>
                        <span className='opacity-90'>{supplier}</span>
                    </p>
                </div>
                <div className="">
                    <div className="btn-group btn-group-vertical space-y-2">
                        <button className="btn">View</button>
                        <button className="btn">Edit</button>
                        <button onClick={() => handleDelBtn(_id)} className="btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;

Coffee.propTypes = {
    cof: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.any
}