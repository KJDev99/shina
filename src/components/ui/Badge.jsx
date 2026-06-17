import { Link } from 'react-router-dom'

export default function Badge({ link, text, link2, text2 }) {
    return (
        <div className="flex items-center gap-2 text-[12px] sm:text-[14px]">
            <Link to="/" className="text-black hover:text-[#355094] transition-colors">
                Главная
            </Link>
            <span className="text-[#999999] text-[10px]">❯</span>
            {text2 ? (
                <>
                    {link ? (
                        <Link to={link} className="text-black hover:text-[#355094] transition-colors">
                            {text}
                        </Link>
                    ) : (
                        <span className="text-black">{text}</span>
                    )}
                    <span className="text-[#999999] text-[10px]">❯</span>
                    {link2 ? (
                        <Link to={link2} className="text-black hover:text-[#355094] transition-colors">
                            {text2}
                        </Link>
                    ) : (
                        <span className="text-[#999999]">{text2}</span>
                    )}
                </>
            ) : (
                <span className="text-[#999999]">{text}</span>
            )}
        </div>
    )
}
