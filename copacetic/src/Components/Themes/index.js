import './style.css'

function Themes({setTheme}) {

    return (
        <>
            <button onClick={()=>setTheme('cuttle')} className="btn cuttleBtn col-12 text-white pointer my-3">Cuttlefish</button>
            <button onClick={()=>setTheme('cuthbert')} className="btn cuthBtn fw-bold col-12 text-white pointer my-3">Cuthbert</button>
            <button onClick={()=>setTheme('wave')} className="btn waveBtn fw-bold col-12 text-white pointer my-3">Wave</button>
        </>
    )
}

export default Themes