/**
 * Daily Verse of the Day
 * Displays a Bible verse in the footer based on the current date
 */

const dailyVerses = {
    // January
    "1-1": {
        title: "Running for the prize",
        reference: "Philippians 3:14",
        text: "I press toward the mark for the prize of the high calling of God in Christ Jesus.",
        link: "/dailyverses/jan13/dvjan1.html"
    },
    "1-2": {
        title: "Hope through the Spirit",
        reference: "Galatians 5:5",
        text: "For we through the Spirit wait for the hope of righteousness by faith.",
        link: "/dailyverses/jan13/dvjan2.html"
    },
    "1-3": {
        title: "The God of all comfort",
        reference: "2 Corinthians 1:4",
        text: "Who comforteth us in all our tribulation, that we may be able to comfort them which are in any trouble.",
        link: "/dailyverses/jan13/dvjan3.html"
    },
    "1-4": {
        title: "Children of God",
        reference: "1 John 3:1",
        text: "Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God.",
        link: "/dailyverses/jan13/dvjan4.html"
    },
    "1-5": {
        title: "Sanctified by truth",
        reference: "John 17:17",
        text: "Sanctify them through thy truth: thy word is truth.",
        link: "/dailyverses/jan13/dvjan5.html"
    },
    "1-6": {
        title: "Life and immortality",
        reference: "2 Timothy 1:10",
        text: "Who hath abolished death, and hath brought life and immortality to light through the gospel.",
        link: "/dailyverses/jan13/dvjan6.html"
    },
    "1-7": {
        title: "Strong in the Lord",
        reference: "Ephesians 6:10",
        text: "Finally, my brethren, be strong in the Lord, and in the power of his might.",
        link: "/dailyverses/jan13/dvjan7.html"
    },
    "1-8": {
        title: "Worthy of the Gospel",
        reference: "Philippians 1:27",
        text: "Only let your conversation be as it becometh the gospel of Christ.",
        link: "/dailyverses/jan13/dvjan8.html"
    },
    "1-9": {
        title: "Peace in tribulation",
        reference: "John 16:33",
        text: "These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.",
        link: "/dailyverses/jan13/dvjan9.html"
    },
    "1-10": {
        title: "Sons and daughters",
        reference: "2 Corinthians 6:18",
        text: "And will be a Father unto you, and ye shall be my sons and daughters, saith the Lord Almighty.",
        link: "/dailyverses/jan13/dvjan10.html"
    },
    "1-11": {
        title: "Patient waiting",
        reference: "2 Thessalonians 3:5",
        text: "And the Lord direct your hearts into the love of God, and into the patient waiting for Christ.",
        link: "/dailyverses/jan13/dvjan11.html"
    },
    "1-12": {
        title: "He who began a good work",
        reference: "Philippians 1:6",
        text: "Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ.",
        link: "/dailyverses/jan13/dvjan12.html"
    },
    "1-13": {
        title: "Seated in heavenly places",
        reference: "Ephesians 2:6",
        text: "And hath raised us up together, and made us sit together in heavenly places in Christ Jesus.",
        link: "/dailyverses/jan13/dvjan13.html"
    },
    "1-14": {
        title: "The fruit of righteousness",
        reference: "James 3:18",
        text: "And the fruit of righteousness is sown in peace of them that make peace.",
        link: "/dailyverses/jan13/dvjan14.html"
    },
    "1-15": {
        title: "He that hath the Son",
        reference: "1 John 5:12",
        text: "He that hath the Son hath life; and he that hath not the Son of God hath not life.",
        link: "/dailyverses/jan13/dvjan15.html"
    },
    "1-16": {
        title: "Go into all the world",
        reference: "Mark 16:15",
        text: "And he said unto them, Go ye into all the world, and preach the gospel to every creature.",
        link: "/dailyverses/jan13/dvjan16.html"
    },
    "1-17": {
        title: "Christ our wisdom",
        reference: "1 Corinthians 1:30",
        text: "But of him are ye in Christ Jesus, who of God is made unto us wisdom, and righteousness, and sanctification, and redemption.",
        link: "/dailyverses/jan13/dvjan17.html"
    },
    "1-18": {
        title: "Preach the word",
        reference: "2 Timothy 4:2",
        text: "Preach the word; be instant in season, out of season; reprove, rebuke, exhort with all longsuffering and doctrine.",
        link: "/dailyverses/jan13/dvjan18.html"
    },
    "1-19": {
        title: "Free from sin",
        reference: "Romans 6:18",
        text: "Being then made free from sin, ye became the servants of righteousness.",
        link: "/dailyverses/jan13/dvjan19.html"
    },
    "1-20": {
        title: "Walk in Him",
        reference: "Colossians 2:6",
        text: "As ye have therefore received Christ Jesus the Lord, so walk ye in him.",
        link: "/dailyverses/jan13/dvjan20.html"
    },
    "1-21": {
        title: "Come unto Me",
        reference: "Matthew 11:28",
        text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
        link: "/dailyverses/jan13/dvjan21.html"
    },
    "1-22": {
        title: "Be transformed",
        reference: "Romans 12:2",
        text: "And be not conformed to this world: but be ye transformed by the renewing of your mind.",
        link: "/dailyverses/jan13/dvjan22.html"
    },
    "1-23": {
        title: "The harvest is ready",
        reference: "John 4:35",
        text: "Say not ye, There are yet four months, and then cometh harvest? behold, I say unto you, Lift up your eyes, and look on the fields; for they are white already to harvest.",
        link: "/dailyverses/jan13/dvjan23.html"
    },
    "1-24": {
        title: "Follow that which is good",
        reference: "1 Thessalonians 5:15",
        text: "See that none render evil for evil unto any man; but ever follow that which is good.",
        link: "/dailyverses/jan13/dvjan24.html"
    },
    "1-25": {
        title: "Glory to be revealed",
        reference: "Romans 8:18",
        text: "For I reckon that the sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us.",
        link: "/dailyverses/jan13/dvjan25.html"
    },
    "1-26": {
        title: "A royal priesthood",
        reference: "1 Peter 2:9",
        text: "But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people.",
        link: "/dailyverses/jan13/dvjan26.html"
    },
    "1-27": {
        title: "This is the will of God",
        reference: "1 Thessalonians 4:3",
        text: "For this is the will of God, even your sanctification.",
        link: "/dailyverses/jan13/dvjan27.html"
    },
    "1-28": {
        title: "Praying always",
        reference: "Ephesians 6:18",
        text: "Praying always with all prayer and supplication in the Spirit.",
        link: "/dailyverses/jan13/dvjan28.html"
    },
    "1-29": {
        title: "Watch, stand, be strong",
        reference: "1 Corinthians 16:13-14",
        text: "Watch ye, stand fast in the faith, quit you like men, be strong. Let all your things be done with charity.",
        link: "/dailyverses/jan13/dvjan29.html"
    },
    "1-30": {
        title: "Christ in you",
        reference: "Colossians 1:27",
        text: "Christ in you, the hope of glory.",
        link: "/dailyverses/jan13/dvjan30.html"
    },
    "1-31": {
        title: "Friends of Jesus",
        reference: "John 15:14",
        text: "Ye are my friends, if ye do whatsoever I command you.",
        link: "/dailyverses/jan13/dvjan31.html"
    },
    // February
    "2-1": {
        title: "Love one another",
        reference: "John 13:34",
        text: "A new commandment I give unto you, That ye love one another; as I have loved you.",
        link: "/dailyverses/feb13/dvfeb1.html"
    },
    "2-2": {
        title: "God is love",
        reference: "1 John 4:8",
        text: "He that loveth not knoweth not God; for God is love.",
        link: "/dailyverses/feb13/dvfeb2.html"
    },
    "2-14": {
        title: "The greatest love",
        reference: "John 15:13",
        text: "Greater love hath no man than this, that a man lay down his life for his friends.",
        link: "/dailyverses/feb13/dvfeb14.html"
    },
    // March
    "3-1": {
        title: "New every morning",
        reference: "Lamentations 3:23",
        text: "They are new every morning: great is thy faithfulness.",
        link: "/dailyverses/mar13/dvmar1.html"
    },
    // April
    "4-1": {
        title: "Resurrection power",
        reference: "Philippians 3:10",
        text: "That I may know him, and the power of his resurrection.",
        link: "/dailyverses/apr13/dvapr1.html"
    },
    // May
    "5-1": {
        title: "The Lord is my shepherd",
        reference: "Psalm 23:1",
        text: "The LORD is my shepherd; I shall not want.",
        link: "/dailyverses/may12/dvmay1.html"
    },
    // June
    "6-1": {
        title: "Trust in the Lord",
        reference: "Proverbs 3:5",
        text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
        link: "/dailyverses/june12/dvjune1.html"
    },
    // July
    "7-1": {
        title: "Freedom in Christ",
        reference: "Galatians 5:1",
        text: "Stand fast therefore in the liberty wherewith Christ hath made us free.",
        link: "/dailyverses/july12/dvjuly1.html"
    },
    "7-4": {
        title: "Called to liberty",
        reference: "Galatians 5:13",
        text: "For, brethren, ye have been called unto liberty; only use not liberty for an occasion to the flesh, but by love serve one another.",
        link: "/dailyverses/july12/dvjuly4.html"
    },
    // August
    "8-1": {
        title: "More than conquerors",
        reference: "Romans 8:37",
        text: "Nay, in all these things we are more than conquerors through him that loved us.",
        link: "/dailyverses/aug12/dvaug1.html"
    },
    // September
    "9-1": {
        title: "A new creation",
        reference: "2 Corinthians 5:17",
        text: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.",
        link: "/dailyverses/sept12/dvsept1.html"
    },
    // October
    "10-1": {
        title: "Give thanks",
        reference: "1 Thessalonians 5:18",
        text: "In every thing give thanks: for this is the will of God in Christ Jesus concerning you.",
        link: "/dailyverses/oct12/dvoct1.html"
    },
    // November
    "11-1": {
        title: "The Lord is faithful",
        reference: "2 Thessalonians 3:3",
        text: "But the Lord is faithful, who shall stablish you, and keep you from evil.",
        link: "/dailyverses/nov12/dvnov1.html"
    },
    // December
    "12-1": {
        title: "The Word became flesh",
        reference: "John 1:14",
        text: "And the Word was made flesh, and dwelt among us, and we beheld his glory.",
        link: "/dailyverses/dec12/dvdec1.html"
    },
    "12-20": {
        title: "Joy to the world",
        reference: "Luke 2:10",
        text: "And the angel said unto them, Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people.",
        link: "/dailyverses/dec12/dvdec20.html"
    },
    "12-25": {
        title: "Unto us a child is born",
        reference: "Isaiah 9:6",
        text: "For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.",
        link: "/dailyverses/dec12/dvdec25.html"
    },
    "12-31": {
        title: "The eternal God",
        reference: "Deuteronomy 33:27",
        text: "The eternal God is thy refuge, and underneath are the everlasting arms.",
        link: "/dailyverses/dec12/dvdec31.html"
    }
};

