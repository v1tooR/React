type TweetProp = {
    text: string; // ? = tira a relevancia obrigatoria da propriedade
} // cria uma propriedade text como string

export function Tweet(prop: TweetProp){ //define que prop recebe de TweetProp
    return(
        <h3>{prop.text}</h3>
    ); // Mesmo nome do arquivo, como se fosse um package
}