// import { createContext } from "react"

const Data =
    [
        {
            "id": 1,
            "title": "ISRO Successfully Tests Propulsion Systems on India's First Human Spaceflight Mission Gaganyaan",
            "img_url": "https://i.gadgets360cdn.com/large/gaganyaan_isro_twitter_1690457814486.jpg?downsize=950:*",
            "description": "ISRO has successfully carried out two more tests as part of plans to further validate and refine the performance of the propulsion system that would be used to launch India's first human spaceflight mission Gaganyaan. The 'hot tests' on Gaganyaan Service Module Propulsion System (SMPS) were conducted at the ISRO Propulsion Complex, Mahendragiri, in Tamil Nadu on Wednesday.",
            "category": "Technology"
        },
        {
            "id": 2,
            "title": "Inception",
            "img_url": "https://images.squarespace-cdn.com/content/v1/5ec686197f8b2976074846c2/1618809593080-N5PB8CWYOW3OPDE2TT6E/Feature+3-1.png",
            "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
            "rating": "8.8/10",
            "category": "Hollywood"
        },
        {
            "id": 3,
            "title": "Drishyam",
            "img_url": "https://v3img.voot.com/kimg/kimg/59a297733c884b8fb45cbc7b2f59b75c_1280X720.jpg",
            "description": "The film starts with a new con man in the town called Pondolem, a fictitious village in Goa, joining the newly built police station in the town. While walking through the station with a constable, he notices a man, ostensibly named Vijay Salgaonkar, sitting at one far end. The newly joined policeman asks whether he is 'Vijay Salgaonkar', to which the constable replies positively. The film then goes into a flashback as 'Vijay' closes his eyes.",
            "rating": "8.2/10",
            "category": "Bollywood"
        },
        {
            "id": 4,
            "title": "Deadlift",
            "img_url": "https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_760/MTk2MTM2NjQ2NDAzODkyMzY5/1-deadlift.webp",
            "description": "Arguably the king of all exercises, the deadlift hits every major muscle group hard, and is perhaps the greatest test of strength there is. Because of all the muscles involved, it releases a huge amount of testosterone (a muscle-building hormone) into the bloodstream. For this reason, the deadlift is a great cornerstone for any fitness plan",
            "category": "Fitness"
        },
        {
            "id": 5,
            "title": "Pani Puri on Google Doodle: The tangy street food that unites India",
            "img_url": "https://www.awesomecuisine.com/wp-content/uploads/2007/11/Pani-Puri.jpg.webp",
            "description": "Today, the world is celebrating the very humble and popular street food of India called Pani Puri. Wondering why? Well, it is because Google Doodle has featured India’s most loved street food with a fun interactive game. As per Google’s blog post, as on this day in 2015, in Indore, Madhya Pradesh, a restaurant called Indori Zayka achieved the World Record for serving the most flavours of pani puri by offering 51 options",
            "category": "Food"
        },
        {
            "id": 6,
            "title": "Samsung Galaxy Unpacked Live Updates: Samsung Unveils Galaxy Z Fold 5 and Galaxy Z Flip 5 - Gadgets 360",
            "img_url": "https://i.gadgets360cdn.com/large/galaxy_unpacked_2023_samsung_1688609323941.jpg",
            "description": "Samsung Galaxy Unpacked is set to kick off at Seoul in South Korea in a few hours. The South Korean firm is expected to introduce the Galaxy Z Flip 5 and the Galaxy Z Fold 5, alongside the Galaxy Watch 6 series, and the Galaxy Tab S9 series of tablets",
            "category": "Technology"
        },
        {
            "id": 7,
            "title": "Munna Bhai M.B.B.S.",
            "img_url": "https://upload.wikimedia.org/wikipedia/en/8/84/Munna_Bhai_M.B.B.S._poster.jpg",
            "description": "Based in Mumbai, the films follows Munna Bhai (Sanjay Dutt), a goon who tries to please his father (Sunil Dutt) by pretending to be a physician. When a doctor, Asthana (Irani), exposes Munna's lies and tarnishes his father's honour, Munna enrols in a medical college. Hijinks ensue when Munna, upon finding that Asthana is the college's dean, vows revenge, while also sparking a romance with a house doctor, Suman (Singh), unaware that she is Asthana's daughter",
            "rating": "8.1/10",
            "category": "Bollywood"
        },
        {
            "id": 8,
            "title": "Interstellar",
            "img_url": "https://images7.alphacoders.com/550/550739.jpg",
            "description": "Interstellar is a 2014 epic science fiction film co-written, directed, and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Matt Damon, and Michael Caine. Set in a dystopian future where humanity is embroiled in a catastrophic blight and famine, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humankind.",
            "rating": "8.7/10",
            "category": "Hollywood"
        },
        {
            "id": 9,
            "title": "Masala Dosa",
            "img_url": "https://static.toiimg.com/thumb/54289752.cms?width=800&height=800&imgsize=495844",
            "description": "Masala Dosa is one of the most popular South Indian delicacies. To prepare the batter for Masala Dosa, wash and soak the rice (with fenugreek added into it) and urad dal in separate containers for approximately 6-8 hours. Once the rice and urad dal are soaked well, grind them separately in a mixer using the water in which they were soaked, till the mixture reaches a smooth consistency.",
            "category": "Food"
        },
        {
            "id": 10,
            "title": "Back squat",
            "img_url": "https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_503/MTk2MTM2NjQ2OTM1NzE3MDA5/2-back-squat.webp",
            "description": "Just like the deadlift, the barbell back squat hits just about every major muscle group there is in the body and is the king of leg-developing movements. Any athlete will tout the squat as the reason they run fast, jump high, and keep increasing in strength all over. ",
            "category": "Fitness"
        },
        {
            "id": 11,
            "title": "Oats Mini Uttapam",
            "img_url": "https://images1.livehindustan.com/uploadimage/library/2022/06/17/16_9/16_9_6/oats_mini_uttapam_1655468253.jpg",
            "description": "healthy kick start of the day is a must to keep your body and mind healthy. This oats mini uttapam recipe will serve the purpose well. Made with oats, sooji, curd and topped with some healthy veggies, these mini uttapams are not only tasty but also full of nutrition. You can either savour them in breakfast or have them as an evening snack with a cup of tea",
            "category": "Food"
        },
        {
            "id": 12,
            "title": "Saaho",
            "img_url": "https://wallpaperaccess.com/full/1890637.jpg",
            "description": "Narantak Roy is a powerful, influential businessman who leads Roy Group, a corporate company and world's biggest crime syndicate that governs Waaji City, a fictional metropolitan city. When Roy visits Mumbai for a business deal, he is killed in a deliberate car crash. Devaraj, the son of Roy's friend, business partner, mentor and the former crime syndicate leader Pruthviraj, plans to declare himself the next leader of Waaji City. Ibrahim, Roy's most-trusted secretary, tells Kalki, the legal advisor of Roy Group, Roy's family has been dead for decades and that he had been hiding a secret – that he had a son named Vishwank Roy – for 25 years.",
            "rating": "5.0/10",
            "category": "Bollywood"
        },
        {
            "id": 13,
            "title": "Kuo: iPhone 15 and iPhone 15 Plus to Feature 48-Megapixel Camera That Can Capture More Light - MacRumors",
            "img_url": "https://images.macrumors.com/t/R0r7mnpEficcUIhaUbXG8FEAwYU=/2500x/article-new/2023/04/iPhone-15-Cyan-and-Magenta-Frosted-Back-Feature.jpg",
            "description": "Apple first introduced a 48-megapixel camera lens on the iPhone 14 Pro and ‌iPhone 14 Pro‌ Max last year. The lens enables users to shoot 48-megapixel ProRAW photos, which retain more detail in the image file for more editing flexibility. By contrast, last year's iPhone 14 and ‌iPhone 14‌ Plus used a 12-megapixel camera lens. Kuo's report corroborates a claim by Jeff Pu, an analyst at Hong Kong-based investment firm Haitong International Securities, who in May said the 48-megapixel lens on the ‌iPhone 15‌ and ‌iPhone 15‌ Plus will use a new three-stacked sensor that can capture more light for improved image quality.",
            "category": "Technology"
        },
        {
            "id": 14,
            "title": "Bench Press",
            "img_url": "https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_760/MTk2MTM2NjQ2NDAyMDU3MzYx/3-bench-press.webp",
            "description": "Every gym-goer in the world has been asked “Whaddya bench?” at least once. This move is responsible for developing powerful, well-defined pecs, shoulders, and triceps, which lead to a more commanding presence, with or without a shirt on. Combine that with the muscle-building effects of the testosterone this move releases and all you have left to do is watch your “little black book” fill up.",
            "category": "Fitness"
        },
        {
            "id": 15,
            "title": "Mission: Impossible - Ghost Protocol",
            "img_url": "https://thumbnails.cbsig.net/CBS_Production_Entertainment_VMS/2021/05/16/1897646147899/paramountplus_missionimpossibleghostprotocol_poster_16_9_trl_669218_1920x1080.jpg",
            "description": "IMF agent Trevor Hanaway is killed in Budapest by assassin Sabine Moreau, who steals Russian nuclear launch codes to sell to a man named 'Cobalt'. IMF agent Ethan Hunt is extracted from a Moscow prison, along with an asset named Bogdan, by Hanaway's handler and girlfriend Jane Carter and newly-promoted field agent Benji Dunn. The team is ordered to infiltrate the Kremlin for information on Cobalt. While they are inside, Cobalt blows the team's cover and they escape before a bomb destroys much of the Kremlin. Jane and Benji escape, but Ethan is arrested by SVR agent Anatoly Sidorov and is blamed for the bombing.",
            "rating": "7.4/10",
            "category": "Hollywood"
        },
        {
            "id": 16,
            "title": "New AI Tool 'FraudGPT' Emerges, Tailored for Sophisticated Attacks - The Hacker News",
            "img_url": "https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEgkUhU2G4STDTvac1zmZZ0odmJvjr6-uodIsgfffrWvw8u0NnvRa-FoJQ_VvZaXgZ_QOqR934sv0X9sMydRzcsFaXW4IfX4QwJXgjHOJWzzFAbfZ7N3tfPDaHRcnM5cp-EIsnG13nXhILGQeVCMfUgunPGvWFgOgRSpBqe5fIBwhJ4WL0zpyhu7P9i0qTno/s728-e3650/gpt.jpg",
            "description": "Following the footsteps of WormGPT, threat actors are advertising yet another cybercrime generative artificial intelligence (AI) tool dubbed FraudGPT on various dark web marketplaces and Telegram channels. 'This is an AI bot, exclusively targeted for offensive purposes, such as crafting spear phishing emails, creating cracking tools, carding, etc.,' Netenrich security researcher Rakesh Krishnan said in a report published Tuesday.",
            "category": "Technology"
        },
        {
            "id": 17,
            "title": "Metaverse",
            "img_url": "https://worldaviationfestival.com/wp-content/uploads/2022/09/Metaverse.png",
            "description": "At this stage, Metaverse can be described as “a more digital world.” The experience of immersive online environments and next-level user experiences are expected to witness a massive growth in the next five years.In simple terms, the word 'metaverse' can be described as a profoundly immersive 3D virtual world experience obtained using a combination of AR, VR, and MR technologies. By creating a virtual world where users may play games, interact socially, conduct business, and more.  The metaverse platform enhances the experience of the internet.",
            "category": "Technology"
        },
        {
            "id": 18,
            "title": "Artificial Intelligence",
            "img_url": "https://www.sharda.ac.in/blog/attachments/blog_images/Artificial-Intelligence1.jpg",
            "description": "The hype for Artificial Intelligence has been around us for a while. If you are someone who works with technology, you may not relish how ubiquitous Artificial Intelligence has become. AI has already shown its superiority in navigation apps, smartphones, and more to carry out creative and mundane tasks. This AI hype isn’t going to end any time soon. The growing ecosystem of low-code or no-code AI systems and as-a-service platforms will make it more accessible",
            "category": "Technology"
        },
        {
            "id": 19,
            "title": "Catapulting satellites into space",
            "img_url": "https://images.immediate.co.uk/production/volatile/sites/4/2022/12/106972827-1636476512762-spinlaunchfirstlaunch2-29b198b.jpeg?quality=90&webp=true&resize=1100,619",
            "description": "SpinLaunch is a prototype system for getting satellites or other payloads up into space. It does this by using kinetic energy instead of the usual technique of using chemical fuel found in traditional rockets. This technology could be capable of spinning payloads at 8,000km/h and 10,000G, then launching them skyward through a large launch tube. Of course, small rocket engines will still be required for payloads to reach orbit, but SpinLaunch has claimed this system cuts down on the fuel and infrastructure by an impressive 70 per cent.",
            "category": "Technology"
        },
        {
            "id": 20,
            "title": "Boom-free supersonic flight",
            "img_url": "https://images.immediate.co.uk/production/volatile/sites/4/2022/12/nasa-flight-3821a98.jpg?quality=90&webp=true&resize=1200,786",
            "description": "NASA's X-59 'quiet' supersonic aircraft is set to take to the skies for its first test flight at the Armstrong Flight Research Center later this year. The plane is currently being assembled in a hangar at Lockheed Martin’s Skunk Works facility in Palmdale, California. Its fuselage, wings and tail have been specially designed to control the airflow around the plane as it flies, with the ultimate aim of preventing a loud sonic boom from disturbing people on the ground below when it breaks the sound barrier. ",
            "category": "Technology"
        },
        {
            "id": 21,
            "title": "Internet for everyone",
            "img_url": "https://images.immediate.co.uk/production/volatile/sites/4/2022/12/hiber-mini--0f1e475.jpg?quality=90&webp=true&resize=1200,799",
            "description": "Google is slowly trying to solve the problem using helium balloons to beam the internet to inaccessible areas, while Facebook has abandoned plans to do the same using drones, which means companies like Hiber are stealing a march. They have taken a different approach by launching their own network of shoebox-sized microsatellites into low Earth orbit, which wake up a modem plugged into your computer or device when it flies over and delivers your data.",
            "category": "Technology"
        },
        {
            "id": 22,
            "title": "ChatGPT",
            "img_url": "https://kripesh.b-cdn.net/wp-content/uploads/2023/01/Open-AI-ChatGPT-1024x576.jpg",
            "description": "ChatGPT (Chat Generative Pre-Trained Transformer) is a large language model-based chatbot developed by OpenAI and launched on November 30, 2022, notable for enabling users to refine and steer a conversation towards a desired length, format, style, level of detail, and language used. Successive prompts and replies, known as prompt engineering, are taken into account at each stage of the conversation as a context.[2]",
            "category": "Technology"
        },
        {
            "id": 23,
            "title": " Asus ROG GX800VH",
            "img_url": "https://i.ytimg.com/vi/pMFWurWNjuA/maxresdefault.jpg",
            "description": "Two NVIDIA GTX 1080s, an overclocked i7 processor, 64 GB RAM, and a couple of SSDs are not bad for a current high-end PC, never mind a six-year-old laptop. The Asus ROG GX800VH could still hold its own today, which is astonishing when you consider a console generation has almost passed between its release and now. There is always a tradeoff, and the GX800VH lost some of the portability you expect with a laptop when Asus decided to cram a high-end gaming desktop's worth of hardware in there. The enormous battery and water cooling system needed to make this thing function also piled on the pounds. Read More: https://www.slashgear.com/835996/the-12-most-expensive-laptops-in-the-world/",
            "category": "Technology"
        },
        {
            "id": 24,
            "title": "Space Tourism",
            "img_url": "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/142027-gadgets-feature-life-in-the-future-tech-that-will-change-the-way-we-live-image4-zups3xqyey.jpg?q=50&fit=crop&w=750&dpr=1.5",
            "description": "We can fly to virtually any country in the world without any trouble, but what if we could all one day see the earth from space? Companies such as Virgin Galactic, SpaceX and even Amazon's Blue Origin, want to make it a reality one day, and give us a (very expensive) seat aboard a spaceship to take us into orbit. Passengers on Amazon's New Shepard space shuttle will be taken 100km above sea level, before parachuting back to earth.",
            "category": "Technology"
        },
        {
            "id": 25,
            "title": "Flying cars",
            "img_url": "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/142027-gadgets-feature-life-in-the-future-tech-that-will-change-the-way-we-live-image10-fr4edrowqb.jpg?q=50&fit=crop&w=750&dpr=1.5",
            "description": "When there's no space left on the roads, it's not unreasonable to think we might take to the skies. There are already plenty of interesting flying car designs that show this future is a realistic possibility. Perhaps if it's not flying cars, we might all have other forms of personal transport - jetpacks, for example, have been a popular pursuit of inventors and thrill-seekers for decades.",
            "category": "Technology"
        },
        {
            "id": 26,
            "title": "Hyper-fast trains",
            "img_url": "https://www.pbs.org/newshour/app/uploads/2016/05/hyperloop-1024x502.jpg",
            "description": "Another Elon Musk backed company, Hyperloop is a high-speed underground transport system currently being built and tested in America. The first route planned will go from Los Angeles to San Francisco. Another route is planning to go from New York to Washington D.C. in 29 minutes rather than the 2 hours 56 minutes it takes at the moment. Hyper-fast trains that go underground and underwater could revolutionise not just public transport, but international travel too. Imagine being able to speed from one country to another in the same time it currently takes to travel between towns.",
            "category": "Technology"
        },
        {
            "id": 27,
            "title": "Robot soldiers",
            "img_url": "https://www.syfy.com/sites/syfy/files/2020/05/sniper.jpg",
            "description": "Robots are a running theme for the future tech in our list, but Boston Dynamics is constantly working on machines aimed at supporting or taking an active role in the military. It's perfectly reasonable to imagine a future where robots are sent to fight our battles, in the place of men and women. These expendable machines are more likely to get the job done without fear, injury or problems with PTSD or follow up care if they get hurt.",
            "category": "Technology"
        },
        {
            "id": 28,
            "title": "Dumbbell romanian deadlift",
            "img_url": "https://www.inspireusafoundation.org/wp-content/uploads/2021/11/dumbbell-romanian-deadlift.gif",
            "description": "This could be the most important exercise there is for lower-back health and developing an impressive set of glutes. Any seasoned lifter will tell you they're truly impressed by a good set of legs, and a butt usually comes with it. Also, this move helps to make the hamstrings more flexible, meaning less back pain after sitting all day.",
            "category": "Fitness"
        },
        {
            "id": 29,
            "title": "Kettlebell swing",
            "img_url": "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/russian-kettlebell-swing.gif",
            "description": "Often confused as a squat and front raise combo for the legs and shoulders, respectively, this move is actually an explosive hip hinge, great for the glutes and conditioning. When done properly, the hip-hinge movement combined with the cardio aspect (due to the explosiveness of the movement) will help create a strong, ripped physique any guy would be jealous of.",
            "category": "Fitness"
        },
        {
            "id": 30,
            "title": "Suspended pushup",
            "img_url": "https://evofitness.at/wp-content/uploads/2017/12/1560-X-816-Blog-Header-2.jpg",
            "description": "Trainers far and wide have touted the usefulness of suspension-training systems like the TRX for years, and the fitness population is starting to catch on. In a pushup, the instability of the handles leads to more muscle fiber activation, in turn leading to more strength and muscle development in less time than in other variations of the classic pushup, as well as long-term health for your shoulders.",
            "category": "Fitness"
        },
        {
            "id": 31,
            "title": "Pullup",
            "img_url": "https://images.squarespace-cdn.com/content/v1/5750d5129f72662d66448028/1514528603500-BQMRQ36KEF30IRJ6KV1Q/Pullup.jpg?format=1500w",
            "description": "Nothing quite says I'm big like a wide set of shoulders; a wide back doesn't hurt either. The best move for developing those big, fan-shaped muscles (latissimus dorsi, aka, the lats) that make your shoulders look wide is the traditional pullup. It’s a big, multijoint move, which leads to testosterone release, meaning strength and overall muscle development will be enhanced.",
            "category": "Fitness"
        },
        {
            "id": 32,
            "title": "Medicine ball slam",
            "img_url": "https://steelsupplements.com/cdn/shop/articles/shutterstock_1936861222_1000x.jpg?v=1617886529",
            "description": "Some guys work for a lifetime to develop a ripped midsection like the fitness models we see in magazines. Others know the secret of disciplined eating and the best exercises for abs out there, none of which are a crunch or variation. The medicine ball slam carves out gorges in the midsection, making your abs look like a street map of midtown Manhattan and adds a good amount of cardio to your workout so you can maintain that look",
            "category": "Fitness"
        },
        {
            "id": 33,
            "title": "Swiss Ball Rollout",
            "img_url": "https://www.masterofmuscle.com/wp-content/uploads/2015/10/bigstock-one-caucasian-man-exercising-w-46408357-e1444640572458.jpg",
            "description": "Although very challenging, the Swiss ball rollout is an essential part of anyone’s quest for a six-pack. As you roll out on the ball, your abs are put under increasing tension, and any fitness expert knows that one of the secrets to building ripped, lean muscle is high muscular tension. Use this move in place of a crunch to carve out a defined six-pack.",
            "category": "Fitness"
        },
        {
            "id": 34,
            "title": "Banded Good Morning",
            "img_url": "https://s3assets.skimble.com/assets/1622146/image_iphone.jpg",
            "description": "Although this move looks like it would hurt your lower back, it in fact has the opposite effect. The good morning is a great developer for those muscles; and the use of a band makes it more like a physical therapy exercise than a traditional lift. Not only that, but this exercise will assist you in the squat, allowing you to load up more weight on the bar.",
            "category": "Fitness"
        },
        {
            "id": 35,
            "title": "Farmer's Walk",
            "img_url": "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/what-are-farmers-walks.jpg",
            "description": "Yes, it's tempting to walk into the gym and immediately start tinkering with the most complicated machine you can find. But sometimes, the best workout you can do is just hefting around some heavy stuff. After your workout, try carrying a pair of 70-pound dumbbells around for more than 30 seconds; your forearms will be on fire. After a few weeks of this, you can expect your weights to start increasing faster than ever before.",
            "category": "Fitness"
        },
        {
            "id": 36,
            "title": "Cycling",
            "img_url": "https://dqh479dn9vg99.cloudfront.net/wp-content/uploads/sites/9/2016/06/07081947/breathing_bw.jpg",
            "description": "To be fit and healthy you need to be physically active. Regular physical activity can help protect you from serious diseases such as obesity, heart disease, cancer, mental illness, diabetes and arthritis. Riding your bicycle regularly is one of the best ways to reduce your risk of health problems associated with a sedentary lifestyle.",
            "category": "Fitness"
        },
        {
            "id": 37,
            "title": "Football",
            "img_url": "https://i.pinimg.com/originals/43/da/d4/43dad487f79708311bd9ae425fda4b90.jpg",
            "description": "Everyone who has played football in the past has the experience of doing so-called 'football fitness training' in which he had to do exercises which had nothing to do with football. Running around the pitch, sprinting between cones or even uphill, jumping over hurdles or … How can something be called ‘football fitness’ but the players are doing everything except playing football? This is yet another symptom of a world without clear terminology and definitions. The solution is simple. Let’s define football fitness.",
            "category": "Fitness"
        },
        {
            "id": 38,
            "title": "Running",
            "img_url": "https://media.istockphoto.com/id/1176806665/photo/runner-running-jogger-jogging-man-isolated-light-painting-black-background.jpg?s=612x612&w=0&k=20&c=6W3xEB-WNor4KvUjozi_fqeg5jqV0ZkpgHilmoQpUCI=",
            "description": "running is a popular form of physical activity. About one in 5 Australians try running (or jogging) at some stage in their life. Running is an appealing exercise because it doesn't cost a lot to take part and you can run at any time that suits you. Some runners choose to participate in fun runs, athletics races or marathons. If you are interested in competing with other runners, contact your local running club",
            "category": "Fitness"
        },
        {
            "id": 39,
            "title": "John Wick",
            "img_url": "https://m.media-amazon.com/images/I/414xSc5DJwL._UF1000,1000_QL80_.jpg",
            "description": "John Wick (Keanu Reeves) was born Jardani Jovonovich in Belarus.[5][6] He was an orphan who was taken in by the Ruska Roma crime syndicate, where he was raised as an assassin, eventually rising to become the top enforcer of the Russian Mafia and known as 'Baba Yaga' ('the one you sent to kill [the] Boogeyman') under crime boss Viggo Tarasov (Michael Nyqvist), who deemed him so ruthless so as to respect and fear him. At the beginning of the first film, Wick has been retired from being a hitman for five years after undertaking an 'impossible task' for Tarasov, wiping out all other organized crime syndicates in New York City in order to be allowed to leave to marry Helen (Bridget Moynahan) before her eventual death from cancer, leaving him known as a legend in the assassin underworld worldwide.",
            "rating": "7.4/10",
            "category": "Hollywood"
        },
        {
            "id": 40,
            "title": "Extraction",
            "img_url": "https://m.media-amazon.com/images/M/MV5BNDBkOWNiMTYtMjlkZS00NzJlLTg0ZmUtN2YwYWQ3N2I3N2Y0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
            "description": "Extraction is a 2020 American action thriller film directed by Sam Hargrave (in his feature directorial debut) and written by Joe Russo, based on the graphic novel Ciudad by Ande Parks, Joe Russo, Anthony Russo, Fernando León González, and Eric Skillman. The film's cast features Chris Hemsworth, Rudhraksh Jaiswal, Randeep Hooda (his international film debut), Golshifteh Farahani, Pankaj Tripathi and David Harbour. In the film, an Australian black ops mercenary takes on a mission to save an Indian drug lord's kidnapped son in Dhaka, Bangladesh, but the mission goes awry when he is double-crossed.",
            "rating": "6.8/10",
            "category": "Hollywood"
        },
        {
            "id": 41,
            "title": "The Maze Runner",
            "img_url": "https://lumiere-a.akamaihd.net/v1/images/image_c09a58e5.jpeg",
            "description": "The Maze Runner is a 2014 American dystopian science fiction film directed by Wes Ball, in his directorial debut, based on James Dashner's 2009 novel of the same name. The film is the first installment in The Maze Runner film series and was produced by Ellen Goldsmith-Vein, Wyck Godfrey, Marty Bowen, and Lee Stollman with a screenplay by Noah Oppenheim, Grant Pierce Myers, and T.S. Nowlin. The film stars Dylan O'Brien, Kaya Scodelario, Aml Ameen, Thomas Brodie-Sangster, Ki Hong Lee, Will Poulter, and Patricia Clarkson.",
            "rating": "6.8/10",
            "category": "Hollywood"
        },
        {
            "id": 42,
            "title": "The Gray Man",
            "img_url": "https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
            "description": "The Gray Man is a 2022 American action thriller film directed by Anthony and Joe Russo, from a screenplay the latter co-wrote with Christopher Markus and Stephen McFeely, based on the 2009 novel of the same name by Mark Greaney. The film stars Ryan Gosling, Chris Evans, Ana de Armas, Jessica Henwick, Regé-Jean Page, Wagner Moura, Julia Butters, Dhanush, Alfre Woodard, and Billy Bob Thornton. Produced by the Russo brothers' company AGBO, it is the first film in a franchise based upon Greaney's Gray Man novels.",
            "rating": "6.5/10",
            "category": "Hollywood"
        },
        {
            "id": 43,
            "title": "The Dark Knight",
            "img_url": "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
            "description": "A gang of masked criminals robs a mafia-owned bank in Gotham City, each betraying and killing each other until the sole survivor, the Joker, reveals himself as the mastermind and escapes with the money. The vigilante Batman, district attorney Harvey Dent, and police lieutenant Jim Gordon ally to eliminate Gotham's organized crime. As Batman's alter-ego, the billionaire Bruce Wayne publicly supports Dent as Gotham's legitimate protector, believing his success will allow Batman to retire so Wayne can romantically pursue his childhood friend Rachel Dawes, despite her relationship with Dent.",
            "rating": "9.0/10",
            "category": "Hollywood"
        },
        {
            "id": 44,
            "title": "Captain America: Civil War",
            "img_url": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg",
            "description": "Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. The new status quo deeply divides members of the team. Captain America (Chris Evans) believes superheroes should remain free to defend humanity without government interference. Iron Man (Robert Downey Jr.) sharply disagrees and supports oversight. As the debate escalates into an all-out feud, Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner) must pick a side.",
            "rating": "7.8/10",
            "category": "Hollywood"
        },
        {
            "id": 45,
            "title": "The Raid",
            "img_url": "https://wallpapercave.com/wp/wp11446630.jpg",
            "description": "Rama is a rookie brimob officer who joins a 20-man squad led by Sergeant Jaka and Lieutenant Wahyu for a raid on an apartment block with the intent of arresting crime lord Tama Riyadi. Together with his lieutenants Andi and Mad Dog, Tama runs the block and allows criminals and addicts to rent rooms under his protection.",
            "rating": "7.6/10",
            "category": "Hollywood"
        },
        {
            "id": 46,
            "title": "Star Trek Into Darkness",
            "img_url": "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ddb742057bf182bc9d7423aa59e11e962cb7b90664a12418b70aeb95cc839dba._RI_TTW_.jpg",
            "description": "Star Trek Into Darkness is a 2013 American science fiction action film directed by J. J. Abrams and written by Roberto Orci, Alex Kurtzman, and Damon Lindelof.[3] It is the 12th installment in the Star Trek franchise and the sequel to the 2009 film Star Trek, as the second in a rebooted film series. It features Chris Pine reprising his role as Captain James T. Kirk, with Zachary Quinto, Simon Pegg, Karl Urban, Zoe Saldana, John Cho, Anton Yelchin, Bruce Greenwood, and Leonard Nimoy reprising their roles from the previous film.",
            "rating": "7.7/10",
            "category": "Hollywood"
        },
        {
            "id": 47,
            "title": "Spectre",
            "img_url": "https://i0.wp.com/elrincon.tv/wp-content/uploads/2016/08/80575fb22c58f2add8f44ea003c5b050-1024x640.jpg?ssl=1",
            "description": "n Mexico City, MI6 agent James Bond foils a bombing attempt during a Day of the Dead festival. Bond obtains a ring stylized with an octopus from the deceased[failed verification] attacker, Marco Sciarra, uncovering his connection to a secret organization.",
            "rating": "6.8/10",
            "category": "Hollywood"
        },
        {
            "id": 48,
            "title": "King Kong",
            "img_url": "https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            "description": "King Kong is a 2005 epic adventure monster film co-written, produced, and directed by Peter Jackson. It is the eighth entry in the King Kong franchise and the second remake of the 1933 film of the same title, following the 1976 film. The film stars Andy Serkis, Naomi Watts, Jack Black, and Adrien Brody. Set in 1933, it follows the story of an ambitious filmmaker who coerces his cast and hired ship crew to travel to mysterious Skull Island. ",
            "rating": "7.2/10",
            "category": "Hollywood"
        },
        {
            "id": 49,
            "title": "London Has Fallen",
            "img_url": "https://m.media-amazon.com/images/M/MV5BODE5ZWMxODktODlmZC00YjExLTkxNzQtY2ZkYTEzMDU0NGU1XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg",
            "description": "G8 intelligence services locate Pakistani arms trafficker and terrorist mastermind Aamir Barkawi at his compound, and authorize a US Air Force drone strike during his daughter's wedding, killing Barkawi's family and seemingly Barkawi himself.",
            "rating": "5.9/10",
            "category": "Hollywood"
        },
        {
            "id": 50,
            "title": "The Mummy",
            "img_url": "https://m.media-amazon.com/images/I/91WrI0WYJnL._RI_.jpg",
            "description": "In Thebes, Egypt, 1290 BC, high priest Imhotep has an affair with Anck-su-namun, the mistress of Pharaoh Seti I. They kill the Pharaoh after he discovers their relationship. Imhotep flees, while Anck-su-namun kills herself. Believing he can resurrect her, Imhotep and his priests steal her corpse and travel to Hamunaptra, the City of the Dead. The resurrection ritual is stopped by Pharaoh's bodyguards, the Medjai. Imhotep's priests are mummified alive, while Imhotep himself is tortured",
            "rating": "7.1/10",
            "category": "Hollywood"
        },
        {
            "id": 51,
            "title": "The Mechanic",
            "img_url": "https://images5.alphacoders.com/325/thumb-1920-325140.jpg",
            "description": "Hitman Arthur Bishop sneaks into the home of a Colombian cartel boss and drowns him in his own pool. Upon returning home to Louisiana, he meets with his friend and mentor Harry McKenna. Bishop is then assigned by his employer Dean to kill Harry. Dean tells Bishop about a failed mission in South Africa, in which several assassins were killed, the details of which are known only to Dean and Harry. Reluctantly, Bishop kills Harry and makes it look like a carjacking",
            "rating": "6.5/10",
            "category": "Hollywood"
        },
        {
            "id": 52,
            "title": "Avatar: The Way of Water",
            "img_url": "https://imageio.forbes.com/specials-images/imageserve/63bb1581b82b5d6f35c4756b/0x0.jpg?format=jpg&width=1200",
            "description": "Sixteen years after the Na'vi repelled the RDA invasion of Pandora,[a] Jake Sully lives as chief of the Omatikaya clan and raises a family with Neytiri, which includes sons Neteyam and Lo'ak, daughter Tuk, and adopted children Kiri (born from Grace Augustine's inert avatar) and Spider, the Pandora-born human son of the late Colonel Miles Quaritch. To the Na'vi's dismay, the RDA led by their new leader Frances Ardmore returns to colonize Pandora as Earth is dying due to ecocide.[",
            "rating": "7.6/10",
            "category": "Hollywood"
        },
        {
            "id": 53,
            "title": "Thai Rolls with Tofu",
            "img_url": "https://kitchenatics.com/wp-content/uploads/2021/07/Vietnamese-Spring-Rolls-1.jpg",
            "description": "ove gorging on kathi rolls and wraps? Fond of Thai cuisine as well? Then you need to try this Thai roll recipe for sure. Made with tofu stuffing, these rolls are high in protein and offers you a healthy option to satiate your cravings. You can also serve these rolls during a kitty party or pack them up and take them on your road trip. You can also roll them up and give them to your kids and be assured that they are eating something healthy.",
            "category": "Food"
        },
        {
            "id": 54,
            "title": "Greek Salad with Lemon Dressing",
            "img_url": "https://static.toiimg.com/thumb/58910127.cms?width=1200&height=900",
            "description": "Greek Salad with Lemon Dressing is a healthy and delicious mix of a lot of salad veggies along with cheese! This is a simple-to-make Mediterranean recipe. What's more, if you are a health freak then you must try this salad as it is is low on carbs and high on nutrition! The lemon juice dressing adds a tangy flavour to the this salad. This quick and easy-to-make salad is a no-cook recipe and can be had for brunch, lunch or dinner.",
            "category": "Food"
        },
        {
            "id": 55,
            "title": "Chicken Cheese Sandwich",
            "img_url": "https://static.toiimg.com/photo/87710163.cms",
            "description": "Looking for a quick breakfast recipe? Then try this simple yet delicious sandwich recipe. To make this simple recipe, you just need some leafy greens, chicken, cheese slices and topped with spices. If you are fond of open sandwiches, then you can try this my making it an oven. However, if you like it simple and yummy, then try it in our way and enjoy",
            "category": "Food"
        },
        {
            "id": 56,
            "title": "Brownie",
            "img_url": "https://static.toiimg.com/thumb/84057028.cms?width=1200&height=900",
            "description": "Fond of all types of chocolaty delights? Then try this fudgy chocolate brownie that you can bake in just 2 minutes. Made with chocolate, butter, flour, milk and sugar, this sinful delight can be easily made when you crave something sweet. Microwave brownie is super easy to make and will be loved by people of all ages. You can prepare it in the microwave when those sugar cravings hit and you don't feel like preparing something grand",
            "category": "Food"
        },
        {
            "id": 57,
            "title": "Mexican Burger",
            "img_url": "https://static.toiimg.com/thumb/75584113.cms?width=1200&height=900",
            "description": "Burgers are one of most favourite comfort foods we have. They are easy to cook and so delicious to eat! Burgers are the most amazing on-the-go recipes, just a few ingredients in place and you are good to go! The burger patty is one of the most versatile ingredients that can be added to any burger. From vegetable patty to chicken patty to beef patty or paneer patty, you can experiment according to your mood.",
            "category": "Food"
        },
        {
            "id": 58,
            "title": "Vegetarian Soft Tacos",
            "img_url": "https://static.toiimg.com/thumb/57644643.cms?imgsize=572701&width=800&height=800",
            "description": "This classic Mexican dish is here to claim its crown. Ride a joyous flavourful ride with these yummy soft vegetarian tacos which come together within a mere time of just 20 to 25 minutes. This easy taco recipe is perfectly suitable for all vegetarians and even for the gluten intolerant people as well. Check out this amazing recipe for vegetarian soft tacos and go on mesmerizing all the taste buds, but in a Mexican way. ",
            "category": "Food"
        },
        {
            "id": 59,
            "title": "Blueberry Milkshake",
            "img_url": "https://static.toiimg.com/photo/84226147.cms",
            "description": "Blueberry Milkshake is a refreshing summer drink, if you like fruit milkshakes then you can opt for this palatable blueberry milkshake. It's super easy to make and won't take up much of your time. A creamy fruit drink for the times when you feel lazy and hungry at the same time. ",
            "category": "Food"
        },
        {
            "id": 60,
            "title": "Baked BBQ Chicken",
            "img_url": "https://www.halfbakedharvest.com/wp-content/uploads/2021/05/Spicy-Beer-BBQ-Chicken-Skewers-with-Avocado-Corn-and-Feta-Salsa-1.jpg",
            "description": "Baked BBQ Chicken is a healthy and tasty recipe for all the non-vegetarian lovers out there! It has a combination of spices and barbeque sauce. If you're missing out on BBQ Chicken lately due to COVID circumstances, this recipe is just the right one for you.",
            "category": "Food"
        },
        {
            "id": 61,
            "title": "Christmas Cake",
            "img_url": "https://static.toiimg.com/photo/61913948.cms",
            "description": "Christmas is around the corner and choosing the right cake with rich seasonal flavours is a big deal. Though, you can get a traditional cake from any bakery, but what's better than baking a moist cake at home for your loved ones on Christmas? If you love baking goodies at home, then you need to bookmark this recipe for Christmas.",
            "category": "Food"
        },
        {
            "id": 62,
            "title": "Cheesy Quinoa Nachos",
            "img_url": "https://gumlet.assettype.com/freepressjournal/2022-12/89792e95-48ef-476d-82f8-fc451b2cc59e/IMG_8306_min.JPG",
            "description": "Craving for a quick and easy snack for the game night or evening party? Then try this super easy and cheesy Nachos recipe, which can be made in just 5-10 minutes. Made with veggies, healthy quinoa nachos, jalapenos and cheese, this easy recipe can be tweaked as per taste preferences. You can also add meaty sausages or meat chunks to this dish and make it more delicious. ",
            "category": "Food"
        },
        {
            "id": 63,
            "title": "Creamy Pumpkin Soup",
            "img_url": "https://alittlebityummy.com/wp-content/uploads/2022/10/Low-FODMAP-Creamy-Pumpkin-Soup-front-on.jpg",
            "description": "Craving for a warm and comforting soup to make your winter indulgence special? Then we have got your back with a simple yet delicious soup recipe, which will make you ditch your favourite restaurant soup. Yes, this simple creamy soup can be made with some easily available ingredients in your kitchen. ",
            "category": "Food"
        },
        {
            "id": 64,
            "title": "K.G.F: Chapter 2",
            "img_url": "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/de4f1f9bfb6e740459e7bd8da955aa0b70191e780c1f1347ce73248d3ceda8f4._RI_TTW_.jpg",
            "description": "After detailing the events in K.G.F: Chapter 1, Anand Ingalagi suffers a stroke and his son, Vijayendra Ingalagi takes over to narrate the rest of the story.Rocky kills heir apparent Virat and takes over the K.G.F, keeping Reena hostage to ensure the cooperation of Guru Pandian, Andrews and Rajendra Desai. But when Kamal protests and threatens to kill Rocky this angered Rocky and he shoots Kamal on the spot. After this, Rocky issues orders to start work in eight hidden mines, while Vanaram, who was captured by Rocky, decided to help him.",
            "rating": "8.3/10",
            "category": "Bollywood"
        },
        {
            "id": 65,
            "title": "IB71",
            "img_url": "https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/3372/1543372-h-dbb5b6027e3d",
            "description": "In 1971, the Indian Intelligence Bureau receives critical information about Pakistan and China's impending attacks on India within 10 days. With limited time and resources, IB agent Dev Jammwal tells his superior N.S. Avasti that the only plan to counter this threat is by implementing an airspace blockade, which involves orchestrating the hijacking of an Indian plane by Kashmiri separatists and ensuring its landing in Pakistani territory.",
            "rating": "7.4/10",
            "category": "Bollywood"
        },
        {
            "id": 66,
            "title": "Parmanu: The Story of Pokhran",
            "img_url": "https://m.media-amazon.com/images/M/MV5BMjQ3OGU1ZGMtZWM5Ni00ZjUyLTliY2QtYjUwMWU0NDdkZWFmXkEyXkFqcGdeQXVyNjQ3ODkxMjE@._V1_.jpg",
            "description": "In 1995, Ashwat Raina, an IAS officer from the Research and Analysis Wing, suggests the ministers perform a retaliatory nuclear test in response to the recent nuclear missile tests by China. However, he is ridiculed, and the PMO secretary Suresh Yadav tells him to keep the file of his plan brief. Ashwat submits the file along with a floppy containing the details, but Yadav submits a half-baked plan to the Prime Minister and ignores the floppy. ",
            "rating": "7.6/10",
            "category": "Bollywood"
        },
        {
            "id": 67,
            "title": "Bloody Daddy",
            "img_url": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/06/bloody-daddy-movie-review-002.jpg",
            "description": "Sumair Azad is an NCB officer, who along with his deputy Jagadish Prasad alias Jaggi in Gurugram bust down a drug deal, leading the drug lord Sikandar to kidnap Sumair's son Atharva in exchange for retrieving the bag of cocaine. With no other option left, Sumair agrees to retrieve the bag from the NCB headquarters, and bring it to his club for the exchange. Sumair's act of hiding the bag in the men's toilet is noticed by his assistant Aditi Rawat, who becomes suspicious. Thinking that Sumair is involved in drug smuggling, Aditi informs her superior Sameer Singh and begin to pursue Sumair, taking away the bag of cocaine from the toilet in the process.",
            "rating": "6.7/10",
            "category": "Bollywood"
        },
        {
            "id": 68,
            "title": "Shershaah",
            "img_url": "https://m.media-amazon.com/images/M/MV5BMjk1NzcwMDUtNDU4ZC00MzlhLTkzZjAtM2MxMTRjZGE0ODdhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
            "description": "ishal Batra delivers a Ted Talk on his brother Vikram narrating the story of his life.The young Vikram is playing cricket when he gets into a fight with elder teenage kids over a ball, revealing the fearless nature he later became known for. Vikram, watching the TV series Param Vir Chakra used to talk about his wish to join the Indian Army. His desire to join the army increases intensely as he grows up.",
            "rating": "8.3/10",
            "category": "Bollywood"
        },
        {
            "id": 69,
            "title": "Sanak",
            "img_url": "https://assets-in.bmscdn.com/discovery-catalog/events/et00305316-srxwhzxpdz-landscape.jpg",
            "description": "Vivaan Ahuja, a skilled MMA trainer, learns that his wife Anshika Maitra's heart can stop at any time and an operation is required. The operation is successful. As Anshika recovers in the hospital, a terrorist group led by Saju Solanki attack the hospital to retrieve their illegal arms dealer and leader Ajay Pal Singh, who was actually responsible for the deaths of 18 INA soldiers due to his supply of faulty weapons and was moved to the hospital for emergency surgery after his pacemaker was tampered in prison. ",
            "rating": "6.7/10",
            "category": "Bollywood"
        },
        {
            "id": 70,
            "title": "Vikram",
            "img_url": "https://assets.thehansindia.com/h-upload/2022/06/03/1295898-vikram-movie.webp",
            "description": "After busting the consignment of Adaikalam and Anbu by Inspector Bejoy three months earlier,[a] Police Chief Jose summons Amar and his black-ops team to bring justice to a group of masked vigilantes responsible for the deaths of Stephen Raj (following his arrest and subsequent release after being busted for helping Adaikalam and Anbu), ACP Prabhanjan and his foster father Karnan. Amar leads the investigation by digging into Karnan's life as his murder seems out of place because Karnan was an ordinary man, while the other two were higher officials in the NCB",
            "rating": "8.3/10",
            "category": "Bollywood"
        },
        {
            "id": 71,
            "title": "Rocky Handsome",
            "img_url": "https://m.media-amazon.com/images/M/MV5BNTEyMTMyZjYtZjM4MC00NDlhLWE5ZDctYmExZWQ3MmYzMmUxXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_.jpg",
            "description": "Kabir Ahlawat lives a quiet life running a pawn shop in Goa, His next-door neighbor is Anna, a drug addict and bar dancer. She lives with her little daughter Naomi, who develops a nurturing relationship with Kabir. Meanwhile, ACP Dilip Sangodkar from the NCB is after Mantoo, a crime boss supported by brothers Kevin Ferriera and Luke Ferriera, who control a mass racket in organ harvesting and drug manufacturing with a professional assassin named Attila. ",
            "rating": "6.8/10",
            "category": "Bollywood"
        },
        {
            "id": 72,
            "title": "Ghazi Attack",
            "img_url": "https://resizing.flixster.com/n0GLCr_a3KbUMq1OgQ_ditUzTAs=/fit-in/1152x864/v2/https://flxt.tmsimg.com/assets/p13826129_v_h9_aa.jpg",
            "description": "In November, 1971, India and Pakistan are on the verge of declaring war on each other, as a result of the refugee crisis precipitated by the Pakistan Army under Operation Searchlight. The Indian Navy and RAW decipher a secret code sent from Pakistan to East Pakistan (modern-day Bangladesh), relating to a possible attack on an Indian naval vessel. The Navy deduces that the target may be INS Vikrant, India's sole aircraft carrier. The top command dispatches the submarine S21, under the command of Captain Ranvijay Singh for recce missions.",
            "rating": "7.5/10",
            "category": "Bollywood"
        },
        {
            "id": 73,
            "title": "Article 15",
            "img_url": "https://i0.wp.com/velivada.com/wp-content/uploads/2020/09/article-15-review.jpg?fit=1000%2C563&ssl=1",
            "description": "In the village of Laalgaon in Uttar Pradesh, two Dalit girls are seen trapped in a school bus by some men. Ayan Ranjan, a St. Stephen's College, Delhi graduate and an Indian Police Service officer, is assigned to Laalgaon as the Additional Superintendent of Police and is warmly welcomed by officers Brahmadatt Singh and Kisan Jatav. Ayan encounters various forms of caste discrimination as soon as he arrives in the village, and periodically shares what he observes to his wife, Aditi, over the phone. Local villagers come to Ayan's reception asking the officers to find the missing girls but are turned down. ",
            "rating": "8.1/10",
            "category": "Bollywood"
        },
        {
            "id": 74,
            "title": "Chup: Revenge of the Artist",
            "img_url": "https://images.news18.com/ibnlive/uploads/2022/09/chup-revenge-of-the-artist-16638281594x3.jpg",
            "description": "In Mumbai, a film critic named Nitin Srivatsav is found dead at his residence, where IG Arvind Mathur is assigned to investigate the case. Arvind deduces that the killer mutilated Nitin's body with a surgical knife and drew a symbol on his forehead, which he is unable to decipher.",
            "rating": "7.6/10",
            "category": "Bollywood"
        },
        {
            "id": 75,
            "title": "Gadar: Ek Prem Katha",
            "img_url": "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-0-gadarekpremkatha/list/1170x658withlogodbe19bfe1fdf45c392ae9ffafb8981e2.jpg",
            "description": "During the Partition of India, Sikhs and Hindus are attacked by Muslims in Pakistan when migrating to India by train from the railway station at West Punjab in Pakistan. In response, the Sikhs and Hindus reply by killing Muslims migrating to Pakistan from East Punjab in India. During the Hindu-Muslim riots that erupted soon after the partition, Tara Singh, a truck driver, also plans to kill Muslims, but stops after recognising his college friend Sakina from the little Taj Mahal antique in her hands. ",
            "rating": "7.3/10",
            "category": "Bollywood"
        },
        {
            "id": 76,
            "title": "Raid",
            "img_url": "https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/old_images/MOVIE/2789/1000212789/1000212789-h",
            "description": "The film focuses on an lRS officer Amay Patnaik, who has just been transferred[10] to Lucknow as Deputy Commissioner of Income Tax, where he lives happily with his wife Malini. One day, he receives an anonymous tip about black money hoarded by (Member of Parliament) Rameshwar Singh, the don of Sitagarh, who had evaded income tax for a long time. So, Amay and his team, after much planning, head to Sitagarh.",
            "rating": "7.4/10",
            "category": "Bollywood"
        },
        {
            "id": 77,
            "title": "Khakee: The Bihar Chapter",
            "img_url": "https://www.koimoi.com/wp-content/new-galleries/2022/11/khakee-the-bihar-chapter-review-001.jpg",
            "description": "This series is based in Sheikhpura district, Nalanda district and Patna district. Chandan Mahato, who was actually Pintu Mahato in real life,[5][6] is a member of Ashok Mahto gang, which has been active in Nalanda and Sheikhpura for many years. The story is about how Sheikhpura IPS Amit Lodha brings the Ashok Mahto gang to justice, while navigating his own personal issues",
            "rating": "8.2/10",
            "category": "Bollywood"
        },
        {
            "id": 78,
            "title": "Gangaajal",
            "img_url": "https://m.media-amazon.com/images/M/MV5BMDc2YmJjZjQtMzk5ZC00YThiLThhYTktOGU4ZTNiYzg1YmM4XkEyXkFqcGdeQXVyMzQ5MzkwMDY@._V1_.jpg",
            "description": "The Superintendent of Police (SP) Amit Kumar (Ajay Devgn) takes charge of Tejpur, which has a high crime rate. In the district, the police are controlled by the don and gangster Sadhu Yadav (Mohan Joshi) and his son Sunder Yadav (Yashpal Sharma). While travelling to the headquarters, Amit's car breaks down and he inspects the area. He observes professional laxity among police officials, crumbling infrastructure, outdated weaponry, lack of stationery and transport, and the dependence of officials on corrupt local contractors.",
            "rating": "7.8/10",
            "category": "Bollywood"
        },
        {
            "id": 79,
            "title": "1971",
            "img_url": "https://m.media-amazon.com/images/M/MV5BZDQyZWI4MjktZDNlYS00MDM1LWEzNzAtYTIyZDk4MTBkZjUwXkEyXkFqcGdeQXVyMzE0Njk1NjI@._V1_.jpg",
            "description": "The story takes place in Pakistan in 1977, six years after the 1971 Bangladesh Liberation War. Indian POWs from the 1971 war are kept in a prison camp along with several prisoners from the 1965 war. The 1971 POWs remain healthy, but the 1965 POWs have gone insane with despair. Major Suraj Singh of 18th Rajputana Rifles, Captain Kabir, Captain Jacob and Subedar Ahmed discuss the camp's good facilities. They have been moved into the camp out of several Pakistani jails. ",
            "rating": "8.2/10",
            "category": "Bollywood"
        },
        {
            "id": 80,
            "title": "GodFather",
            "img_url": "https://cdn.gulte.com/wp-content/uploads/2022/10/Chiranjeevi-2.jpg",
            "description": "At Interpol's office in France, an officer is handing over his case about Abraham Qureshi, who is a mysterious smuggler kingpin and godfather to his junior, stating that it was his only unsolvable case.Meanwhile, in Andhra Pradesh, CM Padmakant Reddy alias 'PKR', the leader of the ruling party Jan Jagruti Party (JJP), dies in the hospital while getting treated. Taking advantage of the situation and believing that it would benefit the upcoming election, acting CM Narayana Varma sends party workers to riot outside the hospital. ",
            "rating": "9.2/10",
            "category": "Bollywood"
        },
        {
            "id": 81,
            "title": "Insidious: The Red Door",
            "img_url": "https://m.media-amazon.com/images/M/MV5BMjdlZjI4YTEtNjgzZi00NTA1LWIwZWYtMDc0MzhjOWNlYjcxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
            "description": "Nine years after his possession, Josh Lambert's memories of his experience in The Further have been repressed. He is divorced from his wife Renai and his mother Lorraine has recently died. His relationship with his son Dalton has become strained, and he attempts to heal things between them while dropping him off at college but it ends with them in an argument.",
            "rating": "6/10",
            "category": "Hollywood"
        },
        {
            "id": 82,
            "title": "The Nun",
            "img_url": "https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_FMjpg_UX1000_.jpg",
            "description": "In 1952 Romania, two nuns living at the Saint Cartha's monastery are attacked by an unseen evil force after one of them entered a tunnel to retrieve an ancient Christian relic. The surviving nun, Sister Victoria, flees from the attacker, a demon appearing as a nun, and hangs herself. Her body is discovered by Frenchie, a villager who transports supplies to the nuns.",
            "rating": "5.3/10",
            "category": "Hollywood"
        },
        {
            "id": 83,
            "title": "Dhoom 3",
            "img_url": "https://m.media-amazon.com/images/M/MV5BYmZlNDAzNTctYzFkZC00Y2VjLWE3MDItNWZkNjI2MmJhMmZmXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
            "description": "n the year 1990, 'The Great Indian Circus' owned by Iqbal Haroon Khan (Jackie Shroff) in Chicago, Illinois gets closed when he is unable to repay his loan. Sahir, his little son, pleads that the two would soon turn the corner. But Iqbal gets rejected and commits suicide in front of the heartless Chairman of Western Bank of Chicago Warren Anderson. Twenty-three years later, Sahir (Aamir Khan) robs various branches of the Western Bank of Chicago as revenge for what the bank did to his father. Despite all efforts of law enforcement, the Chicago police fail to foil the robbery and he successfully gets away.",
            "rating": "5.4/10",
            "category": "Bollywood"
        },
        {
            "id": 84,
            "title": "Uri: The Surgical Strike",
            "img_url": "https://i.ytimg.com/vi/VVY3do673Zc/maxresdefault.jpg",
            "description": "The first chapter opens up with an ambush in June 2015 on the convoy of the Indian Army troops in Chandel, Manipur by NSCN(K) militants. In retaliation, Major Vihaan Singh Shergill, a Para SF officer and his unit, including his brother-in-law, Major Karan Kashyap, infiltrate and attack the Northeastern militants and also kill the key leader responsible for the ambush. After a successful strike, the Prime Minister of India congratulates him and the whole unit at a formal dinner.",
            "rating": "8.2/10",
            "category": "Bollywood"
        },
        {
            "id": 85,
            "title": "Barbell Overhead Press",
            "img_url": "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/seated-overhead-press.gif",
            "description": "Some would argue that the standing barbell overhead press is a better upper-body developer than the mighty bench press itself. One of the reasons why the argument can be made is the major involvement of the abs and all the different assistance muscles that get used to press the barbell overhead. Another big testosterone producer, this move leads to a set of shoulders that look like cannonballs and will develop the chest just as well as any other move.",
            "category": "Fitness"
        }
    ]


export default Data

