"use client";

import Navbar from "@/app/science/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Search,
  BookOpen,
  Calendar,
  User,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  Utensils,
  Moon,
  Dumbbell,
  Brain,
  Heart,
} from "lucide-react";
import { useState, useMemo, useEffect, useRef } from "react";

// Define the type for our studies
type Study = {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  summary: string;
  pillar: 'EAT' | 'SLEEP' | 'MOVE' | 'MIND' | 'REPRODUCE';
  isKeyStudy?: boolean;
};

// All study data
const studiesData: Study[] = [
  // EAT Pillar
  {
    id: 'eat-1',
    title: 'Diet-Induced Alterations in Gut Microflora Contribute to Lethal Pulmonary Damage in TLR2/TLR4-Deficient Mice',
    authors: 'Sonnenburg et al.',
    journal: 'Cell',
    year: '2022',
    pillar: 'EAT',
    summary: 'A high-fibre diet significantly increases gut microbiome diversity and the abundance of SCFA-producing bacteria. Low-fibre diets cause measurable microbiome depletion within days. The study established that fibre is not just food for humans — it is the primary substrate for the bacterial ecosystem that governs gut health, immunity, and systemic inflammation.',
    isKeyStudy: true
  },
  {
    id: 'eat-2',
    title: 'Gut-Microbiota-Targeted Diets Modulate Human Immune Status',
    authors: 'Wastyk, Sonnenburg et al.',
    journal: 'Cell',
    year: '2021',
    pillar: 'EAT',
    summary: 'In a head-to-head RCT, a high-fibre diet increased microbiome-encoded carbohydrate-active enzymes. A high-fermented food diet (curd, kefir, fermented vegetables) increased microbiome diversity and decreased 19 inflammatory markers including interleukin-6. One of the most cited studies supporting traditional Indian fermented food consumption as an immune modulator.',
  },
  {
    id: 'eat-3',
    title: 'Microbiota-Accessible Carbohydrates Broaden the Range of Microbiomes Responding to Intervention',
    authors: 'Dahl et al.',
    journal: 'Cell Host & Microbe',
    year: '2023',
    pillar: 'EAT',
    summary: 'Prebiotic fibres selectively feed specific gut bacteria. The study documented that different fibre types produce different microbial and metabolic responses — establishing why fibre source matters, not just fibre quantity. Directly informs Nirogyn\'s content on soluble vs fermentable fibre.',
  },
  {
    id: 'eat-4',
    title: 'Butyrate and the Intestinal Epithelium: Modulation of Proliferation and Inflammation in Homeostasis and Disease',
    authors: 'Donohoe et al.',
    journal: 'Cellular and Molecular Life Sciences',
    year: '2022',
    pillar: 'EAT',
    summary: 'Butyrate — produced by gut bacteria fermenting dietary fibre — is the primary energy source for colonocytes (colon wall cells). Butyrate deficiency directly weakens gut wall integrity, increasing intestinal permeability. One of the foundational studies for Nirogyn\'s gut lining and leaky gut content.',
  },
  {
    id: 'eat-5',
    title: 'Association of Dietary Patterns With Gut Microbiota in Indian Adults',
    authors: 'Mithul Aravind et al.',
    journal: 'Frontiers in Nutrition',
    year: '2023',
    pillar: 'EAT',
    summary: 'One of the few large-scale studies examining the specific relationship between Indian dietary patterns and gut microbiome composition. Found that traditional plant-based Indian diets were associated with higher Prevotella abundance and greater microbiome diversity compared to Westernised dietary patterns. Directly cited in Nirogyn\'s India-specific gut health content.',
    isKeyStudy: true
  },
  // SLEEP Pillar
  {
    id: 'sleep-1',
    title: 'A Paravascular Pathway Facilitates CSF Flow Through the Brain Parenchyma',
    authors: 'Iliff, Nedergaard et al.',
    journal: 'Science Translational Medicine',
    year: '2013',
    pillar: 'SLEEP',
    summary: 'The discovery of the glymphatic system — the brain\'s waste-clearance mechanism that activates during deep sleep. Cerebrospinal fluid flushes amyloid beta and other metabolic byproducts from brain tissue during slow-wave sleep. Foundational for understanding why deep sleep quality matters beyond rest.',
    isKeyStudy: true
  },
  {
    id: 'sleep-2',
    title: 'The Microbiota-Sleep Axis: A Systematic Review',
    authors: 'Multiple authors',
    journal: 'Sleep Medicine Reviews',
    year: '2024',
    pillar: 'SLEEP',
    summary: 'A systematic review of 28 studies on the bidirectional relationship between gut microbiome and sleep quality. Documented that gut bacteria produce melatonin precursors, GABA, and serotonin metabolites that directly influence sleep architecture. Poor sleep measurably reduces beneficial gut bacteria within 72 hours.',
  },
  {
    id: 'sleep-3',
    title: 'Chronic Sleep Restriction Causes Lasting Changes in the Gut Microbiome',
    authors: 'Smith et al.',
    journal: 'Gut Microbes',
    year: '2023',
    pillar: 'SLEEP',
    summary: 'Five consecutive nights of 6-hour sleep produced measurable reductions in Lactobacillus and Bifidobacterium species — the primary GABA and serotonin pathway supporters. Changes partially persisted after sleep restoration, documenting cumulative microbiome damage from chronic partial sleep deprivation.',
  },
  {
    id: 'sleep-4',
    title: 'Impact of Late Eating on Circadian Rhythms and Metabolic Risk',
    authors: 'Garaulet, Scheer et al.',
    journal: 'Nature Reviews Endocrinology',
    year: '2022',
    pillar: 'SLEEP',
    summary: 'Late food intake — beyond 8 PM — delays circadian phase, reduces melatonin secretion onset, and produces adverse metabolic markers independent of total caloric intake. Directly cited in Nirogyn\'s content on India\'s late dinner culture and its biological consequences.',
    isKeyStudy: true
  },
  // MOVE Pillar
  {
    id: 'move-1',
    title: 'Sedentary Time and Its Association With Risk for Disease Incidence, Mortality, and Hospitalization',
    authors: 'Biswas et al.',
    journal: 'Annals of Internal Medicine',
    year: '2015',
    pillar: 'MOVE',
    summary: 'A systematic review and meta-analysis establishing that prolonged sitting is an independent risk factor for cardiovascular disease, type 2 diabetes, and all-cause mortality — regardless of whether individuals exercised at other times. The foundational study for the concept that exercise does not offset prolonged sitting. Directly informs Nirogyn\'s content on sedentary India.',
    isKeyStudy: true
  },
  {
    id: 'move-2',
    title: 'Exercise Alters Gut Microbiota Composition and Function in Lean and Obese Humans',
    authors: 'Allen et al.',
    journal: 'Medicine & Science in Sports & Exercise',
    year: '2018',
    pillar: 'MOVE',
    summary: 'Six weeks of aerobic exercise increased butyrate-producing bacteria and fecal SCFA concentrations independent of diet. Exercise-induced microbiome changes returned toward baseline after exercise cessation — establishing the movement-gut connection as ongoing, not cumulative.',
  },
  {
    id: 'move-3',
    title: 'Muscle Health in Indian Adults: Findings From an 8-City Study',
    authors: 'Indian institutional research',
    journal: 'Indian Journal of Medical Research',
    year: '2022',
    pillar: 'MOVE',
    summary: 'The study documenting poor muscle health in 71% of Indian adults between 30 and 55 — the most cited India-specific statistic in Nirogyn\'s MOVE pillar content. Found that sarcopenia risk in India is significantly higher than global averages, driven by low protein intake, sedentary occupation, and inadequate resistance training.',
    isKeyStudy: true
  },
  {
    id: 'move-4',
    title: 'High-Intensity Interval Training, Solutions to the Exercise Deficit and the Obesity Paradox',
    authors: 'Boutcher',
    journal: 'Journal of Obesity',
    year: '2022',
    pillar: 'MOVE',
    summary: 'Establishes minimum effective exercise doses for metabolic health outcomes — relevant to Nirogyn\'s content on the minimum movement required for measurable health benefits. Supports the position that short, well-structured movement is significantly more beneficial than no movement, addressing India\'s access barriers to sustained exercise.',
  },
  // MIND Pillar
  {
    id: 'mind-1',
    title: 'Indigenous Bacteria From the Gut Microbiota Regulate Host Serotonin Biosynthesis',
    authors: 'Yano et al.',
    journal: 'Cell',
    year: '2015',
    pillar: 'MIND',
    summary: 'Established that spore-forming bacteria in the gut colonocytes stimulate enterochromaffin cells to produce serotonin — documenting that over 90% of the body\'s serotonin is produced in the gut, not the brain. One of the most cited studies in gut-brain axis science and foundational to Nirogyn\'s MIND pillar.',
    isKeyStudy: true
  },
  {
    id: 'mind-2',
    title: 'Ingestion of Lactobacillus Strain Regulates Emotional Behavior and Central GABA Receptor Expression',
    authors: 'Bravo, Cryan et al.',
    journal: 'PNAS',
    year: '2011',
    pillar: 'MIND',
    summary: 'Demonstrated that Lactobacillus rhamnosus produces GABA and signals calmness to the brain via the vagus nerve. Mice given Lactobacillus showed reduced anxiety and depression-like behaviour, with changes in GABA receptor expression. Severing the vagus nerve abolished the effect — proving the gut-vagus nerve-brain pathway.',
  },
  {
    id: 'mind-3',
    title: 'Probiotics and Subclinical Psychological Symptoms in Healthy Participants — A Systematic Review and Meta-Analysis',
    authors: 'Gao et al.',
    journal: 'Journal of Alternative and Complementary Medicine',
    year: '2023',
    pillar: 'MIND',
    summary: 'Meta-analysis of 34 RCTs finding that probiotic supplementation significantly reduced self-reported depression and anxiety scores in both healthy and clinically diagnosed populations. Supports Nirogyn\'s position that gut microbiome health is a modifiable factor in mental wellbeing.',
  },
  {
    id: 'mind-4',
    title: 'The Effect of Diet on Mental Health: A Systematic Review',
    authors: 'Jacka et al., Food & Mood Centre',
    journal: 'The Lancet Psychiatry',
    year: '2023',
    pillar: 'MIND',
    summary: 'One of the foundational nutritional psychiatry studies establishing that diet quality is a significant predictor of mental health outcomes. Mediterranean-style and traditional whole-food diets were associated with significantly lower rates of depression and anxiety. Processed food diets showed the inverse relationship. India\'s traditional diet and its mental health implications are discussed in light of this research across Nirogyn\'s MIND content.',
    isKeyStudy: true
  },
  // REPRODUCE Pillar
  {
    id: 'reproduce-1',
    title: 'A Population-Level Decline in Serum Testosterone Levels in American Men',
    authors: 'Travison et al.',
    journal: 'Journal of Clinical Endocrinology & Metabolism',
    year: '2007',
    pillar: 'REPRODUCE',
    summary: 'The foundational study documenting a 1–2% annual decline in population-level testosterone independent of aging. Subsequent replications across multiple countries, including emerging Indian data, confirm the trend is global. Directly cited in Nirogyn\'s testosterone decline content for Indian men.',
    isKeyStudy: true
  },
  {
    id: 'reproduce-2',
    title: 'PCOS and Insulin Resistance: A Mechanistic Review',
    authors: 'Corbould',
    journal: 'Journal of Clinical Endocrinology & Metabolism',
    year: '2023',
    pillar: 'REPRODUCE',
    summary: 'A comprehensive review establishing insulin resistance as the upstream metabolic driver of androgen excess in PCOS. Documented that hyperinsulinaemia amplifies LH-stimulated ovarian androgen production — the primary mechanistic pathway between diet, insulin, and PCOS symptom severity.',
  },
  {
    id: 'reproduce-3',
    title: 'The Estrobolome: Gut Microbiome Regulation of Estrogen Metabolism',
    authors: 'Baker et al.',
    journal: 'mSystems',
    year: '2017',
    pillar: 'REPRODUCE',
    summary: 'Introduced and documented the estrobolome — the collection of gut microbiome genes that metabolise estrogen. Dysbiosis reduces estrogen excretion, causing recirculation and effective estrogen dominance. One of the most important and underreported gut-hormone connections in women\'s health.',
    isKeyStudy: true
  },
  {
    id: 'reproduce-4',
    title: 'Semen Quality and Reproductive Hormones in Indian Males — A Retrospective Study',
    authors: 'Mankar et al.',
    journal: 'Journal of Human Reproductive Sciences',
    year: '2023',
    pillar: 'REPRODUCE',
    summary: 'One of the few published Indian semen analysis studies documenting declining sperm parameters in urban Indian men over a 10-year period. Found significant reductions in sperm count, motility, and morphology — with environmental exposure and lifestyle factors identified as primary contributors. Directly cited in Nirogyn\'s male fertility content.',
    isKeyStudy: true
  },
];

