const fs = require('fs');
const path = require('path');

const files = ['index.html', 'about.html', 'menu.html', 'gallery.html'];

const replacements = [
    { from: 'Välj måltid', to: 'Select meal' },
    { from: '>Middag<', to: '>Dinner<' },
    { from: 'VÄLJ\\s+ANTAL PERSONER', to: 'SELECT NUMBER OF GUESTS' },
    { from: '1 person', to: '1 guest' },
    { from: '2 personer', to: '2 guests' },
    { from: '3 personer', to: '3 guests' },
    { from: '4 personer', to: '4 guests' },
    { from: '5 personer', to: '5 guests' },
    { from: '6 personer', to: '6 guests' },
    { from: '7 personer', to: '7 guests' },
    { from: '8 personer', to: '8 guests' },
    { from: '9\\+ personer', to: '9+ guests' },
    { from: 'Varav barn antal', to: 'Number of children' },
    { from: '0 Barn', to: '0 Children' },
    { from: '1 Barn', to: '1 Child' },
    { from: '2 Barn', to: '2 Children' },
    { from: 'data-month-name="JULI"', to: 'data-month-name="JULY"' },
    { from: '>JULI 2026', to: '>JULY 2026' },
    { from: '>MÅN<', to: '>MON<' },
    { from: '>TIS<', to: '>TUE<' },
    { from: '>ONS<', to: '>WED<' },
    { from: '>TOR<', to: '>THU<' },
    { from: '>FRE<', to: '>FRI<' },
    { from: '>LÖR<', to: '>SAT<' },
    { from: '>SÖN<', to: '>SUN<' },
    { from: '>Tid<', to: '>Time<' },
    { from: '>BOKA<', to: '>BOOK<' },
    { from: 'BOKA<br>BORD', to: 'BOOK<br>TABLE' },
    { from: '>Logga in<', to: '>Log in<' },
    { from: '<span class="current-lang">Swedish</span>', to: '<span class="current-lang">English</span>' },
    { from: 'data-lang="sv"\\s+style="([^"]+)"', to: 'data-lang="sv" style="$1"' },
    { from: 'data-lang="en"\\s+style="([^"]+)"', to: 'data-lang="en" style="$1"' },
    // Update active state in language dropdown
    { from: '<button class="lang-dropdown-option active" data-lang="sv"', to: '<button class="lang-dropdown-option" data-lang="sv"' },
    { from: '<button class="lang-dropdown-option" data-lang="en"', to: '<button class="lang-dropdown-option active" data-lang="en"' },
    // Update floating lang select
    { from: '<option value="en">English</option>\\s*<option value="sv" selected>Swedish</option>', to: '<option value="en" selected>English</option>\n            <option value="sv">Swedish</option>' }
];

files.forEach(file => {
    const filePath = path.join('e:/Gautam/2026/freelance', file);
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping ${file}, not found.`);
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Custom fix for lang-dropdown check-icon visibility
    content = content.replace(
        /(<button class="lang-dropdown-option[^>]*data-lang="sv"[\s\S]*?)<span class="check-icon">✓<\/span>/,
        '$1<span class="check-icon" style="display: none;">✓</span>'
    );
    content = content.replace(
        /(<button class="lang-dropdown-option[^>]*data-lang="en"[\s\S]*?)<span class="check-icon" style="display: none;">✓<\/span>/,
        '$1<span class="check-icon">✓</span>'
    );

    replacements.forEach(r => {
        const regex = new RegExp(r.from, 'g');
        content = content.replace(regex, r.to);
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
});
