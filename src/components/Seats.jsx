import React, { useContext, useState } from 'react';
import DataContext from '../Context/DataContext';

const Seats = ({ movieId }) => {
    const { datas } = useContext(DataContext);

    const selectedMovie = datas.find((data) => data.id === movieId);
    const seatPrice = 100;

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [bookedSeats, setBookedSeats] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [totalCost, setTotalCost] = useState(0);

    const handleSeatClick = (rowIndex, seatIndex) => {
        const seatId = `${movieId}-${rowIndex}-${seatIndex}`;

        if (bookedSeats.includes(seatId)) {
            return;
        }

        setSelectedSeats((prevSeats) => {
            if (prevSeats.includes(seatId)) {
                return prevSeats.filter((seat) => seat !== seatId);
            } else {
                return [...prevSeats, seatId];
            }
        });
    };

    const generateSeatsGrid = () => {
        const rows = Array.from({ length: 10 }).map((_, rowIndex) => (
            <div key={rowIndex} className='flex'>
                {Array.from({ length: 10 }).map((_, seatIndex) => (
                    <span
                        key={seatIndex}
                        onClick={() => handleSeatClick(rowIndex, seatIndex)}
                        className={`w-4 h-4 m-2 border border-gray-500 cursor-pointer ${selectedSeats.includes(`${movieId}-${rowIndex}-${seatIndex}`) ? 'bg-green-500' : bookedSeats.includes(`${movieId}-${rowIndex}-${seatIndex}`) ? 'bg-red-500' : 'bg-white'}`}
                    ></span>
                ))}
            </div>
        ));

        return rows;
    };

    const handleBookSeats = () => {
        setBookedSeats((prevBookedSeats) => [...prevBookedSeats, ...selectedSeats]);
        setSelectedSeats([]);
        setTotalCost((prevTotalCost) => prevTotalCost + selectedSeats.length * seatPrice);
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <h3>{selectedMovie.movieName} Seats:</h3>
            <div className='w-max-content h-max-content'>
                {generateSeatsGrid()}
            </div>
            {selectedSeats.length > 0 && (
                <div className='mt-4'>
                    <p>Selected Seats: {selectedSeats.length}</p>
                    <p>Amount: {selectedSeats.length * seatPrice} rupees</p>
                </div>
            )}
            <button onClick={handleBookSeats} className='border border-white p-2 rounded-md font-bold align-baseline mt-4  hover:bg-white hover:text-slate-900'>Lets Book</button>
        </div>
    );
};

export default Seats;
