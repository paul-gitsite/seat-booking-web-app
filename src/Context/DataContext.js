import React, { createContext, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const DataContext = createContext();

const DataProvider = ({ children }) => {

  const seats = () => {
    const seatsArray = [];

    for (let i = 1; i <= 100; i++) {
      seatsArray.push(<span key={i} className='w-16 h-16 bg-white m-2 border border-gray-500' />); 
    }
    return seatsArray;
  };


  const datas = [
    {
      id: 1,
      movieName: 'Interstellar',
      seats: seats()
    },
    {
      id: 2,
      movieName: "Inception",
      seats: seats()
    },
    {
      id: 3,
      movieName: "Opheneimar",
      seats: seats()
    },
    {
      id: 4,
      movieName: 'Dark Knight',
      seats: seats()
    }
  ];


  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [messages, setMessages] = useState([])
  const [isStrong, setIsStrong] = useState(false)

  const [show, setShow] = useState(false)
  const [popup, setPopup] = useState(false)

  const [selectedMovieId, setSelectedMovieId] = useState(null)

  const navigate = useNavigate()
  const passwordRef = useRef(null)

  const handlePassword = (e) => {

    setPassword(e.target.value)

    const minLength = 8
    const hasUppercase = (password) => /[A-Z]/.test(password);
    const hasLowercase = (password) => /[a-z]/.test(password);
    const hasNumeric = (password) => /\d/.test(password);
    const hasSpecialChar = (password) => /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const isStrongPasssword = password.length >= minLength && hasUppercase && hasLowercase && hasNumeric && hasSpecialChar;
    setIsStrong(isStrongPasssword)
    const newMessages = []

    if (password.length < minLength) {
      newMessages.push("Make it at least 8 characters.")
    }
    if (!hasUppercase(password)) {
      newMessages.push('Include at least one Uppercase letter.');
    }
    if (!hasLowercase(password)) {
      newMessages.push('Include at least one Lowercase letter.');
    }
    if (!hasNumeric(password)) {
      newMessages.push('Include at least one numeric character.');
    }
    if (!hasSpecialChar(password)) {
      newMessages.push('Include at least one special character.');
    }

    setMessages(newMessages)

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const admin = {
      username: "Paul",
      password: "Paul@2000"
    }

    let errMessage = ''

    if (userName === admin.username && password === admin.password) {
      errMessage = "form submitted sucessfully"
      navigate('/home')
    } else if (userName === admin.username && password !== admin.password) {
      errMessage = "Password is incorrect"
    } else if (userName !== admin.username && password === admin.password) {
      errMessage = "Username is incorrect"
    }

    if (errMessage) {
      setPopup(errMessage);
    }

    setUserName('')
    setPassword('')
  }

  const handleKeyDown = (e, nextInputRef) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      nextInputRef.current.focus();
    }
  };

  const handleMovieChange = (e) => {
    const selectedId = parseInt(e.target.value);
    console.log(e.target.value);
    setSelectedMovieId(selectedId);
  };

  const Popup = ({ errMessage, onClose }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-slate-800 p-8 rounded-md shadow-md text-center">
          <p className='text-white' >{errMessage}</p>
          <button className="border border-gray-500 px-4 py-2 mt-4 text-white" onClick={onClose}>
            Okay
          </button>
        </div>
      </div>
    );
  };

  const values = {
    userName,
    setUserName,
    password,
    setPassword,
    handlePassword,
    messages,
    isStrong,
    handleSubmit,
    show,
    setShow,
    handleKeyDown,
    passwordRef,
    popup,
    setPopup,
    datas,
    selectedMovieId,
    handleMovieChange,
  };

  return <DataContext.Provider value={values}>{children} {popup && <Popup errMessage={popup} onClose={() => setPopup('')} />}</DataContext.Provider>;
};

export { DataProvider };
export default DataContext;
