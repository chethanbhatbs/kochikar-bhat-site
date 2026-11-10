// Shared by every option: Astryx components, the site's real text, header, footer, disclaimer, dark mode.
import * as React from 'react';
import {createRoot} from 'react-dom/client';
import htm from 'htm';
const X = p => import(`https://esm.sh/@astryxdesign/core@0.7.11/${p}?external=react,react-dom`);
const mods = await Promise.all(['TabList','Button','Collapsible','Table','VStack','HStack','SegmentedControl','Card','ClickableCard','Dialog','MetadataList','Grid','Divider','Badge'].map(X));
export const C = Object.assign({}, ...mods);
export const html = htm.bind(React.createElement);
export {React};

// Text copied from the live index.html. Office contact details are not on the site yet.
export const SITE = {
  cities: 'Bangalore · Mangalore · Kasaragod',
  h1a: 'Counsel in disputes, arbitration, ', h1b: 'property & IP.',
  lead: 'A law practice in Karnataka & Kerala, working in litigation, arbitration, intellectual property & real estate.',
  practice: [
    {n:'01', id:'disputes', t:'Dispute Resolution, Civil & Criminal', d:'Civil & criminal proceedings, from the first notice through trial & appeal.', tags:['Civil suits','Recovery','Injunctions','Bail & trials','Appeals']},
    {n:'02', id:'ip', t:'Intellectual Property Rights', d:'Protection & enforcement of trademarks, copyright & designs.', tags:['Registration','Oppositions','Infringement','Passing off']},
    {n:'03', id:'arbitration', t:'Arbitration', d:'Domestic arbitration, & the court proceedings that support or challenge it.', tags:['Appointments','Proceedings','Interim relief','Enforcement']},
    {n:'04', id:'realestate', t:'Real Estate', d:'Property transactions & property disputes.', tags:['Title verification','Sale & lease','Development','Partition']},
  ],
  offices: [
    {id:'bangalore', city:'Bangalore', state:'Karnataka'},
    {id:'mangalore', city:'Mangalore', state:'Karnataka'},
    {id:'kasaragod', city:'Kasaragod', state:'Kerala'},
  ],
  disclaimer: [
    'The Bar Council of India does not permit advocates to solicit work or advertise in any manner. By clicking "I agree", you confirm that:',
    'You are seeking information about Bhat & Kochikar Advocates of your own accord, & there has been no advertisement, solicitation or inducement of any kind from the firm or its members.',
    'The information on this website is for general information only. It is not legal advice, & using this website does not create an advocate-client relationship.',
  ],
};
export const TODO = html`<span class="todo">to be added</span>`;

export const Arrow = () => html`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M2 8h12M9 3l5 5-5 5"/></svg>`;

export function Header({links = [['#practice','Practice areas'],['#offices','Offices']], current}) {
  return html`<header class="top" data-astryx-media="dark"><div class="wrap">
    <a class="brand" href="#"><img src="assets/mark-light.svg" alt=""/><span class="brand-name">Bhat & Kochikar<span class="brand-sub">Advocates</span></span></a>
    <nav class="nav" aria-label="Main">
      ${links.map(([h,t]) => html`<a class="link" href=${h} key=${h} aria-current=${current === h ? 'page' : undefined}>${t}</a>`)}
      <${C.Button} variant="primary" size="md" label="Contact" href="#offices"/>
    </nav></div></header>`;
}

export function Footer() {
  const [open, setOpen] = React.useState(false);
  return html`<footer data-astryx-media="dark"><div class="wrap">
    <div class="cta"><h2>Need to speak to us?</h2><${C.Button} variant="primary" size="lg" label="Contact an office" href="#offices" endContent=${html`<${Arrow}/>`}/></div>
    <div class="legal"><span>© 2026 Bhat & Kochikar Advocates</span><button class="linkish" type="button" onClick=${() => setOpen(true)}>Read the full disclaimer</button></div>
  </div></footer>
  <${C.Dialog} isOpen=${open} onOpenChange=${setOpen} width=${560} padding=${8}>
    <p class="label">Disclaimer</p><h2 class="h2" style=${{fontSize: 24, margin: '8px 0 16px'}}>Before you continue</h2>
    ${SITE.disclaimer.map((p,i) => html`<p key=${i} style=${{fontSize: 14, color: 'var(--color-text-secondary)', margin: '0 0 12px'}}>${p}</p>`)}
    <div style=${{marginTop: 16}}><${C.Button} variant="primary" label="I agree" onClick=${() => setOpen(false)}/></div>
  </${C.Dialog}>`;
}

export const useWide = (q = '(min-width: 901px)') => {
  const [m, setM] = React.useState(() => matchMedia(q).matches);
  React.useEffect(() => { const mq = matchMedia(q); const f = () => setM(mq.matches); mq.addEventListener('change', f); return () => mq.removeEventListener('change', f); }, [q]);
  return m;
};

// The options page toggles body.dark; Astryx switches on data-astryx-media.
function syncDark() { document.body.setAttribute('data-astryx-media', document.body.classList.contains('dark') ? 'dark' : 'light'); }
new MutationObserver(syncDark).observe(document.body, {attributes: true, attributeFilter: ['class']}); syncDark();

export function mount(App) { createRoot(document.getElementById('root')).render(html`<${App}/>`); window.__ready = true; }
