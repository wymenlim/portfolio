
type CardProp = 
{
    title?:string;
    children:React.ReactNode;
}

export default function Card({children, title}:CardProp){
    return(
        <div className="inline-flex rounded-2xl bg-white/10 border border-white shadow-md p-4">
            <h3 className="text-white text-3xl font-semibold">{title}</h3>
            <p className="text-2xl text-white/70 mt-2">
                {children}
            </p>
        </div>
    )
}