const Footer = ()=>{
    return(
        <>
        <div class={'footer'}>
           <p> © {new Date().getFullYear()} Pho Thin</p>
           <p> Host On : <a href="https://vercel.com/">Vercel</a></p>
           <p> Power By : <a href="https://vitejs.dev/">Vite</a></p>
           <p> Create With : <a href="https://preactjs.com/">Preact</a></p>
        </div>
        </>
    )

}
export default Footer