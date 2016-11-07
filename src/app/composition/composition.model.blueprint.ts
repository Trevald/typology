import { Composition }  from './composition.model';
import { Breakpoint }   from './../breakpoint/breakpoint.model';

import { Rule, RuleBreakpoint, RuleLine }         from './../rule';


export var COMPOSITION_BLUEPRINT: Composition = {

    name: 'Untitled composition',

    breakpoints: [
        new Breakpoint(1, 0, null),
        new Breakpoint(2, 480, null),
        new Breakpoint(3, 680, null),
        new Breakpoint(4, 1000, null)
    ],

    rules: [

        // 1. Base
        new Rule(1, 'Base - * <html> <body>', [

            // BP 1
            new RuleBreakpoint(1, [
                new RuleLine('font-family', 'georgia'),
                new RuleLine('font-size', '15px'),
                new RuleLine('line-height', '1.375em')
            ])

        ]),

        // 2. Base
        new Rule(2, 'Header 1 - <h1>', [

            // BP 1
            new RuleBreakpoint(1, [
                new RuleLine('font-family', 'arial'),
                new RuleLine('font-weight', '700'),
                new RuleLine('font-size', '18px'),
                new RuleLine('line-height', '1.25em')
            ]),

            // BP 2
            new RuleBreakpoint(2, [
                new RuleLine('font-size', '24px'),
            ]),

            // BP 3
            new RuleBreakpoint(3, [
                new RuleLine('font-size', '30px'),
            ]),

            // BP 4
            new RuleBreakpoint(4, [
                new RuleLine('font-size', '42px'),
            ])

        ])

    ]

};
