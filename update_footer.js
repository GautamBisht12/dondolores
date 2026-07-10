const fs = require('fs');
const path = require('path');

const newFooter = `    <footer id="kontakt" style="background-color: #2e2d4d; color: #ffffff; padding: 4rem 0 2rem 0; font-family: 'Inter', sans-serif;">
        <div class="container footer-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem;">
            <!-- Col 1: Brand Info -->
            <div class="footer-col">
                <h3 style="font-family: 'Inter', sans-serif; font-weight: 500; font-size: 1.1rem; margin-bottom: 1.5rem; letter-spacing: 0.5px;">Don <span class="classic-amp">&amp;</span> Dolores</h3>
                <p style="font-size: 0.85rem; line-height: 1.6; opacity: 0.9; margin-bottom: 1.5rem;">A fusion between Swedish and Italian. Simple, tasty food made with good ingredients that gives room for conversation and joy.</p>
                <div class="footer-socials" style="display: flex; gap: 10px;">
                    <a href="https://www.facebook.com/dondolores.skelleftea/" target="_blank" aria-label="Facebook" style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; background-color: #ffffff; border-radius: 50%; color: #2e2d4d;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/dondolores_skelleftea/" target="_blank" aria-label="Instagram" style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; background-color: #ffffff; border-radius: 50%; color: #2e2d4d;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                    <a href="#" aria-label="Tiktok" style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; background-color: #ffffff; border-radius: 50%; color: #2e2d4d;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.99-1.72-.08-.07-.17-.17-.24-.26v6.23c.12 5.64-5.06 10.42-10.74 9.75-5.18-.5-9.35-5.26-8.9-10.49.39-4.83 4.67-8.77 9.53-8.25.13.01.26.04.39.06v4.09c-.1-.03-.21-.05-.31-.06-2.6-.33-5.02 1.34-5.55 3.91-.67 3.06 1.42 6.11 4.5 6.46 2.92.36 5.8-1.57 6.22-4.47.08-.5.06-1.02.06-1.53V.02z"/>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Col 2: Contact -->
            <div class="footer-col">
                <h3 style="font-family: 'Inter', sans-serif; font-weight: 500; font-size: 1.1rem; margin-bottom: 1.5rem; letter-spacing: 0.5px;">Contact</h3>
                <ul class="contact-list" style="list-style:none; padding:0; font-size: 0.85rem; opacity: 0.9;">
                    <li style="display:flex; align-items:center; gap: 8px; margin-bottom:12px;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <a href="tel:+46910790070">+46 910 79 00 70</a>
                    </li>
                    <li style="display:flex; align-items:center; gap: 8px; margin-bottom:12px;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        <a href="mailto:hej@dondolores.se">hej@dondolores.se</a>
                    </li>
                    <li style="display:flex; align-items:flex-start; gap: 8px;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 3px;">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <a href="#" target="_blank">Kanalgatan 43, 931 29<br>Skelleftea, Sweden</a>
                    </li>
                </ul>
            </div>

            <!-- Col 3: Quick Links -->
            <div class="footer-col">
                <h3 style="font-family: 'Inter', sans-serif; font-weight: 500; font-size: 1.1rem; margin-bottom: 1.5rem; letter-spacing: 0.5px;">Quick links</h3>
                <ul class="footer-links" style="list-style:none; padding:0; font-size: 0.85rem; text-transform: uppercase; line-height: 2; opacity: 0.9;">
                    <li><a href="menu.html">MENU</a></li>
                    <li><a href="index.html#aktiviteter">ACTIVITIES</a></li>
                    <li><a href="gallery.html">GALLERY</a></li>
                    <li><a href="index.html#kontakt">CONTACT</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="index.html#faq">FREQUENTLY ASKED QUESTIONS</a></li>
                </ul>
            </div>

            <!-- Col 4: Opening hours -->
            <div class="footer-col">
                <h3 style="font-family: 'Inter', sans-serif; font-weight: 500; font-size: 1.1rem; margin-bottom: 1.5rem; letter-spacing: 0.5px;">Opening hours</h3>
                <div class="hours-list" style="font-size: 0.85rem; opacity: 0.9; display: grid; grid-template-columns: 1fr auto; row-gap: 4px;">
                    <span>Monday</span><span>15 - late</span>
                    <span>Tuesday</span><span>15 - late</span>
                    <span>Wednesday</span><span>15 - late</span>
                    <span>Thursday</span><span>15 - late</span>
                    <span>Friday</span><span>15 - late</span>
                    <span>Saturday</span><span>12 - late</span>
                    <span>Sunday</span><span>15 - late</span>
                </div>
                <button class="btn open-booking" style="margin-top: 1.2rem; display: inline-block; background-color: #D6E4F0; color: #1C1D30; font-size: 0.75rem; padding: 0.6rem 1.2rem; border-radius: 2px;">BOOK A TABLE</button>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="container">
            <div class="footer-bottom" style="display:flex; justify-content:space-between; align-items:flex-start; margin-top:3rem; padding-top:1.5rem; border-top:1px solid rgba(255,255,255,0.2); font-size: 0.85rem;">
                <span class="footer-copy">© 2026 Don &amp; Dolores. All rights reserved.</span>
                <span class="footer-note" style="text-align:left; opacity: 0.9;">We currently do not offer home delivery or online ordering. You<br>are welcome to visit us in person!</span>
            </div>
        </div>
    </footer>`;

const files = ['index.html', 'about.html', 'menu.html', 'gallery.html'];

files.forEach(file => {
    const filePath = path.join('e:/Gautam/2026/freelance', file);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace <footer ...> ... </footer>
    content = content.replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/i, newFooter);
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated footer in ${file}`);
});
