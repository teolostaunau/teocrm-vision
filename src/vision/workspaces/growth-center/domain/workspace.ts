/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Domain - Workspace Contract
 *
 * Aggregates all domain contracts required to render the
 * Growth Center Executive Workspace.
 * -----------------------------------------------------------------------------
 */

import type { BusinessPulse } from "./business";
import type { BusinessAwareness } from "./awareness";
import type { AdaptiveFocus } from "./focus";
import type { ExecutiveInsight } from "./insight";
import type { ExecutiveNarrative } from "./narrative";
import type { Productivity } from "./productivity";
import type {
  WorkspaceId,
  UserId,
} from "./ids";

import type {
  WorkspaceState,
} from "./shared";

/**
 * Growth Center™
 *
 * Root domain contract consumed by the ViewModel.
 */
export type GrowthCenterWorkspace = Readonly<{

  /**
   * Workspace identifier.
   */
  id: WorkspaceId;

  /**
   * Current user.
   */
  userId: UserId;

  /**
   * Current workspace state.
   */
  state: WorkspaceState;

  /**
   * Timestamp indicating when the workspace was generated.
   */
  generatedAt: Date;

  /**
   * Workspace version.
   */
  version: string;
  
  /**
   * Executive welcome.
   */
  narrative: ExecutiveNarrative;

  /**
   * Primary recommendation.
   */
  insight: ExecutiveInsight;

  /**
   * Main execution card.
   */
  focus: AdaptiveFocus;

  /**
   * Business overview.
   */
  business: BusinessPulse;

  /**
   * Relevant business events.
   */
  awareness: BusinessAwareness;

  /**
   * Today's executive agenda.
   */
  productivity: Productivity;

}>;