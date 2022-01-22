import React from 'react'
import './NotFound.css'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

    const navigate = useNavigate()


  return (
  <div className="notfound">
      <h1>Oops, cette page n'existe pas !</h1>
      <button onClick={() => navigate("/")}>Retour à la page d'accueil</button>
  </div>
  )
}