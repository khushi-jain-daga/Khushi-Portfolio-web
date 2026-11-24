/**
 * KHUSHI JAIN DAGA — USER INTERACTIONS & SYSTEMS ENGINE
 * 1. Interactive Developer Workspace ("Inside My Developer World")
 * 2. Interactive Terminal CLI
 * 3. My Technical Ecosystem (Interactive Knowledge Graph)
 * 4. Interactive System Builder ("How I Build")
 * 5. Client-Side Form Validation & Micro-interactions
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. INTERACTIVE DEVELOPER WORKSPACE ("INSIDE MY DEVELOPER WORLD")
  // ==========================================================================
  const laptopEl = document.querySelector('#desk-laptop');
  const booksEl = document.querySelector('#desk-books');
  const gitEl = document.querySelector('#desk-git');
  const monitorEl = document.querySelector('#desk-monitor');
  const coffeeEl = document.querySelector('#desk-coffee');
  const triviaToast = document.querySelector('#coffee-trivia-toast');

  // Monitor real project carousel state
  const monitorProjects = [
    { title: 'Examon Education', badge: 'EXAMON LMS', tech: 'React · Firebase · Vercel', link: 'https://examoneducation.com' },
    { title: 'Qampus Navigation', badge: '360° SPATIAL', tech: 'React · Three.js · Firestore', link: 'https://github.com/khushi-jain-daga/qampus-app' },
    { title: 'TeamSpace Collab', badge: 'CLOUD KANBAN', tech: 'React · Firebase · Vercel', link: 'https://teamspace-v7.vercel.app' }
  ];
  let currentMonitorIdx = 0;

  // 1. Laptop -> Scrolls to Selected Work
  if (laptopEl) {
    laptopEl.addEventListener('click', () => {
      const workSec = document.querySelector('#work');
      if (workSec) workSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 2. Books -> Scrolls to Technical Ecosystem
  if (booksEl) {
    booksEl.addEventListener('click', () => {
      const skillsSec = document.querySelector('#skills');
      if (skillsSec) skillsSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 3. Git Panel -> Opens GitHub Profile
  if (gitEl) {
    gitEl.addEventListener('click', () => {
      window.open('https://github.com/khushi-jain-daga', '_blank', 'noopener,noreferrer');
    });
  }

  // 4. Monitor -> Cycles project preview
  if (monitorEl) {
    const previewBadge = document.querySelector('#preview-badge');
    const previewTitle = document.querySelector('#preview-title');
    const previewTech = document.querySelector('#preview-tech');

    monitorEl.addEventListener('click', () => {
      currentMonitorIdx = (currentMonitorIdx + 1) % monitorProjects.length;
      const proj = monitorProjects[currentMonitorIdx];
      if (previewBadge) previewBadge.textContent = proj.badge;
      if (previewTitle) previewTitle.textContent = proj.title;
      if (previewTech) previewTech.textContent = proj.tech;
    });
  }

  // 5. Coffee Mug -> Trivia Toast
  if (coffeeEl && triviaToast) {
    let toastTimer = null;
    coffeeEl.addEventListener('click', (e) => {
      e.stopPropagation();
      triviaToast.classList.toggle('show');
      if (toastTimer) clearTimeout(toastTimer);
      if (triviaToast.classList.contains('show')) {
        toastTimer = setTimeout(() => {
          triviaToast.classList.remove('show');
        }, 6000);
      }
    });

    document.addEventListener('click', (e) => {
      if (!coffeeEl.contains(e.target) && !triviaToast.contains(e.target)) {
        triviaToast.classList.remove('show');
      }
    });
  }

  // ==========================================================================
  // 2. INTERACTIVE PORTFOLIO TERMINAL WINDOW
  // ==========================================================================
  const termForm = document.querySelector('#term-form');
  const termInput = document.querySelector('#term-input');
  const termOutput = document.querySelector('#term-output');

  if (termForm && termInput && termOutput) {
    const commands = {
      help: 'Commands: help | about | skills | projects | experience | education | contact | clear',
      about: 'Khushi Jain Daga: Undergraduate in B.Tech CSE (Core) at JECRC University (2023-2027). Current CGPA: 9.2/10. Full-stack developer intern and creative engineer.',
      skills: 'Languages: Java, JS, C++, Python, HTML5, CSS3. Web: React.js, Three.js, Node.js. Cloud: MySQL, Firestore, Firebase Auth, Google Cloud. Tools: Git, GitHub, Vercel.',
      projects: '1. Examon Education (examoneducation.com)\n2. Qampus (github.com/khushi-jain-daga/qampus-app)\n3. TeamSpace (teamspace-v7.vercel.app)',
      experience: '1. Full Stack Developer Intern — Examon Education (Mar 2026-Present)\n2. Frontend Developer Intern — Examon Education (Aug 2025-Jun 2026)\n3. Frontend Intern — Urban Biotix (Oct 2023-Jul 2025)',
      education: 'JECRC University, Jaipur — B.Tech Computer Science and Engineering (VII Semester) · Roll: 23bcon1665 · CGPA: 9.2',
      contact: 'Email: khushi.23bcon1665@jecrcu.edu.in | GitHub: github.com/khushi-jain-daga | LinkedIn: linkedin.com/in/khushi-jain-daga',
      clear: '__CLEAR__'
    };

    termForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const rawCmd = termInput.value.trim();
      if (!rawCmd) return;
      const cmd = rawCmd.toLowerCase();

      // Echo input line
      const inputLine = document.createElement('div');
      inputLine.className = 'term-line cmd mono-text';
      inputLine.textContent = `khushi@portfolio:~$ ${rawCmd}`;
      termOutput.appendChild(inputLine);

      termInput.value = '';

      if (cmd === 'clear') {
        termOutput.innerHTML = '';
        return;
      }

      const resLine = document.createElement('div');
      resLine.className = 'term-line res mono-text';

      if (commands[cmd]) {
        resLine.textContent = commands[cmd];
      } else {
        resLine.textContent = `Command not recognized: '${rawCmd}'. Type 'help' to inspect available instructions.`;
      }

      termOutput.appendChild(resLine);
      termOutput.scrollTop = termOutput.scrollHeight;
    });
  }

  // ==========================================================================
  // 3. MY TECHNICAL ECOSYSTEM — KNOWLEDGE GRAPH ENGINE
  // ==========================================================================
  const graphContainer = document.querySelector('#graph-container');
  const linksGroup = document.querySelector('#graph-links');
  const nodesGroup = document.querySelector('#graph-nodes');

  // Inspector Elements
  const inspTitle = document.querySelector('#insp-title');
  const inspRole = document.querySelector('#insp-role');
  const inspDesc = document.querySelector('#insp-desc');
  const inspCategory = document.querySelector('#insp-category');
  const inspProjectTags = document.querySelector('#insp-project-tags');
  const inspWorkflowText = document.querySelector('#insp-workflow-text');
  const inspActionWrap = document.querySelector('#insp-action-wrap');
  const inspActionBtn = document.querySelector('#insp-action-btn');

  // Controls
  const filterBtns = document.querySelectorAll('.graph-ctrl-btn');
  const searchInput = document.querySelector('#graph-search-input');
  const zoomInBtn = document.querySelector('#graph-zoom-in');
  const zoomOutBtn = document.querySelector('#graph-zoom-out');
  const resetBtn = document.querySelector('#graph-reset-btn');

  // Node & Relationship Data
  const graphData = {
    nodes: [
      // Central Node
      { id: 'center', name: 'Khushi / Core Development', category: 'center', x: 500, y: 320, r: 24, labelY: 355 },

      // CLUSTER 1: LANGUAGES (Top-Left)
      { id: 'java', name: 'Java', category: 'languages', x: 160, y: 110, r: 16, desc: 'Object-oriented programming, threading, algorithmic problem solving & data structures.', workflow: 'Core language for algorithmic problem solving and backend application logic.', projects: [] },
      { id: 'js', name: 'JavaScript', category: 'languages', x: 280, y: 90, r: 18, desc: 'ES6+, asynchronous event loop, functional programming & browser APIs.', workflow: 'Primary client-side scripting language driving interactive web applications.', projects: ['Examon Education', 'Qampus', 'TeamSpace'] },
      { id: 'cpp', name: 'C++', category: 'languages', x: 120, y: 200, r: 15, desc: 'Memory pointers, algorithmic performance, and competitive coding logic.', workflow: 'Foundational language for memory analysis and core data structures.', projects: [] },
      { id: 'python', name: 'Python', category: 'languages', x: 240, y: 190, r: 15, desc: 'Automation scripts, AI workflow integration, and Pregrad certified foundations.', workflow: 'Scripting tool for data automation and rapid machine learning prototyping.', projects: [] },
      { id: 'html5', name: 'HTML5', category: 'languages', x: 130, y: 290, r: 16, desc: 'Semantic document hierarchy, WAI-ARIA 1.2 accessibility standards & SEO.', workflow: 'Foundational markup architecture ensuring high accessibility and search indexing.', projects: ['Examon Education', 'Urban Biotix'] },
      { id: 'css3', name: 'CSS3', category: 'languages', x: 230, y: 280, r: 16, desc: 'CSS Custom Properties, Grid, Flexbox, fluid clamp typography & keyframes.', workflow: 'Modern design system implementation without third-party utility bloat.', projects: ['Examon Education', 'Urban Biotix'] },

      // CLUSTER 2: DEVELOPMENT (Top-Right)
      { id: 'react', name: 'React.js', category: 'development', x: 720, y: 110, r: 20, desc: 'Component lifecycle, hooks, virtual DOM reconciliation, and modular SPA state.', workflow: 'Primary frontend framework across production EdTech and collaboration platforms.', projects: ['Examon Education', 'Qampus', 'TeamSpace'] },
      { id: 'threejs', name: 'Three.js', category: 'development', x: 860, y: 120, r: 18, desc: 'WebGL rendering, scene cameras, 360-degree projection geometries, and lighting.', workflow: 'Spatial computing engine delivering immersive campus tour visualizations.', projects: ['Qampus'] },
      { id: 'nodejs', name: 'Node.js', category: 'development', x: 790, y: 210, r: 16, desc: 'Server runtime, RESTful routing, middleware, and backend API integration.', workflow: 'Runtime engine for full-stack API integration and micro-endpoints.', projects: ['Examon Education'] },

      // CLUSTER 3: DATA & CLOUD (Bottom-Right)
      { id: 'mysql', name: 'MySQL & SQL', category: 'data', x: 730, y: 440, r: 16, desc: 'Relational schemas, queries, joins, ACID transactions & normalization.', workflow: 'Structured relational storage for administrative datasets and student records.', projects: [] },
      { id: 'firestore', name: 'Firestore', category: 'data', x: 870, y: 450, r: 18, desc: 'Real-time NoSQL document store, security rules, offline indexing & cloud sync.', workflow: 'Serverless real-time database powering live campus node wayfinding.', projects: ['Qampus', 'TeamSpace'] },
      { id: 'firebase_auth', name: 'Firebase Auth', category: 'data', x: 740, y: 530, r: 17, desc: 'Identity lifecycle, JWT validation, OAuth providers & route protection.', workflow: 'Secures student login sessions and role-based permissions.', projects: ['Examon Education', 'TeamSpace'] },
      { id: 'gcp', name: 'Google Cloud', category: 'data', x: 870, y: 540, r: 16, desc: 'Certified foundations, virtual compute instances, cloud storage & IAM policies.', workflow: 'Foundational cloud infrastructure and cloud resource orchestration.', projects: [] },

      // CLUSTER 4: WORKFLOW (Bottom)
      { id: 'git', name: 'Git & GitHub', category: 'workflow', x: 420, y: 560, r: 17, desc: 'Distributed version control, branching strategies, PR reviews & release tags.', workflow: 'Daily collaboration standard for code versioning and open-source contributions.', projects: ['Qampus', 'Examon Education'] },
      { id: 'vscode', name: 'VS Code', category: 'workflow', x: 500, y: 600, r: 15, desc: 'Customized development environment, debugging extensions & command line tools.', workflow: 'Primary local IDE configured for rapid full-stack iteration.', projects: [] },
      { id: 'vercel', name: 'Vercel', category: 'workflow', x: 580, y: 560, r: 16, desc: 'Edge deployment, automatic CI/CD pipelines, preview environments & fast DNS.', workflow: 'Edge hosting provider delivering sub-second globally distributed loads.', projects: ['Examon Education', 'TeamSpace'] },

      // CLUSTER 5: COMPUTER SCIENCE (Bottom-Left)
      { id: 'dsa', name: 'DSA', category: 'cs', x: 150, y: 440, r: 16, desc: 'Arrays, trees, graphs, sorting, dynamic programming & asymptotic complexity.', workflow: 'Analytical problem-solving foundation applied across software architecture.', projects: [] },
      { id: 'oop', name: 'OOP', category: 'cs', x: 260, y: 430, r: 16, desc: 'Encapsulation, inheritance, polymorphism, abstraction & design patterns.', workflow: 'Modular code structuring ensuring maintainable and scalable class hierarchies.', projects: [] },
      { id: 'dbms', name: 'DBMS', category: 'cs', x: 160, y: 530, r: 15, desc: 'Relational algebra, query optimization, indexing & concurrency controls.', workflow: 'Database architecture ensuring data integrity and query efficiency.', projects: [] },
      { id: 'os_net', name: 'OS & Networks', category: 'cs', x: 270, y: 530, r: 15, desc: 'Process scheduling, memory allocation, TCP/IP, HTTP protocols & security.', workflow: 'Systems-level understanding of browser-server networking and runtime resource constraints.', projects: [] },

      // CLUSTER 6: REAL PROJECTS (Prominent Anchors)
      { id: 'p_examon', name: 'Examon Education', category: 'projects', x: 490, y: 150, r: 20, desc: 'EdTech learning platform featuring responsive interfaces, video lecture series, and Firebase authentication.', workflow: 'Full Stack & Frontend Intern tenure delivering student dashboards.', projects: ['Examon Education'], link: 'https://examoneducation.com' },
      { id: 'p_qampus', name: 'Qampus', category: 'projects', x: 890, y: 280, r: 20, desc: '360° virtual campus navigation system featuring spatial tour panoramas and vacant classroom query algorithms.', workflow: 'Autonomous creative engineering project combining React, Three.js, and Firestore.', projects: ['Qampus'], link: 'https://github.com/khushi-jain-daga/qampus-app' },
      { id: 'p_teamspace', name: 'TeamSpace', category: 'projects', x: 650, y: 340, r: 20, desc: 'Collaborative digital workspace with reusable modular component interfaces, session isolation, and persistent cloud data.', workflow: 'Collaborative workspace application built and deployed on Vercel.', projects: ['TeamSpace'], link: 'https://teamspace-v7.vercel.app' }
    ],

    // Factually Accurate Connections
    links: [
      // Center to Hubs
      { source: 'center', target: 'p_examon' },
      { source: 'center', target: 'p_qampus' },
      { source: 'center', target: 'p_teamspace' },
      { source: 'center', target: 'js' },
      { source: 'center', target: 'react' },
      { source: 'center', target: 'git' },
      { source: 'center', target: 'dsa' },

      // Languages Cluster
      { source: 'js', target: 'html5' },
      { source: 'js', target: 'css3' },
      { source: 'java', target: 'cpp' },
      { source: 'java', target: 'dsa' },
      { source: 'cpp', target: 'dsa' },
      { source: 'python', target: 'center' },

      // Development Cluster
      { source: 'js', target: 'react' },
      { source: 'react', target: 'threejs' },
      { source: 'react', target: 'nodejs' },

      // Real Projects -> Verified Technologies
      { source: 'p_examon', target: 'react' },
      { source: 'p_examon', target: 'firebase_auth' },
      { source: 'p_examon', target: 'html5' },
      { source: 'p_examon', target: 'css3' },
      { source: 'p_examon', target: 'vercel' },

      { source: 'p_qampus', target: 'react' },
      { source: 'p_qampus', target: 'threejs' },
      { source: 'p_qampus', target: 'firestore' },
      { source: 'p_qampus', target: 'js' },

      { source: 'p_teamspace', target: 'react' },
      { source: 'p_teamspace', target: 'firebase_auth' },
      { source: 'p_teamspace', target: 'firestore' },
      { source: 'p_teamspace', target: 'vercel' },

      // Data & Cloud
      { source: 'firestore', target: 'firebase_auth' },
      { source: 'mysql', target: 'dbms' },
      { source: 'gcp', target: 'center' },

      // Developer Workflow
      { source: 'git', target: 'vscode' },
      { source: 'git', target: 'vercel' },

      // Computer Science
      { source: 'dsa', target: 'oop' },
      { source: 'dbms', target: 'os_net' },
      { source: 'oop', target: 'java' }
    ]
  };

  // Build SVG Knowledge Graph Elements
  if (linksGroup && nodesGroup) {
    const nodeMap = new Map();
    graphData.nodes.forEach((n) => nodeMap.set(n.id, n));

    // Render Links
    graphData.links.forEach((l) => {
      const s = nodeMap.get(l.source);
      const t = nodeMap.get(l.target);
      if (s && t) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        // Gentle curved bezier path
        const dx = t.x - s.x;
        const dy = t.y - s.y;
        const cx1 = s.x + dx * 0.5;
        const cy1 = s.y;
        const cx2 = s.x + dx * 0.5;
        const cy2 = t.y;
        const d = `M ${s.x} ${s.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${t.x} ${t.y}`;

        path.setAttribute('d', d);
        path.setAttribute('class', 'graph-link');
        path.setAttribute('data-source', l.source);
        path.setAttribute('data-target', l.target);
        linksGroup.appendChild(path);
      }
    });

    // Render Nodes
    graphData.nodes.forEach((n) => {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      let nodeClass = 'graph-node';
      if (n.category === 'center') nodeClass += ' center-node';
      else if (n.category === 'projects') nodeClass += ' project-node';
      else nodeClass += ' tech-node';

      g.setAttribute('class', nodeClass);
      g.setAttribute('data-id', n.id);
      g.setAttribute('data-category', n.category);

      // Circle
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', n.x);
      circle.setAttribute('cy', n.y);
      circle.setAttribute('r', n.r);
      g.appendChild(circle);

      // Label Text
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      const labelY = n.labelY || (n.y + n.r + 14);
      text.setAttribute('x', n.x);
      text.setAttribute('y', labelY);
      text.setAttribute('text-anchor', 'middle');
      text.textContent = n.name;
      g.appendChild(text);

      // Click Event on Node
      g.addEventListener('click', (e) => {
        e.stopPropagation();
        selectNode(n.id);
      });

      nodesGroup.appendChild(g);
    });

    // Node Selection Handler
    function selectNode(nodeId) {
      const targetNode = nodeMap.get(nodeId);
      if (!targetNode) return;

      // Find all directly connected nodes
      const connectedNodeIds = new Set([nodeId]);
      const activeLinkElements = [];

      document.querySelectorAll('.graph-link').forEach((link) => {
        const src = link.getAttribute('data-source');
        const tgt = link.getAttribute('data-target');
        if (src === nodeId || tgt === nodeId) {
          connectedNodeIds.add(src);
          connectedNodeIds.add(tgt);
          link.classList.add('active-link');
          link.classList.remove('dimmed');
          activeLinkElements.push(link);
        } else {
          link.classList.remove('active-link');
          link.classList.add('dimmed');
        }
      });

      // Update Node Visuals
      document.querySelectorAll('.graph-node').forEach((nodeEl) => {
        const id = nodeEl.getAttribute('data-id');
        if (id === nodeId) {
          nodeEl.classList.add('active-node');
          nodeEl.classList.remove('dimmed');
        } else if (connectedNodeIds.has(id)) {
          nodeEl.classList.remove('active-node', 'dimmed');
        } else {
          nodeEl.classList.remove('active-node');
          nodeEl.classList.add('dimmed');
        }
      });

      // Update Inspector Panel
      if (inspTitle) inspTitle.textContent = targetNode.name;
      if (inspCategory) inspCategory.textContent = `// ${targetNode.category.toUpperCase()}`;
      if (inspRole) inspRole.textContent = targetNode.category === 'projects' ? 'PRODUCTION PROJECT' : (targetNode.workflow || 'TECHNICAL COMPETENCY');
      if (inspDesc) inspDesc.textContent = targetNode.desc || 'Core component of Khushi Jain Daga\'s engineering repertoire.';
      if (inspWorkflowText) inspWorkflowText.textContent = targetNode.workflow || 'Integrated across multiple production-ready systems.';

      // Project tags
      if (inspProjectTags) {
        inspProjectTags.innerHTML = '';
        if (targetNode.projects && targetNode.projects.length > 0) {
          targetNode.projects.forEach((pName) => {
            const pill = document.createElement('span');
            pill.className = 'tag-pill active';
            pill.textContent = pName;
            inspProjectTags.appendChild(pill);
          });
        } else {
          const pill = document.createElement('span');
          pill.className = 'tag-pill';
          pill.textContent = 'Foundational Stack';
          inspProjectTags.appendChild(pill);
        }
      }

      // Action CTA
      if (inspActionWrap && inspActionBtn) {
        if (targetNode.link) {
          inspActionWrap.style.display = 'block';
          inspActionBtn.setAttribute('href', targetNode.link);
          inspActionBtn.setAttribute('target', '_blank');
          inspActionBtn.querySelector('.btn-text').textContent = `Explore ${targetNode.name}`;
        } else if (targetNode.category === 'projects') {
          inspActionWrap.style.display = 'block';
          inspActionBtn.setAttribute('href', '#work');
          inspActionBtn.removeAttribute('target');
          inspActionBtn.querySelector('.btn-text').textContent = 'View Project Showcase';
        } else {
          inspActionWrap.style.display = 'none';
        }
      }
    }

    // Reset Visualization
    function resetGraph() {
      document.querySelectorAll('.graph-node').forEach((n) => n.classList.remove('active-node', 'dimmed'));
      document.querySelectorAll('.graph-link').forEach((l) => l.classList.remove('active-link', 'dimmed'));
      selectNode('center');
    }

    if (resetBtn) resetBtn.addEventListener('click', resetGraph);

    // Filter Buttons
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const filter = btn.dataset.graphFilter;
        if (filter === 'all') {
          resetGraph();
        } else {
          document.querySelectorAll('.graph-node').forEach((nodeEl) => {
            const cat = nodeEl.getAttribute('data-category');
            if (cat === filter || cat === 'center') {
              nodeEl.classList.remove('dimmed');
            } else {
              nodeEl.classList.add('dimmed');
            }
          });
        }
      });
    });

    // Live Search Input
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
          resetGraph();
          return;
        }

        document.querySelectorAll('.graph-node').forEach((nodeEl) => {
          const id = nodeEl.getAttribute('data-id');
          const node = nodeMap.get(id);
          if (node && (node.name.toLowerCase().includes(query) || node.category.toLowerCase().includes(query))) {
            nodeEl.classList.remove('dimmed');
            nodeEl.classList.add('active-node');
          } else {
            nodeEl.classList.add('dimmed');
            nodeEl.classList.remove('active-node');
          }
        });
      });
    }

    // Zoom Controls
    let currentZoom = 1;
    const svgEl = document.querySelector('#ecosystem-svg');
    if (zoomInBtn && svgEl) {
      zoomInBtn.addEventListener('click', () => {
        currentZoom = Math.min(1.4, currentZoom + 0.15);
        svgEl.style.transform = `scale(${currentZoom})`;
        svgEl.style.transformOrigin = 'center center';
        svgEl.style.transition = 'transform 0.3s ease';
      });
    }
    if (zoomOutBtn && svgEl) {
      zoomOutBtn.addEventListener('click', () => {
        currentZoom = Math.max(0.75, currentZoom - 0.15);
        svgEl.style.transform = `scale(${currentZoom})`;
        svgEl.style.transformOrigin = 'center center';
        svgEl.style.transition = 'transform 0.3s ease';
      });
    }

    // Initialize with center node selected
    selectNode('center');
  }

  // ==========================================================================
  // 4. INTERACTIVE SYSTEM BUILDER ("HOW I BUILD")
  // ==========================================================================
  const sbPillBtns = document.querySelectorAll('.sb-pill-btn');
  const sbFlowRibbon = document.querySelector('#sb-flow-ribbon');
  const sbLayerBadge = document.querySelector('#sb-layer-badge');
  const sbLayerTitle = document.querySelector('#sb-layer-title');
  const sbLayerDesc = document.querySelector('#sb-layer-desc');
  const sbLayerSpecs = document.querySelector('#sb-layer-specs');

  const systemArchitectures = {
    qampus: {
      name: 'Qampus (3D Spatial Campus Wayfinding)',
      stages: [
        {
          num: 'STAGE 01',
          title: 'Panoramic 360° User Viewport',
          tech: 'React.js + WebGL Canvas',
          desc: 'Captures pointer/gyro rotation angles, camera field-of-view adjustments, and floor selection triggers with zero UI stutter.',
          specs: 'FRAME RATE: 60 FPS · LATENCY: <16MS · INPUT: TOUCH & MOUSE'
        },
        {
          num: 'STAGE 02',
          title: 'Spatial Three.js Scene Engine',
          tech: 'Three.js Camera Matrices',
          desc: 'Projects panoramic texture maps onto internal sphere geometries, rendering coordinate pin markers for campus facilities.',
          specs: 'GEOMETRY: INVERTED SPHERE · SHADERS: GLSL WEBGL · DEPTH TEST: ON'
        },
        {
          num: 'STAGE 03',
          title: 'Vacancy & Timetable Resolver',
          tech: 'Asynchronous JavaScript Engine',
          desc: 'Executes spatial distance formulas and checks active university period slots against facility reservation rules.',
          specs: 'LOGIC: CLIENT-SIDE PARSER · QUERY TIME: <35MS · TIMETABLE CACHED'
        },
        {
          num: 'STAGE 04',
          title: 'Real-Time Firestore Cloud',
          tech: 'Firebase Firestore NoSQL',
          desc: 'Persists live room occupancy flags, campus building coordinate bounds, and administrative status updates.',
          specs: 'SECURITY: READ-ONLY RULES · SYNC: LIVE WEBSOCKET · DATA FORMAT: JSON'
        }
      ]
    },
    examon: {
      name: 'Examon Education (EdTech Video Platform)',
      stages: [
        {
          num: 'STAGE 01',
          title: 'Student Learning Portal',
          tech: 'Responsive React.js UI',
          desc: 'Presents structured course catalogs, video lecture players, and interactive lesson assessment modules.',
          specs: 'RESPONSIVE: MOBILE & DESKTOP · WCAG: 2.1 AA · VIDEO: HLS STREAMING'
        },
        {
          num: 'STAGE 02',
          title: 'Course Progress State Machine',
          tech: 'React Context & Custom Hooks',
          desc: 'Monitors student watch duration, module completion milestones, and quiz scores, caching progress locally before sync.',
          specs: 'STATE: IMMUTABLE DISPATCH · STORAGE: LOCALSTORAGE FALLBACK'
        },
        {
          num: 'STAGE 03',
          title: 'JWT Identity & Route Guard',
          tech: 'Firebase Authentication Middleware',
          desc: 'Validates student session tokens, decodes user credentials, and protects course video playback routes.',
          specs: 'ENCRYPTION: RS256 · TOKEN REFRESH: AUTOMATIC · PROTOCOL: OAUTH 2.0'
        },
        {
          num: 'STAGE 04',
          title: 'Vercel Edge Distribution',
          tech: 'Vercel Global Edge Network',
          desc: 'Serves pre-rendered static assets and static video manifests from edge nodes with instant cold starts.',
          specs: 'EDGE NODES: GLOBAL · TTL CACHING: ON · ROUTING: EDGE REWRITE'
        }
      ]
    },
    teamspace: {
      name: 'TeamSpace (Collaborative Workspace)',
      stages: [
        {
          num: 'STAGE 01',
          title: 'Interactive Kanban Canvas',
          tech: 'Modular React Components',
          desc: 'Drag-and-drop workflow lanes, real-time presence indicators, and live member collaboration avatars.',
          specs: 'DRAG & DROP: HTML5 API · PERFORMANCE: VIRTUALIZED LIST'
        },
        {
          num: 'STAGE 02',
          title: 'Optimistic State Dispatcher',
          tech: 'Custom State Hooks & Event Bus',
          desc: 'Applies UI card movements immediately in client memory while asynchronously dispatching cloud sync mutations.',
          specs: 'PATTERN: OPTIMISTIC UI · RECOVERY: AUTOMATIC ROLLBACK'
        },
        {
          num: 'STAGE 03',
          title: 'Session Token & Membership Guard',
          tech: 'Firebase Auth & Security Rules',
          desc: 'Restricts workspace boards to invited project collaborators, enforcing granular read/write privileges.',
          specs: 'ACCESS CONTROL: RBAC · AUDIT: SESSION ID TRACKING'
        },
        {
          num: 'STAGE 04',
          title: 'Cloud Document Synchronization',
          tech: 'Firebase Firestore Live Listeners',
          desc: 'Listens to real-time snapshot diffs and updates all team member canvases with sub-100ms multi-user parity.',
          specs: 'SYNC LATENCY: <90MS · OFFLINE SUPPORT: PERSISTENCE CACHE'
        }
      ]
    }
  };

  function renderSystemArchitecture(projectKey) {
    const arch = systemArchitectures[projectKey];
    if (!arch || !sbFlowRibbon) return;

    sbFlowRibbon.innerHTML = '';

    arch.stages.forEach((stage, idx) => {
      const card = document.createElement('div');
      card.className = `sb-stage-card ${idx === 0 ? 'active' : ''}`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');

      card.innerHTML = `
        <div>
          <span class="sb-stage-num mono-text">${stage.num}</span>
          <h4 class="sb-stage-title">${stage.title}</h4>
          <span class="sb-stage-tech mono-text">${stage.tech}</span>
        </div>
        ${idx < arch.stages.length - 1 ? '<span class="sb-stage-arrow" aria-hidden="true">→</span>' : ''}
      `;

      card.addEventListener('click', () => {
        document.querySelectorAll('.sb-stage-card').forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
        updateLayerExplanation(stage);
      });

      sbFlowRibbon.appendChild(card);
    });

    // Initialize explanation with Stage 1
    updateLayerExplanation(arch.stages[0]);
  }

  function updateLayerExplanation(stage) {
    if (sbLayerBadge) sbLayerBadge.textContent = `${stage.num} // ARCHITECTURAL COMPONENT`;
    if (sbLayerTitle) sbLayerTitle.textContent = stage.title;
    if (sbLayerDesc) sbLayerDesc.textContent = stage.desc;
    if (sbLayerSpecs) {
      sbLayerSpecs.innerHTML = `
        <span>TECH: ${stage.tech}</span>
        <span>• ${stage.specs}</span>
      `;
    }
  }

  if (sbPillBtns.length > 0) {
    sbPillBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        sbPillBtns.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        const projKey = btn.dataset.buildProject;
        renderSystemArchitecture(projKey);
      });
    });

    // Initialize with Qampus
    renderSystemArchitecture('qampus');
  }

  // ==========================================================================
  // 5. CLIENT-SIDE CONTACT FORM VALIDATION & MAILTO DRAFT PREPARATION
  // ==========================================================================
  const contactForm = document.querySelector('#contact-form');
  const feedbackBox = document.querySelector('#form-feedback-box');

  if (contactForm) {
    const nameInput = contactForm.querySelector('#form-name');
    const emailInput = contactForm.querySelector('#form-email');
    const subjectInput = contactForm.querySelector('#form-subject');
    const messageInput = contactForm.querySelector('#form-message');

    const nameError = contactForm.querySelector('#name-error-msg');
    const emailError = contactForm.querySelector('#email-error-msg');
    const messageError = contactForm.querySelector('#message-error-msg');

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    function clearFieldErrors() {
      if (nameError) nameError.textContent = '';
      if (emailError) emailError.textContent = '';
      if (messageError) messageError.textContent = '';
      if (nameInput) nameInput.classList.remove('field-invalid');
      if (emailInput) emailInput.classList.remove('field-invalid');
      if (messageInput) messageInput.classList.remove('field-invalid');
      if (feedbackBox) {
        feedbackBox.className = 'form-feedback-box';
        feedbackBox.textContent = '';
      }
    }

    [nameInput, emailInput, messageInput].forEach((input) => {
      if (!input) return;
      input.addEventListener('input', () => {
        input.classList.remove('field-invalid');
        const errSpan = contactForm.querySelector(`#${input.id.replace('form-', '')}-error-msg`);
        if (errSpan) errSpan.textContent = '';
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearFieldErrors();

      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const subjectVal = subjectInput && subjectInput.value.trim() ? subjectInput.value.trim() : `Portfolio Inquiry from ${nameVal}`;
      const messageVal = messageInput ? messageInput.value.trim() : '';

      let hasError = false;

      // Validate name
      if (!nameVal || nameVal.length < 2) {
        if (nameError) nameError.textContent = 'Please enter your full name (minimum 2 characters).';
        nameInput.classList.add('field-invalid');
        hasError = true;
      }

      // Validate email
      if (!emailVal || !validateEmail(emailVal)) {
        if (emailError) emailError.textContent = 'Please provide a valid email address (e.g. name@domain.com).';
        emailInput.classList.add('field-invalid');
        hasError = true;
      }

      // Validate message
      if (!messageVal || messageVal.length < 10) {
        if (messageError) messageError.textContent = 'Please provide a detailed inquiry (minimum 10 characters).';
        messageInput.classList.add('field-invalid');
        hasError = true;
      }

      if (hasError) {
        if (feedbackBox) {
          feedbackBox.className = 'form-feedback-box error';
          feedbackBox.textContent = 'Transmission blocked: Please correct the highlighted input fields above.';
        }
        return;
      }

      const targetEmail = 'khushi.23bcon1665@jecrcu.edu.in';
      const encodedSubject = encodeURIComponent(subjectVal);
      const encodedBody = encodeURIComponent(
        `${messageVal}\n\n=========================================\nTransmitted via Portfolio Inquiry Portal\nSender Name: ${nameVal}\nSender Email: ${emailVal}\n=========================================`
      );

      const mailtoUrl = `mailto:${targetEmail}?subject=${encodedSubject}&body=${encodedBody}`;

      if (feedbackBox) {
        feedbackBox.className = 'form-feedback-box success';
        feedbackBox.textContent = '✓ Validation passed! Opening your default email client to finalize dispatch.';
      }

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 400);
    });
  }

  // ==========================================================================
  // 6. RETURN TO APEX & MAGNETIC BUTTONS
  // ==========================================================================
  const backToTopBtn = document.querySelector('#back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const magneticButtons = document.querySelectorAll('.btn-magnetic');
    magneticButtons.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
      });
    });
  }
})();
