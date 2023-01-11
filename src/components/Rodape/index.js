import './Rodape.css';

const Rodape = () => {

    const imgFundo = {
        backgroundImage : `url(/images/fundo.png)`,
    }
    return (
        <footer style={imgFundo} className="footer">
            <div className='icones-sociais'>
                <img src="/images/fb.png" alt="Facebook" />
                <img src="/images/tw.png" alt="Twiter" />
                <img src="/images/ig.png" alt="Instagram" />
            </div>

            <div className='logo-organo'>
                <img src="/images/logo.png" alt="Logo Organo" />
            </div>

            <div className='patente'>
              <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Rodape;