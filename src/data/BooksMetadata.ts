export interface BookData {
  description: string
  numOfImages: number
  storeUrl: string
}

export const BooksMetadata: Map<string, BookData> = new Map<string, BookData>([
  [
    'bibele',
    {
      description:
        '<p><b>BĪBELE VIEGLI LASĀMĀ VALODĀ</b></p>' +
        '<p>Aizraujošs Svēto Rakstu atstāstījums no 1. Mozus līdz Atklāsmes grāmatai.</p>' +
        '<p><b>No angļu valodas tulkojusi Ailita Kuka.</b></p>' +
        '<p>Bībele jeb Vecās un Jaunās Derības Svētie Raksti ir kā milzīga dārgumu lāde, kas jau vairāku tūkstošu gadu ' +
        'garumā ir mainījusi un turpina mainīt to cilvēku dzīves, kuri vērīgi ieskatījušies tās saturā. Bībele nes ' +
        'nenovecojošu, allaž mūsdienīgu vēsti, kas ir aktuāla visos laikos un visām paaudzēm.</p>' +
        '<p>“Bībeli viegli lasāmā valodā” ļoti novērtēs cilvēki, kuri līdz šim Bībelei “metuši līkumu”, jo viņiem tā ' +
        'likusies pārāk bieza vai sarežģīta. Viss Svēto Rakstu saturs tajā ietverts 365 īsās nodaļās. Šajā jaunajā ' +
        'un mūsdienīgajā stāstījumā lasītājs iegūst visaptverošu Bībeles pārskatu no Radīšanas līdz lielajiem plūdiem, ' +
        'patriarhiem Ābrahāmam, Īzakam, Jēkabam; no Mozus līdz Izraēla tautas soģiem, ķēniņiem un praviešiem. ' +
        'Jaunajā Derībā redzams, kā tas, par ko tika pravietots gadsimtus iepriekš, precīzi piepildās Jēzus Kristus ' +
        'dzīvē un pirmo kristiešu piedzīvojumos, kas aprakstīti Apustuļu darbos un vēstulēs.</p>',
      numOfImages: 3,
      storeUrl: 'https://www.amnis.lv/Bibeles%20lat.val./bibeles/bibele-viegli-lasama-valoda',
    },
  ],
  [
    'jauna_deriba',
    {
      description:
        '<b>BĪBELE VIEGLI LASĀMĀ VALODĀ - JAUNĀ DERĪBA</b><br>' +
        '<div class="s-author-caption">Janice Emmerson</div>' +
        '<p>"Svēto Rakstu atstāstījums no Mateja evaņģēlija līdz atklāsmes grāmatai."</p>' +
        '<p>"Bībele viegli lasāmā valodā - Jaunā Derība, plūst kā upe no Jēzus evaņģēliju notikumiem Apustuļu darbos un iedvesmojošām vēstulēm, noslēdzoties ar Jēzus Bībeles pēdējā - Atklāsmes - grāmatā."</p>',
      numOfImages: 1,
      storeUrl: 'https://www.amnis.lv/Bibeles%20lat.val./bibeles/bibele-viegli-lasama-valoda---jauna-deriba',
    },
  ],
  [
    'laipnibas_skola',
    {
      description:
        '<b>LAIPNĪBAS SKOLA</b><br>' +
        '<div class="s-author-caption">Šauntija Feldhana</div>' +
        '<p>Iedomājies savas vissarežģītākās attiecības. Iedomājies attiecības, kas ir labas, bet varētu būt lieliskas. Iedomājies par cilvēkiem, kuri tevi padara traku. Tu vēlies būt laipnāks un dāsnāks, taču reizēm tu esi tik noguris, “izspiests” un neapmierināts, ka… <br>' +
        'Turklāt, vai gan mazi darbi var radīt lielas izmaiņas? Var!<br>' +
        'Pēc plašiem pētījumiem vairāku gadu garumā Šauntija Feldhana ir nonākusi pie secinājuma, ka laipnībai piemīt pārcilvēciska vara. Tā spēj mainīt jebkuras attiecības, padarīt mūsu dzīvi vieglāku un labāku un pārveidot mūsu sabiedrību. Jā, bet kā būt laipnam, kad tu tāds nemaz nejūties?</p>' +
        '<p>Grāmatā “Laipnības skola” aplūkotās tēmas:</p>' +
        '<ul>' +
        '<li>Trīs vienkārši laipnības apliecinājumi, kas pārvērtīs jebkuras attiecības.</li>' +
        '<li>Septiņi veidi, kā tu vari but nelaipns, pats to neapzinādamies.</li>' +
        '<li>Astoņas laipnības izpausmes un kura no tām būtu tev vispiemērotākā.</li>' +
        '<li>Praktiski veidi kā nepadoties, kad būt laipnam ir grūti.</li>' +
        '<li>Kā laipnība ģimenē noved pie jaukiem brīžiem guļamistabā (tiešām!).</li>' +
        '<li>Kā tavi laipnības darbi var palīdzēt mainīt pasauli.</li>' +
        '</ul>' +
        '<p>Šauntija Feldhana ir pasaulē plaši pazīstama lektore un daudzu novatorisku grāmatu autore (latviksi izdota viņas grāmata: “Tikai sievietēm”).</p>' +
        '<p>Šauntijai ir Hārvarda universitātes grāds un viņa ir izstrādājusi inovatīvu pētījuma veikšanas metodi, kas palīdz labāk izprast cilvēku savstarpējās attiecības.</p>',
      numOfImages: 1,
      storeUrl: 'https://www.amnis.lv/Attiecibas/gramatas/laipnibas-skola',
    },
  ],
  [
    'tikai_sievietem',
    {
      description:
        '<b>TIKAI SIEVIETĒM</b><br>' +
        '<div class="s-author-caption">Šauntija Feldhana</div>' +
        '<p>Kas viņam tur iekšā notiek?<br>' +
        'Vai jums kādreiz ir gadījies, ka jūsu vīrieša teiktais vai rīcība jūs ir ievedusi pilnīgā apjukumā?<br>' +
        'Vai vēlaties uzzināt par viņa apslēptajām vēlmēm un bailēm, par viņa ikdienas cīņām, par kurām jūs pat nenojaušat?<br>' +
        'Neizmirstamā, sievišķīgā sarunā Šauntija Feldhana jums ļauj pārvarēt virspusējību un nolaisties vīriešu iekšējās dzīves dzelmēs. Šī grāmata ir par lietām, kas mums vīriešos "nepielec". "Tikai sievietēm" ir neskaitāmi atklājumi, ko autore ir ieguvusi gan vēl nebijušas visaptverošas aptaujas rezultātā, gan arī personiski intervējot aptuveni tūkstoš visdažādāko vīriešu. Šīs atklāsmes jums ir nepieciešamas ne vien lai labāk saprastu savu vīrieti, bet arī lai viņu atbalstītu un mīlētu tā, kā viņam tas ir vajadzīgs. Saņemot spēku bibliskā cerībā, jūs atklāsiet, kā mīlēt savu vīrieti tādu, kāds viņš patiešām ir, un nevis tādu, kādu viņu redzat jūs.</p>',
      numOfImages: 1,
      storeUrl: 'https://www.amnis.lv/sievietem/gramatas/tikai-sievietem',
    },
  ],
  [
    'tikai_viriesiem',
    {
      description:
        '<b>TIKAI VĪRIEŠIEM</b><br>' +
        '<div class="s-author-caption">Šauntija un Džefs Feldhani</div>' +
        '<p>"Ja tu esi tāds kā vairākums vīriešu, tu esi patērējis daudz enerģijas, pūlēdamies izprast, ko sieva grib, kas viņu iedvesmo un kā viņu padarīt laimīgu. Labā ziņa ir tā, ka panākumu atslēga ir vienkāršāka, nekā tu domā! Savā grāmatā autori dalās ar noderīgām patiesībām un vienkāršiem padomiem, kas krasi uzlabos tavas attiecības ar sievu. Grāmatā aplūkotas tādas tēmas kā: ' +
        '<ol>' +
        '<li>Kāpēc viņa nevar "vienkārši nedomāt" par kaut ko, kas viņu nomāc,</li>' +
        '<li>Kā panākt, lai viņa pasaka skaidri un gaiši, </li>' +
        '<li>Kā tavs apgādnieka instinkts var nodarīt viņai sirdssāpes, kā to labot, </li>' +
        '<li>Kāpēc "ne šovakar, mīļais", iespējams, nenozīmē to, ko tu domā, </li>' +
        '<li>Kāpēc vīrietim ir tik grūti uzklausīt viņas emocijas, un efektīvs rīcības plāns, </li>' +
        '<li>Kāpēc viņas "jā" pie altāra vienmēr nozīmē "vai tu arī?" un atbilde, kas padarīs viņu par laimīgāko sievieti pasaulē."</li>' +
        '</ol></p>',
      numOfImages: 1,
      storeUrl: 'https://www.amnis.lv/viriesiem/gramatas/tikai-viriesiem',
    },
  ],
])
