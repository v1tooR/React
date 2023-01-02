function FirstComponent(){
    const name = "Matheus"

    return(

        <div className="component">
            {/**é possível colocar variáveis */}
            <p>Primeiro component</p>
            <p>Nome: {name}</p>
        </div>
        
    )
}

export default FirstComponent