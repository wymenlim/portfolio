
type CardProp = 
{
    title?:string;
    children:React.ReactNode;
}

export default function Card({children, title}:CardProp){
    return(
        <div className="w-full h-full rounded-2xl bg-zinc-900/80 border border-white/10 shadow-md p-6">
            <h3 className="text-white text-3xl font-semibold">{title}</h3>
            <p className="text-2xl text-white/70 mt-2">
                {children}
            </p>
        </div>
    )
}