"use client";
import React, { use } from "react";
import axios from "axios";
import Image from "next/image";
import {Pagination, Modal, Card, Skeleton } from "antd";
import { ToastContainer, toast} from "react-toastify";
import { useEffect, useState } from "react";
import styles from "./Estudantes.module.css";

const Headers = {"x-api-key" : process.env.NEXT_PUBLIC_API_KEY};

export default function Estudantes() {
    
    const [data, setData] = useState({
        estudantes: [], 
        loading: true,
        current: 1,
        pageSize:0 
    });

    const [modalInfo, setModalInfo] = useState({
        visible: false,
        estudante: null,
        email: null,
        projetos_nome: null,
        loading:false,
    })

    useEffect (() => {
        const fetchEstudantes = async () => {
            try{
                const { data : estudantes} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/estudantes`,
                    {headers: Headers}
                );
                setData({estudantes, loading: false, current: 1, pageSize: 5});
            }
            catch(error){
                console.error("Erro ao buscar estudantes:", error);
                toast.error("Erro ao buscar estudantes");
                setData((d) => ({...d, loading: false}));
            }
        };
        fetchEstudantes();
        
},[])

const openModal = async (estudante) => {
    setModalInfo({visible: true, estudante, email:null, projetos_nome:null, loading:true})

    try{
        const { data : projetos_nome} = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/estudantes/${estudante.id}`,
            {
                headers: Headers
            }
        );
        setModalInfo((m)=> ({...m, projetos_nome, email: null, loading:false}))
    } catch(error){
        toast.error("Erro ao buscar informações do estudante");
        setModalInfo((m)=> ({...m, loading:false}))
    };
}

const paginatedEstudantes = () => {
    const start = (data.current - 1) * data.pageSize;
    return data.estudantes.slice(start, start + data.pageSize);
  };
    
    return (
        <div>
            <h1 className={styles.ApiTitle}> Lista de Estudantes e seus Projetos </h1>
       
        <div className={styles.cardsContainer}>
        {paginatedEstudantes().map((estudante) => (
            <Card
            key={estudante.id}
            className={styles.card}
            hoverable
            onClick={() => openModal(estudante)}
            cover={
                <Image 
                alt={estudante.nome}
                src={estudante.photo ? estudante.photo : "/images/220.png"}
                width={220}
                height={220}
                />
            }
            >
            <Card.Meta
            title={estudante.nome}/>
            </Card>
        ))}

        </div>

        {/* Modal */}

        <Modal
        title={`Informações do Estudantes ${modalInfo.estudante?.nome}`} 
        open={modalInfo.visible}
        onCancel={() =>
            setModalInfo( {
                visible: false,
                estudante: null,
                email:null,
                projetos_nome:null,
                loading:false,
            })
        }
        onOk={()=>
            setModalInfo({
                visible: false,
                estudante: null,
                email:null,
                projetos_nome:null,
                loading:false,
            })
        }
        >
            {modalInfo.loading ?
            (<Skeleton active />

            ): modalInfo.projetos_nome ? (
                <div
                className={styles.modalContent}>
                    <p className={styles.label}> </p>
                </div>
            )
        }
        </Modal>

        {/* Paginação  ------- */}

        <Pagination 
        className={styles.pagination}
        current={data.current}
        pageSize={data.pageSize}
        total={data.estudantes.length}
        onChange={(page, size) => {
                setData((d) => ({...d, current: page, pageSize: size}));
        }}
        showSizeChanger
        pageSizeOptions={["5", "10", "100"]}
        />

    </div>
    );
}
