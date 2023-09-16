// ဝါထပ် နှစ်စစ်
//input: (my -myanmar year)
//output:  ( watat : intercalary month, [1=watat, 0=regular]
//fm : full moon day of 2nd Waso in jdn )
function rChkWatat(my) {
	var SY=1577917828/4320000;
	var LM=1577917828/53433336;
	var MO=1954168.050623;
	var ed,NM,TA,TW,watat=0,w2fm,yr,WO=0;
	ed=(SY*(my+3739))%LM;
	NM=8;
	TA=(SY/12-LM)*(12-NM);
	if(ed<TA) ed+=LM; 
	TW=LM-(SY/12-LM)*NM; 
	if(ed>=TW) watat=1;
	WO-=4/NM;
	if (my==1377) WO+=1; if (my==1344) watat=1; else if (my==1345) watat=0;
	w2fm=Math.round(SY*my+MO-ed+4.5*LM+WO);
	return {watat:watat,fm:w2fm};
};
// const y = 1335;
// const r = rChkWatat(y);
// console.log(r);
// { watat: 0, fm: 2441908 }
// ----------------------------------------------------------------------------------------------------------------------------------------//
// မြန်မာနှစ် စစ် 
// result //myt :year type 0= သာမန်နှစ် 1=ဝါလေးထပ် 2=ဝါကြီးထပ် / 
//watat : 1=watat, 0=regular,
//bw : big watat [1=true, 0=false],
//tg1 : the 1st day of Tagu)
function rChkMy(my) {
	var yd=0,y1,y2,myt,bw=0,watat,nd,tg1;
	y2=rChkWatat(my); //get watat and 2nd Waso full moon day
	do{ yd++; y1=rChkWatat(my-yd); }while(y1.watat==0);
	watat=y2.watat;  myt=watat;
	if(watat) { nd=(y2.fm-y1.fm)%354; bw=Math.floor(nd/31); myt=bw+1;}
	//if watat check if big watat
	tg1=y1.fm+354*yd-102;	 //get the 1st day of Tagu
	return {myt:myt,watat:watat,bw:bw,tg1:tg1};
}
// const y = 1335;
// const r = rChkMy(y);
// console.log(r);
// { myt: 0, watat: 0, bw: 0, tg1: 2441776 }
// ----------------------------------------------------------------------------------------------------------------------------------------------------//
// Julian to Myanmar
// //input: (jd -julian date)
//output: (
//my : year,
//myt :year type [0=regular, 1=little watat, 2=big watat],
//watat : 1=watat, 0=regular,
//bw : big watat [ 1=true, 0=false ],
//myl: year length,
//mm: month,
//mmt: month type [1=hnaung, 0= Oo],
//mml: month length,
//md: month day [1 to 30],
//d: day [1 to 15],
//ms :moon status [0: waxing, 1: full moon, 2: waning, 3: new moon],
//wd: week day [0=sat, 1=sun, ..., 6=fri] )
export function j2m(jd) {
	var SY=1577917828/4320000; //solar year (365.2587565)
	var MO=1954168.050623; //beginning of 0 ME
	var jdn,my,yo,dd,myl,mmt,t,s,c,mm,md,mml,ms,d,wd;

	jdn=Math.round(jd); //convert to integer (i.e. JD to JDN)
	my=Math.floor((jdn-0.5-MO)/SY); //get Myanmar year
	yo=rChkMy(my); //check Myanmar year - watat, big watat,  1st day of Tagu
	dd=jdn-yo.tg1+1; //number of days from 1st Tagu
	myl=354+yo.watat*30+yo.bw; // Myanmar year length
	mmt=Math.floor((dd-1)/myl); // Myanmar year type
	dd-=mmt*myl; t=Math.floor(myl/(dd+266));
	s=29.5+t*yo.bw/5; c=117+t*yo.bw*14/5;//get rate and offset
	dd+=t*266-(1-t)*(myl-266);//modify day count
	mm=Math.floor((dd+c)/s); //get month
	md=dd-Math.floor(s*mm-c-0.1);//get day
	mm=(mm%16); mm-=12*Math.floor(mm/13); //correct month number
	mml=30-mm%2; if(mm==3) mml+=yo.bw;//get length of the month and adjust
	ms=Math.floor((md+1)/16)+Math.floor(md/16)+Math.floor(md/mml);//moon status
	d=md-15*Math.floor(md/16); //get day
	wd=(jdn+2)%7;//get week day
	return {my:my,myt:yo.myt,watat:yo.watat,bw:yo.bw,myl:myl,mm:mm,mmt:mmt,
		mml:mml,md:md,ms:ms,d:d,wd:wd};
};

export function g2j(year, month, day) {
    // Adjust month and year for the algorithm
    if (month <= 2) {
      year -= 1;
      month += 12;
    }
    var a = Math.floor(year / 100);
    var b = Math.floor(a / 4);
    var c = 2 - a + b;
    var e = Math.floor(365.25 * (year + 4716));
    var f = Math.floor(30.6001 * (month + 1));
    var julianDay = c + day + e + f - 1524.5;
  
    return julianDay;
  }
export function num2ms(number) { 
    var hNum=["၀","၁","၂","၃","၄","၅","၆","၇","၈","၉"]; 
    var r=0,s="",g=""; if(number<0){ number=Math.abs(number);} number=Math.floor(number); 
    do{	r=number%10; number=Math.floor(number/10);	s=hNum[r]+s;}while(number>0); 
    return (g+s);
};
