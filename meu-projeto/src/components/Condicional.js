import { useState } from 'react'


function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function EnviarEmail(e) {
        e.preventDefault()
        console.log('Enviou email')
        setUserEmail(email)

    }

    function limparEmail(){
        const input = document.querySelector('#iemail')
        input.value = ''
        setUserEmail('')
         
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" id="iemail" placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)} />
                <button onClick={EnviarEmail} type="submit">Enviar Email</button>
               
                {userEmail && (
                    <div>
                        <br/>
                        <p>O e-mail do usuario é: {userEmail}

                        </p>

                    </div>
                )}

                    <button onClick={limparEmail}>Limpar dados</button>    

            </form>
        </div>

    )


}

export default Condicional