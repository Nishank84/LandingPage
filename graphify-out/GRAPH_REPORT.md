# Graph Report - .  (2026-10-10)

## Corpus Check
- Corpus is ~21,028 words - fits in a single context window. You may not need a graph.

## Summary
- 172 nodes · 200 edges · 14 communities (11 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Babel & Linting Tooling
- App Root & Interactive Modals
- Crucible & Problem Narrative Sections
- App TypeScript Configuration
- Vite Node Configuration
- Package Dependencies & Ecosystem
- Brand Identity & Global CTA
- GameUp Platform & Crucible Artifacts
- React & Vite Template Framework
- Root TypeScript Project References
- Icon Sprite Resources
- ESLint Rules & Standards

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `compilerOptions` - 15 edges
3. `scripts` - 5 edges
4. `BrandLogo()` - 4 edges
5. `lib` - 3 edges
6. `Vite React Template` - 3 edges
7. `GameUp AcademicOS` - 3 edges
8. `lucide-react` - 2 edges
9. `react` - 2 edges
10. `react-dom` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Isometric Platform Graphic` --conceptually_related_to--> `GameUp AcademicOS`  [INFERRED]
  src/assets/hero.png → index.html
- `React Framework Logo` --conceptually_related_to--> `Vite React Template`  [EXTRACTED]
  src/assets/react.svg → README.md
- `Vite Bundler Logo` --conceptually_related_to--> `Vite React Template`  [EXTRACTED]
  src/assets/vite.svg → README.md
- `GameUp AcademicOS` --references--> `Favicon Brand Icon`  [EXTRACTED]
  index.html → public/favicon.svg

## Import Cycles
- None detected.

## Communities (14 total, 3 thin omitted)

### Community 0 - "Babel & Linting Tooling"
Cohesion: 0.06
Nodes (33): @babel/core, babel-plugin-react-compiler, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, devDependencies (+25 more)

### Community 1 - "App Root & Interactive Modals"
Cohesion: 0.10
Nodes (17): HTML Mount Root, App(), CrucibleSection(), DemoModal(), DemoModalProps, FeatureDeepDives(), GoalSection(), Hero() (+9 more)

### Community 2 - "Crucible & Problem Narrative Sections"
Cohesion: 0.11
Nodes (21): CrucibleSectionProps, experienceIcons, stageIcons, workshopIcons, ProblemSection(), beliefIcons, levelIcons, ThoughtSection() (+13 more)

### Community 3 - "App TypeScript Configuration"
Cohesion: 0.08
Nodes (23): DOM, src, vite/client, compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx (+15 more)

### Community 4 - "Vite Node Configuration"
Cohesion: 0.10
Nodes (19): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+11 more)

### Community 5 - "Package Dependencies & Ecosystem"
Cohesion: 0.12
Nodes (16): lucide-react, dependencies, lucide-react, react, react-dom, name, private, scripts (+8 more)

### Community 6 - "Brand Identity & Global CTA"
Cohesion: 0.19
Nodes (9): BrandLogo(), BrandLogoProps, FinalCTA(), FinalCTAProps, Footer(), FooterProps, Navbar(), NavbarProps (+1 more)

### Community 7 - "GameUp Platform & Crucible Artifacts"
Cohesion: 0.50
Nodes (4): The Crucible Workshop Series, GameUp AcademicOS, Favicon Brand Icon, Isometric Platform Graphic

### Community 8 - "React & Vite Template Framework"
Cohesion: 0.50
Nodes (4): React Compiler, Vite React Template, React Framework Logo, Vite Bundler Logo

## Knowledge Gaps
- **90 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+85 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Babel & Linting Tooling` to `Package Dependencies & Ecosystem`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _90 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Babel & Linting Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._
- **Should `App Root & Interactive Modals` be split into smaller, more focused modules?**
  _Cohesion score 0.10333333333333333 - nodes in this community are weakly interconnected._
- **Should `Crucible & Problem Narrative Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._
- **Should `App TypeScript Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `Vite Node Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._