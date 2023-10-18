import PropTypes from 'prop-types';


const Coffee = ({ cof }) => {

    const { name, chef, supplier, taste, category, details, photo } = cof;

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
                        <button className="btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;

Coffee.propTypes = {
    cof: PropTypes.object
}