"use client";
import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Estudantes.module.css";

const HEADERS = {"api-key" : process.env.NEXT_PUBLIC_API_KEY};

export default function Estudantes() {

    const [isLoading, setIsLoading] = useState(true);
    const [Estudantes, setEstudantes] = useState([]);


    const fetchEstudantes = asynt () => {
        try {
            const response = await Axios.get(apiURL);
            setEstudantes(response.data);
            setIsLoading(false);
        }
    }
    
    
    return (
        <div className={styles.container}>
            <h1>Oi</h1>
            <p>sei lá</p>
        </div>
    );
}
