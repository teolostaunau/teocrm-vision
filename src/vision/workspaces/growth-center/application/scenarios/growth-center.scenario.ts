/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Application - Demo Scenario
 *
 * Official demonstration data used during Vision UI development.
 * This scenario represents a realistic workday for a business owner.
 * -----------------------------------------------------------------------------
 */

import type { GrowthCenterWorkspace } from "../../domain";

export const growthCenterDemoScenario: GrowthCenterWorkspace = {
  id: "workspace-growth-center",

  userId: "user-teo",

  state: "ready",

  generatedAt: new Date(),

  version: "0.2.0",

  narrative: {
    title: "Buenos días, Teo.",

    summary:
      "Hoy tu empresa tiene una excelente oportunidad para avanzar dos negociaciones importantes.",

    reason:
      "Una propuesta comercial permanece pendiente de seguimiento y tu agenda concentra reuniones clave para generar nuevos cierres.",

    impact: "high",

    tone: "positive",

    action: {
      id: "cmd-narrative-001",

      type: "openAgenda",

      label: "Ver agenda"
    }
  },

  insight: {
    title: "Realiza seguimiento a la propuesta de Juan Pérez.",

    description:
      "La propuesta fue enviada hace dos días y aún no registra respuesta.",

    reason:
      "Un seguimiento oportuno puede aumentar significativamente la probabilidad de cierre.",

    impact: "high",

    priority: "critical",

    confidence: 94,

    action: {
      id: "cmd-insight-001",

      type: "openOpportunity",

      label: "Ver oportunidad",

      targetId: "opp-102"
    }
  },

  focus: {
    type: "proposal",

    title: "Enviar seguimiento comercial.",

    description:
      "Contacta a Juan Pérez para validar la recepción de la propuesta.",

    context:
      "Último contacto hace 2 días.",

    assignee:
      "Verónica",

    priority: "critical",

    confidence: 94,

    primaryAction: {
      id: "cmd-focus-001",

      type: "openOpportunity",

      label: "Abrir oportunidad",

      targetId: "opp-102"
    },

    secondaryAction: {
      id: "cmd-focus-002",

      type: "openConversation",

      label: "Abrir conversación",

      targetId: "conv-215"
    }
  },

  business: {
    health: "good",

    summary:
      "La actividad comercial mantiene una tendencia positiva durante la semana.",

    metrics: [
      {
        label: "Conversaciones",

        value: "42",

        trend: "up"
      },

      {
        label: "Oportunidades",

        value: "18",

        trend: "up"
      },

      {
        label: "Propuestas",

        value: "6",

        trend: "stable"
      },

      {
        label: "Ventas",

        value: "S/ 18,450",

        trend: "up"
      }
    ]
  },

  awareness: {
    items: [
      {
        title: "Nuevo cliente potencial",

        description:
          "María Gómez solicitó información sobre el Programa Premium.",

        timestamp: "Hace 12 minutos",

        priority: "medium"
      },

      {
        title: "Propuesta pendiente",

        description:
          "Verónica aún no envía la propuesta a Juan Pérez.",

        timestamp: "Hoy 09:15",

        priority: "high"
      },

      {
        title: "Reunión confirmada",

        description:
          "Carlos confirmó la reunión comercial de las 4:00 p.m.",

        timestamp: "Hoy",

        priority: "low"
      }
    ]
  },

  productivity: {
    agenda: [
      {
        id: "agenda-001",

        time: "09:30",

        title: "Enviar propuesta comercial",

        description: "Juan Pérez",

        assignee: "Verónica",

        priority: "critical",

        action: {
          id: "cmd-agenda-001",

          type: "openOpportunity",

          label: "Ver oportunidad",

          targetId: "opp-102"
        }
      },

      {
        id: "agenda-002",

        time: "11:00",

        title: "Reunión de seguimiento",

        description: "Carlos Mendoza",

        priority: "high"
      },

      {
        id: "agenda-003",

        time: "16:00",

        title: "Responder conversaciones pendientes",

        priority: "medium",

        action: {
          id: "cmd-agenda-003",

          type: "openInbox",

          label: "Abrir Inbox"
        }
      }
    ]
  }
};

/**
 * Creates the default demo scenario used by Vision UI.
 */
export function createGrowthCenterScenario(): GrowthCenterWorkspace {
  return growthCenterDemoScenario;
}