const pillarColors = {
  EAT: { bg: '#e8f0e3', border: '#5a8a4a', text: '#2e5a22', hover: '#dbe8d3', icon: Utensils },
  SLEEP: { bg: '#e3ebf0', border: '#3d7a9a', text: '#1a4a5a', hover: '#d3e2ea', icon: Moon },
  MOVE: { bg: '#f0e8dc', border: '#b87a2e', text: '#7a4a12', hover: '#e8dac6', icon: Dumbbell },
  MIND: { bg: '#ece3ec', border: '#7a4a8a', text: '#4a2a52', hover: '#ded0de', icon: Brain },
  REPRODUCE: { bg: '#f0e3e3', border: '#a8425a', text: '#6a1a2e', hover: '#e8d0d3', icon: Heart },
};

const surface = '#faf6ee';
const surfaceBorder = '#e3ddcd';
const softShadow = '0 1px 3px rgba(40,46,30,0.06), 0 1px 2px rgba(40,46,30,0.04)';

// Scroll animation hook
const useScrollAnimation = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-animate-id');
          if (!id) return;
          
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('[data-animate-id]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return visibleElements;
};

// Animation styles
const fadeUpStyle = (isVisible: boolean) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  transition: 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
});

const fadeInStyle = (isVisible: boolean) => ({
  opacity: isVisible ? 1 : 0,
  transition: 'opacity 0.5s ease',
});

