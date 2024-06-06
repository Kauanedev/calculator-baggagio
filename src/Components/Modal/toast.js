import React from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css'

function Toast() {
    const notify = () => toast('⚠️ Calculadora Versão 1.0', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });;

    return (
        <div>
            <button onClick={notify}>?</button>
            <ToastContainer draggable="mouse" limit={3} />
        </div>
    );
}

export default Toast;