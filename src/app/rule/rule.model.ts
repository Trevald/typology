import { RuleBreakpoint } from './rule-breakpoint.model';

export class Rule {

    constructor(
        public id: Number,
        public title: String,
        public description: String,
        public breakpoints: RuleBreakpoint[]
    ) {}

    public getRuleLinesByBreakpoint(id: Number) {
        let breakpoint = this.breakpoints.find( ruleBreakpoint => ruleBreakpoint.breakpointId === id );
        return breakpoint !== undefined ? breakpoint.lines : null;
    }

}
