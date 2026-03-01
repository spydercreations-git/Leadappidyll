export interface EmailTemplate {
  id: number;
  title: string;
  category: 'Creators' | 'SaaS' | 'Agencies' | 'Business';
  defaultText: string;
}

export const TEMPLATES: EmailTemplate[] = [
  // --- YouTubers & Creators (10) ---
  {
    id: 1,
    title: "The Retention Hook",
    category: "Creators",
    defaultText: "Hey [NAME],\n\nI just watched your latest video on [TOPIC]. The content is incredible, but I noticed a few spots where the pacing slows down. \n\nI specialize in high-retention editing that keeps viewers glued to the screen. I'd love to edit a 60-second sample for you for free to show you what I can do for your next upload.\n\nOpen to a quick chat?\n\nBest,\n[MY NAME]"
  },
  {
    id: 2,
    title: "The Viral Short Hook",
    category: "Creators",
    defaultText: "Hey [NAME],\n\nYour long-form content is gold, but you're leaving a lot of views on the table by not repurposing it for Reels and TikTok.\n\nI can turn your best moments into viral-style shorts with captions and fast-paced cuts. Want me to send over a few ideas for your last video?\n\nCheers,\n[MY NAME]"
  },
  {
    id: 3,
    title: "The 'I'm a Fan' Hook",
    category: "Creators",
    defaultText: "Hi [NAME],\n\nBeen a sub since [YEAR/MILESTONE]. Love the direction you're taking the channel.\n\nI'm a video editor who works specifically with creators in the [NICHE] space. I noticed your editing style is [STYLE], and I think I could help you scale your output without losing that personal touch.\n\nWould you be open to seeing some of my previous work with [SIMILAR CREATOR]?\n\nBest,\n[MY NAME]"
  },
  {
    id: 4,
    title: "The Thumbnail/Edit Combo",
    category: "Creators",
    defaultText: "Hey [NAME],\n\nGreat video today. I actually had an idea for a slightly different edit style that might boost your AVD by 10-15%.\n\nI've helped channels like yours hit the algorithm harder by focusing on the first 30 seconds. Can I send you a quick breakdown of how I'd approach your next intro?\n\nBest,\n[MY NAME]"
  },
  {
    id: 5,
    title: "The Burnout Solution",
    category: "Creators",
    defaultText: "Hi [NAME],\n\nI know the grind of filming AND editing is a lot. Most creators I know are hitting a wall right now.\n\nI'm a professional editor looking to take the heavy lifting off your plate so you can focus purely on ideation and filming. I've got a system that matches your 'voice' perfectly.\n\nWant to try a trial edit this week?\n\nBest,\n[MY NAME]"
  },
  {
    id: 6,
    title: "The Storytelling Hook",
    category: "Creators",
    defaultText: "Hey [NAME],\n\nYour latest story about [TOPIC] was moving, but I think we could make the emotional beats hit even harder with some sound design and color grading.\n\nI'm an editor obsessed with cinematic storytelling. I'd love to help you turn your vlogs into actual films.\n\nAre you looking for an editor right now?\n\nBest,\n[MY NAME]"
  },
  {
    id: 7,
    title: "The 'New Style' Pitch",
    category: "Creators",
    defaultText: "Hi [NAME],\n\nI saw [OTHER CREATOR] just changed their editing style and their views tripled. I've been studying that style and I think it would fit your brand perfectly.\n\nI'd love to show you a concept edit of your last video in this new style. No strings attached.\n\nInterested?\n\nBest,\n[MY NAME]"
  },
  {
    id: 8,
    title: "The B-Roll Specialist",
    category: "Creators",
    defaultText: "Hey [NAME],\n\nYour talking head segments are great, but adding more dynamic B-roll and motion graphics could really level up the production value.\n\nI have access to a massive library of high-end assets and the skills to integrate them seamlessly. Want to see a quick portfolio of how I've transformed basic setups into high-end productions?\n\nBest,\n[MY NAME]"
  },
  {
    id: 9,
    title: "The Efficiency Hook",
    category: "Creators",
    defaultText: "Hi [NAME],\n\nHow much time are you spending in Premiere Pro every week? If it's more than 10 hours, you're losing time that could be spent on growth.\n\nI can handle the entire post-production workflow for you, from rough cut to final export. My turnaround time is under 48 hours.\n\nCan we hop on a 5-minute call to see if we're a fit?\n\nBest,\n[MY NAME]"
  },
  {
    id: 10,
    title: "The Niche Expert",
    category: "Creators",
    defaultText: "Hey [NAME],\n\nI'm an editor who ONLY works with [NICHE] creators. I understand the memes, the references, and the pacing your audience expects.\n\nI've noticed your channel is growing fast, and I'd love to help you maintain that momentum with top-tier edits.\n\nCheck out my work here: [LINK]\n\nBest,\n[MY NAME]"
  },

  // --- SaaS & Startups (10) ---
  {
    id: 11,
    title: "The Demo Video Hook",
    category: "SaaS",
    defaultText: "Hi [NAME],\n\nI love what you're building at [COMPANY]. I noticed you don't have a high-energy demo video on your landing page yet.\n\nStudies show that a 60-second explainer can boost conversions by 20%+. I specialize in SaaS product walkthroughs that actually look sexy.\n\nCan I send you a mockup of how I'd showcase your [FEATURE]?\n\nBest,\n[MY NAME]"
  },
  {
    id: 12,
    title: "The Ad Creative Hook",
    category: "SaaS",
    defaultText: "Hey [NAME],\n\nI saw your current ads on Meta. The offer is great, but the creative feels a bit static.\n\nI can build high-converting motion graphic ads for [COMPANY] that stop the scroll. I've worked with SaaS brands to lower their CAC by 30% through better video.\n\nOpen to seeing some examples?\n\nBest,\n[MY NAME]"
  },
  {
    id: 13,
    title: "The Launch Video Hook",
    category: "SaaS",
    defaultText: "Hi [NAME],\n\nCongrats on the upcoming launch of [PRODUCT/FEATURE]! \n\nYou need a 'hype' video to make a splash on Product Hunt and Twitter. I can create a cinematic 30-second teaser that gets people talking.\n\nI have a few ideas specifically for [COMPANY]. Want to hear them?\n\nBest,\n[MY NAME]"
  },
  {
    id: 14,
    title: "The Testimonial Hook",
    category: "SaaS",
    defaultText: "Hey [NAME],\n\nYou have some incredible customer reviews on G2. Why not turn them into video testimonials?\n\nI can take your raw customer interviews and edit them into powerful social proof snippets for your sales team. It's the highest ROI content you can make.\n\nWould you be interested in a trial edit of one testimonial?\n\nBest,\n[MY NAME]"
  },
  {
    id: 15,
    title: "The Onboarding Hook",
    category: "SaaS",
    defaultText: "Hi [NAME],\n\nI signed up for [COMPANY] and the product is amazing. However, the onboarding flow could be even smoother with a few 'quick start' micro-videos.\n\nI can create a series of 15-second tutorials that reduce support tickets and increase activation. \n\nCan I show you a sample of how I've done this for other startups?\n\nBest,\n[MY NAME]"
  },
  {
    id: 16,
    title: "The Founder Brand Hook",
    category: "SaaS",
    defaultText: "Hey [NAME],\n\nI've been following your updates on LinkedIn. You have a great voice, but your video content could use a more professional 'SaaS' polish.\n\nI help founders like you build their personal brand through high-quality video editing (captions, b-roll, sound design). \n\nWant me to edit your next LinkedIn video for free to show you the difference?\n\nBest,\n[MY NAME]"
  },
  {
    id: 17,
    title: "The Feature Spotlight",
    category: "SaaS",
    defaultText: "Hi [NAME],\n\n[FEATURE] is a game-changer for [TARGET AUDIENCE]. Most people just don't realize how easy it is to use yet.\n\nI can create a 'Feature Spotlight' video series for [COMPANY] that highlights your USP in under 30 seconds. \n\nAre you currently working with a video partner?\n\nBest,\n[MY NAME]"
  },
  {
    id: 18,
    title: "The Comparison Hook",
    category: "SaaS",
    defaultText: "Hey [NAME],\n\nI saw how you compare to [COMPETITOR]. You win on [SPECIFIC FEATURE], but their video marketing is currently more aggressive.\n\nI can help you reclaim that mindshare with a series of 'Why Switch' videos that highlight your advantages. \n\nOpen to a quick brainstorm?\n\nBest,\n[MY NAME]"
  },
  {
    id: 19,
    title: "The Webinar Hook",
    category: "SaaS",
    defaultText: "Hi [NAME],\n\nI noticed you're running a lot of webinars. There's a goldmine of content in those recordings that's currently just sitting there.\n\nI can chop your webinars into 10-15 high-value social clips to keep your lead gen running 24/7. \n\nWant to see my workflow for this?\n\nBest,\n[MY NAME]"
  },
  {
    id: 20,
    title: "The 'Speed to Market' Hook",
    category: "SaaS",
    defaultText: "Hey [NAME],\n\nIn the SaaS world, speed is everything. If your video production is taking weeks, you're losing.\n\nI offer a 48-hour turnaround for SaaS marketing videos. High quality, zero friction. \n\nCan I send over my pricing and some relevant work?\n\nBest,\n[MY NAME]"
  },

  // --- Agencies & Marketing (10) ---
  {
    id: 21,
    title: "The White Label Hook",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nI know [AGENCY NAME] is crushing it with [SERVICE]. Are you currently turning away video requests from your clients?\n\nI offer white-label video editing services for agencies. You sell it, I edit it, you keep the margin and the credit. \n\nWant to see my agency-specific portfolio?\n\nBest,\n[MY NAME]"
  },
  {
    id: 22,
    title: "The 'Overflow' Hook",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nIs your in-house video team currently underwater? \n\nI act as a reliable 'overflow' editor for agencies like [AGENCY NAME] when things get busy. No overhead, just high-quality edits when you need them.\n\nCan we connect so I'm on your radar for the next big project?\n\nBest,\n[MY NAME]"
  },
  {
    id: 23,
    title: "The Case Study Hook",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nYour results for [CLIENT] are insane. A written case study is good, but a video case study is undeniable.\n\nI specialize in editing high-impact agency case studies that help you close bigger deals. \n\nI'd love to show you how I'd structure a video for your [SPECIFIC PROJECT].\n\nBest,\n[MY NAME]"
  },
  {
    id: 24,
    title: "The Pitch Deck Hook",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nWinning a big pitch often comes down to the 'vision' video. \n\nI help agencies create stunning sizzle reels and concept videos for their pitches. I've helped teams land 6-figure contracts through better visual storytelling.\n\nNeed a hand with your next big presentation?\n\nBest,\n[MY NAME]"
  },
  {
    id: 25,
    title: "The Content Engine Hook",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nAre you looking to offer 'Content Engines' to your clients (repurposing long-form into 30+ shorts)?\n\nI have a streamlined system for high-volume short-form editing. I can handle the entire output for your clients so you can focus on strategy.\n\nWant to see my bulk pricing for agencies?\n\nBest,\n[MY NAME]"
  },
  {
    id: 26,
    title: "The 'Creative Partner' Hook",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nMost editors just cut clips. I partner with agencies to help with the creative direction and storytelling.\n\nI've noticed [AGENCY NAME] has a very specific aesthetic, and I'd love to show you how I can match and elevate it.\n\nOpen to a brief intro call?\n\nBest,\n[MY NAME]"
  },
  {
    id: 27,
    title: "The Performance Hook",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nIf you're running performance marketing, you know that creative fatigue is real. \n\nI can provide a steady stream of fresh video iterations to keep your ROAS high. I'm fast, data-driven, and understand what makes people click.\n\nCan I send you a few 'performance' edits I've done recently?\n\nBest,\n[MY NAME]"
  },
  {
    id: 28,
    title: "The 'Local Business' Hook",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nI saw you work with a lot of local businesses. They usually have great stories but terrible video.\n\nI can help you offer high-end 'Brand Story' videos to your local clients at a price point that makes sense for them and you.\n\nInterested in a partnership?\n\nBest,\n[MY NAME]"
  },
  {
    id: 29,
    title: "The Sound Design Hook",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nI noticed a few of your recent client videos have great visuals but the audio feels a bit thin.\n\nI'm a specialist in sound design and audio post-production. I can make your agency's videos sound like they were made in a Hollywood studio.\n\nWant me to do a 'sound pass' on your next project for free?\n\nBest,\n[MY NAME]"
  },
  {
    id: 30,
    title: "The Scalability Hook",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nThe biggest bottleneck for most agencies is post-production. It's the hardest part to scale.\n\nI provide a scalable editing solution that grows with your agency. Whether you have 1 project or 100, I can handle it.\n\nCan we discuss how I can help you scale this year?\n\nBest,\n[MY NAME]"
  },

  // --- Brands & Businesses (10) ---
  {
    id: 31,
    title: "The Real Estate Hook",
    category: "Business",
    defaultText: "Hi [NAME],\n\nI saw your listing at [ADDRESS]. The photos are great, but a cinematic walkthrough video would make this property stand out 10x more.\n\nI specialize in high-end real estate cinema that makes buyers fall in love before they even visit. \n\nCan I show you a sample of a recent property I edited?\n\nBest,\n[MY NAME]"
  },
  {
    id: 32,
    title: "The E-com Hook",
    category: "Business",
    defaultText: "Hey [NAME],\n\nI love [PRODUCT]. I noticed your product videos on the site are a bit basic.\n\nI can create high-energy UGC-style edits and product showcases that drive actual sales. I've helped E-com brands double their conversion rate through video.\n\nWant to see my E-com specific work?\n\nBest,\n[MY NAME]"
  },
  {
    id: 33,
    title: "The Brand Story Hook",
    category: "Business",
    defaultText: "Hi [NAME],\n\nEvery business has a story, but most aren't telling it well. \n\nI help brands like [COMPANY] tell their 'Why' through cinematic brand films. It's the best way to build trust with your customers.\n\nAre you looking to refresh your brand video this year?\n\nBest,\n[MY NAME]"
  },
  {
    id: 34,
    title: "The Social Media Hook",
    category: "Business",
    defaultText: "Hey [NAME],\n\nYour Instagram is active, but your Reels could be much more engaging with professional editing and captions.\n\nI can handle your entire social media video output, ensuring every post looks premium and on-brand.\n\nCan I edit one Reel for you for free to show you the difference?\n\nBest,\n[MY NAME]"
  },
  {
    id: 35,
    title: "The Event Hook",
    category: "Business",
    defaultText: "Hi [NAME],\n\nI saw you have an upcoming event: [EVENT NAME]. \n\nYou need a high-impact recap video to sell out next year's tickets. I specialize in event cinematography and fast-turnaround recaps.\n\nDo you have a video team booked for this yet?\n\nBest,\n[MY NAME]"
  },
  {
    id: 36,
    title: "The Recruitment Hook",
    category: "Business",
    defaultText: "Hey [NAME],\n\nAttracting top talent is hard. A 'Day in the Life' culture video for [COMPANY] can make all the difference.\n\nI help businesses create recruitment videos that actually make people want to work for them. \n\nWant to see how I've helped other companies with their employer branding?\n\nBest,\n[MY NAME]"
  },
  {
    id: 37,
    title: "The 'How-To' Hook",
    category: "Business",
    defaultText: "Hi [NAME],\n\nI noticed your customers often ask the same questions. \n\nI can create a series of professional 'How-To' videos for [COMPANY] that save your team hours of support time and make your customers happier.\n\nInterested in a quote for a 5-video series?\n\nBest,\n[MY NAME]"
  },
  {
    id: 38,
    title: "The Local Service Hook",
    category: "Business",
    defaultText: "Hey [NAME],\n\nI saw your work at [LOCATION]. You do incredible work, but your online video presence doesn't reflect that quality yet.\n\nI help local service businesses create 'Before & After' and 'Process' videos that land more high-ticket clients.\n\nCan we chat about a video strategy for [COMPANY]?\n\nBest,\n[MY NAME]"
  },
  {
    id: 39,
    title: "The LinkedIn Hook",
    category: "Business",
    defaultText: "Hi [NAME],\n\nLinkedIn is becoming a video-first platform. If you're not posting video, you're invisible.\n\nI help executives and business owners create professional, subtitled videos that establish them as industry leaders. \n\nWant me to show you a few templates I've designed for LinkedIn?\n\nBest,\n[MY NAME]"
  },
  {
    id: 40,
    title: "The Seasonal Hook",
    category: "Business",
    defaultText: "Hey [NAME],\n\n[HOLIDAY/SEASON] is coming up. Do you have your video promotions ready for [COMPANY]?\n\nI can create high-converting seasonal ads and social content to help you make the most of the rush. \n\nOpen to a quick brainstorm this week?\n\nBest,\n[MY NAME]"
  },

  // --- Additional Creators Templates (10 more) ---
  {
    id: 41,
    title: "The Algorithm Expert",
    category: "Creators",
    defaultText: "Hi [NAME],\n\nI came across your channel while researching [NICHE] creators. Your content quality is top-tier, but I noticed your average view duration could be optimized.\n\nI specialize in editing specifically for YouTube's algorithm - hook optimization, pattern interrupts, and retention-focused cuts. I've helped creators increase their AVD by 20-30%.\n\nWould you be open to seeing a free re-edit of your intro?\n\nBest,\n[MY NAME]"
  },
  {
    id: 42,
    title: "The Podcast Clipper",
    category: "Creators",
    defaultText: "Hey [NAME],\n\nYour podcast episodes are gold, but you're missing out on millions of views by not clipping the best moments for YouTube Shorts and TikTok.\n\nI can identify and edit your top 10 viral-worthy clips per episode with captions, b-roll, and music. Most creators see 5-10x more reach this way.\n\nInterested in a sample clip from your latest episode?\n\nBest,\n[MY NAME]"
  },
  {
    id: 43,
    title: "The Consistency Partner",
    category: "Creators",
    defaultText: "Hi [NAME],\n\nI noticed you've been posting less frequently lately. The algorithm punishes inconsistency, and your audience needs regular content.\n\nI can help you batch-edit multiple videos at once so you always have content ready to publish. My turnaround is 24-48 hours per video.\n\nCan we discuss a monthly editing package?\n\nBest,\n[MY NAME]"
  },
  {
    id: 44,
    title: "The Monetization Boost",
    category: "Creators",
    defaultText: "Hey [NAME],\n\nCongrats on hitting [MILESTONE]! Now that you're monetized, every extra minute of watch time = more revenue.\n\nI edit videos specifically to maximize watch time and ad revenue. Better pacing, strategic ad break placement, and retention hooks that keep viewers watching.\n\nWant to see how I increased another creator's RPM by 40%?\n\nBest,\n[MY NAME]"
  },
  {
    id: 45,
    title: "The Collaboration Specialist",
    category: "Creators",
    defaultText: "Hi [NAME],\n\nI saw your recent collab with [OTHER CREATOR]. Those videos always perform well, but the editing needs to match both styles seamlessly.\n\nI specialize in editing collaboration videos that satisfy both audiences and maximize cross-promotion value.\n\nAre you planning more collabs this quarter?\n\nBest,\n[MY NAME]"
  },
  {
    id: 46,
    title: "The Educational Creator",
    category: "Creators",
    defaultText: "Hey [NAME],\n\nYour tutorials are incredibly valuable, but I think adding motion graphics, on-screen annotations, and better visual hierarchy would make them even more engaging.\n\nI work exclusively with educational creators to make complex topics visually digestible. Think Veritasium-level production.\n\nCan I show you my portfolio of educational content?\n\nBest,\n[MY NAME]"
  },
  {
    id: 47,
    title: "The Vlog Cinematic",
    category: "Creators",
    defaultText: "Hi [NAME],\n\nI've been following your vlogs for a while. The raw footage is great, but with cinematic color grading and better audio mixing, they could feel like mini-documentaries.\n\nI specialize in turning everyday vlogs into cinematic experiences that stand out in the feed.\n\nWant to see a before/after of my work?\n\nBest,\n[MY NAME]"
  },
  {
    id: 48,
    title: "The Gaming Editor",
    category: "Creators",
    defaultText: "Hey [NAME],\n\nYour [GAME] gameplay is entertaining, but the editing could be tighter. Gaming content needs fast cuts, meme integration, and perfect timing.\n\nI'm a gaming editor who understands the culture and knows exactly what your audience wants to see. I can turn a 2-hour stream into a 10-minute banger.\n\nInterested in a trial edit?\n\nBest,\n[MY NAME]"
  },
  {
    id: 49,
    title: "The Thumbnail Tester",
    category: "Creators",
    defaultText: "Hi [NAME],\n\nYour thumbnails are decent, but I noticed your CTR could be higher. The best creators A/B test multiple thumbnail options.\n\nI can create 3-5 thumbnail variations per video AND handle the editing. This combo approach has helped creators boost their CTR by 15-25%.\n\nWant to test this on your next upload?\n\nBest,\n[MY NAME]"
  },
  {
    id: 50,
    title: "The Series Builder",
    category: "Creators",
    defaultText: "Hey [NAME],\n\nI noticed you're starting a new series on [TOPIC]. Series content performs incredibly well when it has consistent branding and editing style.\n\nI can create a custom intro/outro template and maintain perfect consistency across all episodes so your audience knows exactly what they're getting.\n\nCan we chat about your series vision?\n\nBest,\n[MY NAME]"
  },

  // --- Additional SaaS Templates (10 more) ---
  {
    id: 51,
    title: "The Product Hunt Launch",
    category: "SaaS",
    defaultText: "Hi [NAME],\n\nI saw [COMPANY] is launching on Product Hunt soon. The top products always have a killer launch video.\n\nI can create a 60-second explainer that showcases your product's value instantly. Most PH winners use video to stand out from the 100+ daily launches.\n\nWant to see examples from successful launches I've worked on?\n\nBest,\n[MY NAME]"
  },
  {
    id: 52,
    title: "The Investor Deck",
    category: "SaaS",
    defaultText: "Hey [NAME],\n\nRaising your next round? Investors see hundreds of decks, but a compelling product demo video can make yours unforgettable.\n\nI help SaaS founders create investor-ready videos that clearly communicate traction, vision, and market opportunity in under 2 minutes.\n\nOpen to discussing your fundraising timeline?\n\nBest,\n[MY NAME]"
  },
  {
    id: 53,
    title: "The Churn Reducer",
    category: "SaaS",
    defaultText: "Hi [NAME],\n\nHigh churn is often caused by users not understanding the full value of your product. \n\nI create 'Aha Moment' videos that show users exactly how to get value from [COMPANY] in their first week. This typically reduces churn by 10-15%.\n\nWould you like to see my framework for activation videos?\n\nBest,\n[MY NAME]"
  },
  {
    id: 54,
    title: "The API Documentation",
    category: "SaaS",
    defaultText: "Hey [NAME],\n\nDevelopers love [COMPANY], but your API docs could use video tutorials. Most devs prefer watching a 3-minute video over reading 20 pages of documentation.\n\nI specialize in creating technical video content that makes complex integrations feel simple.\n\nInterested in a sample API tutorial video?\n\nBest,\n[MY NAME]"
  },
  {
    id: 55,
    title: "The Social Proof Amplifier",
    category: "SaaS",
    defaultText: "Hi [NAME],\n\nYou have amazing customer success stories, but they're buried in blog posts. Video case studies get 10x more engagement.\n\nI can interview your best customers and turn their stories into compelling video testimonials that your sales team can use to close deals faster.\n\nWant to start with your top 3 customers?\n\nBest,\n[MY NAME]"
  },
  {
    id: 56,
    title: "The Feature Adoption",
    category: "SaaS",
    defaultText: "Hey [NAME],\n\nI noticed [COMPANY] just shipped [NEW FEATURE]. Are your users actually adopting it?\n\nI create short 'Feature Spotlight' videos that drive adoption through in-app notifications and email campaigns. Most SaaS companies see 30-40% higher feature usage with video.\n\nCan I create a sample spotlight for your latest release?\n\nBest,\n[MY NAME]"
  },
  {
    id: 57,
    title: "The Competitor Comparison",
    category: "SaaS",
    defaultText: "Hi [NAME],\n\nWhen prospects compare [COMPANY] to [COMPETITOR], what do they see? Probably a spreadsheet.\n\nI create visual comparison videos that clearly show why your product wins. These are perfect for your sales team and high-intent landing pages.\n\nWant to see how I've positioned other SaaS products against competitors?\n\nBest,\n[MY NAME]"
  },
  {
    id: 58,
    title: "The Integration Showcase",
    category: "SaaS",
    defaultText: "Hey [NAME],\n\nYour integrations with [TOOLS] are a huge selling point, but most prospects don't realize how seamless they are.\n\nI can create integration demo videos that show the power of your connected ecosystem. This helps you sell to teams already using those tools.\n\nInterested in showcasing your top 5 integrations?\n\nBest,\n[MY NAME]"
  },
  {
    id: 59,
    title: "The Changelog Video",
    category: "SaaS",
    defaultText: "Hi [NAME],\n\nYour monthly changelog is impressive, but text updates don't excite users. Video updates do.\n\nI can turn your release notes into engaging 'What's New' videos that keep your users excited about your product roadmap.\n\nWant to try this for your next release?\n\nBest,\n[MY NAME]"
  },
  {
    id: 60,
    title: "The Enterprise Sales Enablement",
    category: "SaaS",
    defaultText: "Hey [NAME],\n\nSelling to enterprise requires custom demos and presentations. Your sales team needs video assets they can personalize for each prospect.\n\nI create modular video content that your AEs can mix and match for different industries and use cases.\n\nCan we discuss your enterprise sales process?\n\nBest,\n[MY NAME]"
  },

  // --- Additional Agency Templates (10 more) ---
  {
    id: 61,
    title: "The Retainer Upsell",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nI noticed [AGENCY] offers social media management. Are you also offering video content creation, or are you referring that out?\n\nI provide white-label video editing on a retainer basis. You can add video to your service stack without hiring in-house.\n\nWant to see my agency partnership pricing?\n\nBest,\n[MY NAME]"
  },
  {
    id: 62,
    title: "The Proposal Enhancer",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nWinning big clients often comes down to the proposal. A custom video proposal stands out 10x more than a PDF.\n\nI help agencies create personalized video proposals that show prospects exactly what working together will look like.\n\nHave a big pitch coming up?\n\nBest,\n[MY NAME]"
  },
  {
    id: 63,
    title: "The Client Retention",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nClient churn is expensive. One way to increase retention is by delivering more value without more work.\n\nI can help [AGENCY] add video content repurposing to your existing services. Your clients get more content, you get higher retention.\n\nInterested in exploring this?\n\nBest,\n[MY NAME]"
  },
  {
    id: 64,
    title: "The Paid Media Creative",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nIf you're running paid ads for clients, you know creative is the bottleneck. Most campaigns fail because of creative fatigue.\n\nI provide unlimited video ad variations for agencies. New hooks, new angles, new formats - all optimized for performance.\n\nWant to see my ad creative portfolio?\n\nBest,\n[MY NAME]"
  },
  {
    id: 65,
    title: "The Niche Specialist Partnership",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nI see [AGENCY] specializes in [INDUSTRY]. I'm a video editor who ONLY works with [INDUSTRY] brands.\n\nI understand the compliance requirements, the visual language, and what resonates with that audience. We could be a perfect partnership.\n\nCan we explore working together?\n\nBest,\n[MY NAME]"
  },
  {
    id: 66,
    title: "The Reporting Video",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nYour monthly client reports are probably full of great data. But do your clients actually read them?\n\nI help agencies create 2-minute video reports that showcase results in an engaging, visual way. Clients love them and it reinforces your value.\n\nWant to see an example?\n\nBest,\n[MY NAME]"
  },
  {
    id: 67,
    title: "The Onboarding Experience",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nFirst impressions matter. When you onboard a new client, do you send them a personalized welcome video?\n\nI can create custom onboarding videos for [AGENCY] that make new clients feel valued and set clear expectations from day one.\n\nInterested in elevating your client experience?\n\nBest,\n[MY NAME]"
  },
  {
    id: 68,
    title: "The Thought Leadership",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nYour insights on [TOPIC] are valuable. You should be creating thought leadership content to attract bigger clients.\n\nI help agency founders turn their expertise into polished video content for LinkedIn and YouTube. This positions you as the go-to expert in your space.\n\nWant to start building your personal brand?\n\nBest,\n[MY NAME]"
  },
  {
    id: 69,
    title: "The Event Coverage",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nDoes [AGENCY] host or sponsor events? Event recap videos are incredible for brand awareness and lead generation.\n\nI specialize in same-day event edits that you can share while the event is still trending on social media.\n\nHave any events coming up this quarter?\n\nBest,\n[MY NAME]"
  },
  {
    id: 70,
    title: "The Portfolio Refresh",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nYour portfolio is strong, but the presentation could be more dynamic. A video portfolio reel makes a much bigger impact than static images.\n\nI can create a 60-90 second showreel that highlights [AGENCY]'s best work and attracts premium clients.\n\nWant to see examples of agency reels I've created?\n\nBest,\n[MY NAME]"
  },
  {
    id: 81,
    title: "The Client Testimonial System",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nI noticed [AGENCY] has great client reviews, but no video testimonials on your site. Video testimonials convert 80% better than text.\n\nI can create a systematic approach to capture and edit client testimonials that your sales team can use to close bigger deals.\n\nWant to turn your best clients into video advocates?\n\nBest,\n[MY NAME]"
  },
  {
    id: 82,
    title: "The Sales Deck Video",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nYour agency deck is solid, but imagine opening your pitch with a 90-second video that tells your story before you say a word.\n\nI create custom sales deck videos for agencies that set the tone, build credibility, and make prospects lean in.\n\nHave a big pitch coming up where this could help?\n\nBest,\n[MY NAME]"
  },
  {
    id: 83,
    title: "The Behind-The-Scenes",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nProspects want to know what it's like to work with [AGENCY]. Behind-the-scenes content humanizes your brand and builds trust.\n\nI can create 'Day in the Life' and 'How We Work' videos that showcase your team, culture, and process.\n\nInterested in showing prospects the real [AGENCY]?\n\nBest,\n[MY NAME]"
  },
  {
    id: 84,
    title: "The Webinar Repurposing",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nYour webinars are packed with value, but they're only watched once. You're sitting on a content goldmine.\n\nI can repurpose each webinar into 15-20 social clips, quote cards, and promotional teasers that generate leads for months.\n\nWant to maximize your webinar ROI?\n\nBest,\n[MY NAME]"
  },
  {
    id: 85,
    title: "The Industry Awards Submission",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nAre you submitting [AGENCY] for industry awards this year? Award submissions with video case studies win 3x more often.\n\nI specialize in creating award-worthy case study videos that showcase strategy, execution, and results in a compelling narrative.\n\nHave a campaign worth submitting?\n\nBest,\n[MY NAME]"
  },
  {
    id: 86,
    title: "The Team Introduction Series",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nClients buy from people, not agencies. A 'Meet the Team' video series helps prospects connect with your people before the first call.\n\nI can create short, personality-driven team intro videos that make [AGENCY] feel approachable and trustworthy.\n\nWant to put faces to your brand?\n\nBest,\n[MY NAME]"
  },
  {
    id: 87,
    title: "The Process Explainer",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nProspects often don't understand what working with an agency actually looks like. A clear process video removes that uncertainty.\n\nI create 'How We Work' explainer videos that walk prospects through your methodology, timeline, and deliverables.\n\nWould this help your sales team close faster?\n\nBest,\n[MY NAME]"
  },
  {
    id: 88,
    title: "The Quarterly Results Video",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nInstead of sending clients a PDF report, imagine delivering a personalized video showcasing their quarterly wins.\n\nI help agencies create custom client success videos that celebrate results and reinforce retention. Clients love sharing these internally.\n\nInterested in elevating your reporting?\n\nBest,\n[MY NAME]"
  },
  {
    id: 89,
    title: "The Niche Authority Content",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nI see [AGENCY] specializes in [NICHE]. You should be creating educational content that positions you as THE authority in that space.\n\nI can help you produce a weekly video series on [NICHE] marketing that attracts inbound leads and establishes thought leadership.\n\nWant to dominate your niche with content?\n\nBest,\n[MY NAME]"
  },
  {
    id: 90,
    title: "The RFP Response Video",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nWhen you respond to RFPs, you're competing with 10+ other agencies. A personalized video response makes you unforgettable.\n\nI can help [AGENCY] create custom RFP response videos that address the prospect's specific needs and show you actually care.\n\nWant to win more RFPs?\n\nBest,\n[MY NAME]"
  },

  // --- Additional Business Templates (10 more) ---
  {
    id: 71,
    title: "The Restaurant Showcase",
    category: "Business",
    defaultText: "Hi [NAME],\n\nI came across [RESTAURANT] on Instagram. Your food looks incredible, but the video content could be more mouth-watering.\n\nI specialize in food videography and editing that makes people want to book a table immediately. Slow-motion pours, close-up textures, perfect lighting.\n\nCan I create a sample dish video for you?\n\nBest,\n[MY NAME]"
  },
  {
    id: 72,
    title: "The Fitness Transformation",
    category: "Business",
    defaultText: "Hey [NAME],\n\nTransformation videos are the best marketing tool for fitness businesses. They're proof that your program works.\n\nI can edit compelling before/after transformation stories for [GYM/STUDIO] that inspire new members to sign up.\n\nDo you have client transformations you'd like to showcase?\n\nBest,\n[MY NAME]"
  },
  {
    id: 73,
    title: "The Professional Services",
    category: "Business",
    defaultText: "Hi [NAME],\n\nAs a [PROFESSION], your expertise is your biggest asset. But how do prospects know you're the right choice?\n\nI create 'Expert Positioning' videos for professionals like you - educational content that builds trust and attracts high-value clients.\n\nWant to discuss a video content strategy?\n\nBest,\n[MY NAME]"
  },
  {
    id: 74,
    title: "The Nonprofit Impact",
    category: "Business",
    defaultText: "Hey [NAME],\n\nThe work [ORGANIZATION] does is incredible. A powerful impact video could help you raise significantly more funds.\n\nI offer discounted rates for nonprofits and can create emotional storytelling videos that inspire donations and volunteer signups.\n\nCan we discuss your next campaign?\n\nBest,\n[MY NAME]"
  },
  {
    id: 75,
    title: "The Automotive Dealer",
    category: "Business",
    defaultText: "Hi [NAME],\n\nCar buyers research online before visiting dealerships. High-quality vehicle walkthroughs and test drive videos can pre-sell cars before prospects arrive.\n\nI create automotive video content that showcases features, performance, and lifestyle appeal.\n\nInterested in video for your inventory?\n\nBest,\n[MY NAME]"
  },
  {
    id: 76,
    title: "The Medical Practice",
    category: "Business",
    defaultText: "Hey [NAME],\n\nPatients choose doctors based on trust. Video is the fastest way to build that trust before the first appointment.\n\nI create 'Meet the Doctor' videos and procedure explainers for medical practices that help patients feel comfortable and informed.\n\nWould you like to see healthcare video examples?\n\nBest,\n[MY NAME]"
  },
  {
    id: 77,
    title: "The Manufacturing Showcase",
    category: "Business",
    defaultText: "Hi [NAME],\n\nYour manufacturing process is impressive, but prospects can't see it. A facility tour video builds credibility and differentiates you from competitors.\n\nI create industrial video content that showcases capabilities, quality control, and scale.\n\nCan we schedule a facility visit to discuss video?\n\nBest,\n[MY NAME]"
  },
  {
    id: 78,
    title: "The Wedding Vendor",
    category: "Business",
    defaultText: "Hey [NAME],\n\nWedding vendors need stunning portfolio videos to book high-end clients. Your work deserves to be showcased cinematically.\n\nI edit wedding vendor reels that highlight your style and attract couples willing to invest in quality.\n\nWant to refresh your portfolio video?\n\nBest,\n[MY NAME]"
  },
  {
    id: 79,
    title: "The Construction Company",
    category: "Business",
    defaultText: "Hi [NAME],\n\nTime-lapse videos of construction projects are incredibly powerful for marketing. They show your capabilities and build trust with potential clients.\n\nI can edit your project footage into compelling time-lapse showcases that win you more bids.\n\nDo you document your projects with photos or video?\n\nBest,\n[MY NAME]"
  },
  {
    id: 80,
    title: "The Franchise Opportunity",
    category: "Business",
    defaultText: "Hey [NAME],\n\nIf you're recruiting franchisees for [COMPANY], you need a compelling opportunity video that sells the vision.\n\nI create franchise recruitment videos that showcase the business model, support system, and success stories.\n\nAre you actively recruiting franchisees?\n\nBest,\n[MY NAME]"
  },

  // --- Additional Marketing Agency Templates (10 more) ---
  {
    id: 91,
    title: "The UGC Content Factory",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nUser-generated content is crushing it right now, but most agencies don't have the bandwidth to edit hundreds of UGC clips.\n\nI specialize in high-volume UGC editing for agencies. I can turn raw creator footage into scroll-stopping ads in 24 hours.\n\nWant to see my UGC portfolio?\n\nBest,\n[MY NAME]"
  },
  {
    id: 92,
    title: "The Brand Refresh Video",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nWhen clients rebrand, they need video assets that reflect their new identity. Logo animations, brand films, updated social templates.\n\nI help agencies deliver complete video rebrand packages that make the transition seamless for their clients.\n\nAre any of your clients going through a rebrand?\n\nBest,\n[MY NAME]"
  },
  {
    id: 93,
    title: "The Crisis Management",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nWhen a client faces a PR crisis, response time is everything. A well-crafted video statement can control the narrative.\n\nI offer same-day turnaround for crisis response videos. I've helped agencies manage sensitive situations with professional video communications.\n\nCan I be on standby for your clients?\n\nBest,\n[MY NAME]"
  },
  {
    id: 94,
    title: "The Influencer Campaign",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nManaging influencer campaigns means dealing with inconsistent content quality. Some creators deliver gold, others... not so much.\n\nI can standardize and elevate all influencer content for your campaigns, ensuring brand consistency across every post.\n\nInterested in improving your influencer content quality?\n\nBest,\n[MY NAME]"
  },
  {
    id: 95,
    title: "The Email Marketing Video",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nEmail open rates are declining, but emails with video thumbnails get 96% higher click-through rates.\n\nI create short, engaging videos specifically designed for email campaigns. Perfect for your clients' newsletters and drip sequences.\n\nWant to add video to your email marketing services?\n\nBest,\n[MY NAME]"
  },
  {
    id: 96,
    title: "The Trade Show Content",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nYour clients spend thousands on trade show booths, but most don't have compelling video content to draw people in.\n\nI create eye-catching booth videos and post-event recap content that maximizes trade show ROI.\n\nDo any of your clients exhibit at industry events?\n\nBest,\n[MY NAME]"
  },
  {
    id: 97,
    title: "The Podcast Production",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nMore brands are launching podcasts, but video podcasts require serious post-production work.\n\nI handle full podcast video editing - multi-cam switching, graphics, audiograms, and social clips. I can help [AGENCY] offer complete podcast production.\n\nInterested in adding this to your service menu?\n\nBest,\n[MY NAME]"
  },
  {
    id: 98,
    title: "The Seasonal Campaign Prep",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nQ4 is coming fast. Your clients need holiday campaign videos, and your team is probably already stretched thin.\n\nI can handle overflow seasonal content so you don't have to turn away work during your busiest months.\n\nCan we discuss your Q4 capacity?\n\nBest,\n[MY NAME]"
  },
  {
    id: 99,
    title: "The Internal Communications",
    category: "Agencies",
    defaultText: "Hi [NAME],\n\nYour clients need internal videos too - town halls, training, company updates. These are often overlooked but highly profitable.\n\nI help agencies create professional internal communication videos that improve employee engagement for their clients.\n\nWant to tap into this revenue stream?\n\nBest,\n[MY NAME]"
  },
  {
    id: 100,
    title: "The Competitive Analysis Video",
    category: "Agencies",
    defaultText: "Hey [NAME],\n\nWhen pitching new clients, showing them a video analysis of their competitors' marketing is incredibly powerful.\n\nI create custom competitive analysis videos for agencies that help you win more pitches by demonstrating deep market understanding.\n\nWant to see an example for your next prospect?\n\nBest,\n[MY NAME]"
  }
];
