// @ts-nocheck
import {ceDateTime,ceMmDateTime,ceMmTranslate,ceMmChronicle} from 'https://esm.sh/gh/phothinmg/burma/date-time-js/ceMmDateTime.js';
const Mmdate = () =>{
    var lang,x,mdt,ssy,mmy,mmm,mmd,yyz,astro,dgh,hod,hod2;
    lang = 1;
    x = new ceMmTranslate();
    mdt = new ceMmDateTime();
    ssy = 'သာသနာနှစ်' + ' ' + x.T(mdt.ToMString('&YYYY'),lang);
    mmy = 'မြန်မာ သက္ကရာဇ်'+ ' ' + x.T(mdt.ToMString('&yyyy'),lang);
    mmm = x.T(mdt.ToMString('&M'),lang);
    mmd = x.T(mdt.ToMString('&P &f'),lang) + ' ' + 'ရက်';
    if(ceMmDateTime.cal_yatyaza(mdt.mm,mdt.w) == 1) yyz = 'ရက်ရာဇာ';
    if(ceMmDateTime.cal_pyathada(mdt.mm,mdt.w) == 1) yyz = 'ပြသဒါး';
    if(ceMmDateTime.cal_pyathada(mdt.mm,mdt.w) == 2) yyz = 'မွန်းလွဲပြသဒါး';
    astro = x.T(`${mdt.astro}`,lang);
    dgh = 'နဂါးခေါင်း ' + ' ' + x.T(mdt.nagahle,lang) + ' ' + 'လှည့်';
    hod = x.T(`${mdt.holidays}`,lang);
    hod2 = x.T(`${mdt.holidays2}`,lang);
    var dt,y,m,d,h,n,s;
    dt = new Date();
    y = dt.getFullYear();
    m = dt.getMonth();
    d = dt.getDate();
    h = dt.getHours();
    n = dt.getMinutes();
    s = dt.getSeconds();
    var jd = ceDateTime.w2j(y,m,d,h,n,s);

    
    

    return(
        <>
        <div class={'c-container'}>
        <div class={'c-card'}>
        <p>{mmm}</p>
        <p>{mmd}</p>
        <p>{yyz}</p>
        <p>{astro}</p>
        <p>{dgh}</p>
        <p>{hod}</p>
        <p>{hod2}</p>
        </div>
        <div class={'c-card'}>
        <p>{mmm}</p>
        <p>{mmd}</p>
        <p>{yyz}</p>
        <p>{astro}</p>
        <p>{dgh}</p>
        <p>{hod}</p>
        <p>{hod2}</p>
        </div>
        <div class={'c-card'}>
        <p>{mmm}</p>
        <p>{mmd}</p>
        <p>{yyz}</p>
        <p>{astro}</p>
        <p>{dgh}</p>
        <p>{hod}</p>
        <p>{hod2}</p>
        </div>
        <div class={'c-card'}>
        <p>{mmm}</p>
        <p>{mmd}</p>
        <p>{yyz}</p>
        <p>{astro}</p>
        <p>{dgh}</p>
        <p>{hod}</p>
        <p>{hod2}</p>
        </div>
        <div class={'c-card'}>
        <p>{mmm}</p>
        <p>{mmd}</p>
        <p>{yyz}</p>
        <p>{astro}</p>
        <p>{dgh}</p>
        <p>{hod}</p>
        <p>{hod2}</p>
        </div>
        <div class={'c-card'}>
        <p>{mmm}</p>
        <p>{mmd}</p>
        <p>{yyz}</p>
        <p>{astro}</p>
        <p>{dgh}</p>
        <p>{hod}</p>
        <p>{hod2}</p>
        </div>
        <div class={'c-card'}>
        <p>{mmm}</p>
        <p>{mmd}</p>
        <p>{yyz}</p>
        <p>{astro}</p>
        <p>{dgh}</p>
        <p>{hod}</p>
        <p>{hod2}</p>
        </div>
        </div>
        <p>{ssy}</p>
        <p>{mmy}</p>
        
        
        <p>{jd}</p>
        
        
       
        </>
    )

}
export default Mmdate;