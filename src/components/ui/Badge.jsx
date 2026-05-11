import { Link } from 'react-router-dom'

export default function Badge({ link, text, link2, text2 }) {
    return (
        <div>
            <Link to="/">
                Главная
            </Link>
            /
            <Link to={link} target="_blank" rel="noopener noreferrer">
                {text}
            </Link>
            
            {
                link2 &&
                <Link to={link2} target="_blank" rel="noopener noreferrer">
                    {text2}
                </Link>
            }
        </div>
    )
}
