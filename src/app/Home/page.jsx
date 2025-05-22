"use client";
import React from "react";
import Image from "next/image"
import styles from "./Home.module.css";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";
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
                   <h3  className={styles.subtitle}> 2TDS1 - Atividade Avaliativa Front End</h3>
                   <p className={styles.text}>Amados Docentes: Thiago Ferreira e Marcelo Carboni</p>
                   <h3  className={styles.subtitle}> Conheça a API Estudantes e Projetos:</h3>
                   <p className={styles.text}>Esta API possui 2 entidades: Estudantes e Projetos, onde cada Estudante possui seu projeto relacionado, com o proósito de gerenciar os alunoes de forma eficaz permitindo a visualização de suas atividades e informações pessoais.  </p>
                  <Button onClick={() => router.push("/Estudantes")}
                    text="Clique aqui para acessar a API"
                   />
                </div>
            </div>
        </div>
    );
}
