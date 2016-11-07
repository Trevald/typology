import { RuleLine } from './rule-line.model';

export class RuleBreakpoint {

    constructor(
        public breakpointId: Number,
        public lines: RuleLine[]
    ) {}

}
