/* ========================================================================== */
/* COMPONENT: Prioridades Inteligentes™                                      */
/* COMPONENT ID: WC-005                                                       */
/* ========================================================================== */

export const priorities = [

    {
        id: 1,
        level: "high",
        title: "Responder conversaciones pendientes",
        description: "Existen 7 conversaciones con más de 2 horas sin respuesta.",
        impact: "Alto",
        action: "Ver conversaciones"
    },

    {
        id: 2,
        level: "medium",
        title: "Dar seguimiento a oportunidades",
        description: "Tres oportunidades llevan varios días sin actividad.",
        impact: "Medio",
        action: "Abrir Pipeline"
    },

    {
        id: 3,
        level: "low",
        title: "Revisar automatizaciones",
        description: "Una automatización puede mejorar el seguimiento de nuevos leads.",
        impact: "Moderado",
        action: "Revisar"
    }

];