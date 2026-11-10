// Theme presets. Every colour family starts from the logo: green #1E4A33, gold #D9B866 -> #8F6B26, ivory #F1F0EB.
export const FONTS = {
  classic: {label: 'Cormorant + Inter', head: '"Cormorant Garamond", Georgia, serif', body: 'Inter, system-ui, sans-serif', headWeight: 600},
  modern:  {label: 'Manrope + Inter',   head: 'Manrope, system-ui, sans-serif',     body: 'Inter, system-ui, sans-serif', headWeight: 600},
  fraunces:{label: 'Fraunces + Inter',  head: 'Fraunces, Georgia, serif',           body: 'Inter, system-ui, sans-serif', headWeight: 500},
  cinzel:  {label: 'Cinzel + Inter',    head: 'Cinzel, Georgia, serif',             body: 'Inter, system-ui, sans-serif', headWeight: 600},
};
export const PRESETS = {
  logo:    {name: 'Logo classic', note: 'Ivory paper, logo green, gold', bg:'#F1F0EB', surface:'#FBFAF6', ink:'#16251D', muted:'#5B6A61', line:'#DDD9CE', brand:'#1E4A33', onBrand:'#F1F0EB', accent:'#B8913F', logoInk:'#1E4A33', font:'classic', radius:4},
  emerald: {name: 'Emerald night', note: 'Deep green, ivory text, bright gold', bg:'#0D2219', surface:'#12301F', ink:'#F1F0EB', muted:'#A9B8AE', line:'#24412F', brand:'#1E4A33', onBrand:'#F1F0EB', accent:'#D9B866', logoInk:'#F1F0EB', font:'classic', radius:4},
  midnight:{name: 'Midnight gold', note: 'The live site: charcoal & gold', bg:'#14171A', surface:'#1D2125', ink:'#F4F4F2', muted:'#9AA0A6', line:'#2A2F34', brand:'#14171A', onBrand:'#FFFFFF', accent:'#C9A24D', logoInk:'#F1F0EB', font:'modern', radius:16},
  paper:   {name: 'Paper white', note: 'White, modern sans, green & gold accents', bg:'#FFFFFF', surface:'#F6F7F5', ink:'#14201A', muted:'#5F6B64', line:'#E3E7E4', brand:'#1E4A33', onBrand:'#FFFFFF', accent:'#B8913F', logoInk:'#1E4A33', font:'modern', radius:20},
  stone:   {name: 'Stone & brass', note: 'Warm stone, brass, soft serif', bg:'#E7E2D8', surface:'#F0ECE4', ink:'#2A2823', muted:'#6B665C', line:'#D3CCBE', brand:'#2E3B33', onBrand:'#F0ECE4', accent:'#8F6B26', logoInk:'#2E3B33', font:'fraunces', radius:10},
  navy:    {name: 'Royal navy', note: 'Navy & gold, the classic chambers look', bg:'#F4F2EC', surface:'#FFFFFF', ink:'#141C2E', muted:'#5A6275', line:'#DCDDE3', brand:'#16223D', onBrand:'#F4F2EC', accent:'#C9A24D', logoInk:'#16223D', font:'cinzel', radius:6},
  burgundy:{name: 'Burgundy', note: 'Oxblood, cream & gold', bg:'#F6F0E8', surface:'#FFFBF5', ink:'#2A1418', muted:'#6E5A5C', line:'#E6D9CE', brand:'#5B1A24', onBrand:'#F6F0E8', accent:'#C9A24D', logoInk:'#5B1A24', font:'classic', radius:4, motion:'calm'},
  mono:    {name: 'Ink & paper', note: 'Black & white, gold only on the logo', bg:'#FFFFFF', surface:'#F4F4F4', ink:'#0A0A0A', muted:'#5C5C5C', line:'#E2E2E2', brand:'#0A0A0A', onBrand:'#FFFFFF', accent:'#0A0A0A', logoInk:'#0A0A0A', font:'fraunces', radius:0, onAccent:'#FFFFFF'},
  teal:    {name: 'Teal & sand', note: 'Deep teal, sand, gold', bg:'#F2EDE3', surface:'#FBF8F2', ink:'#10272A', muted:'#56696B', line:'#DED6C7', brand:'#0F3B40', onBrand:'#F2EDE3', accent:'#C8A04A', logoInk:'#0F3B40', font:'modern', radius:14, motion:'lively'},
  plum:    {name: 'Plum night', note: 'Dark plum, rose gold', bg:'#1A1220', surface:'#251A2E', ink:'#F3ECF4', muted:'#B3A5B8', line:'#3A2C44', brand:'#2C1B36', onBrand:'#F3ECF4', accent:'#D8A878', logoInk:'#F3ECF4', font:'classic', radius:12, motion:'lively'},
  terracotta:{name: 'Terracotta', note: 'Clay, cream, olive', bg:'#F5EEE6', surface:'#FFF9F2', ink:'#2B1D16', muted:'#76655A', line:'#E7D9CB', brand:'#3F4A2E', onBrand:'#F5EEE6', accent:'#C0623E', logoInk:'#3F4A2E', font:'fraunces', radius:18, onAccent:'#FFFFFF'},
  graphite:{name: 'Graphite glass', note: 'Near-black with cool glass & gold', bg:'#0B0D10', surface:'#15181D', ink:'#ECEEF1', muted:'#9097A1', line:'#252A31', brand:'#101418', onBrand:'#ECEEF1', accent:'#D9B866', logoInk:'#ECEEF1', font:'modern', radius:22, motion:'lively'},
};
export const MOTION = {calm: {label: 'Calm', spd: 1.6}, lively: {label: 'Lively', spd: 0.7}, off: {label: 'Off', spd: 1}};
export const TEMPLATES = {
  a: {name: 'A. Showcase', note: 'Like apple.com: logo glowing in the banner, full-width photo blocks, office photo carousel.'},
  b: {name: 'B. Studio', note: 'Like astryx.atmeta.com: dark, big gold wordmark, photo cards floating around it (you rated it worst).'},
  c: {name: 'C. Editorial photo', note: 'Logo-green panel with the logo beside the High Court photo; photo chapters; expanding office gallery.'},
  d: {name: 'D. Atelier', note: 'Like Cahn Wilson: paper tone, huge italic serif, logo in the banner, black-&-white architecture.'},
  e: {name: 'E. Signal', note: 'Like Linear & Stripe: dark, gradient headline, moving ribbon behind the logo.'},
  t1: {name: 'T1. Editorial', note: 'Big serif headline, moving practice ribbon, numbered rows that open on hover, giant footer wordmark.', src: '../v2/site.html'},
  t2: {name: 'T2. Bento grid', note: 'Everything above the fold in tiles; cards light up under the cursor; office count ticks up.', src: '../v2/site.html'},
  t3: {name: 'T3. Split sticky', note: 'Logo & headline stay pinned on the left; practice areas scroll past on the right with a progress rail.', src: '../v2/site.html'},
  t4: {name: 'T4. Spotlight', note: 'Centred logo in a moving light, cards with a running gold border, offices in tabs.', src: '../v2/site.html'},
  t5: {name: 'T5. Glass', note: 'Frosted glass panels over slow-moving colour blobs; floating pill menu.', src: '../v2/site.html'},
  t6: {name: 'T6. Aurora', note: 'Moving colour-mesh hero; the headline types in word by word.', src: '../v2/site.html'},
  t7: {name: 'T7. Neo-brutalist', note: 'Thick borders, hard offset shadows, bold blocks; buttons press in.', src: '../v2/site.html'},
  t8: {name: 'T8. Swiss grid', note: 'Strict grid, huge numbers, lines that draw themselves as you scroll.', src: '../v2/site.html'},
  t9: {name: 'T9. Horizontal story', note: 'Scroll down & the practice areas slide sideways like chapters.', src: '../v2/site.html'},
  t10:{name: 'T10. 3D tilt', note: 'Layered logo that moves with the cursor; cards tilt in 3D.', src: '../v2/site.html'},
  s1: {name: 'S1. Tabs (round 1)', note: 'Hero, then tabs for practice areas & offices. Round 1 page: themes do not change it.', src: '../opt-1.html', fixed: true},
  s2: {name: 'S2. Directory (round 1)', note: 'Side list of every practice area & office. Round 1 page: themes do not change it.', src: '../opt-2.html', fixed: true},
  s3: {name: 'S3. Practice first (round 1)', note: 'Practice cards in the hero, office table. Round 1 page: themes do not change it.', src: '../opt-3.html', fixed: true},
};
export function themeVars(t) {
  const f = FONTS[t.font] || FONTS.classic;
  const m = MOTION[t.motion || 'calm'] || MOTION.calm;
  return {'--bg':t.bg,'--surface':t.surface,'--ink':t.ink,'--muted':t.muted,'--line':t.line,'--brand':t.brand,'--on-brand':t.onBrand,'--accent':t.accent,'--logo-ink':t.logoInk,'--head':f.head,'--body':f.body,'--head-w':f.headWeight,'--r':t.radius+'px','--spd':m.spd,'--on-accent':t.onAccent||'#14171A'};
}