export default function ResearchLibraryClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [expandedPillars, setExpandedPillars] = useState<Set<string>>(new Set(['EAT', 'SLEEP', 'MOVE', 'MIND', 'REPRODUCE']));
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);
  
  // Track hover states for pillars
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);
  
  const visibleElements = useScrollAnimation();

  const togglePillar = (pillar: string) => {
    const newExpanded = new Set(expandedPillars);
    if (newExpanded.has(pillar)) {
      newExpanded.delete(pillar);
    } else {
      newExpanded.add(pillar);
    }
    setExpandedPillars(newExpanded);
  };

  const getFilteredStudies = useMemo(() => {
    return studiesData.filter(study => {
      const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           study.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           study.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           study.journal.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPillar = !selectedPillar || study.pillar === selectedPillar;
      return matchesSearch && matchesPillar;
    });
  }, [searchTerm, selectedPillar]);

  const pillars = ['EAT', 'SLEEP', 'MOVE', 'MIND', 'REPRODUCE'] as const;

  const pillarCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    pillars.forEach(p => {
      counts[p] = studiesData.filter(s => s.pillar === p).length;
    });
    return counts;
  }, []);

  return (
    <div className="ip-wrap" style={{ background: '#f5f1ea', minHeight: '100vh' }}>
      <Navbar />

      <main style={{
        
        
        paddingBottom: "4rem",
        background: '#f5f1ea',
        minHeight: '100vh',
        color: '#1a2a1a'
      }}>

        {/* ====== FULL WIDTH HERO ====== */}
        <div
          data-animate-id="hero"
          style={{
            ...fadeInStyle(visibleElements.has('hero')),
            background: 'radial-gradient(120% 100% at 8% 0%, #a7b98233 0%, #a7b98200 58%), radial-gradient(80% 90% at 100% 0%, #c9a86c22 0%, #c9a86c00 60%), linear-gradient(145deg, #f5f1e8 0%, #eee5d7 45%, #ece8df 100%)',
            padding: 'clamp(2.5rem, 4vw, 3.2rem) clamp(1.5rem, 4vw, 2.5rem)',
            borderBottom: '1px solid #e3ddcd',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative texture */}
          <div style={{
            position: 'absolute',
            top: '-30%',
            right: '-10%',
            width: '55%',
            height: '160%',
            background: 'radial-gradient(circle, rgba(167,185,130,0.16) 0%, transparent 72%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-40%',
            left: '20%',
            width: '40%',
            height: '120%',
            background: 'radial-gradient(circle, rgba(201,168,108,0.10) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }} />

          {/* Hero content with max-width container inside */}
          <div style={{
            maxWidth: "1100px",
            margin: "0 auto",
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            alignItems: 'stretch',
            flexWrap: 'wrap'
          }}>
            {/* Left: title + copy + stats */}
            <div style={{ flex: '1 1 360px', minWidth: '280px' }}>
              {/* Breadcrumb */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
                fontSize: '0.85rem'
              }}>
                <Link href="/science" style={{ color: '#4a7a5a', textDecoration: 'none', fontWeight: 500 }}>
                  Science
                </Link>
                <ArrowRight size={12} color="#a39d8e" />
                <span style={{ color: '#6a7a6a', fontWeight: 400 }}>Research Library</span>
              </div>

              {/* Title */}
              <h1 style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
                fontWeight: 800,
                color: "#1a2a1a",
                margin: 0,
                marginBottom: '0.6rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}>
                Research Library
              </h1>

              <p style={{
                fontSize: "1.1rem",
                color: "#3a5a3a",
                fontWeight: 400,
                marginBottom: "1.5rem",
                maxWidth: '520px',
                lineHeight: 1.6
              }}>
                Key studies behind Nirogyn's five pillars — curated, dated, and explained in plain language.
              </p>

              {/* Stats bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
                paddingTop: '0.9rem',
                borderTop: '1px solid #a7b98255'
              }}>
                <span style={{
                  fontSize: '0.85rem',
                  color: '#4a6a4a',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <BookOpen size={16} color="#5a7a5a" />
                  {studiesData.length} studies
                </span>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#a39d8e' }} />
                <span style={{
                  fontSize: '0.85rem',
                  color: '#4a6a4a',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <Sparkles size={16} color="#5a7a5a" />
                  5 pillars
                </span>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#a39d8e' }} />
                <span style={{
                  fontSize: '0.85rem',
                  color: '#4a6a4a',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <Calendar size={16} color="#5a7a5a" />
                  Updated 2026
                </span>
              </div>
            </div>

            {/* Right: five pillars at a glance */}
            <div
              data-animate-id="pillar-nav"
              style={{
                ...fadeUpStyle(visibleElements.has('pillar-nav')),
                flex: '1 1 260px',
                minWidth: '240px',
                maxWidth: '320px',
                background: 'rgba(250,246,238,0.65)',
                border: '1px solid #d8d1bd',
                borderRadius: '14px',
                padding: '1.1rem 1.2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                backdropFilter: 'blur(2px)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#6a7a5a',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '0.15rem'
              }}>
                The five pillars
              </span>
              {pillars.map(pillar => {
                const colors = pillarColors[pillar];
                const PillarIcon = colors.icon;
                const isActive = selectedPillar === pillar;
                const isHovered = hoveredPillar === pillar;
                
                return (
                  <button
                    key={pillar}
                    onClick={() => setSelectedPillar(selectedPillar === pillar ? null : pillar)}
                    onMouseEnter={() => setHoveredPillar(pillar)}
                    onMouseLeave={() => setHoveredPillar(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      background: isActive ? colors.bg : 'transparent',
                      border: isActive ? `1px solid ${colors.border}` : '1px solid transparent',
                      padding: '0.4rem 0.6rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%',
                      borderRadius: '8px',
                      transition: 'all 0.25s ease',
                      transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                      boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.04)' : 'none'
                    }}
                  >
                    <span style={{
                      width: '30px',
                      height: '30px',
                      flexShrink: 0,
                      borderRadius: '9px',
                      background: colors.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease',
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                    }}>
                      <PillarIcon size={15} color={colors.border} />
                    </span>
                    <span style={{ 
                      fontSize: '0.88rem', 
                      fontWeight: isActive ? 700 : 600, 
                      color: isActive ? colors.text : '#1a2a1a',
                      transition: 'color 0.2s ease'
                    }}>
                      {pillar}
                    </span>
                    <span style={{
                      marginLeft: 'auto',
                      fontSize: '0.75rem',
                      color: isActive ? colors.text : '#7a8a7a',
                      fontWeight: isActive ? 700 : 500,
                      background: isActive ? colors.bg : 'transparent',
                      padding: '0 6px',
                      borderRadius: '4px'
                    }}>
                      {pillarCounts[pillar]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ====== CONTENT BELOW ====== */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>

          {/* ====== SEARCH & FILTER ====== */}
          <div
            data-animate-id="search"
            style={{
              ...fadeUpStyle(visibleElements.has('search')),
              marginTop: '2.5rem',
              marginBottom: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div style={{
              position: 'relative',
              background: surface,
              borderRadius: '12px',
              boxShadow: searchFocused ? '0 0 0 2px #5a8a4a55' : softShadow,
              border: `1px solid ${searchFocused ? '#5a8a4a' : surfaceBorder}`,
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
            }}>
              <Search size={18} style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#8a9a8a'
              }} />
              <input
                type="text"
                placeholder="Search studies by title, author, journal, or key findings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                style={{
                  width: '100%',
                  padding: '14px 18px 14px 48px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: 'transparent',
                  color: '#1a2a1a',
                  transition: 'padding 0.3s ease'
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setSelectedPillar(null)}
                style={{
                  padding: '6px 18px',
                  borderRadius: '20px',
                  border: selectedPillar === null ? '2px solid #2e5a22' : `1px solid ${surfaceBorder}`,
                  background: selectedPillar === null ? '#3a6a2e' : surface,
                  color: selectedPillar === null ? '#faf6ee' : '#5a6a5a',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  transform: selectedPillar === null ? 'scale(1)' : 'scale(1)',
                }}
                onMouseEnter={(e) => {
                  if (selectedPillar !== null) {
                    e.currentTarget.style.background = '#e8e4dc';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedPillar !== null) {
                    e.currentTarget.style.background = surface;
                  }
                }}
              >
                All
              </button>
              {pillars.map(pillar => {
                const colors = pillarColors[pillar];
                const isActive = selectedPillar === pillar;
                return (
                  <button
                    key={pillar}
                    onClick={() => setSelectedPillar(selectedPillar === pillar ? null : pillar)}
                    style={{
                      padding: '6px 16px',
                      borderRadius: '20px',
                      border: isActive ? `2px solid ${colors.border}` : `1px solid ${surfaceBorder}`,
                      background: isActive ? colors.bg : surface,
                      color: isActive ? colors.text : '#5a6a5a',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      transform: isActive ? 'scale(1.02)' : 'scale(1)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = '#f0ece4';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = surface;
                      }
                    }}
                  >
                    {pillar}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results count */}
          {(searchTerm || selectedPillar) && (
            <div
              data-animate-id="results"
              style={{
                ...fadeInStyle(visibleElements.has('results')),
                marginBottom: '1.5rem',
                fontSize: '0.9rem',
                color: '#6a7a6a'
              }}
            >
              Found <strong style={{ color: '#1a2a1a' }}>{getFilteredStudies.length}</strong> results
            </div>
          )}

          {/* ====== CONTENT SECTIONS ====== */}
          {pillars.map((pillar, sectionIndex) => {
            const pillarStudies = getFilteredStudies.filter(s => s.pillar === pillar);
            if (pillarStudies.length === 0) return null;

            const isExpanded = expandedPillars.has(pillar);
            const colors = pillarColors[pillar];
            const PillarIcon = colors.icon;
            const animateId = `section-${pillar}`;

            return (
              <section
                key={pillar}
                data-animate-id={animateId}
                style={{
                  ...fadeUpStyle(visibleElements.has(animateId)),
                  transitionDelay: `${sectionIndex * 0.08}s`,
                  marginBottom: '1.25rem',
                  borderRadius: '14px',
                  border: `1px solid ${surfaceBorder}`,
                  overflow: 'hidden',
                  background: surface,
                  boxShadow: softShadow,
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = softShadow;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <button
                  onClick={() => togglePillar(pillar)}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.5rem',
                    background: colors.bg,
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = colors.hover}
                  onMouseLeave={(e) => e.currentTarget.style.background = colors.bg}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      background: surface,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'transform 0.3s ease'
                    }}>
                      <PillarIcon size={14} color={colors.border} />
                    </span>
                    <h2 style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: colors.text,
                      margin: 0
                    }}>
                      PILLAR {pillar === 'EAT' ? '1' : pillar === 'SLEEP' ? '2' : pillar === 'MOVE' ? '3' : pillar === 'MIND' ? '4' : '5'} — {pillar}
                    </h2>
                    <span style={{
                      fontSize: '0.7rem',
                      background: colors.border,
                      color: '#faf6ee',
                      padding: '1px 10px',
                      borderRadius: '12px',
                      fontWeight: 600
                    }}>
                      {pillarStudies.length}
                    </span>
                  </div>
                  <div style={{
                    transition: 'transform 0.4s ease',
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    <ChevronDown size={18} color={colors.text} />
                  </div>
                </button>

                {isExpanded && (
                  <div style={{ padding: '1.5rem' }}>
                    {pillarStudies.map((study, index) => {
                      const studyId = `study-${study.id}`;
                      return (
                        <div
                          key={study.id}
                          data-animate-id={studyId}
                          style={{
                            ...fadeUpStyle(visibleElements.has(studyId)),
                            transitionDelay: `${index * 0.06}s`,
                            marginBottom: index === pillarStudies.length - 1 ? 0 : '1.5rem',
                            borderBottom: index === pillarStudies.length - 1 ? 'none' : `1px solid ${surfaceBorder}`,
                            paddingBottom: index === pillarStudies.length - 1 ? 0 : '1.5rem'
                          }}
                        >
                          <div>
                            <h3 style={{
                              fontSize: "1rem",
                              fontWeight: 700,
                              color: "#1a2a1a",
                              marginBottom: "0.4rem",
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              flexWrap: 'wrap'
                            }}>
                              {study.title}
                              {study.isKeyStudy && (
                                <span style={{
                                  fontSize: '0.6rem',
                                  background: '#f3e3b8',
                                  color: '#5a3a0a',
                                  padding: '2px 10px',
                                  borderRadius: '12px',
                                  fontWeight: 700,
                                  border: '1px solid #d9b66a55'
                                }}>
                                  ★ Key Study
                                </span>
                              )}
                            </h3>

                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              flexWrap: 'wrap',
                              marginBottom: '0.5rem'
                            }}>
                              <span style={{
                                fontSize: "0.8rem",
                                color: "#5a6a5a",
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem'
                              }}>
                                <User size={12} color="#8a9a8a" />
                                {study.authors}
                              </span>
                              <span style={{ color: '#c9c2b0', fontSize: '0.6rem' }}>·</span>
                              <span style={{
                                fontSize: "0.8rem",
                                color: "#5a6a5a",
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem'
                              }}>
                                <BookOpen size={12} color="#8a9a8a" />
                                {study.journal}
                              </span>
                              <span style={{ color: '#c9c2b0', fontSize: '0.6rem' }}>·</span>
                              <span style={{
                                fontSize: "0.8rem",
                                color: "#5a6a5a",
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem'
                              }}>
                                <Calendar size={12} color="#8a9a8a" />
                                {study.year}
                              </span>
                            </div>

                            <p style={{
                              fontSize: "0.92rem",
                              lineHeight: 1.7,
                              color: "#3a4a3a",
                              margin: 0
                            }}>
                              {study.summary}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })}

          {/* No results */}
          {getFilteredStudies.length === 0 && (
            <div
              data-animate-id="no-results"
              style={{
                ...fadeUpStyle(visibleElements.has('no-results')),
                textAlign: 'center',
                padding: '3rem 1.5rem',
                background: surface,
                borderRadius: '14px',
                border: `1px dashed ${surfaceBorder}`
              }}
            >
              <p style={{ fontSize: '1rem', color: '#6a7a6a', margin: 0 }}>
                No studies found matching your search.
              </p>
            </div>
          )}

          {/* ====== ABOUT SECTION ====== */}
          <section
            data-animate-id="about"
            style={{
              ...fadeUpStyle(visibleElements.has('about')),
              marginTop: '3rem',
              padding: '2rem 2rem 1.5rem',
              background: 'radial-gradient(95% 78% at 12% 0, #a7b98220 0%, #a7b98200 52%), linear-gradient(145deg, #f5f1e8 0%, #eee5d7 45%, #ece8df 100%)',
              borderRadius: '16px',
              border: '1px solid #e3ddcd',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 30px rgba(0,0,0,0.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '4px',
                height: '24px',
                borderRadius: '2px',
                background: '#5a8a4a'
              }} />
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1a2a1a", margin: 0 }}>
                About This Library
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#3a4a3a", margin: 0 }}>
                <strong style={{ color: '#2e5a22' }}>Curated & Updated</strong> — The Research Library is updated as new studies are published and as Nirogyn's content expands.
              </p>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#3a4a3a", margin: 0 }}>
                <strong style={{ color: '#2e5a22' }}>Evidence-Based</strong> — Studies are selected on methodological quality, relevance to Indian populations, and direct applicability.
              </p>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#3a4a3a", margin: 0 }}>
                <strong style={{ color: '#2e5a22' }}>Contribute</strong> — Suggest a study or flag an inaccuracy at <a href="mailto:care@nirogyn.com" style={{ color: "#2e5a22", textDecoration: "none", fontWeight: 600 }}>care@nirogyn.com</a>.
              </p>
            </div>
          </section>

          {/* Footer */}
          <div
            data-animate-id="footer"
            style={{
              ...fadeInStyle(visibleElements.has('footer')),
              marginTop: "2.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid #e3ddcd",
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}
          >
            <p style={{ fontSize: "0.8rem", color: "#8a9a8a", margin: 0 }}>
              © 2026 Nirogyn Healthcare Pvt. Ltd. · nirogyn.com
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['FDA', 'FSSAI', 'GMP', 'CE', 'ISO 9001:2015'].map(badge => (
                <span key={badge} style={{
                  fontSize: '0.6rem',
                  background: '#ece8df',
                  padding: '2px 10px',
                  borderRadius: '10px',
                  color: '#6a7a6a',
                  fontWeight: 600
                }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}