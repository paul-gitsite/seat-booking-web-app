import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'
import Seats from './Seats'
import Instruction from './Instruction'

const Home = () => {

  const { datas, handleMovieChange, selectedMovieId } = useContext(DataContext)


  return (
    <>
      <Instruction />
      <div className='w-3/5 m-auto p-6 flex flex-col items-center justify-center' >
        <h5 className='uppercase font-bold text-xl' >Select a movie</h5>
        <select className='text-slate-900 mt-4 mb-24' onChange={handleMovieChange}>
          <option value="">Select a movie</option>
          {datas.map((data) => (
            <option key={data.id} value={data.id}>
              {data.movieName}
            </option>
          ))}
        </select>
        {selectedMovieId && <Seats movieId={selectedMovieId} />}
      </div>
    </>

  )
}

export default Home