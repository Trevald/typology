import { Breakpoint } from './../breakpoint/breakpoint.model';
import { Rule }       from './../rule/rule.model';

export class Composition {

    constructor(
        public name: String,
        public breakpoints: Breakpoint[],
        public rules: Rule[]
    ) {}
}
