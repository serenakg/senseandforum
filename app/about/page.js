import PageHero from "@/components/PageHero";
import Label from "@/components/Label";
import Pill from "@/components/Pill";
import ValueIcon from "@/components/ValueIcon";
import { values } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About: Founded by Serena Gasparini",
  description:
    "Sense & Forum® is Serena Gasparini's no-nonsense community-led marketing agency, with a specialism in femtech and female-led organisations. Here's our story and values.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        bg="amber-pale"
        eyebrow="About us"
        title={
          <>
            Sense, before strategy.{" "}
            <em>Forum, before you scale it.</em>
          </>
        }
        accentLeft="mid-coral"
        accentRight="hot-pink"
      >
        We work with people already doing good things, brands, communities,
        teams, and build the systems, structure and detail that let
        that work land properly. Brand strategy, community architecture,
        the processes running quietly behind the scenes: we look at all of
        it, together.
      </PageHero>

      <section className="section wrap">
        <Label>Our story</Label>
        <h2>
          Engagement shouldn&rsquo;t be <em>an afterthought</em>
        </h2>
        <p className="lede">
          Most organisations treat community and belonging like things that
          happen after the real work: a social page, an occasional event, a
          channel nobody quite checks. Serena started Sense &amp; Forum&reg;
          because that gap was costing people the very audience
          they&rsquo;d worked hard to reach.
        </p>
        <p className="lede">
          Sense &amp; Forum&reg; is Serena Gasparini&rsquo;s community-led
          marketing agency. Femtech and female-led organisations are where
          we&rsquo;ve built the deepest track record. But the method works
          for anyone whose growth depends on community, not just a media
          budget.
        </p>
        <p className="lede">
          We work with founders, teams and movements who want the next
          layer of engagement built on purpose, not by accident. Every
          engagement is staffed by a dedicated fractional CMO and a project
          manager, plus freelance specialists as needed: social, copy,
          events delivery, email marketing and production.
        </p>
        <p className="lede">
          We design marketing systems that don&rsquo;t run on hustle:
          audits and rebuilds that make room for real life, not just
          quarterly targets.
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/photos/about-at-work.jpg"
          alt="Working through a community strategy"
          className="content-image"
        />
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <Label>Where we work</Label>
        <h2>
          Global by <em>design</em>
        </h2>
        <p className="lede">
          Serena is Australian, based in Cyprus. She spent years living and
          working in the UK for the Australian government before choosing a
          life outside a big city. She holds multiple citizenships and
          moves through the world as a global citizen, not tied to one
          place.
        </p>
        <p className="lede">
          Sense &amp; Forum&reg; works the same way: with clients across
          Australia, the US, the EU and the UK, and a team hired globally
          and built to work remotely. Time zones and borders don&rsquo;t
          get in the way of how closely we work together.
        </p>
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <Label>What sets us apart</Label>
        <h2>
          The Delia Model&trade;
        </h2>
        <p className="lede">
          The DELIA Model&trade; is{" "}
          <a href="/team">Serena Gasparini&rsquo;s</a> methodology: how she
          designs community and marketing systems so nothing gets missed.
        </p>
        <p className="lede">
          <em>No clipboard. No red pen. Just us, looking closely with
          care.</em>
        </p>
        <p className="lede">
          Delia takes its name from the space Serena wished existed when
          she started out: a home for the founders, dreamers and doers
          building bold, community-first brands, especially in femtech
          and social impact, the ones mainstream playbooks tend to leave
          out.
        </p>
        <p className="lede">
          Most growth systems are built for the average user. We build for
          who gets missed.
        </p>
        <p className="lede">
          Before we design anything, a brand, a community, a campaign, we
          ask one question: <strong>who does this leave out?</strong> On
          purpose or by accident, every system excludes someone. We find
          that gap first, then design around it.
        </p>
        <p className="lede">That&rsquo;s people first, not people-pleasing. It means:</p>
        <ul className="delia-list">
          <li>
            We audit before we build: no guessing who your community
            actually is
          </li>
          <li>Inclusion isn&rsquo;t a value statement, it&rsquo;s a design step</li>
          <li>What we find goes into the rebuild, not a footnote after launch</li>
        </ul>
        <p className="lede">
          It&rsquo;s why our clients don&rsquo;t just grow: they grow with
          the people who were never going to fit the default.
        </p>
      </section>

      <section className="values">
        <div className="wrap">
          <Label>Our values</Label>
          <h2 style={{ marginBottom: 32 }}>What we build around</h2>
          <div className="value-row">
            {values.map((value, i) => (
              <div className={`value-card c${i % 4}`} key={value.key}>
                <div className="value-icon-badge">
                  <ValueIcon name={value.key} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta cta-coral">
        <h2>
          Want to work <em>together?</em>
        </h2>
        <Pill href="/contact" variant="solid-green">
          Book a discovery call
        </Pill>
      </section>
    </>
  );
}
