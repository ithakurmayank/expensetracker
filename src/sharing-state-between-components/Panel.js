export default function Panel({ children , onShow , title , isActiveProp }){

    

    return(
        <>
            <h1>{title}</h1>
            { isActiveProp ?
                    (<p>{children}</p>)
                
                :
                    (<button onClick={onShow}>Show</button>)
                
            }
        </>

    )
}