// Fallback verses for days not in the database
const fallbackVerses = [
    {
        title: "God's unfailing love",
        reference: "Psalm 136:1",
        text: "O give thanks unto the LORD; for he is good: for his mercy endureth for ever."
    },
    {
        title: "The way, the truth, the life",
        reference: "John 14:6",
        text: "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me."
    },
    {
        title: "Fear not",
        reference: "Isaiah 41:10",
        text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God."
    },
    {
        title: "All things work together",
        reference: "Romans 8:28",
        text: "And we know that all things work together for good to them that love God."
    },
    {
        title: "Peace I leave with you",
        reference: "John 14:27",
        text: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you."
    },
    {
        title: "Seek first the kingdom",
        reference: "Matthew 6:33",
        text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you."
    },
    {
        title: "I can do all things",
        reference: "Philippians 4:13",
        text: "I can do all things through Christ which strengtheneth me."
    }
];

function getDailyVerse() {
    const now = new Date();
    const month = now.getMonth() + 1; // JavaScript months are 0-indexed
    const day = now.getDate();
    const key = `${month}-${day}`;

    // Check if we have a specific verse for today
    if (dailyVerses[key]) {
        return dailyVerses[key];
    }

    // Fallback: use day of year to select a fallback verse
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const fallbackIndex = dayOfYear % fallbackVerses.length;
    return fallbackVerses[fallbackIndex];
}

