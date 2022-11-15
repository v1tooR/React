import './social.css'

export function Social({children, url}){
    return(
        <a href={url} className='social' rel="noopener noreferrer"target="_blank">
            {children}
        </a>
    )
}