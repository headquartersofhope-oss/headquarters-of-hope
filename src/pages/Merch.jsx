import { ExternalLink, ShoppingBag, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/shared/SectionHeading';

const BONFIRE_STORE = 'https://www.bonfire.com/store/headquarters-of-hope-foundation/';

const hashtags = [
  '#HopeFestAustin2026','#FreedomRising','#HeadquartersOfHope',
  '#OperationAdvanceParty','#HopeBuilders','#HOHFoundation','#AustinJuly4'
];

const merchItems = [
  {
    name: 'HOH Classic Tee',
    desc: 'The original HOH logo tee. Navy blue. Rep the mission every day.',
    icon: '👕',
    color: 'Navy',
    tag: 'Fan Favorite',
  },
  {
    name: 'Nobody Fights Alone Tee',
    desc: 'White tee. A reminder that no one walks this road by themselves.',
    icon: '👕',
    color: 'White',
    tag: 'Best Seller',
  },
  {
    name: 'Before The Light — Founding Year Tee',
    desc: 'Limited edition founding year design. Navy blue. Honor where it all started.',
    icon: '👕',
    color: 'Navy',
    tag: 'Limited Edition',
  },
  {
    name: 'Where Hope Becomes Home — Hoodie',
    desc: 'Navy hoodie. Bold, warm, and built for the mission.',
    icon: '🧥',
    color: 'Navy',
    tag: 'Popular',
  },
  {
    name: 'HOH Foundation Snapback Hat',
    desc: 'Navy snapback. Wear the mission wherever you go.',
    icon: '🧢',
    color: 'Navy',
    tag: 'New',
  },
  {
    name: 'Every Morning Matters — HOH Mug',
    desc: 'White mug. Start every morning with purpose.',
    icon: '☕',
    color: 'White',
    tag: 'New',
  },
];

export default function Merch() {
  return (
    <>
      <PageHero
        eyebrow="Official Merch"
        title="Wear the Mission"
        description="Every item sold supports Headquarters of Hope Foundation directly. Zero cost to HOH — 100% print-on-demand through Bonfire."
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero CTA */}
          <div className="bg-primary rounded-2xl p-8 lg:p-12 mb-16 text-center">
            <div className="text-4xl mb-4">🔥</div>
            <h2 className="font-heading font-black text-3xl text-white mb-3">HOH Official Merch Store — Now Live</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
              Every purchase directly funds our mission — housing veterans, returning citizens, and turned-out foster youth in Central Texas. Shop now and wear the mission.
            </p>
            <a href={BONFIRE_STORE} target="_blank" rel="noreferrer">
              <Button className="bg-secondary hover:bg-secondary/90 text-primary font-display text-sm uppercase tracking-wide gap-2 px-8 py-3">
                <ShoppingBag className="w-4 h-4" /> Shop the Full Store
              </Button>
            </a>
            <p className="text-white/40 text-xs mt-4">Opens Bonfire — our zero-cost print-on-demand partner</p>
          </div>

          {/* Product Grid */}
          <SectionHeading eyebrow="Collection" title="Available Items" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {merchItems.map(item => (
              <div key={item.name} className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="bg-primary/5 p-8 text-center text-5xl">{item.icon}</div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-display font-bold uppercase tracking-wide text-secondary bg-secondary/10 px-2 py-0.5 rounded">{item.tag}</span>
                    <span className="text-xs text-muted-foreground border border-border rounded px-2 py-0.5">{item.color}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-primary mb-2">{item.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                  <a href={BONFIRE_STORE} target="_blank" rel="noreferrer" className="mt-4">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-primary font-display text-xs uppercase tracking-wide gap-1">
                      <ShoppingBag className="w-3 h-3" /> Shop Now
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Store */}
          <div className="text-center mt-10">
            <a href={BONFIRE_STORE} target="_blank" rel="noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-display text-sm uppercase tracking-wide gap-2 px-10">
                <ExternalLink className="w-4 h-4" /> View Full Store on Bonfire
              </Button>
            </a>
          </div>

          {/* Why Bonfire */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-off-white border border-border rounded-xl p-6 text-center">
              <Heart className="w-8 h-8 text-secondary mx-auto mb-3" fill="currentColor" />
              <h3 className="font-heading font-bold text-lg text-primary mb-2">100% Goes to HOH</h3>
              <p className="text-sm text-muted-foreground">Every dollar of profit from merch sales goes directly to HOH Foundation programs.</p>
            </div>
            <div className="bg-off-white border border-border rounded-xl p-6 text-center">
              <ShoppingBag className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-lg text-primary mb-2">Zero Upfront Cost</h3>
              <p className="text-sm text-muted-foreground">Print-on-demand through Bonfire. HOH pays nothing. Items print only when purchased.</p>
            </div>
            <div className="bg-off-white border border-border rounded-xl p-6 text-center">
              <ExternalLink className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-lg text-primary mb-2">Ships Everywhere</h3>
              <p className="text-sm text-muted-foreground">Bonfire ships directly to buyers. No warehouse, no inventory, no HOH overhead.</p>
            </div>
          </div>

          {/* Hashtags */}
          <div className="mt-16">
            <SectionHeading eyebrow="Spread the Word" title="Official Hashtags" />
            <div className="flex flex-wrap gap-3 mt-6">
              {hashtags.map(h => (
                <div key={h} className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-full">
                  <span className="font-mono text-sm text-secondary font-bold">{h}</span>
                  <button onClick={() => navigator.clipboard.writeText(h)} className="text-white/40 hover:text-white transition-colors">
                    <Share2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">Click the share icon to copy any hashtag.</p>
          </div>

          {/* Compliance */}
          <div className="mt-16 text-center text-xs text-muted-foreground border-t border-border pt-8">
            Headquarters of Hope Foundation, Inc. is a registered 501(c)(3) nonprofit organization. EIN: 39-3366072.
            All purchases support HOH Foundation programs. 509 Sandstone Trail, Buda, TX 78610 | 737-255-8355 | info@headquartersofhope.org
          </div>
        </div>
      </section>
    </>
  );
}
