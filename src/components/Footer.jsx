const Footer = ()=>{
    return(
        <>
        <div class={'footer'}>
           <p> © {new Date().getFullYear()} Pho Thin</p>
           <p> Host On : <a href="https://vercel.com/">Vercel</a></p>
           <p> Power By : <a href="https://vitejs.dev/">Vite</a></p>
           <p> Created With : <a href="https://preactjs.com/">Preact</a></p>
           <a href="https://github.com/phothinmg/maharbote" target="_blank"  aria-label="ghlink"><img src="/github.svg" style={{marginLeft:10,width:24,height:24,marginTop:7}} alt={'gitgub'}/></a>
        </div>
        
        </>
    )

}
export default Footer