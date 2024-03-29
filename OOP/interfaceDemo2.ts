interface I1 {
    a: number;
    b: number;
    sum(): number;
}

interface I2 extends I1 {
    x: number;
    y: number;
    sub(): number;
}

export class C1 implements I2 {
    a: number;
    b: number;
    x: number;
    y: number;

    sum(): number {
        return (this.a + this.b);
    }

    sub(): number {
        return (this.x - this.y);
    }
}

var c = new C1();
c.a = 100;
c.b = 200;
c.x = 300
c.y = 400;

console.log(c.sum());
console.log(c.sub());

