import * as React from 'react';
import './FormRequestServices.css';

export default function FormRequestServices(){
    return(
        <form action="https://formsubmit.co/belhahadri@outlook.com" method="POST">
            <label for="name">Name</label>
            <input type="text" name="name" required placeholder='enter your name'></input>
            <label for="mail">E-mail</label>
            <input type="email" name="email" required placeholder='enter your e-mail'></input>
            <label for="services">Choose a service:</label>
            <select id="services" name="services" required>
                <option value="IDENTITÉ DE MARQUE + POSITIONNEMENT">IDENTITÉ DE MARQUE + POSITIONNEMENT</option>
                <option value="CONCEPTION + DÉVELOPPEMENT DE SITE WEB">CONCEPTION + DÉVELOPPEMENT DE SITE WEB</option>
                <option value="PUBLICITÉ + CONTENU DE MARQUE">PUBLICITÉ + CONTENU DE MARQUE</option>
                
            </select>
            <button type="submit">Send</button>
        </form>
    );
}