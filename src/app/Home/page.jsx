"use client";
import React from "react";
import Image from "next/image"
import styles from "./Home.module.css";
import { useRouter } from "next/navigation";


export default function Home() {

    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.homeCard}>
                <div className={styles.homeImage}>
                    <Image 
                    src="/images/Giovanna.jpeg"
                    alt="Giovanna"
                    width={300}
                    height={200}
                    className={styles.image}
                    />
                </div>
                <div className={styles.homeContent}>
                   <h1 className={styles.title}>Giovanna Caron de Barros</h1>
                   <h2  className={styles.subtitle}> 2TDS1</h2>
                   <p>Amados Docentes: Thiago Ferreira e Marcelo Carboni</p>
                   <h2  className={styles.subtitle}> Conheça a API Estudantes e Projets</h2>
                   <p>Esta API possui 2 entidades: Estudantes e Projetos, onde cada Estudante possui seu projeto relacionado, com o proósito de gerenciar os alunoes de forma eficaz permitindo a visualização de suas atividades e informações pessoais.  </p>
                   <button className={styles.button} 
                   onClick={() => router.push("/Estudantes")} 
                   prefetch={true}
                   > Acessar API
                   </button>


                </div>
            </div>
        </div>
    );
}
