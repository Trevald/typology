import { Breakpoint } from './../breakpoint/breakpoint.model';
import { Rule }       from './../rule/rule.model';

export class Composition {

    constructor(
        name: String,
        breakpoints: Breakpoint[],
        rule: Rule[]
    ) {}
}
