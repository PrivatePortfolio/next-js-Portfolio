var nodemailer = require("nodemailer");
import {prisma} from '@/lib/prisma';
import { TIMEOUT } from 'dns';

function message (inputemail){
const htmlmessage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get Your Free Phone Today!</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">

    <table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td align="center" style="padding: 20px;">
                <h1 style="color: #333;">Get Your Free Phone Today! 📱</h1>
            </td>
        </tr>
    </table>

    <table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td align="center"><a href="truconnect.pxf.io/R5ZNPN" target="_blank">
           <img src="https://res.cloudinary.com/dt0ujnagp/image/upload/v1694371740/82083_7eb52dbf06.jpg" alt="Free Phone Image" style="max-width: 100%; height: auto;"></a>
            </td>
        </tr>
    </table>

    <table width="100%" bgcolor="#ffffff" cellpadding="20" cellspacing="0" border="0">
        <tr>
            <td align="center">
                <h2 style="color: #333;">Here's what you'll get:</h2>
                <ul>
                    <li>A <span>free*</span> brand-new, top-of-the-line Cloud Mobile
                    Stratus C7 smartphone</li>
                    <li>Stunning design and cutting-edge features</li>
                    <li>Crystal-clear display for a superior viewing experience</li>
                    <li>Select Plans Now Comes with Amazon Prime On Us!</li>
                </ul>
            </td>
        </tr>
    </table>

    <table width="100%" bgcolor="#ffffff" cellpadding="20" cellspacing="0" border="0">
        <tr>
            <td align="center">
                <h2 style="color: #333;"> Wireless Phone Features:</h2>
                <ul>
                    <li>5.5” LCD Touchscreen - Brilliant, Responsive, Vibrant</li>
    <li>Dual SIM - Versatile, Convenient, Flexible</li>
    <li>16 GB Storage, 2 GB RAM - Spacious, Efficient, Smooth</li>
    <li>8 MP Rear Camera, 5 MP Front Camera - capturing your cherished moments</li>
    <li>Android™ 12 (GO edition) - Modern, User-Friendly, Feature-Rich</li>
    <li>2.0 GHz Quad-Core Processor - Powerful, Fast, Responsive</li>

                </ul>
            </td>
        </tr>
    </table>

    <table width="100%" bgcolor="#ffffff" cellpadding="20" cellspacing="0" border="0">
        <tr>
            <td align="center">
                <p>This offer is too good to pass up, and it's available for a limited time only!</p>
                <p>Click the button below to claim your FREE phone:</p>
                <a href="truconnect.pxf.io/R5ZNPN" target="_blank" style="display: inline-block; background-color: #007bff; color: #fff; text-decoration: none; padding: 15px 30px; font-size: 16px; border-radius: 5px;">Claim Your Free Phone</a>
            </td>
        </tr>
    </table>

    <table width="100%" bgcolor="#ffffff" cellpadding="20" cellspacing="0" border="0">
        <tr>
            <td align="center">
                <p>*Lifeline is a government program that subsidizes phone service for qualified customers.

                <p>If you meet the eligibility requirements, you can get one free smartphone and monthly service for your household. Ready to connect? TruConnect offers Lifeline in 37 states, Puerto Rico, and the U.S. Virgin Islands..</p>
                <b>Qualifying programs include:</b>
                <ul  style="list-style: none; padding: 0;">
    <li>Medicaid / Medi-Cal</li>
    <li>SNAP / CalFresh</li>
    <li>Federal Public Housing Assistance or Section 8</li>
    <li>Supplemental Security Income (SSI)</li>
    <li>Veteran and Survivors Pension Benefit</li>
    <li>Multiple Tribal Assistance Programs</li>
    <li>And more!</li>
</ul>

            </td>
        </tr>
    </table>
    <div style="text-align: center; background-color: #ff0000; padding: 10px;">
    <a href="https://sweetphonedeals.online/Unsubscribe?email=${inputemail}" target="_blank" style="color: #fff; text-decoration: none; font-weight: bold;">Too much mail? Unsubscribe here</a>
</div>
</body>
</html>`

return htmlmessage
}

// -----------------------------------------------------------------------------
// export async function sendMail() {
// var transporter = nodemailer.createTransport({
//     service: "gmail",
//     //   port: 587,
//     // secure: true,
//     auth: {
//       user: process.env.GOOGLE_EMAIL_USER,
//       pass: process.env.GOOGLE_EMAIL_PASS

//     },
//     tls: {
//         // do not fail on invalid certs
//         rejectUnauthorized: false,
//       },
// });

// **magic email */ https://www.wpoven.com/tools/free-smtp-server-for-testing#
// export async function sendMail() {
//     var transporter = nodemailer.createTransport({
//         host: 'smtp.freesmtpservers.com',
//         port: 25,
//         tls: { // do not fail on invalid certs
//             rejectUnauthorized: false
//         }
//     });

    // export async function sendMail() {
    // var transporter = nodemailer.createTransport({
    //        host: 'smtp.ethereal.email',
    //     port: 587,
    //     auth: {
    //       user: process.env.ETHERIAL_USER,,
    //       pass: process.env.ETHERIAL_PASS,
    //     },
    //     tls: {
    //         // do not fail on invalid certs
    //         rejectUnauthorized: false,
    //       },
    // });


    // **magic email */
    export async function sendMail() {
    var transporter = nodemailer.createTransport({
        host: 'smtp.mailgun.org',
        port: 25,
        auth: {
          user: process.env.MAILGUN_USER,
          pass: process.env.MAILGUN_PASS,
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
          },
    });


    function mailerOptions(transferemail){
    var mailOptions = {
        from: `Subsidized Phones <NoReply@your.sweetphonedeals.online>`,
        // from: 'cool@noreply.sweetjellyparties.com',
        // to: 'admin@dinosaur.com',
        // to: 'chris.z.norton@gmail.com',
        // to: 'shawn@govelocitydigital.com',
        to: transferemail,
        // to: 'malcolmxvernon@hotmail.com',
        subject: 'Subsidized Wireless Plans Are Here',
        // attachments: [
        //     {
        //         filename: 'Malcolm.jpg',
        //         path: 'https://profile.malcmind.com/Malcolm.jpg',

        //     }
        // ],
        // replyTo: 'admin@malcmind.com',
        // text: 'this is a test message ',
        html: message(transferemail)
    };
    return mailOptions
  }

    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            console.log(process.env.NODEMAILER_USERNAME)
        } else {
            console.log("Server is ready to take our messages");
        }
    });
    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //       throw new Error(error);
    //     } else {
    //       console.log("Email Sent");
    //       return true;
    //     }
    // });
    // }
    const loader = [

  'samitamarcellus@yahoo.com',
        'jameshouck330@gmail.com',
        'm_bolka@yahoo.com',
        'only1alyssac@gmail.com',
        'kclark.texas@gmail.com',
        'maryowens10@comcast.net',
        'vickchsl@gmail.com',
        'sttprincip@aol.com',
        'ahsb@msn.com',
        'terryjones122tl24@gmail.com',
        'robert.villagomez@gmail.com',
        'bertb0318@gmail.com',
        'migsgomz42@gmail.com',
        'ms.cryssie83@gmail.com',
        'marigenis1031@gmail.com',
        'jlgammage76@gmail.com',
        'jqt1990@gmail.com',
        'eliascruz8080@gmail.com',
        'danierjoseph592@gmail.com',
        'brandyvaughn93@gmail.com',
        'rollandmansell43@gmail.com',
        'andretto24400@gmail.com',
        'vaneharris237@gmail.com',
        'rileyguttosch@gmail.com',
        'mrfirefighter16@yahoo.com',
        'kristagomez37@gmail.com',
        'missking2023@gmail.com',
        'walksok@gmail.com',
        'cassandravasquez818@yahoo.com',
        'idoldaisy@gmail.com',
        'gravelyjulie9@gmail.com',
        'tmadison8723@gmail.com',
        'issacromo42@icloud.com',
        'kimmy72549@gmail.com',
        'begayr79@yahoo.com',
        'tommygirl_no4@yahoo.com',
        'lpn_ironwoman@yahoo.com',
        'karen.rice@yahoo.com',
        'clover.smith@gmail.com',
        'stone.lakenya@gmail.com',
        'kiranjassa001@gmail.com',
        'lbeave34@msn.com',
        'jnole11@gmail.com',
        'colewoniabnks@yahoo.com',
        'juanmcervantesjr@gmail.com',
        'kaseyhale0328@gmail.com',
        'annemarjo89@gmail.com',
        'moffettgiy@gmail.com',
        'jenniferjuradover9@gmail.com',
        'teresahightower52@gmail.com',
        'leeimclaughlin81@gmail.com',
        'malik_grimes24@outlook.com',
        'edens.md@gmail.com',
        'its.josh.marvin@gmail.com',
        'lgalluzzi715@gmail.com',
        'channelellorin@yahoo.com',
        'lescobedo879@gmail.com',
        'johns7160@yahoo.com',
        'scoronado23@aol.com',
        'lilypienrz@gmail.com',
        'samuel_claiborne@yahoo.com',
        'jbandremer@gate.net',
        'aaronwill084@gmail.com',
        'lanesiawhite0@gmail.com',
        'kkissof2@gmail.com',
        'kscurtin55@gmail.com',
        'kpeterson0696@gmail.com',
        'soledad.andrew123@gmail.com',
        'hmburton2014@gmail.com',
        'sunshinegalloway@gmail.com',
        'nanc_quinn@yahoo.com',
        'ashleylagorio03@gmail.com',
        'loreanyy@gmail.com',
        'twinscarmen@gmail.com',
        'jspedy29@gmail.com',
        'ldriskel@gmail.com',
        'omeganeo.bbrownlee@gmail.com',
        'smurfett222@gmail.com',
        'tamyahayes1013@gmail.com',
        'omar_6909@hotmail.com',
        'brandon.savoy@gmail.com',
        'stacey5735@gmail.com',
        'gavila6769@gmail.com',
        'lovethtlast4ever@icloud.com',
        'a.ricquan@yahoo.com',
        'redsnow74@gmail.com',
        'bigbusiness901@yahoo.com',
        'dawnbking02@gmail.com',
        'terry.selley@yahoo.com',
        'ogskrilla727@gmail.com',
        'arriannamolina@hotmail.com',
        'lukefam1@yahoo.com',
        'troymvail@gmail.com',
        'staciejones@outlook.com',
        'steve.alvarado@live.com',
        'joshuadonte@gmail.com',
        'lawrencesnouffer@gmail.com',
        'amyzoenau@gmail.com',
        'rassler4life@outlook.com',
        'g_haralson@yahoo.com',
        'franciarubyp75@gmail.com',
        'sheffieldite@hotmail.com',
        'westernave167s@gmail.com',
        'fireman9a14@yahoo.com',
        'shannabarry0@gmail.com',
        'ledezmaalondra82@gmail.com',
        'orville.sankey@msn.com',
        'tyree31@gmail.com',
        'valpag@gmail.com',
        'grochjohn@hotmail.com',
        'penne_eiken@yahoo.com',
        'bc89hootowl@hotmail.com',
        'hammond64012@yahoo.com',
        'ckeosombath@gmail.com',
        'sutabe02@gmail.com',
        'jackterry580@gmail.com',
        'lcaml131@gmail.com',
        'jason.gleaton@gmail.com',
        'foziarajput1974@gmail.com',
        'wagcli8@gmail.com',
        'lizzyhansen2018@gmail.com',
        'lemmon202@gmail.com',
        'hannahwillam21@gmail.com',
        'murescoj@gmail.com',
        'lewis9977@mac.com',
        'cruz.ortiz16@icloud.com',
        'radams0323@yahoo.com',
        'dnhartig15@gmail.com',
        'john_jurries56@hotmail.com',
        'johnwhitedrywall59@gmail.com',
        'nikki.hurst@gmail.com',
        'hoskinsbet65@gmail.com',
        'titi0526@gmail.com',
        'ralphlinder32@gmail.com',
        'lsmilliken@gmail.com',
        'rbriddle86@gmail.com',
        'kimbatton58@gmail.com',
        'l.donch@live.com',
        'charity.merino.ray5@gmail.com',
        'ringerfantasyfootball@gmail.com',
        'janillawarren@gmail.com',
        'edwardrussell782@gmail.com',
        'edgarberry.21@gmail.com',
        'lhillyard83@hotmail.com',
        'katsachs@hotmail.com',
        'gmshirley19@gmail.com',
        'baileylessong@gmail.com',
        'davidd4207@gmail.com',
        'hollybschultz@gmail.com',
        'mlctribb1@gmail.com',
        'alversontammy75@gmail.com',
        'kebray@gmail.com',
        'aaronstelias@hotmail.com',
        'bsm200745@gmail.com',
        'millermargaret39@yahoo.com',
        'amcclenney1978@gmail.com',
        'vbrandij@gmail.com',
        'tracisanner@gmail.com',
        'juliettesdivinedesign@gmail.com',
        'ttaylorm@oberlin.edu',
        'lmopanther@comcast.net',
        'babyblueive@gmail.com',
        'choloelbori@gmail.com',
        'c.ferrell@wayneferrell.com',
        'veroypuchis@gmail.com',
        'jandkj@cox.net',
        'trentonsmith13@gmail.com',
        'tweisz@bellsouth.net',
        'beto_h_1@msn.com',
        'scotty7.jm@gmail.com',
        'juderamos@msn.com',
        'kamlinfarms@gmail.com',
        'lizardking1@hotmail.com',
        'daltonrich@gmail.com',
        'boswelljacqueline@yahoo.com',
        'bdg2090@gmail.com',
        'sdantis@gmail.com',
        'mandig4117@gmail.com',
        'myrlenecann@gmail.com',
        'aprillonline@gmail.com',
        'beverlymgc@yahoo.com',
        'pcampbellco-b@outlook.com',
        'varounder@gmail.com',
        'cuda54@cfl.rr.com',
        'kieshahoo@yahoo.com',
        'vince1230@comcast.net',
        'fdifabio1@comcast.net',
        'devineone22@hotmail.com',
        'nainaid10@icloud.com',
        'pattikohlrust@gmail.com',
        'sushil.k.choudhary@gmail.com',
        'danielanderson98@gmail.com',
        'betsparano@comcast.net',
        'jmjaramillo09@yahoo.com',
        'buzzmonkey@comcast.net',
        'krahorst@gmail.com',
        'janflan2001@prodigy.net',
        'sunshine.sutton@yahoo.com',
        'wundawomyn924@gmail.com',
        'tsaad3@icloud.com',
        'mark.golden2@icloud.com',
        'richardnuts@gmail.com',
        'rtbluett@att.net',
        'loliearl@att.net',
        'milsapllj@gmail.com',
        'dmeguess@yahoo.com',
        'trtmsav@optonline.net',
        'ccagee3@bellsouth.net',
        'svrslmpsream@gmail.com',
        'chrisbarreto3189@icloud.com',
        'lea082000@yahoo.com',
        'dariusgreen304@gmail.com',
        'djcas@hotmail.com',
        'jasswashington@gmail.com',
        'teester30@gmail.com',
        'james.outlaw.brady924@gmail.com',
        'mindy2u@hotmail.com',
        'm0157@hotmail.com',
        'hungcongdoan506@gmail.com',
        'billyt1940@sbcglobal.net',
        'mechittum@me.com',
        'wilsoncreola@yahoo.com',
        'cweb1959@aol.com',
        'supranos@gmail.com',
        'shieldsa37@yahoo.com',
        'titomrtnz15@gmail.com',
        'pennyblevins123@gmail.com',
        'linacsd@bellsouth.net',
        'michael_mccauley1977@yahoo.com',
        'lizzbethann70@gmail.com',
        'vpiercin@gmail.com',
        'davidlaney007@gmail.com',
        'rickjkiser92@gmail.com',
        'jayy80311@gmail.com',
        'summrsmith@gmail.com',
        'cjebelean@yahoo.com',
        'tarjackson@gmail.com',
        'denniswilding5@gmail.com',
        'albertgayle49@yahoo.com',
        'shisandre4@gmail.com',
        'isabellarocca0007@gmail.com',
        'rangerdirt13@gmail.com',
        'godforg.g7777@gmail.com',
        'pcmboys1@hotmail.com',
        'enriquezramirezfernando4@gmail.com',
        'natalieefernandes@gmail.com',
        'zaniya.buckner@gmail.com',
        'dljames25@hotmail.com',
        'ravesharon81@gmail.com',
        'bobbiatl@gmail.com',
        'danny120883@gmail.com',
        'billyouten@gmail.com',
        'brigra0801@gmail.com',
        'houmdh@yahoo.com',
        'rebeccaknapchuck@gmail.com',
        'drufinley1@gmail.com',
        'george.godinez@gmail.com',
        'celestehopkins64@gmail.com',
        'yvonne19111@gmail.com',
        'nikkahicks11@gmail.com',
        'ashleyruis68@icloud.com',
        'terinacrowell@gmail.com',
        'melissakennedy@outlook.com',
        'lcsied@mediacombb.net',
        'velasquez_lydia@yahoo.com',
        'czenigami@gmail.com',
        'tamidario@gmail.com',
        'michelle.dunn.martinez1968@gmail.com',
        'mchfan346@gmail.com',
        'melindaave83@verizon.net',
        'tmaldondo@gmail.com',
        'scriddell@gmail.com',
        'jody.siegel@gmail.com',
        'markedwardgreen2boys@gmail.com',
        'mtd70@aol.com',
        'richetta.davis@gmail.com',
        'hablettj26@gmail.com',
        'emilyhvessey@gmail.com',
        'bradc6712@gmail.com',
        'sdbownes@gmail.com',
        'natalydmgz@yahoo.com',
        'ms65sport1@netzero.com',
        'avishiland@hotmail.com',
        'jameseshort@yahoo.com',
        'fearlessforfun@hotmail.com',
        'freeman3623@gmail.com',
        'dlp1938@hotmail.com',
        'felferna@yahoo.com',
        'mstansutton66@gmail.com',
        'katiemilstead@hotmail.com',
        'cynthia.tucker1123@gmail.com',
        'nm1raider75@yahoo.com',
        'perlanduswilliams68@gmail.com',
        'frenkvega@gmail.com',
        'javonvirgina@msn.com',
        'weaverjamesbjr@bellsouth.net',
        'riahsmama59@gmail.com',
        'heather.may125@gmail.com',
        'pinklady1066@hotmail.com',
        'andreaha9@aol.com',
        'dkorn12@gmail.com',
        'margie-0@comcast.net',
        'jbrown9911@gmail.com',
        'kristal.burkett@gmail.com',
        'sandymccann64@yahoo.com',
        'thony.beaubrun63@gmail.com',
        'gbj4361@gmail.com',
        'justyoung@gmail.com',
        'rgentry83@yahoo.com',
        'jamiekristinaharper2069@gmail.com',
        'nancy-fraga@live.com',
        'csh30@yahoo.com',
        'aneisamorgan1@gmail.com',
        'ladyhobo25@gmail.com',
        'aprilwilliams1992@gmail.com',
        'angiesherwood@outlook.com',
        'macontogiannis@gmail.com',
        'jimmyhiggins@yahoo.com',
        '1herbthomas92@gmail.com',
        'danielle.deering@yahoo.com',
        'amanda79brown@yahoo.com',
        'cpoluhoff@gmail.com',
        'ghastings71@gmail.com',
        'jrenay@yahoo.com',
        'feist.trooper@gmail.com',
        'sessomlamont2929@gmail.com',
        'jenkinsns@hotmail.com',
        'jessika.moreno.ponce15@gmail.com',
        'yellaonez@gmail.com',
        'jessicaminney21886@gmail.com',
        'phebert98@gmail.com',
        'joshjfranco@gmail.com',
        'smokey82652@gmail.com',
        'brown.amber22@yahoo.com',
        'paijacks12@gmail.com',
        'ednab63@gmail.com',
        'tb452701@yahoo.com',
        'shilohsounds@att.net',
        'j.mojoloeffler@comcast.net',
        'osetzer@gmail.com',
        'vhauer1@gmail.com',
        'lillianstevens622@gmail.com',
        'alange2@gmail.com',
        'makinya94@gmail.com',
        'mshinbrood@gmail.com',
        'harr841@comcast.net',
        'wallacebilly1982@gmail.com',
        'th420payne@yahoo.com',
        'rweber1960@icloud.com',
        'gbuckeyeman@hotmail.com',
        'marieachille51@gmail.com',
        'aport800@aol.com',
        'sandeelee63@yahoo.com',
        'amysunderland@hotmail.com',
        'caclady2@yahoo.com',
        'latinflavr123@aol.com',
        'daonlybarbiedoll06@gmail.com',
        'mh978432@gmail.com',
        'darrh0408@gmail.com',
        'catherinemcquan@gmail.com',
        'aiecooper@hotmail.com',
        'thomasaaron975@gmail.com',
        'khairel09@gmail.com',
        'oyusuff@yahoo.com',
        'dragg72@yahoo.com',
        'ibriegordon@gmail.com',
        'teriegreene@gmail.com',
        'kyleebeasley527@gmail.com',
        'tweet1906@yahoo.com',
        'dave.halstead52@gmail.com',
        'kylemarion288@gmail.com',
        'd-mccormick@sbcglobal.net',
        'teachk@my.lowercolumbia.edu',
        'katelyanadesire26@gmail.com',
        'goodstonesforever360@gmail.com',
        'brandon_mitchell2121@yahoo.com',
        'torreyannalin@gmail.com',
        'fassidrissi@msn.com',
        'missmeshia@live.com',
        'hstarkak@gmail.com',
        'featherstonlarry@yahoo.com',
        'decarrol@gte.net',
        'rosariomelencio@gmail.com',
        'staceyroland@yahoo.com',
        'hassanelliott2@gmail.com',
        'dianethomas93@gmail.com',
        'lessanickerson@yahoo.com',
        'loukodek@yahoo.com',
        'mnmbeetler@gmail.com',
        'timmier1967@gmail.com',
       'shafesta44@hotmail.com',
        'lanstone@zoominternet.net',
        'ashtonprinceofcross@gmail.com',
        'shortyreg19@yahoo.com',
        'wbrack4115@gmail.com',
        'abdelrahman1988@gmail.com',
        'jgb89@hotmail.com',
        'marlyngcolindres42@gmail.com',
        'gjordan0325@gmail.com',
        'pervisthomas@ymail.com'
        
        
    ]


    // const loader = [
    //     'admin@dinosaur.com',
    //     'birdog2800@aol.com',
    //     'admin@dinossaur.com',
    //     'admin@dinosaur.com',
    //     'admin@dinosaur.com',
    // ]


    let increment = 2000
    let emailnumber = 1

    for (let x of loader) {

      setTimeout(() => handler(x), increment);
      //executeEmail(x)
        increment = increment + 60000

        
    }

    async function handler(x){
      await executeEmail(x)
    }

    async function executeEmail (email){
        let test = await prisma.phoneEmailUnsubscribe.findUnique({
            where: {
                email: email
            }
        });

        try {
            if (test.email != null) {
                console.log('user is on the do not call list')
            }
        } catch {
            await new Promise(
                (resolve, reject) => { // send mail
                    transporter.sendMail(mailerOptions(email), (err, response) => {
                        if (err) {
                            reject(err);
                        } else {
                            console.log(emailnumber,email, "Email Sent");
                            emailnumber = emailnumber + 1
                            resolve(response);
                        }
                    });
                }
            );
        }}


}
