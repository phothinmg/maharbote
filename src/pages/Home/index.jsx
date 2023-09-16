// @ts-nocheck
import { useState } from "preact/hooks";
import '../../style.css';
import {g2j ,j2m,num2ms} from '../../../lib/g2j2m';
import { ceDateTime,ceMmDateTime,ceMmTranslate,ceMmChronicle } from "../../../lib/ceMmDateTime";
const day = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
const month =[{value: '1',text:'Jan'},{value: '2',text:'Feb'},{value: '3',text:'Mar'},{value: '4',text:'Apr'},{value: '5',text:'May'},{value: '6',text:'Jun'},{value: '7',text:'July'},{value: '8',text:'Aug'},{value: '9',text:'Sep'},{value: '10',text:'Oct'},{value: '11',text:'Nov'},{value: '12',text:'Dec'}];
const mbaht = [
    "စေတနာကောင်း၊စိတ်ရင်းကောင်းသူပါပဲ။ ဇွဲလုံ့လဝီရိယနဲ့ပြည့်စုံပြီး ထက်သန်တဲ့စိတ် ၊ပြင်းပြသောဆန္ဒ၊ ကြိုးစား ချင်သောစိတ်တွေရှိကြတယ်။ မဆုတ်မနစ်သော ဇွဲက လမ်းကြောင်းမှန်ပါက အောင်မြင်မှုပန်းတိုင်ကိုရောက်မည်။ ဆုံးဖြတ်ချက်ချပြီးရင် သိကြားမင်းဆင်း၍ဖျက်တာတောင်မရပေ။ မိမိဆုံးဖြတ်ချက်သည် မှားနေရင်မှ လမ်းဆုံးရောက်အောင်လျှောက်တတ်သည်။နောင်တ တရား ကလဲ မိမိ သန္တန်မှာ ခဏသာ ခိုဝင်တတ်သည်။ နောင်တရလဲ ခဏပင် ။ အမှတ်သည်းခြေ မရှိ ။ခေါင်းမာသည်။ တစ်ယူသန်သည်။ ပြောစရာရှိလျှင် လုပ်စရာရှိလျှင် ဘွင်းဘွင်း ရှင်းရှင်း အားမနာ တမ်းပြောတတ်ခြင်းကြောင့် လူမုန်း များတတ်သည်။ မိမိ သည် စကားပြော မတတ်ခြင်းကြောင့်ပေါင်း သင်း ဆက်ဆံရေး ညံ့သည်ဟု ထင်ကြသည်။ မဟုတ်ပါ။ အတွင်းစိတ်ရင်း အရမ်းကောင်းသူ ဆိုတာ မိမိနဲ့ ရေ ရှည်ပေါင်းသင်းသူသာ သိသည်။ သူဘာပြောပြော စေတနာဒေါသနဲ့ ပြောသည်ဆိုတာနားလည်လာကြသည်။ဒါကြောင့်ပဲ မိမိကို ခင်မိသူတွေက မိမိကို မိတ်ဆွေ အဖြစ်ကနေ လက်လွတ် မခံချင်ကြပါ။ မိမိနဲ့ ခင်မင်ဖူး သူတွေ က မိမိ အကြောင်း တစ်သသပြောနေတတ်ကြသည်။ မိမိ သည် တစ်စိမ်း တစ်ရံတွေ ကိုခင်မိပြီ ဆို ရင် ဆွေမျိုးထက် ပိုခင်တတ်သည်။ ဒါကြောင့်ပဲ မိမိက အခြားသူတွေကို မိမိလို စိတ်ဖြူ သည် ထင်၍ အတွင်းရေး ကိစ္စတွေ ပြောပြတိုင်ပင် အကြံဉာဏ်တောင်းမိသည်။ ထိုသို့ပြုမူခြင်းသည် အကျိုးမရှိသည့် အပြင် မိမိ လှိျု့ဝှက်ချက်ကို သိသွား၍ မိမိအပေါ် အထင်မြင်သေး ဟားတိုက်စရာဖြစ်လိမ့်မည်။ဘင်္ဂဖွားများ ဟာ ကိုယ့်ဒူး ကိုယ်ချွန် ကြို းစားလိုစိတ် ရှိကြတယ်။ ဘယ်သူ့ကိုယ်မှ မမှီခိုလိုဘူး။ သူတစ်ပါး ရဲ့လောင်းရိပ် မိနေတာမျိုးကိုလဲ မလိုလားကြပါဘူး။ သူများကို အားကိုးလို့လဲ မရပါဘူး။ ဘယ် အလုပ်ကိစ္စ မဆိုလဲ မိမိက ဦးဆောင် ဦးရွက် လုပ်ရမှလဲကျေနပ်ကြတယ်။ စီးပွားရေး ဘယ်လို လုပ်မယ်။ ငွေကို ဘယ် လို ရှာလိုက်မယ် လို့ စိတ်ထဲတွေးနေတတ်ပေမဲ့ အပြင်ပန်း လက်တွေ့မှာတော့ ရသမျှနှင့်တင်း တမ်ရောင့် ရဲတတ်သူပါ။  အမှန်တရားကိုမြတ်နိုးတတ်သူ၊ တန်ဖိုး ထားတတ်သူဖြစ်ပြီး ဘယ်အလုပ်ကိုပဲ လုပ်လုပ် စေတနာ ပါပါနဲ့ လုပ်တတ်သူပါပဲ။ စေတနာကောင်းရင် ကံကောင်းတယ် လို့ ခံယူထားသူပါ။လူအများက မိမိကို အထင်ကြီးလေးစားပေမဲ့ မိမိက သူတစ်ပါးအထင်ကြီးအောင် ဟိတ်ဟန်မထုတ်တတ်ပါ။ ပတ်ဝန်းကျင်ကို ဂရုမစိုက်တတ်ပေမဲ့ ပတ်ဝန်ကျင်းမှာ အခက်အခဲတခုခုဖြစ်ရင်တော့ စိတ်ပါလက်ပါ ကူညီတတ်သူပါပဲ။ မိမိကအငြင်းသန်ပါတယ်။ မှန်တယ်ထင်ရင်တော့ ငြင်းလို့ဆုံးမည်မဟုတ်ပေ။ ဖော်လံဖားမလုပ်တတ်ခြင်း ၊ မိမိကြိုးစားမှုကို ဂုဏ်ဖော်၍မပြောတတ်ခြင်းတွေကြောင့် မိမိဟာ အသိအမှတ်ပြုမခံရခြင်း ချောင်ထိုးခံရခြင်းတွေ ခဏခဏကြုံရတတ်ပါတယ်။ဘင်္ဂဖွားတွေ ဟာ မည်သူ့ကိုမဆို အဆင့်အတန်းခွဲခြားပြီး ဆက်ဆံလေ့ မရှိပါဘူး။ သူဌေး နဲ့ ဆက်ဆံလဲ ဒီအတိုင်း ဆိုရင် ဆင်းရဲသားနဲ့ ဆက်ဆံလဲ ဒီအတိုင်း ပါပဲ။ ဘာမှပြောင်းလဲခြင်း မရှိဘဲ အားလုံးကို တစ်သား ထဲ ဆက်ဆံတတ်တယ်။  အခွင့်ထူး ခံရဖို့ မျက်နှာသာပေးခံရဖို့ ဆိုတဲ့ စိတ်နဲ့ အလုပ် မလုပ်တတ်ပါ။ ပေး အပ် တဲ့ တာဝန်နဲ့ ဝတ္တရားကို ကျေပွန်လိုတဲ့ စိတ်နဲ့သာ လုပ်တတ်သူပါ။ ငယ်ရွယ်စဉ် ကာလ အဘက် ဘက် က ကံအား နည်းတယ်။ ခြူခြာလွယ်တယ်။ မိမိကို မွေးပြီးတော့ မိဘတွေ လုပ်ငန်း စီးပွားတိုးတတ်နိုင်သလို အကုန် အကျတွေလဲ အလွန် များတတ်ပါတယ်။ပထမအရွယ် ကံအားနည်းတတ်ပြီး ဒုတိယ အရွယ်၊ တတိယ အရွယ် ကံမြင့်တတ်ပါတယ်။ မွေးစကနေ အသက် ၁၂ ထိ နေအိမ် အပြောင်းအရွေ့ မြို့ အပြောင်းအရွေ့ ကျောင်း အပြောင်းအရွေ့ ဆိုတာတွေကြံု ရတတ်ပါ။ ဘင်္ဂဖွားတွေဟာ ကံအတက်အကျ များလွန်းတဲ့ သူတွေပါပဲ။ သူတစ်ပါးကို အားကိုးပြီး စပ်တူ လုပ်ငန်း မလုပ်ပါနဲ့။ အမှီ အခို ကင်းပြီး သူတစ်ပါးလောင်းရိပ် မမိတဲ့ ဘဝနေထိုင်မှုမျိုး က မိမိ ဘဝ ကိုအောင်မြင်အောင် တွန်းပို့မှာပါ။ ကိုယ်စွမ်း ကိုယ်စကို သိပြီး ဝီရိယ ရှိရှိကြိုးစားရင် အောင်မြင်မဲ့ ဖွား ဇာတာပါပဲဗျာ",
    "ဖွားဇာတာတွေ ထဲမှာ အထွန်း ဖွားတွေက အလွန်ပဲ တည်ကြည်တဲ့ သူတွေပါ။ ကိုယ်ကျင့် သိက္ခာကျစေမဲ့ ကိစ္စ ၊ လူများ လက်ညိုှး ထိုးမဲ့ ကိစ္စမျိုး တတ်နိုင်သ၍ရှောင်ကြ သူတွေပါပဲ။ အစိုးရဝန်ထမ်းပဲ လုပ်လုပ် ၊ အပြင် အလုပ်တွေပဲ လုပ်လုပ် သူများ အလုပ်တိုင်း ကို မိမိ အလုပ်လို သဘောထားပြီး လုပ်ပေးတတ်သူပါ။ မိမိ ကိုယ်ကျင့် သိက္ခာကို ထိပါးပြောဆိုလာမယ် ဆိုရင်လဲ အချိန်မဆိုင်းဘဲ ဖြေရှင်းတတ်သူပါ၊အလွန်ပဲစေ့စပ်သေချာတဲ့ သူတွေပါ။ စနစ်ကောင်းတယ်။ အလုပ်ကို တန်ဖိုးထားမြတ်နိုးတယ်။ အလုပ် နဲ့ လက် နဲ့ပြတ် နေရင် မနေတတ်ဘဲ တစ်ခုခု ရှာပြီးလုပ်နေတတ် သူပါ။  လုပ်စရာ မရှိရင် ပျင်းနေတတ်ပြီး တစ်ခုခု လုပ်နေရမှာ ကျေနပ်နေသူတွေပါ။ မည်သည့် အလုပ်ကို မဆို လွယ်လွယ် နဲ့ လက်မလျော့တတ်ဘဲ ဖြစ်မြောက်အောင် လုပ်တတ်သူပါ။ အလုပ် ကံကောင်းတတ်ကြတယ်။ မည်သည့် အလုပ်ကို မဆို ရေရှည်ဇောက်ချပြီး လုပ်ပါက ထွန်းပေါက် ပါ လိမ့်မယ်။ လက်ရှိ ဘဝနဲ့ မတင်းတိမ်ဘဲ အမြဲတမ်း ဘဝ တတ်လမ်း ကို ရှာနေတတ်တဲ့ အတွက် ဖြည်းဖြည်း ချင်းအောင်မြင်မှုတွေ ရလာမှာပါ။ မည်သည့် ပညာရပ်ကို မဆို သိလွယ် တတ်လွယ်သူတွေပါ။ မိဘတွေ ကသာ ပညာရေး ကို ထောက်ပံ့ပေးနိုင်မယ်ဆို အလွန် ထူးချွန်ပါ လိမ့်မယ်။ စိတ်ရှည်ကြတယ်။ အပင်ပန်းလဲ ခံနိုင်ကြတယ်။ ဘာလုပ်လုပ် ဂရုတစ်စိုက် ရှိတယ်။ လုပ်သလောက် အကျိုးဖြစ်ထွန်းပင်ပေမဲ့ အောင်မြင်မှု အသီးအပွင့်တွေ အခွင့်အရေးတွေကို အခြားလူတွေက ရသွားကြတာများပါတယ်။ မိမိက အခွင့်အရေးကို ဂရုမစိုက်ပါ။ တာဝန်ကျေပွန်ရင်ကျေနပ်နေ တတ် သူပါ။ လုပ်ချင်တာ လုပ်ရရင် ပျော်နေတတ်သူပါ။ သူများ အကျိုးစီးပွားကိုတောင်မှ အကူ အညီတောင်း ရင် မငြင်းတတ်သူပါ။ စိတ်ကောင်း စေတနာကောင်းသည်၊ ရိုးသားတယ်။ ဒါပေမဲ့ ပွင့်ပွင့် လင်းလင်းပြောတတ်ကြတယ်။ အပြစ် လုပ်ထားရင်လဲ အားမနာတမ်းပြောတတ်ကြပါတယ်။ ပြောပြီးရင်လဲ မေ့မေ့ပျောက်ပျောက် နဲ့ နေတတ်သူ တွေပါ။ ရန်ညှိုး မထားတတ်ဘူး။ မိမိကအေးဆေး တည်ငြိမ် စွာနေတတ်တဲ့ အတွက် လူအများက ဘဝင်မြင့်တယ်။ မာနကြီးတယ်လို့ ထင်တတ်ကြပါတယ်။ ကိုယ်ကလဲ ခင်မင်သူများနဲ့ သာ လိုက်ရောညီထွေ နေတတ်ပြီး မခင်မင်သူတွေနဲ့ ကတော့ ခပ်ကင်းကင်းနေတတ်ပါတယ်။ဒါပေမဲ့ မိမိ ကံက အပေါင်းအသင်းကံ ညံ့ပါတယ်။ မိမိကစေတနာနဲ့ပြောဆို ရင်တောင် မိတ်ဆွေတွေက အကောင်း မထင်တတ်ပါ။ မိမိကပဲ အနစ်နာခံပေါင်းသင်းနေရတတ် ပါတယ်။ မိမိ ကကျွေးလဲကျွေးရ အဆဲ လဲ ခံရမဲ့ ဇာတာပါ။ မိမိကလဲ အဖော်ခင်တယ်။ အပေါင်းအသင်း မက်တယ်။ အပျော် အပါး ပွဲလမ်း သဘင် ဝါသနာ ထုံတယ်။ ခရီးထွက်ရတာ ဝါသနာပါတယ်။မိမိ ဇာတာ က သားသမီး အကျိုးပေးကံ အားနည်းတယ်၊ အနည်းဆုံး မိဘ ကို ဒုက္ခပေး မဲ့ စုန်းပြူး တစ်ယောက်လောက်တော့ ပါလာတတ်တယ်။ ကိုယ်ကလဲ သားသမီးတွေ ဘာလုပ်လုပ် မျက်စိ စပါးမွှေးစူးနေတတ် တယ်။ ဘာပဲ လုပ်လုပ် အစမှာတော့ မိမိက အလွန်ပဲ စိုးရိမ်တတ်ကြတယ်။ တစ်ကယ် လုပ်ကြည့်တဲ့ အခါ မိမိ အတွက် အခက်အခဲ မရှိ အဆင်ပြေသွားတတ်ပါတယ်။ ဇွတ် လုပ်တတ်ပြီး ဝီရိယရှိတဲ့ အတွက် အောင်မြင်မှု လမ်းပေါ်ရောက်ပါလိမ့်မယ်။",
    "စိတ်ထားကောင်းသည်။ စေတနာကောင်းသည်။ သနားငဲ့ညှာစိတ်ကြီးမားသည်။ သူများတွေကို အမြဲ တွန်း တွန်းတိုက်တိုက် အားပေးတတ်သည်။ သူများတွေကိုလဲ အားရှိစေမည့် စကားတွေနဲ့ အမြဲ အားပေးတတ် သည်။ ပင်ကိုယ် သဘာဝ အရ ရိုးသားသည်၊ တည်ကြည်သည်။ သို့သော် ပျင်းရိတတ်သည်။ လုပ်မည်ဟု ဆုံးဖြတ်ထားပြီး အချိန်ဆွဲနေတတ်သည်။ တော်တော်နဲ့ မစဖြစ်ပေ။ လုပ်ပြီ ဆိုရင်လဲ နေ့မအိပ် ညမအိပ် လုပ်နိုင်တဲ့ သူပါပဲ။ အလွန် ပင်ပန်းခံနိုင်သည်။ ထိုသို့ အပင်ပန်း ခံ သည့် အလုပ်တွေ ကလဲ မိမိ စိတ်ပျော်မဲ့အလုပ်တွေသာရွေးလုပ်တာပါ။ စိတ်ချမ်းသာမှုကို အလွန်မြတ်နိုး အလေးထားသည်။ စထားပြီး အဆုံး မသတ်ဖြစ်တဲ့ အလုပ်တွေလဲ မိမိ ဆီမှာ အများကြီးပင်။ မိမိသည် စိတ်ညစ်တာ စိတ်ရှုပ်တာ မခံနိုင်ပါ။ မိမိ သည် အားနာ တတ်သည်။ အားနာလွန်း တာက မိမိ အတွက် မကောင်းပါ။ မိမိသည် အားနည်းချက်များစွာရှိနေတတ်သည်။ ပေါ့ဆပြီး ပြီးစလွယ် လုပ်မည်၊ တစ်ခုခု လုပ်နေရင်း နောက် အသစ်တစ်ခု ကိုစိတ် ပါ သွားတတ်သည်။ စိတ်မငြိမ်။ အယူသည်းသည်။ ဇီဇာကြောင်တတ်သည်။ အငြင်း အခုန် သန်သည်။ မိမိ သည် သူများတွေ အတွက် အလွန် လွယ်ကူသော အလုပ်တွေ က မိမိ အတွက် ခက်ခဲနေတတ် သလို သူ များတွေ မလုပ်နိုင်သော လက်လျှော့ထားသော အလုပ်တွေကိုလဲ မိမိ ကအောင်မြင်အောင်လုပ်နိုင်သည်။ မိမိသည် ငြိမ်းငြိမ်း ချမ်းချမ်းနေလိုသည်။ ကာယဝိဝေက စိတ္တဝိဝေက ဖြစ်သော နေရာမှာနေလိုသည်။ တစ်ယောက်ထဲလဲနေတတ်သည်။ အဖော် အပေါင်းအသင်း မမက်ပေ။ ဘဝင် မမြင့်တတ်ပေမဲ့ အလွန် မာနကြီးသည်။ ပညာ မာန အလုပ်မာန ရှိသည်။ သူများ ဆီက တစ်ပြားသားမှ အလကား မလိုချင်သလို ကိုယ်ကလဲ တစ်ပြားသားမှ မပေးချင်ပါ။ မိမိ အားနှိမ့်ချ ဆက်ဆံထားသူအား မမေ့တတ်။ အခါအခွင့်ကြုံရင် ပြန် ကလဲ့စားခြေဖို့ စောင့်နေတတ်သည်။ဆင်းရဲတဲ့ မိဘက ပေါက်ဖွားပါစေ လူနေခြုံကြား စိတ်နေဘုံဖျား စိတ်မျိုးရှိသည်။ မတရားမှုများကို လက်မခံ တတ်ပေ။ မိမိ ဇာတာဟာ ကံ အလွန်ကောင်းသည် မဟုတ် သော်လဲ ရည်မှန်းချက် ထားပြီးကြိုးစားတဲ့ အတွက် အောင်မြင် လိမ့်မည်။ ရည်မှန်းချက် မရှိတဲ့ ရာဇဖွားတွေ အတွက် အနာဂတ် မကောင်းနိုင်။ မိမိ သည် သမိုင်း ကို စိတ်ဝင်စားသည်။ သူရဲကောင်းများ လူစွမ်းကောင်းများ အား ကျတတ်ပြီး သူတို့လို ဖြစ်ချင်စိတ်ရှိမည်၊ ဂမ္ဘီရပစ္စည်းတွေ စိတ်ဝင်စားသည်၊ ရှေးရိုး ဆန်သည်။ ရိုးရာ ဓလေ့ ထုံးစံကို လိုက်နာကျင့်သုံး သည်။ အမျိုးဘာသာ သာသနာ ကို ချစ်မြတ်နိုးသည်။ မိမိ သည် ထူးဆန်းသော ဂမ္ဘီရနှင့်နွယ်သော ကိစ္စများ ကိုလေ့လာ လိုက်စားလိုသည်။ ငွေကြေးကို စည်းနှင့် ကမ်းနှင့်သုံးသည်။ နှမြောတတ်သည်။ ဒါပေမဲ့ မိမိ လိုချင်တဲ့ ပစ္စည်းဆိုရင် မတန် တဆနှင့်ရောင်းလဲ ဝယ်သည်။ မနှမြောတော့ပေ။ ဘဝ တစ်ဝက်လောက် ထိ ငွေစုဆောင်းလို့ မရတတ်ပေ။ စုလိုက် ကုန်လိုက်ဖြစ်နေ မည်။ ငွေနှင့် အလွန်နီးသော ဇာတာပါတယ်။ စိတ်ထဲမှာလောဘကြီးပေမဲ့ လက်တွေ့မှာ ရသမျှနှင့်ရောင်ရဲ လွယ်သည်။မိမိ သတိထားရမည်က အိမ်ထောင်ရေးပါ။ သနားလို့ အားနာလို့ မယူမိစေနဲ့။ လွယ်လွယ် ဆုံးဖြတ်ပြီး အိမ်ထောင် မပြုသင့်ပေ။ အိမ်ထောင်ရေးကံ ညံ့လွယ်သည်။ မိမိ ချစ်မြတ်နိုးရင်တောင် သူ့ အကြောင်းသေ ချာလေ့လာပြီးမှ ယူသင့်သည်။ မိဘ လူကြီးတွေကပါ သဘောတူသည့် အိမ်ထောင်ဘက်ဆို အလွန်ကောင်း သည်။မိမိ သည် ဒုက္ခကိုပဲ ဖြစ်ဖြစ် သုခ ကိုပဲဖြစ်ဖြစ် မည်သူ့ကိုမှ ထုတ်ဖော် မပြောတတ်ပါ။ သူများကို ဒုက္ခမပေးပါ၊ ပြဿ        နာတွေကို မိမိ တစ်ယောက်ထဲသာ ခါးစည်း ခံလိုသည်၊ ဒါကြောင့်လဲ မိမိကိုကြည့်ရုံနှင့် ပျော်နေ လား စိတ်ဆင်းရဲနေလား မခန့်မှန်းနိုင်ကြပါ။ မိန်းတွေနဲ့ ပက်သက်ပြီး အကူအညီတွေရနိုင်သည်၊ စပ်တူ ရှယ်ယာ လွန်စွာ အကျိုးပေးသည်၊၊ ။",
    " အဓိပတိဖွား များသည် အကြောက်အလန့် နည်းသူများဖြစ်ကြပြီး ရဲရင့်ပြတ်သား ကာ စွန့်စားလို စိတ်ရှိ တတ်သူများဖြစ်သည်။ မခံချင်စိတ်လည်း များတတ်ပြီး တစ်ခါ တစ်ရံ တစ်ဇွတ်ထိုး လုပ်တတ်ပေ သည်။ သို့သော် စိတ်သဘောထားကောင်းသူများ လည်းဖြစ်ကြသည်။ အကြီး အကဲဖြစ်တတ်ပြီး မည်သည့် နယ် ပယ်တွင် မဆို နောက်လိုက်ထက်ခေါင်းဆောင်ဖြစ်လိုသူ အမိန့်ပေးတတ်သူ ဦးစီးဆောင်ရွက်သူ များဖြစ်ပြီး အပေါင်းအသင်း မိတ်ဆွေများတွေကြားတွင်လည်း ဦးဆောင်တတ်သူ ဆရာလုပ်တတ်သူများ လည်းဖြစ် သည်။ထို့ကြောင့် သူတို့သည် ပညာရပ်တော်တော် များများကို သိရှိအောင်လေ့လာ တတ်ကြလေသည်။ သို့သော် စိတ်ယိုင်တတ် စိတ် အပြောင်းအလဲမြန် အရောင်ပြောင်းမြန်ကြသည်။ ထို့သို့ လုပ်နေဆဲမှ တစ်ခြား အလုပ်များကို ပြောင်းလဲ လုပ်ကိုင်တတ်ကြသဖြင့် တစ်ချို့ အလုပ်များတွင် တစ်ပိုင်း တစ်စ ကျန် ရှိနေတတ်သည်။ အဟော အပြောကောင်းသူဖြစ်သဖြင့် ကုန်သည် လုပ်ငန်း အကျိုးဆောင် လုပ်ငန်း အဓိက အားဖြင့် စီးပွားရေး လုပ်ငန်းများတွင် အောင်မြင်မှုများ ရရှိတတ်သည်။ စည်းရုံးရေး ကိစ္စများ သူတစ်ပါးအား ဆုံးမခြင်း ကိစ္စများတွင် လည်းအောင်မြင်တတ်ပေသည်။အဓိပတိ ဆိုတဲ့အတိုင်းပဲ သူ့တို့တွေဟာ ခေါင်းဆောင် လုပ်လိုကြတယ်။ သြဇာပေးလို့ကြတယ်။ အကြံပေး ချင်ကြတယ်။ သူများနောက်လိုက် မလုပ်လို။ လူ့အောက်ကျို့ သိပ်မခံချင်ကြဘူး။ မိမိ သာ ဘယ်အရာကို မဆို စိတ်ပါ လက်ပါ လုပ်မယ်ဆို ထိပ်ဆုံးရောက်နိုင်တဲ့ သူတွေပါ။ လက်တွေ့မှာတော့ စိတ်ကူးများနေ တတ်တယ် ၊လေထဲ တိုက်အိမ်ဆောက်နေတတ်ကြတယ်။ စီမံကိန်းတွေချ ၊ plan တွေ ချပြီး လက်တွေ့ မလုပ်ဖြစ်တတ်ပါ။ မိမိ ဉာဏ်ရည် ထက်မြက်သည်။ အတွေးအခေါ်ကောင်းသည်။ သင်ပြရ လွယ်သည်။ သူများ တစ်နှစ်လောက် သင်ရတဲ့ပညာကို မိမိက တစ်လလောက် သင်တာနဲ့ တတ်မြောက်သည်။ ထီထွင် ဖန်တီးလိုစိတ် ပြင်းထန်သည်။ မိမိက ကာယ အားမကိုးချင်။ ဉာဏ် သာ စိုက်ထုတ်လုပ်ချင်သည်။ ကျောပူ မခံနိုင်ပေမဲ့ ခေါင်းပူ ခံနိုင်ကြ တယ်။ မိမိက အရာရာ စိတ်ဝင်တစ်စား လေ့လာ လိုက်စား တတ်သည်။ အလုပ်တစ်ခုကို လဲ ဇောက်ချ မလုပ်ချင်ကြပေ။ ပညာရပ်တွေကိုလဲ နည်းနည်းစီ လိုက်စားထားသည်။ ဒါကြောင့် သူ့တို့ မသိတဲ့ ကဏ္ဍမရှိ ၊ အတွင်းကျကျ သိသည်လဲ မဟုတ်ပေ။ အပေါ်ယံသာ သိသည်။  အဓိပတိ ဖွားတွေဟာ စကားပြောကောင်းကြသည်၊ ကိုယ့်ဘက်ပါအောင်စည်းရုံးတတ်သည်။ ပီယဝါစာ စကားတွေနဲ့ လူအများကို ဆွဲဆောင်နိုင်ကြတယ်။ အဓိပတိ ဖွားတွေဟာ အနုပညာဗီဇပါကြသည်။ စန်း ရှိသည်။ အနုပညာ လက်မှုပညာတွေ နဲ့ အောင်မြင်တတ်သည်။ စိတ်ရှည် ဇွဲသန်ဖို့တော့ လိုတာပေါ့။ အဓိပတိ ဖွားတွေကငွေနဲ့ဝေးတဲ့ ဇာတာပါတယ်။ လိုက်လေဝေးလေဖြစ်နေတတ်တယ်။ငွေ အစုလိုက်ရမယ် ဆိုပြီး မရဘဲဖြစ်နေတတ်တယ်။ အမွေ ရရင်တောင် မိမိ ခွဲတမ်းကနည်းနေ တတ် တယ်။ ထီပေါက်ရင် အဖတ် မတင်ဘဲ ကုန်သွားတတ်တယ်၊ မိမိရဲ့ ပြင်ရမဲ့ အချက်တွေထဲမှာ သနားတတ် တာရော အားနာတတ်တာရော ပါတယ်။ သနားလို့ ငွေချေးရင် ဆုံးမှာပဲ။ အားနာလို့ ချေးလိုက်ရင်လဲ လှူ လိုက်တယ် လို့ပဲ သဘောထားရလိမ့်မယ်။ မိမိ က သူများငိုပြရင် လွန်စွာသနားတတ်သည်။ ရှိတာလေး ထုတ်ပေးတတ်တယ်။ ငွေ အချေး အဌားကြောင့် ဘဝမှာ ခဏခဏ စိတ်ဆင်းရဲရမည်။ အကြွေးပြန်မရလို့ အကူအညီလာတောင်း တဲ့ သူတွေဟာ အဓိပတိဖွားတွေ အများဆုံးဖြစ်နေတာ တွေ့ရတတ်တယ်။ မိမိ ကံဇာတာအောက် လက် ငယ်သားတော်လှန်မဲ့ ဇာတာပါ၊ တပည့်မွေးလို့ မရဘူး၊ ကိုယ်က စေတနာ နဲ့ တပည့် ကို လိုက် လိုက်ရောရောနေပြီး ပညာကုန် သင်ပေးရင် မိမိကို အာခံလိမ့်မယ် ၊ ကိုယ်မွေးတဲ့မျောက်က ကိုယ့် ကိုပြန်ခြောက် တတ်တယ်။ မိမိစေတနာကို နားမလည်ဘူး၊ မိမိ ကို ပမာမခန့် လုပ်တတ်တယ်။ မိမိစေတနာကို စော်ကားတတ်တယ်။ မိမိဟာ အေးအေး ချမ်းချမ်းနေတတ်ကြတယ်။ ရိုးရိုးသားသားနေ မယ်။ ဒါကြောင့်ပဲ မိမိကိုယ် ပတ်ဝန်းကျင်က ငွေ ရှိတယ်။ ချမ်းသာတယ်ဟု ထင်တတ်ကြသည်။ လက်တွေ့ မှာတော့ အမြဲတမ်း ဘိုင်ကျနေမည်။ ငွေမကြာခဏပြတ်နေတတ်သည်။ မိမိ က လူမှုရေး နိုင်ငံရေး စိတ်ဝင် စားမည်။ ဒါကြောင့်ပဲ ရပ်ကွက်ကောင်းစားရေးက စပြီး လုပ်နေမိတတ်သည်။အများအတွက် စေတနာ့ ဝန်ထမ်း လုပ်နေရတတ်သည်။ မိမိသည် ငွေ အစုလိုက် ဝင်သည်။ လူမှုရေး ပရဟိတ ရပ်ရွာကောင်း စားရေး အတွက် နဲ့ပဲ ထိုငွေပြန်ကုန် တတ်သည်။ မိမိ ဘဝမှာအောင်မြင်လိုရင် ကြိုးစားပါ။ အတ္တနဲ့ ပရမျှတ စွာလုပ်ပါ။ ဇွဲရှိပါ။ ကံ ဉာဏ် ဝီရိယ သုံးပါးမှာ မိမိက ကံကောင်း ဉာဏ်ကောင်းပြီး ဝီရိယ နည်းနေ ပါလိမ့် မည်။",
    "မရဏဖွားတွေရဲ့စိတ်ကကြောက်စရာကောင်းသည်။ အမြဲတမ်း အစွန်းနှစ်ဖက်ရောက်နေတတ်တတ်သည်။ အချို့နေရာတွေမှာ ခြေသုတ်ပုဆိုးမြွေဆွယ်ကျိုးလို သည်းခံတတ်ပေမဲ့ ရက်စက်ပြီဆိုရင်လဲ သူများလိုက်မမှီအောင် ရက်စက်တတ်သူပါ။ မြွေပွေးတစ်ကောင်နှင့်အလားသဏ္ဍာန်တူသည်။ မထိသ၍ဘာမှရန်မပြုပေမဲ့ ထိမိလိုက်ရင်တော့ အန္တရာယ်အလွန်ရှိတတ်ကြသည်။ ထက်မြက်တယ်။ စိတ်ဓာတ်ပြင်းထန်ကြတယ်။ သမာသမတ်ကျတယ်။ အမှန်တရားကိုမြတ်နိုးသည်။ ရှေ့နေရှေ့ရပ်ကိစ္စ၊ ကြားဝင်ညှိနှိုင်းဆောင်ရွက်ရာမှာ ထူးချွန်တတ်သည်။ ဆွေးမျိုးထက် တစ်စိမ်းက ပိုအကျိုးပေးသည်။ ဆွေမျိုးတွေ ဒုက္ခပေးတတ်သည်။ တစ်စိမ်းတစ်ရံကြားမှာ အခြေ ချနေထိုင်ရတတ် သလို ဇာတိ ရဲ့အဝေးမှာ ထွန်းပေါက်အောင်မြင်တတ်တယ်။ တစ်ခါ တစ်ရံ ဇွတ် တစ်ရွတ် လုပ်တတ်တာမျိုးရှောင်ပါ။ ကိုယ်က အလုပ်အပေါ် သေချာ ဂရုစိုက်လုပ်ရင်တောင် သူများတွေက ပေါ့တယ် ဂရုမစိုက်ဘူး အလုပ်အပေါ် အလေးမထားဘူးလို့ အပြောခံရတတ်တာမျိုးပါ။ မိမိကလဲ အလုပ် တစ်ခု ကို အစပိုင်းမှာ စိတ်ပါဝင်စားတတ်သော်လည်း နောက်ပိုင်း မှာ ပျင်းရိ သွားတတ်သူပါ။ကောက်ရိုးမီး လိုပါပဲ။ အစ ကတော့ ဟုန်း ခနဲပေါ့။ နောက်ပိုင်းတော့ မီးစပင် ရှာလို့ မရတတ်ဘူး။ အဲဒါကြောင့် ပဲ အလုပ် ခဏ ခဏပြောင်းမိနေတတ်တယ်။မရဏ ဖွားတွေလဲ နှစ်ရှည် လုပ်ရတဲ့အလုပ် ၊ ကြာရှည် လုပ်ကိုင်ရတဲ့ အလုပ်မျိုးတွေနဲ့ မသင့်လျော်ဘူး။ဥပမာ ပေးရရင် နှစ်ရှည်ပင် စိုက်ပျိုးခြင်း၊ ဥယျာဉ်ခြံ ၊ Hotel လုပ်ငန်းမျိုးတွေပေါ့။ အခုလုပ် အခု အကျိုး အမြတ် ရတဲ့ ပေါ်ပင် အလုပ်မျိုးတွေနဲ့ပဲ သင့်လျော်ပါတယ်။ မိမိက စိတ်မြန် လက်မြန်ရှိပြီး မြန်မြန် သွက် သွက် နဲ့ လက်တွေ့ကျကျ လုပ်ရသော အလုပ်တွေကိုသဘောတွေ့တတ်ကြပါတယ်။ မရဏဖွားတွေ လောကဓံ ကို ကြံ့ကြံ့ခံ ရင်ဆိုင်နိုင်သူပါ။ ဒုက္ခလောကဓံကို ခါးစည်းခံနိုင်သလို သုခလောကဓံ ကိုလဲ ခံနိုင် သူပါ။ ငရဲ ဆိုတာ ငါ့ အတွက်တော့ ချွေးထုတ်ခန်း ဝင်သလောက်ပါပဲ လို့ ပြောမဲ့သူတွေပါ။မရဏဖွားတွေ က အပြင်ပန်း ကကြည့်ရင်တော့ လျှင်မြန်တယ် ဉာဏ်ပြေးတယ် သွက်လတ်တယ် လို့ ထင် ရပေမဲ့ လက်တွေ့မှာတော့ ကိစ္စတစ်ခု ကို ဆုံးဖြတ်ချက် ချရာမှာ ချိတုံချတုံ အလွန်ဖြစ်တတ်ပါတယ်။ ငါ လုပ် လိုက်တာ မှားသွားလား ဆိုပြီး စိုးရိမ်စိတ် ကလေး အမြဲ ဝင်တတ်ပါတယ်။ အားနည်းချက် က အလွန်မေ့ တတ်တာပါ။ ပြောထားပြီး မေ့နေပြန်ရော။ အသက်ကြီး လာရင် အလွန်မေ့တတ်ကြတယ်။ သူတစ်ပါး အလုပ် ပင်ဖြစ်ပါစေ စေတနာ ပါပါနဲ့ လုပ်ကိုင်ပေးတတ်သူပါပဲ။ မိမိကိုယ် အားကိုးပြီး ခိုင်းရင် အားကိုး သလောက်ပြန် လုပ်ပေးတတ်တယ်။စကားကြီး စကားကျယ်ပြောတာ  အမှန်အတိုင်း သာပြောတတ်တာ တွေက လူမုန်း များသွားတတ်ပါတယ်။ ဘဝတည်ငြိမ်မှု အားနည်းတယ်။ လှိုင်း တစ်ပိုးတွေလို ဘဝက အတတ်အကျများတယ်။ အပယိကရော ဂါလေးတွေ ခဏခဏဖြစ်လွယ်တယ်။ ငယ်ဇာတာ မကောင်းပါ။ ပင်ပန်းရတတ်တယ်။ စိတ်ဆင်းရဲ ကိုယ်ဆင်းရဲဖြစ်လွယ်တယ် ။ အိုဇာတာ ကတော့ ပထမတန်းစားကောင်းသူပါ။ မရဏဖွားတွေဟာ မိမိ အပူသောကတွေ ကို သူများတွေကို လက်ဆင့် မကမ်းတတ်သူပါ။ ဒုက္ခတွေကို တစ်ယောက်ထဲ ခါးစည်း ခံ မဲ့သူတွေပါ။ ရောဂါဖြစ်ရင်တောင် အိမ်သားတွေ မပြောဘဲ တစ်ယောက်ထဲကြိတ်ခံ တတ်တာမျိုးပါ။ဘဝကို အရှုံးမပေးတတ်သူတွေ ပါပဲ။ ဘယ်လို အခက်အခဲကြုံကြုံ ရင်ဆိုင် သွားတတ်သူပါ။ ကံကြမ္မာ ကလဲ အခွင့် အရေးကောင်းတွေ မကြာခဏပေးတတ် ပါတယ်။ မိမိက ဖမ်းဆုပ်တတ်ဖို့ပဲ လိုပါတယ် ။ ကိုယ့်ကိုယ် ကို ဖျက် သံချေးတတ် ဆိုတာမျိုး မဖြစ်အောင် ဂရုစိုက်ပါ။ ကံ က အတိုက်အခံတွေ့လေ အောင်မြင်လေပါပဲ။ မင်္ဂလာ တရားတော်ထဲက ' အတ္တသမ္မာ ပဏိဓိ စ  ဆိုတဲ့ မင်္ဂလာတရားတော်နဲ့ အညီ မိမိကိုယ် ကိုစောင့် ထိန်းနိုင်မယ် ဆိုရင်တော့ အောင်မြင်မှုဆိုတာကို မလွဲမသွေ ခံစားရမှာပါ......။ ။",
    "စိတ်ကူးတွေနဲ့ ဖန်တီးလို့ မရ၊ အမြဲတမ်း လက်တွေ့ကျကျပဲ အဆင်ပြေမည်။ စိတ်ကူး စိတ်သန်းတွေနဲ့ ရေ ရှည် ရည်မှန်းပြီး လုပ်သမျှ အဆင်ပြေဖို့မလွယ်။ ဘဝကို လက်တွေ့ ကျကျ အကောင် အထည်ဖော်နိုင် မှ ရ မည်။ အလုပ် ကိုလဲ အပင်ပန်း ခံပြီး လုပ်ရမဲ့ ဇာ တာပေါ့ ။ သူများတွေ တစ်နှစ်ထဲကြိုးစားပြီးအောင်မြင်တဲ့ အလုပ်ကို ကိုယ်က သုံးနှစ်လောက်ကြိုးစားရမည်။ အလုပ်နှင့် လက်နဲ့မပြတ် လုပ်တတ်ပေမဲ့ မကြာခဏ ကြွေးတင်နေတတ် သည်။ လက်ထဲငွေပြတ်နေတယ်။ မိမိက စည်းကမ်း ရှိသည်။ ငွေကို စနစ်တစ်ကျ သုံး တတ်သော်လည်း မိသားစုကြောင့် ကျန်းမာရေးကြောင့် ငွေသုံးရတတ်သည်။  မိမိကိုယ်တိုင် ကလဲ အလုပ် မရှိရင် မနေတတ်။ တစ်ခုခု အမြဲလုပ်နေတတ်သည်။ လုပ်သလောက် အလုပ်အကျိုး မခံစားရတတ်ပေ။ အလုပ်ကံ ညံ့သည်။ နှစ်ပေါင်းများစွာ လုပ်ပြီး ရာထူး မတိုး တာ လစာ မတိုးတာမျိုးကြုံရတတ်တယ်။ ဘယ်လောက် လုပ်လုပ် အကောင်းပြောမခံရတတ်။ မကြာခဏ စေတနာ့ ဝန်ထမ်း လုပ်နေရမည်။ အိတ် စိုက်လုပ်ရမည်။ တာဝန်ကျေပွန်အောင် လုပ်ပေးပေမဲ့ နောက်ကွယ်မှာ အပြစ်ပြောခြင်းခံရမည်၊ မိမိ က စိတ်ကောင်း ရှိသည်။ သည်းခံစိတ် ရှိသည်။ လူအများကိုလဲ ခင်တွယ်စိတ် ရှိတယ်။ မိမိ က ဘာ မဟုတ်တဲ့ ကိစ္စလေးတွေ နဲ့ စိတ်ဆိုးနေတတ်သည်။ ကလေးတစ်ယောက်လို စိတ်ကောက်လိုက် စိတ်ပြေလိုက် မကြာ ခဏဖြစ်တတ်သည်။ မိမိသည် အပေါင်းအသင်း များသည်။ ဒါပေမဲ့ ရေရှည် လက်မတွဲတတ်။ အပေါင်းအသင်း သစ်တွေနဲ့ လဲ အမြဲတွေ့နေတတ်တဲ့ ရာသီဖွားတွေပါပဲ။ အပျိုကြီး လူပျိုကြီးတွေလဲ ဖြစ်လွယ်ကြတယ်။ မိမိသည် လူအပင် ပန်း ခံနိုင်ပေမဲ့ စိတ် အပင်ပန်း မခံနိုင်ကြပါ။ ဒါပေမဲ့ ကံကလဲ စိတ်ပင်ပန်း အမြဲခံရမည်။ တစ်ယောက်ထဲ ဆို အားငယ်နေတတ်သည်။ ဝမ်းနည်းနေတတ်သည်။ မိမိကိုယ် ကို အားမလို အားမရဖြစ်နေတတ်သည်။ အလုပ် တစ်ခု ကိုလဲ မိမိဆုံးဖြတ်ချက်ဖြင့် မဆုံးဖြတ်နိုင်ပါ။ အမြဲ သူများဆီက အကြံဉာဏ်တောင်းနေရ တတ် သည်။ မိမိ က ပေါင်းသင်း ဆက်ဆံရေးကောင်းပါတယ်။ ခင်မင်အောင်နေတတ်တယ်။မိမိက တစ်ပါးသူကို အထင်ကြီးပြီး အယုံ လွယ်တတ်တဲ့ အတွက် အလိမ်ခံရတတ်တယ်။ မိမိက စိတ်အပြောင်း အလဲမြန်တယ်။ တစ်ခု မပြီးသေးခင်နောက်အသစ် တစ်ခု လုပ်တတ် တယ်။ မိမိက ကံကို ယုံကြည် သည်။ ကောင်းတာ လုပ်ရင် ကောင်းတာဖြစ်မယ်လို့ ခံယူထားသည်။ စိတ်ရှည်ပြီး မည်သည့် အလုပ်ကိုမဆို သေသပ်စွာ လုပ်တတ်သည်။ မိမိကလဲ အများ အထင်ကြီး အောင်လဲနေတတ်ကြသည်။နှုတ်မှုရေးရာ ၊ အနုပညာ အလုပ်တွေ နဲ့အောင်မြင်တတ်သည်။ သိပ် မရင်းနှီးတဲ့ သူဆို မိမိ က စကား နည်း တဲ့သူလို့ ထင်ရပေမဲ့ မိမိက အရမ်း ရင်းနှီးရင်တော့ စကားကို ကရားရေလွှတ်ပြောတတ်သူပါ။ စကားကို အတုံးအတစ်လိုက်ပြောတတ်သည်။ ချီးကျူးစရာ ရှိလျှင် အလွန် အကျူး ချီးကျူး တတ်သလို အပြစ်တွေ့ ရင်လဲ အာမနာတမ်းပြောတတ်တဲ့ အကျင့်ရှိသူပါ။ ဘွင်းဘွင်း ရှင်းရှင်းပြောတတ်သည်။ မသွယ်ဝိုက်တတ်ပေ။မိမိသည် စိတ်ကူး အလွန်ယဉ်သည်။ စိတ်ကူး နဲ့ လေထဲ တိုက်အိမ်ဆောက်နေတတ်သည်။ စိတ်ကူး ထား တာ ဖြစ်မလာရင်လဲ လွန်စွာ စိတ်ဓာတ် ကျတတ်သည်။ မိမိက ထိုသို့ စိတ်ကူးနဲ့ လုပ်မရပါ။ လက်တွေ့ လုပ်ပါ။ အလုပ်ထဲ က မှ ဘဝ အတွက် အဆီ အနှစ်တွေ ထုတ်ယူပါ။ လက်တွေ့ ဘဝ ကနေ အောင်မြင်မှု ရှာပါ။ ။",
    "အရာရာတိုင်း ကို လက်တွေ့မှ ယုံကြည်တတ်ကြသည်  ။ ယထာဘူတ ကျမှ လက်ခံတတ်သည်။ သူများက မြှောက်ပြောတိုင်းလဲ ဘဝင်မမြင့်တတ် သလို ခြောက်ပြောတိုင်းလဲ မကြောက်တတ်ပေ။ စည်းနဲ့ ကမ်းနဲ့နေ တတ်သည်။ အောက်သက်ကြေသည်။ ပေးပြီးသား ကတိကို တည်အောင်ထိန်းသည်။ မည်သည့် အလုပ်ကို မဆို လေးလေးစားစား လုပ်တတ်သည်။ လူအများ၏ အထင်ကြီးခြင်း လေးစားခြင်း ခံရမည်။ စည်းရုံးရေးကောင်းသည်။ ဒါပေမဲ့ မိမိ ၏ ကိုယ်စွမ်း ကိုယ်စများကို မထုတ်ဖော်နိုင်တဲ့ ပုတိဖွားတွေ မအောင်မြင်တတ်ပေ။ မိမိအောင်မြင်ဖို့ ပတ်ဝန်းကျင်ကောင်း အသိုင်း အဝိုင်းကောင်းမှရသည်။ ဘဝ တစ်လျှောက်လုံး ရုန်းကန် လုှပ်ရှားနေရတတ်သည်။ အတက် အကျ များသည်။ တုန်လှုပ် ဖွယ်ရာ ဘေးဆိုး များ မမျှော်လင့်ထားသော ပြဿ        နာများး လဲ မကြာခဏကြုံရ တတ်သည်။ ဒါပေမဲ့ ဒုက္ခတွေကြားက သီသီလေး လွတ်မြောက်တတ်သည်။ အမြဲတမ်း အလကား မနေတတ်။ တစ်ခုခု လုပ်နေရမှကျေနပ်ကြသည်။ အပြင်ပန်း အမြင်မှာ အေးဆေး တည်ငြိမ်တယ် ထင်ရပေမဲ့ စိတ်တိုဒေါသ ထွက် လျှင် အမှန်အမှား မခွဲခြားတတ်တော့ပေ။ ထိန်းသိမ်းနိုင်စွမ်း နည်းကြသည်။ ဘဝ တိုက်ပွဲ အမြဲ ဆင်နွဲနေရမှ ကျေနပ်နေတတ်ကြတယ်။ အရာရာ ပြတ်ပြတ် သားသား ဆောင်ရွက်သည်။ တစ်ခါ တစ်လေ အားနာ တတ်သော်လဲ အားမနာတာက များတယ်။ ရဲတင်းလွန်းခြင်း ဦဆောင် ရဲခြင်းက လူအများရဲ့ သြဘာ ပေးခြင်းခံရတတ်သည်။ မိမိသည် စိတ်ကောင်း စိတ် ဆိုး တစ်လှည့်ဆီဖြစ်မည်။ သူတော်ကောင်းစိတ် ဝင်နေရင် သူများထက် ကောင်းတတ်ပြီး စိတ်ဆိုး စိတ်ယုတ် ဝင်လာရင် ဘီလူးထက် မိုက်ပြတတ်သည်။ ပုတိဖွား တွေဟာ ငယ်ငယ်က ဖတ်ဖူးတဲ့ ကျေး ညီနောင် ပုံပြင်လိုပါပဲ။ သူတော်ကောင်းနဲ့ နီးရင် သူတော်ကောင်းဖြစ်သွားတတ်သလို သူယုတ်မာ နဲ့ နီးရင် သူယုတ်မာဖြစ်သွားတတ်ပါတယ်။ ဒါကြောင့် အောင်မြင်နေတဲ့ ပုတိဖွားတွေကို သုတေသနပြုကြည့်တဲ့အခါ မှာ ပတ်ဝန်းကျင်ကောင်းမှာ နေခဲ့ရတာကို တွေ့ရပါတယ်။မိမိ သည် အခွင့်အရေးတွေကို လက်လွတ် မခံတတ်ဘဲ ရအောင် ယူတတ်သူပါပဲ။ ဖြောင့်မတ် ရိုးသား သူတွေ ပါပဲ။ စိတ် အခန့်မသင်လျှင် ဒေါသ ထွက်လွယ်သည်။ ဒေါသကြီးတာ ဒေါသထွက်လွယ်တာ ကို ရှောင် သင့်တယ် ၊အောင်မြင်မှုအတွက် အတားအဆီး ဖြစ်နိုင်လို့ပါပဲ။ နာမည်ကျော်ကြား လွယ်တဲ့ ဇာတာ ပါပဲ။ ကောင်းတာ လုပ်ရင် နာမည်ကောင်းနဲ့ကျော်ကြား သလို ဆိုးတာ လုပ်ရင်လဲ နာမည်ဆိုး ကို ဖုံးဖိထား လို့မရပါဘူး။မိမိ သည်ငွေနှင့် နီးတဲ့ ဇာတာပါပဲ ။ မကြာခဏငွေ ရတတ်သည်။ ငွေ ကို စည်းနဲ့ ကမ်းနဲ့ သုံးမယ်လို့ ရည် မှန်း ထားသော်လည်း လက်တွေ့မှာတော့ လက်ဖွာတတ်သူပါပဲ ။ ရှိရင် ရှိသလို သုံးတတ်ပြီး မရှိ ရင်ရေသောက် ဗိုက်မှောက်နေတတ်သူ ပါပဲ။ စုလိုက် ကုန်လိုက် ပါပဲ။ ဘဝ မှာ ဒုတိယ အရွယ် က အလွန်ကောင်း မည် ။အောင်မြင်မည်။ ကျော်ကြားမည်။ လူ အထင်ကြီးခြင်းခံရမည်။ မိမိ ဘဝဟာ မကြာခဏ အပြောင်း အလဲကြုံရ တတ်သည်။ အလုပ်မှာလဲ လက်ငါးချောင်းထက် မနည်းပြောင်းလဲ လုပ်ကိုင်နေရတတ်သည်။ ပုတိဖွားတွေ ဟာ မူရင်း စိတ်ထားဖြူစင်ပေမဲ့ ပတ်ဝန်းကျင်ကြောင့် အရောင်ပြောင်းသွားတတ်သည်။ အိမ်ထောင်ဘက်ကောင်းရတတ်သည်။ သားသမီးအကျိုး မခံစားရတတ်ပေ။"
 ]  
 export default function Home (){
  const [d, setSelectValueD] = useState('');
    const handleSelectChangeD = (event) => {
        setSelectValueD(event.target.value);
    };
    const [m, setSelectValueM] = useState('');
    const handleSelectChangeM = (event) => {
        setSelectValueM(event.target.value);
    };
    const [y, setInputValueY] = useState('');
    const handleInputChangeY = (event) => {
        setInputValueY(event.target.value);
    };
    let ds; if(!d){ds='1'}else{ds=d}
    let ms; if(!m){ms='1'}else{ms=m}
    let ys; if(!y){ys='1753'}else{ys=y}
    const dd = g2j(parseInt(ys),parseInt(ms),parseInt(ds));
    const ff = j2m(dd).my;
    let my ; 
	if(ff==1114){my = null}else{my = ff}
    const [mwd, setSelectValue] = useState('');
    const handleSelectChange = (event) => {
        setSelectValue(event.target.value);
    };
    const arryNatk = ['Ogre', 'Elf', 'Human'];
    const natk = ceMmDateTime.cal_nakhat(my);
    const natkes = arryNatk[natk];
    let natkstr;
    if(my && mwd){natkstr = new ceMmTranslate().T(natkes,1)}else{natkstr = ''}
    const r = (my - parseInt(mwd)) % 7;
    const mwda = ["စနေ", "တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ"];
    const pa = ["ဘင်္ဂ", "အထွန်း", "ရာဇ", "အဓိပတိ", "မရဏ", "သိုက်", "ပုတိ"];
    let result = '';
    let result2 = '';
    let result3 = '';
    if (my && mwd){
        result =  `မြန်မာ သက္ကရာဇ် ${num2ms(my)} ခုနှစ် ${mwda[mwd]}   နေ့မွေးဖွားသူသည်`;
        result2 =  `ဖွားဇာတာ : အကြွင်း ${num2ms(my % 7)} ${pa[r]} ဖွားဖြစ်သည် `;
        result3 = `နတ်က္ခတ် : ${natkstr}`;
    } else {
        result = 'မဟာဘုတ် ဖွားဇာတာသိရှိနိုင်ရန်အတွက် မွေးဖွားသည့် ခရစ် သက္ကရာဇ် မွေးနေ့ နှင့် မွေးနေ့နံ ကိုထည့်သွင်းရွေးချယ်ပါ။ရွေးချယ်ပီးသည်နှင့်အောက်တွင် အဟောကိုဖတ်ရှုနိူင်ပါသည်။';
        result2 = '';
        result3 = '';
    }
    // -----------
    var lang,x,mdt,ssy,mmy,mmm,mmd,yyz,astro,dgh,hod,hod2;
    lang = 1;
    x = new ceMmTranslate();
    mdt = new ceMmDateTime();
    ssy = 'သာသနာနှစ်' + ' ' + x.T(mdt.ToMString('&YYYY'),lang);
    mmy = 'မြန်မာသက္ကရာဇ်'+ ' ' + x.T(mdt.ToMString('&yyyy'),lang);
    mmm = x.T(mdt.ToMString('&M'),lang);
    mmd = x.T(mdt.ToMString('&P &f'),lang) + ' ' + 'ရက်';
    if(ceMmDateTime.cal_yatyaza(mdt.mm,mdt.w) == 1) yyz = 'ရက်ရာဇာ';
    if(ceMmDateTime.cal_pyathada(mdt.mm,mdt.w) == 1) yyz = 'ပြသဒါး';
    if(ceMmDateTime.cal_pyathada(mdt.mm,mdt.w) == 2) yyz = 'မွန်းလွဲပြသဒါး';
    astro = x.T(`${mdt.astro}`,lang);
    dgh = 'နဂါးခေါင်း ' + ' ' + x.T(mdt.nagahle,lang) + ' ' + 'လှည့်';
    hod = x.T(`${mdt.holidays}`,lang);
    hod2 = x.T(`${mdt.holidays2}`,lang);
    var dt,ey,em,ed,eh,en,es,myaDate;
    dt = new Date();
    ey = dt.getFullYear();
    em = dt.getMonth();
    ed = dt.getDate();
    eh = dt.getHours();
    en = dt.getMinutes();
    es = dt.getSeconds();
    var jd = ceDateTime.w2j(ey,em,ed,eh,en,es);
    myaDate = `${ssy} - ${mmy} - ${mmm} ${mmd}  ${yyz}  ${dgh}`;
    // myaDate2 = `${astro}  ${hod}  ${hod2}`
    

    // --------
    
    const handleReset = () => {
        setInputValueY('');
        setSelectValue('');
        setSelectValueD('');
        setSelectValueM('');
      };
      const mb =my % 7;
      let mbah = '';
      if (my && mwd){mbah = mbaht[mb];}else{mbah = 'အချက်အလက်များဖြည့်သွင်းပေးပါ';}
     return (
        <>
          <div className="mb">
            <div class={'mbtop'}>
               <h3> မဟာဘုတ် </h3><br />
               {myaDate} <br />
            </div>
            <hr />
            <details>
                    <summary>About</summary>
                    <p>ယခု project ကိုကျနော် javascript လေ့လာရင်းလုပ်ခဲ့တာဖြစ်ပါသည်။တွက်ချက်ပုံနှင့်ဟောချက်များအမှားအယွင်းတစ်စုံတစ်ရာ ရှိပါကနားလည်ပေးပါ။</p>
            </details>
            <hr />
            <div class={'group'}>
                <span>မွေးရက်</span>
                <select value={d} onChange={handleSelectChangeD}>
                    <option value=""><p class={'pp'}> ရွေးချယ်ပါ </p></option>
                {day.map((item) =>(
                    <option key={item} value={item}>{item}</option>
                ))}
                </select>
                <span>မွေးလ</span>
                <select value={m} onChange={handleSelectChangeM}>
                <option value=""><p class={'pp'}> ရွေးချယ်ပါ </p></option>
                    {month.map((item) =>(
                        <option key={item.text} value={item.value}>{item.text}</option>
                    ))}
                </select>
                <span>ခရစ်နှစ်</span>
                <input type="number" value={y} onChange={handleInputChangeY}  placeholder={'အင်းဂလိပ်ဂဏန်း'}/>
                <span>မွေးနံ</span>
                <select  value={mwd} onChange={handleSelectChange}>
                        <option value=''  ><p class={'pp'}> ရွေးချယ်ပါ </p></option>
                        <option value='0'  >စနေ</option>
                        <option value='1'  >တနင်္ဂနွေ </option>
                        <option value='2'  >တနင်္လာ</option>
                        <option value='3'  >အင်္ဂါ </option>
                        <option value='4'  >ဗုဒ္ဓဟူး</option>
                        <option value='5'  >ကြာသပတေး</option>
                        <option value='6'  >သောကြာ</option>
                </select> 
            </div>
                <p> {result}</p><p>{result2}</p><p>{result3}</p>
                <button type="button" onClick={handleReset} >Reset</button>
                <br /><hr />
            <details>
                <summary>အချက်အလက်များဖြည့်သွင်းပြီးသည်နှင့်ဖွားဇာတာအဟောဖတ်ရန်မြားကိုနှိပ်ဖတ်ပါ</summary>
                <p>{mbah}</p>
            </details>
            <hr />
        </div>
        <a href="https://github.com/phothinmg/maharbote" target="_blank"><img src="/github.svg" style={{marginTop:20,marginLeft:10,width:24,height:24}}/></a>
        <br /><br />
        <details>
            <summary>Resources</summary>
            <ol>
              <li><a href="https://coolemerald.blogspot.com/2013/06/algorithm-program-and-calculation-of.html?fbclid=IwAR0RXq5AsMxtoKKmLGxcLJgmOi9Cu3OMZOFc9BLpR-zGqXWEMxsV0pRSBbk" target="_blank"> Algorithm, Program and Calculation of Myanmar Calendar</a></li>
              <li><a href="https://cool-emerald.blogspot.com/2013/12/myanmar-astrological-calendar-days.html" target="_blank">Myanmar Astrological Calendar Days</a></li>
            </ol>
        </details>
        </>
    )

}