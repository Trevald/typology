export class Breakpoint {

    constructor(
        public id: Number,
        public from: Number,
        public to: Number,
        public unit: String = 'px'
    ) {}

    get title() {
        return this.from + ' - ' + ( this.to !== null ? this.to : '∞' );
    }
}
