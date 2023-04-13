import { StyledHomePage } from "./style"
import { NavBar } from "../../components/NavBar"
import { Header } from "../../components/Header"
import { Main } from "../../components/Main"
import { useContext, useEffect, useState } from "react"
import { api } from '../../services/api.js';
import { TitleMain } from "../../components/TitleMain"
import { TechList } from "../../components/TechList"
import { Modal } from "../../components/Modal"
import { UserContext } from "../../contexts/UserContext/UserContext"

export const Home = () => {
    const {user, setUser, modal} = useContext(UserContext)

    useEffect(() => {
        async function loadInfo() {
            try {
                const id = localStorage.getItem("@USERID")
                const response = await api.get(`/users/${id}`)
                    .then(res => setUser(res.data));
                return response
            } catch (error) {
                return error
            }
        }
        loadInfo()
    }, [])
    return (
        <StyledHomePage>
            <NavBar />
            <Header state={user} />
            <Main>
                <TitleMain />
                <TechList />
            </Main>
            {modal && <Modal />}
        </StyledHomePage>
    )
}