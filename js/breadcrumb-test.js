/**
 * Breadcrumb Testing Utility
 * Tests what breadcrumbs a given path would generate
 * without needing to navigate to that path
 */

function testBreadcrumbsForPath(testPath) {
    // Check explicit config first
    if (breadcrumbConfig && breadcrumbConfig[testPath]) {
        return breadcrumbConfig[testPath];
    }

    // ===== SMART FOLDER-BASED MAPPING (same logic as breadcrumb-config.js) =====

    const path = testPath;

    // Daily Verses - /daily/ or /dv files
    if (path.match(/^\/daily\//)) {
        const months = {
            'jan': 'January', 'feb': 'February', 'mar': 'March', 'apr': 'April',
            'may': 'May', 'jun': 'June', 'jul': 'July', 'aug': 'August',
            'sep': 'September', 'oct': 'October', 'nov': 'November', 'dec': 'December'
        };

        for (const [abbr, fullName] of Object.entries(months)) {
            if (path.includes(abbr)) {
                return [
                    { title: 'Home', url: '/' },
                    { title: 'Verse of the Day', url: '/daily/today.html' },
                    { title: fullName, url: path }
                ];
            }
        }

        return [
            { title: 'Home', url: '/' },
            { title: 'Verse of the Day', url: '/daily/today.html' },
            { title: getPageTitleFromPath(path), url: path }
        ];
    }

    // Daily verse links pages
    if (path.match(/\/dvlinks/)) {
        // Check for specific NT books first
        if (path.match(/mark/i)) {
            return [
                { title: 'Home', url: '/' },
                { title: 'Verse of the Day', url: '/daily/today.html' },
                { title: 'Gospel of Mark', url: path }
            ];
        }
        if (path.match(/matt/i)) {
            return [
                { title: 'Home', url: '/' },
                { title: 'Verse of the Day', url: '/daily/today.html' },
                { title: 'Gospel of Matthew', url: path }
            ];
        }
        if (path.match(/luke/i)) {
            return [
                { title: 'Home', url: '/' },
                { title: 'Verse of the Day', url: '/daily/today.html' },
                { title: 'Gospel of Luke', url: path }
            ];
        }
        if (path.match(/john/i)) {
            return [
                { title: 'Home', url: '/' },
                { title: 'Verse of the Day', url: '/daily/today.html' },
                { title: 'Gospel of John', url: path }
            ];
        }

        const months = {
            'jan': 'January', 'feb': 'February', 'mar': 'March', 'apr': 'April',
            'may': 'May', 'jun': 'June', 'jul': 'July', 'aug': 'August',
            'sept': 'September', 'oct': 'October', 'nov': 'November', 'dec': 'December'
        };

        for (const [abbr, fullName] of Object.entries(months)) {
            if (path.match(new RegExp('dvlinks' + abbr, 'i'))) {
                return [
                    { title: 'Home', url: '/' },
                    { title: 'Verse of the Day', url: '/daily/today.html' },
                    { title: fullName, url: path }
                ];
            }
        }
    }

    // Foundation courses - /btp/foundation/
    if (path.match(/\/btp\/foundation\//)) {
        if (path.includes('eternal')) {
            return [
                { title: 'Home', url: '/' },
                { title: 'Teaching & Courses', url: '/courses.html' },
                { title: 'Foundation', url: '/foundation.html' },
                { title: 'Eternal Life', url: '/cfeternal.html' },
                { title: getPageTitleFromPath(path), url: path }
            ];
        }
        if (path.includes('salvation') || path.includes('/sal')) {
            return [
                { title: 'Home', url: '/' },
                { title: 'Teaching & Courses', url: '/courses.html' },
                { title: 'Foundation', url: '/foundation.html' },
                { title: 'Salvation Course', url: '/salindex.html' },
                { title: getPageTitleFromPath(path), url: path }
            ];
        }
        return [
            { title: 'Home', url: '/' },
            { title: 'Teaching & Courses', url: '/courses.html' },
            { title: 'Foundation', url: '/foundation.html' },
            { title: getPageTitleFromPath(path), url: path }
        ];
    }

    // Salvation course - root level
    if (path.match(/\/sal\d+[a-z]?\.html?$/)) {
        return [
            { title: 'Home', url: '/' },
            { title: 'Teaching & Courses', url: '/courses.html' },
            { title: 'Foundation', url: '/foundation.html' },
            { title: 'Salvation Course', url: '/salindex.html' },
            { title: getPageTitleFromPath(path), url: path }
        ];
    }

    // Armour of God
    if (path.match(/\/(btp\/life\/)?armour/)) {
        return [
            { title: 'Home', url: '/' },
            { title: 'Teaching & Courses', url: '/courses.html' },
            { title: 'Christian Life', url: '/life.html' },
            { title: 'Armour of God', url: '/arweb.html' },
            { title: getPageTitleFromPath(path), url: path }
        ];
    }

    // Fruit of the Spirit
    if (path.match(/\/fruit/)) {
        return [
            { title: 'Home', url: '/' },
            { title: 'Teaching & Courses', url: '/courses.html' },
            { title: 'Christian Life', url: '/life.html' },
            { title: 'Fruit of the Spirit', url: '/fruitweb.html' },
            { title: getPageTitleFromPath(path), url: path }
        ];
    }

    // Gifts of the Spirit
    if (path.match(/\/gifts/)) {
        return [
            { title: 'Home', url: '/' },
            { title: 'Teaching & Courses', url: '/courses.html' },
            { title: 'Christian Life', url: '/life.html' },
            { title: 'Gifts of the Spirit', url: '/giftsweb.html' },
            { title: getPageTitleFromPath(path), url: path }
        ];
    }

    // Prayer
    if (path.match(/\/prayer/)) {
        return [
            { title: 'Home', url: '/' },
            { title: 'Teaching & Courses', url: '/courses.html' },
            { title: 'Christian Life', url: '/life.html' },
            { title: 'Prayer', url: '/prayer2web.html' },
            { title: getPageTitleFromPath(path), url: path }
        ];
    }

    // Worship
    if (path.match(/\/(worship|hc)\//)) {
        return [
            { title: 'Home', url: '/' },
            { title: 'Teaching & Courses', url: '/courses.html' },
            { title: 'Christian Life', url: '/life.html' },
            { title: 'Worship', url: '/worship1web.html' },
            { title: getPageTitleFromPath(path), url: path }
        ];
    }

    // Old Testament
    if (path.match(/\/ot/)) {
        if (path.includes('gen')) {
            return [
                { title: 'Home', url: '/' },
                { title: 'Teaching & Courses', url: '/courses.html' },
                { title: 'Old Testament', url: '/bibleot.html' },
                { title: 'Genesis', url: path }
            ];
        }
        return [
            { title: 'Home', url: '/' },
            { title: 'Teaching & Courses', url: '/courses.html' },
            { title: 'Old Testament', url: '/bibleot.html' },
            { title: getPageTitleFromPath(path), url: path }
        ];
    }

    // Church History
    if (path.match(/\/ch/)) {
        return [
            { title: 'Home', url: '/' },
            { title: 'Teaching & Courses', url: '/courses.html' },
            { title: 'Church History', url: '/histweb.html' },
            { title: getPageTitleFromPath(path), url: path }
        ];
    }

    // Greek Words
    if (path.match(/\/greek/)) {
        return [
            { title: 'Home', url: '/' },
            { title: 'Teaching & Courses', url: '/courses.html' },
            { title: 'Greek Words', url: '/greekweb.html' },
            { title: getPageTitleFromPath(path), url: path }
        ];
    }

    // Jewish History
    if (path.match(/\/jh/)) {
        return [
            { title: 'Home', url: '/' },
            { title: 'Teaching & Courses', url: '/courses.html' },
            { title: 'Jewish History', url: '/jhweb1.html' },
            { title: getPageTitleFromPath(path), url: path }
        ];
    }

    // Missions
    if (path.match(/\/mm/)) {
        return [
            { title: 'Home', url: '/' },
            { title: 'Teaching & Courses', url: '/courses.html' },
            { title: 'Missions', url: '/mmweb.html' },
            { title: getPageTitleFromPath(path), url: path }
        ];
    }

    // NT Verses
    const ntBooks = {
        'rom': 'Romans', '1cor': '1 Corinthians', '2cor': '2 Corinthians',
        'gal': 'Galatians', 'eph': 'Ephesians', 'phil': 'Philippians',
        'col': 'Colossians', 'heb': 'Hebrews', '1thess': '1 Thessalonians',
        '2thess': '2 Thessalonians', '1tim': '1 Timothy', '2tim': '2 Timothy',
        'tit': 'Titus', 'philem': 'Philemon', 'jas': 'James',
        '1pet': '1 Peter', '2pet': '2 Peter', '1john': '1 John',
        '2john': '2 John', '3john': '3 John', 'jude': 'Jude', 'rev': 'Revelation'
    };

    for (const [abbr, fullName] of Object.entries(ntBooks)) {
        if (path.match(new RegExp('\\/' + abbr + '\\d'))) {
            return [
                { title: 'Home', url: '/' },
                { title: 'NT Verses', url: '/ntverses.html' },
                { title: fullName, url: path }
            ];
        }
    }

    // Messages
    if (path.match(/\/messages/)) {
        return [
            { title: 'Home', url: '/' },
            { title: 'Books & Messages', url: '/books.html' },
            { title: 'Messages', url: path }
        ];
    }

    // Default fallback
    return [
        { title: 'Home', url: '/' },
        { title: getPageTitleFromPath(path), url: path }
    ];
}

function getPageTitleFromPath(path) {
    const filename = path.split('/').pop().replace('.html', '').replace('.htm', '');
    return filename.charAt(0).toUpperCase() + filename.slice(1).replace(/[-_]/g, ' ');
}
