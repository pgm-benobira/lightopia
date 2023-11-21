const questions = [
    {
        category: "algemeen",
        question: "Wat is Lightopia Brussels?",
        answer: "Een meermaals georganiseerd lantaarn- en lichtfestival dat traditionele handgemaakte lantaarns combineert met modern design en technologie zoals een watershow, 3D mapping en artistieke installaties om een immersieve ervaring te creëren.",
    },
    {
        category: "algemeen",
        question: "Waar vindt Lightopia Brussels plaats?",
        answer: "",
    },
    {
        category: "algemeen",
        question: "Voor wie is Lightopia Brussels geschikt?",
        answer: "",
    },
    {
        category: "algemeen",
        question: "Op welke data vindt het evenement plaats en wat zijn de openingsuren?",
        answer: "",
    },
    {
        category: "algemeen",
        question: "Welke dagen zijn dalperiode en piekperiode?",
        answer: "",
    },
    {
        category: "parcours",
        question: "Hoe lang duurt het?",
        answer: "",
    },
    {
        category: "parcours",
        question: "Is het evenement geschikt voor kinderen?",
        answer: "",
    },
    {
        category: "parcours",
        question: "Welke kledij moet ik aantrekken?",
        answer: "",
    },
    {
        category: "parcours",
        question: "Mag ik roken of vapen tijdens het evenement?",
        answer: "",
    },
    {
        category: "parcours",
        question: "Zijn er toiletten beschikbaar op het terrein?",
        answer: "",
    },
    {
        category: "parcours",
        question: "Mag ik een fiets meenemen naar Lightopia Brussels?",
        answer: "",
    },
    {
        category: "parcours",
        question: "Mag ik mijn hond meenemen?",
        answer: "",
    },
    {
        category: "parcours",
        question: "Mogen we foto's maken?",
        answer: "",
    },
    {
        category: "parcours",
        question: "Wat gebeurt er als het regent?",
        answer: "",
    },
    {
        category: "eten-en-drinken",
        question: "Waar kan ik eten of drinken?",
        answer: "",
    },
    {
        category: "eten-en-drinken",
        question: "Hoe kan ik betalen voor eten en drinken?",
        answer: "",
    },
    {
        category: "eten-en-drinken",
        question: "Is het Twinkling Café van Lightopia Brussels geschikt voor kinderen?",
        answer: "",
    },
    {
        category: "eten-en-drinken",
        question: "Mag ik mijn eigen eten en drinken meenemen naar Lightopia Brussels?",
        answer: "",
    },
    {
        category: "eten-en-drinken",
        question: "Ik heb vragen over het Twinkling Café van Lightopia Brussels. Wie kan ik contacteren?",
        answer: "",
    },
    {
        category: "toegankelijkheid",
        question: "Is het park toegankelijk voor rolstoelgebruikers?",
        answer: "",
    },
    {
        category: "toegankelijkheid",
        question: "Bieden jullie een gratis ticket aan voor de begeleider van rolstoelgebruikers?",
        answer: "",
    },
    {
        category: "route-&-parking",
        question: "Hoe kom ik naar Lightopia Brussel?",
        answer: "",
    },
    {
        category: "route-&-parking",
        question: "Hoe kom ik met het openbaar vervoer naar het kasteel?",
        answer: "",
    },
    {
        category: "route-&-parking",
        question: "Is er een parking?",
        answer: "",
    },
    {
        category: "route-&-parking",
        question: "Is er een parkeerplaats voor bezoekers met een handicap?",
        answer: "",
    },
    {
        category: "tickets",
        question: "Waar kan ik tickets kopen?",
        answer: 'U kunt uw <a href="https://tickets.grandbigard.be/nl" target="_blank">tickets online kopen</a> of ter plaatse aan de kassa via contant geld, bancontact of kredietkaart, als er nog toegangstickets beschikbaar zijn.<br>Wanneer u tickets ter plaatse aankoopt zal er een supplement van € 2.00 per ticket aangerekend worden.',
    },
    {
        category: "tickets",
        question: "Kan ik ter plaatse tickets kopen?",
        answer: "Ja, u kunt tickets kopen aan de kassa op de dag zelf, als het evenement niet is uitverkocht.<br>Wanneer u tickets ter plaatse aankoopt zal er een supplement van € 2.00 per ticket aangerekend worden.",
    },
    {
        category: "tickets",
        question: "Hoeveel kosten de tickets?",
        answer: 'Onze prijzen vind je op onze <a href="https://tickets.grandbigard.be/nl" target="_blank">ticketpagina</a>.',
    },
    {
        category: "tickets",
        question: "Moet ik vooraf reserveren?",
        answer: "Om teleurstelling te voorkomen, raden we aan uw tickets op voorhand te reserveren. Populaire data zijn snel uitverkocht. Het is mogelijk de dag zelf tickets te kopen aan de kassa.<br>Wanneer u tickets ter plaatse aankoopt zal er een supplement van € 2.00 per ticket aangerekend worden.",
    },
    {
        category: "tickets",
        question: "Is het nodig om de tickets af te drukken?",
        answer: "Nee, u mag de tickets tonen op uw smartphone.",
    },
    {
        category: "tickets",
        question: "Moet ik aankomen op het tijdstip dat op mijn ticket staat of mag ik vroeger of later komen?",
        answer: "U wordt gevraagd om op de aangegeven tijdstippen van uw ticket aanwezig te zijn. We accepteren nog steeds uw toegang als u te laat aankomt.",
    },
    {
        category: "tickets",
        question: "Kan ik de datum van mijn ticket wijzigen?",
        answer: "De datum van het toegangsticket kan alleen worden omgewisseld op vertoon van het ticket aan de kassa op de dag van uw bezoek en tegen betaling van een eventueel prijsverschil. Tickets worden nooit terugbetaald.",
    },
    {
        category: "tickets",
        question: "Wat is het terugbetalingsbeleid?",
        answer: "In onwaarschijnlijke omstandigheden dat we Lightopia Brussels moeten annuleren, kunt u uw ticket overdragen naar een andere datum of storten wij uw geld terug. We zullen iedereen via e-mail en sociale media zo snel mogelijk op de hoogte brengen. Controleer altijd uw spam voor communicatie van ons! In alle andere omstandigheden zijn de Lightopia tickets niet terugbetaalbaar.",
    },
    {
        category: "tickets",
        question: "Hoe/wanneer ontvang ik mijn tickets?",
        answer: 'Na de betaling ontvangt u onmiddelijk de tickets in uw mailbox. Moest u deze niet ontvangen hebben, neem contact op met <a href="mailto:info@lightopia.be">info@lightopia.be</a>.<br>Controleer altijd uw spam.',
    },
    {
        category: "tickets",
        question: "Ik kan mijn tickets niet vinden of ben ze kwijt, wat moet ik doen?",
        answer: 'Na het afronden van uw ticket aankoop, ontvangt u een bevestigingsmail en uw tickets in uw mailbox.<br>U kunt ons ook een e-mail sturen op <a href="mailto:info@lightopia.be">info@lightopia.be</a> als u uw tickets niet kunt vinden. Vermeld daarbij zoveel mogelijk informatie, zoals de locatie, het bestelnummer, de naam en het e-mailadres waarmee u de tickets hebt geboekt.<br>Let op: onze klantenservice kan u niet onmiddellijk te woord staan en heeft meestal minimum 24 uur nodig om op uw vragen te reageren. Controleer uw tickets minimum 2 dagen voor het evenement.',
    },
    {
        category: "tickets",
        question: "Krijg ik korting als ik met een groep kom?",
        answer: 'Vanaf 20 personen krijgt u 2 euro korting per persoon op de normale prijs (buiten piek € 18,50 / piek € 22,50). Wij raden u aan <a href="#" target="_blank">uw tickets online te reserveren</a>. Voor meer vragen over groepsboekingen, contacteer <a href="mailto:info@lightopia.be">info@lightopia.be</a>.',
    },
    {
        category: "contact",
        question: "Waar kan ik terecht voor een partnership verzoek?",
        answer: 'Neem contact op via c.',
    },
    {
        category: "contact",
        question: "Hebben jullie een contactpersoon voor influencers, media of pers?",
        answer: 'Neem dan contact op via <a href="mailto:info@lightopia.be">info@lightopia.be</a>.',
    },
];