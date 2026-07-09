/* ==========================================================================
   WS-001
   Growth Center™ Workspace Definition
   TeoCRM Vision UI
   ========================================================================== */

export default {

    /* ----------------------------------------------------------------------
       Identity
       ---------------------------------------------------------------------- */

    id: "growth-center",

    name: "Growth Center™",

    description: "Executive Growth Workspace",

    version: "1.0.0",

    icon: "📈",

    category: "workspace",

    enabled: true,

    requiresAuth: true,

    /* ----------------------------------------------------------------------
       Layout
       ---------------------------------------------------------------------- */

    layout: {

        type: "executive-grid",

        responsive: true

    },

    /* ----------------------------------------------------------------------
       Components
       ---------------------------------------------------------------------- */

    components: [

        {
            component: "hero",

            target: "#hero-placeholder",

            region: "hero",

            order: 1
        },

        {
            component: "businessStatus",

            target: "#business-status-placeholder",

            region: "hero",

            order: 2
        },

        {
            component: "growthPulse",

            target: "#growth-pulse-placeholder",

            region: "left-column",

            order: 3
        },

        {
            component: "executiveKPIs",

            target: "#executive-kpis-placeholder",

            region: "right-column",

            order: 4
        },

        {
            component: "priorities",

            target: "#priorities-placeholder",

            region: "main",

            order: 5
        },

        {
            component: "growthAdvisor",

            target: "#growth-advisor-placeholder",

            region: "main",

            order: 6
        },

        {
            component: "businessTimeline",

            target: "#business-timeline-placeholder",

            region: "main",

            order: 7
        },

        {
            component: "growthActions",

            target: "#growth-actions-placeholder",

            region: "footer",

            order: 8
        }

    ]

};