function formatDate() {
    const now = new Date();
    const options = { month: 'long', day: 'numeric' };
    return now.toLocaleDateString('en-US', options);
}

function renderDailyVerse() {
    const verse = getDailyVerse();
    const dateStr = formatDate();

    const container = document.getElementById('daily-verse-container');
    if (!container) {
        console.log('Daily verse container not found');
        return;
    }
    console.log('Rendering daily verse:', verse.title);

    const linkHtml = verse.link
        ? `<a href="${verse.link}" class="inline-flex items-center gap-1 text-primary-400 hover:text-primary-300 text-sm mt-3 transition">
               Read full devotion
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
               </svg>
           </a>`
        : `<a href="/dailyverses.html" class="inline-flex items-center gap-1 text-primary-400 hover:text-primary-300 text-sm mt-3 transition">
               Browse all daily verses
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
               </svg>
           </a>`;

    container.innerHTML = `
        <div class="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div class="flex items-center gap-2 mb-3">
                <span class="text-2xl">📖</span>
                <div>
                    <div class="text-xs text-gray-400 uppercase tracking-wide">Verse of the Day</div>
                    <div class="text-sm font-medium text-white">${dateStr}</div>
                </div>
            </div>
            <h4 class="text-lg font-semibold text-white mb-2">${verse.title}</h4>
            <p class="text-gray-300 italic mb-2">"${verse.text}"</p>
            <p class="text-primary-400 font-medium text-sm">${verse.reference}</p>
            ${linkHtml}
        </div>
    `;
}

// Export as global functions for component loader to call
window.initDailyVerse = renderDailyVerse;
window.renderDailyVerse = renderDailyVerse;

// Try to render immediately if container exists (for non-component pages)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        if (document.getElementById('daily-verse-container')) {
            renderDailyVerse();
        }
    });
} else {
    if (document.getElementById('daily-verse-container')) {
        renderDailyVerse();
    }
}
